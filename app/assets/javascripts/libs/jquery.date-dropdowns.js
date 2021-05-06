;
(function($, window, document, undefined) {
    'use strict';
    var pluginName = 'dateDropdowns',
        pluginDefaults = {
            defaultDate: null,
            defaultDateFormat: 'yyyy-mm-dd',
            displayFormat: 'dmy',
            submitFormat: 'yyyy-mm-dd',
            minAge: 0,
            maxAge: 120,
            minYear: null,
            maxYear: null,
            submitFieldName: 'date',
            wrapperClass: 'date-dropdowns',
            dropdownClass: 'hideArow form-control dateDDL',
            daySuffixes: true,
            monthSuffixes: true,
            monthFormat: 'long',
            required: false
        };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.config = $.extend({}, pluginDefaults, options);
        this.internals = {
            objectRefs: {}
        };
        this.init();
        return this;
    }
    Plugin.message = {
        day: 'Ngày',
        month: 'Tháng',
        year: 'Năm'
    };
    $.extend(Plugin.prototype, {
        init: function() {
            this.checkForDuplicateElement();
            this.setInternalVariables();
            this.setupMarkup();
            this.buildDropdowns();
            this.attachDropdowns();
            this.bindChangeEvent();
            if (this.config.defaultDate) {
                this.populateDefaultDate();
            }
        },
        checkForDuplicateElement: function() {
            if ($('input[name="' + this.config.submitFieldName + '"]').length) {
                $.error('Duplicate element found');
                return false;
            }
            return true;
        },
        setInternalVariables: function() {
            var date = new Date();
            this.internals.currentDay = date.getDate();
            this.internals.currentMonth = date.getMonth() + 1;
            this.internals.currentYear = date.getFullYear();
            this.internals.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            this.internals.monthLong = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
        },
        setupMarkup: function() {
            var wrapper, hiddenField;
            if (this.element.tagName.toLowerCase() === 'input') {
                if (!this.config.defaultDate) {
                    this.config.defaultDate = this.element.value;
                }
                hiddenField = this.$element.attr('type', 'hidden').wrap('<div class="' + this.config.wrapperClass + '"></div>');
                var customFieldNameProvided = (this.config.submitFieldName !== pluginDefaults.submitFieldName),
                    fieldHasName = this.element.hasAttribute('name');
                if (!fieldHasName && !customFieldNameProvided) {
                    this.$element.attr('name', pluginDefaults.submitFieldName);
                } else if (customFieldNameProvided) {
                    this.$element.attr('name', this.config.submitFieldName);
                }
                wrapper = this.$element.parent();
            } else {
                hiddenField = $('<input/>', {
                    type: 'hidden',
                    name: this.config.submitFieldName
                });
                this.$element.append(hiddenField).addClass(this.config.wrapperClass);
                wrapper = this.$element;
            }
            this.internals.objectRefs.pluginWrapper = wrapper;
            this.internals.objectRefs.hiddenField = hiddenField;
            return true;
        },
        buildDropdowns: function() {
            var $dayDropdown, $monthDropdown, $yearDropdown;
            $dayDropdown = this.buildDayDropdown();
            this.internals.objectRefs.dayDropdown = $dayDropdown;
            $monthDropdown = this.buildMonthDropdown();
            this.internals.objectRefs.monthDropdown = $monthDropdown;
            $yearDropdown = this.buildYearDropdown();
            this.internals.objectRefs.yearDropdown = $yearDropdown;
            return true;
        },
        attachDropdowns: function() {
            var $element = this.internals.objectRefs.pluginWrapper,
                $daySelect = this.internals.objectRefs.dayDropdown,
                $monthSelect = this.internals.objectRefs.monthDropdown,
                $yearSelect = this.internals.objectRefs.yearDropdown;
            switch (this.config.displayFormat) {
                case 'mdy':
                    $element.append($monthSelect, $daySelect, $yearSelect);
                    break;
                case 'ymd':
                    $element.append($yearSelect, $monthSelect, $daySelect);
                    break;
                case 'dmy':
                default:
                    $element.append($daySelect, $monthSelect, $yearSelect);
                    break;
            }
            return true;
        },
        bindChangeEvent: function() {
            var $daySelect = this.internals.objectRefs.dayDropdown,
                $monthSelect = this.internals.objectRefs.monthDropdown,
                $yearSelect = this.internals.objectRefs.yearDropdown,
                pluginHandle = this,
                objectRefs = this.internals.objectRefs;
            objectRefs.pluginWrapper.on('change', 'select', function() {
                var day = $daySelect.val(),
                    month = $monthSelect.val(),
                    year = $yearSelect.val(),
                    invalidDate, newDate;
                invalidDate = pluginHandle.checkDate(day, month, year);
                if (invalidDate) {
                    objectRefs.dayDropdown.addClass('invalid');
                    return false;
                }
                if ('00' !== objectRefs.dayDropdown.val()) {
                    objectRefs.dayDropdown.removeClass('invalid');
                }
                objectRefs.hiddenField.val('');
                if (!invalidDate && (day * month * year !== 0)) {
                    newDate = pluginHandle.formatSubmitDate(day, month, year);
                    objectRefs.hiddenField.val(newDate);
                }
                objectRefs.hiddenField.change();
            });
        },
        populateDefaultDate: function() {
            var date = this.config.defaultDate,
                parts = [],
                day = '',
                month = '',
                year = '';
            switch (this.config.defaultDateFormat) {
                case 'yyyy-mm-dd':
                default:
                    parts = date.split('-');
                    day = parts[2];
                    month = parts[1];
                    year = parts[0];
                    break;
                case 'dd/mm/yyyy':
                    parts = date.split('/');
                    day = parts[0];
                    month = parts[1];
                    year = parts[2];
                    break;
                case 'mm/dd/yyyy':
                    parts = date.split('/');
                    day = parts[1];
                    month = parts[0];
                    year = parts[2];
                    break;
                case 'unix':
                    parts = new Date();
                    parts.setTime(date * 1000);
                    day = parts.getDate() + '';
                    month = (parts.getMonth() + 1) + '';
                    year = parts.getFullYear();
                    if (day.length < 2) {
                        day = '0' + day;
                    }
                    if (month.length < 2) {
                        month = '0' + month;
                    }
                    break;
            }
            this.internals.objectRefs.dayDropdown.val(day);
            this.internals.objectRefs.monthDropdown.val(month);
            this.internals.objectRefs.yearDropdown.val(year);
            this.internals.objectRefs.hiddenField.val(date);
            if (true === this.checkDate(day, month, year)) {
                this.internals.objectRefs.dayDropdown.addClass('invalid');
            }
            return true;
        },
        buildBaseDropdown: function(type) {
            var classString = type;
            if (this.config.dropdownClass) {
                classString += ' ' + this.config.dropdownClass;
            }
            return $('<select></select>', {
                class: classString,
                name: this.config.submitFieldName + '_[' + type + ']',
                id: this.config.submitFieldName + '_' + type + '',
                required: this.config.required
            });
        },
        buildDayDropdown: function() {
            var day, dropdown = this.buildBaseDropdown('day'),
                option = document.createElement('option');
            option.setAttribute('value', '');
            option.appendChild(document.createTextNode(Plugin.message.day));
            dropdown.append(option);
            for (var i = 1; i < 10; i++) {
                if (this.config.daySuffixes) {
                    day = i;
                } else {
                    day = '0' + i;
                }
                option = document.createElement('option');
                option.setAttribute('value', '0' + i);
                option.appendChild(document.createTextNode(day));
                dropdown.append(option);
            }
            for (var j = 10; j <= 31; j++) {
                day = j;
                if (this.config.daySuffixes) {
                    day = j;
                }
                option = document.createElement('option');
                option.setAttribute('value', j);
                option.appendChild(document.createTextNode(day));
                dropdown.append(option);
            }
            return dropdown;
        },
        buildMonthDropdown: function() {
            var dropdown = this.buildBaseDropdown('month'),
                option = document.createElement('option');
            option.setAttribute('value', '');
            option.appendChild(document.createTextNode(Plugin.message.month));
            dropdown.append(option);
            for (var monthNo = 1; monthNo <= 12; monthNo++) {
                var month;
                switch (this.config.monthFormat) {
                    case 'short':
                        month = this.internals.monthShort[monthNo - 1];
                        break;
                    case 'long':
                        month = this.internals.monthLong[monthNo - 1];
                        break;
                    case 'numeric':
                        month = monthNo;
                        if (this.config.monthSuffixes) {
                            month += this.getSuffix(monthNo);
                        }
                        break;
                }
                if (monthNo < 10) {
                    monthNo = '0' + monthNo;
                }
                option = document.createElement('option');
                option.setAttribute('value', monthNo);
                option.appendChild(document.createTextNode(month));
                dropdown.append(option);
            }
            return dropdown;
        },
        buildYearDropdown: function() {
            var minYear = this.config.minYear,
                maxYear = this.config.maxYear,
                dropdown = this.buildBaseDropdown('year'),
                option = document.createElement('option');
            option.setAttribute('value', '');
            option.appendChild(document.createTextNode(Plugin.message.year));
            dropdown.append(option);
            if (!minYear) {
                minYear = this.internals.currentYear - (this.config.maxAge + 1);
            }
            if (!maxYear) {
                maxYear = this.internals.currentYear - this.config.minAge;
            }
            for (var i = maxYear; i >= minYear; i--) {
                option = document.createElement('option');
                option.setAttribute('value', i);
                option.appendChild(document.createTextNode(i));
                dropdown.append(option);
            }
            return dropdown;
        },
        getSuffix: function(number) {
            var suffix = '';
            switch (number % 10) {
                case 1:
                    suffix = (number % 100 === 11) ? 'th' : 'st';
                    break;
                case 2:
                    suffix = (number % 100 === 12) ? 'th' : 'nd';
                    break;
                case 3:
                    suffix = (number % 100 === 13) ? 'th' : 'rd';
                    break;
                default:
                    suffix = 'th';
                    break;
            }
            return suffix;
        },
        checkDate: function(day, month, year) {
            var invalidDate;
            if (month !== '00') {
                var numDaysInMonth = (new Date(year, month, 0).getDate()),
                    selectedDayInt = parseInt(day, 10);
                invalidDate = this.updateDayOptions(numDaysInMonth, selectedDayInt);
                if (invalidDate) {
                    this.internals.objectRefs.hiddenField.val('');
                }
            }
            return invalidDate;
        },
        updateDayOptions: function(numDaysInMonth, selectedDayInt) {
            var lastDayOption = parseInt(this.internals.objectRefs.dayDropdown.children(':last').val(), 10),
                newDayOption = '',
                newDayText = '',
                invalidDay = false;
            if (lastDayOption > numDaysInMonth) {
                while (lastDayOption > numDaysInMonth) {
                    this.internals.objectRefs.dayDropdown.children(':last').remove();
                    lastDayOption--;
                }
                if (selectedDayInt > numDaysInMonth) {
                    invalidDay = true;
                }
            } else if (lastDayOption < numDaysInMonth) {
                while (lastDayOption < numDaysInMonth) {
                    newDayOption = ++lastDayOption;
                    newDayText = newDayOption;
                    if (this.config.daySuffixes) {
                        newDayText = newDayText;
                    }
                    var option = document.createElement('option');
                    option.setAttribute('value', newDayOption);
                    option.appendChild(document.createTextNode(newDayText));
                    this.internals.objectRefs.dayDropdown.append(option);
                }
            }
            return invalidDay;
        },
        formatSubmitDate: function(day, month, year) {
            var formattedDate, _date;
            switch (this.config.submitFormat) {
                case 'unix':
                    _date = new Date();
                    _date.setDate(day);
                    _date.setMonth(month - 1);
                    _date.setYear(year);
                    formattedDate = Math.round(_date.getTime() / 1000);
                    break;
                default:
                    formattedDate = this.config.submitFormat.replace('dd', day).replace('mm', month).replace('yyyy', year);
                    break;
            }
            return formattedDate;
        },
        destroy: function() {
            var wrapperClass = this.config.wrapperClass;
            if (this.$element.hasClass(wrapperClass)) {
                this.$element.empty();
            } else {
                var $parent = this.$element.parent(),
                    $select = $parent.find('select');
                this.$element.unwrap();
                $select.remove();
            }
        }
    });
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (typeof options === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var plugin = $.data(this, 'plugin_' + pluginName);
                if (typeof plugin === 'undefined') {
                    $.error('Please initialize the plugin before calling this method.');
                    return false;
                }
                plugin[options].apply(plugin, args);
            } else {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            }
        });
        return this;
    };
})(jQuery, window, document);
