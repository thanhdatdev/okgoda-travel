function formatnumber(what) {
    var _value = what;
    _value = _value.replace('.', '');
    _value = _value.replace('.', '');
    _value = _value.replace('.', '');
    var temp = '';
    var test = _value.length;
    var count = 0;
    for (i = test - 1; i >= 0; i--) {
        count++
        temp = _value.charAt(i) + temp;
        if (count % 3 == 0 && i > 0) {
            temp = ',' + temp;
        }
    }
    what = temp;
    return what;
}

function confirmDelete() {
    var con = confirm("Bạn có muốn xóa dữ liệu này không?");
    if (con == true) {
        return true;
    } else {
        return false;
    }
}

function keyRestrict(e, validchars) {
    var key = '',
        keychar = '';
    key = getKeyCode(e);
    if (key == null) return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    validchars = '-+' + validchars.toLowerCase();
    if (validchars.indexOf(keychar) != -1)
        return true;
    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}

function getKeyCode(e) {
    if (window.event)
        return window.event.keyCode;
    else if (e)
        return e.which;
    else
        return null;
}

function funCheckInt(e) {
    return keyRestrict(e, '0123456789');
}

function setAsHomePage(i) {
    if (document.all) {
        this.style.behavior = 'url(#default#homepage)';
        this.setHomePage('http://www.travel.com.vn/');
    }
}
var ent;

function show_text(t, dname) {
    var xp, yp, op
    xp = dname.offsetLeft;
    yp = dname.offsetTop;
    while (dname.offsetParent) {
        op = dname.offsetParent;
        xp = xp + op.offsetLeft;
        yp = yp + op.offsetTop;
        dname = dname.offsetParent;
    }
    var newdiv = document.createElement('div');
    newdiv.setAttribute('id', "ent");
    document.body.appendChild(newdiv);
    ent = document.getElementById("ent")
    if (ent) {
        ent.style.color = "#000000";
        ent.style.padding = "7px 8px 7px 8px";
        ent.style.background = "#eee";
        ent.style.border = "1px solid #0066cb";
        ent.style.position = 'absolute';
        ent.style.left = (xp + 10) + "px";
        ent.style.top = (yp + 25) + "px";
        ent.innerHTML = t;
        ent.style.display = "block";
    }
}

function clear_text(dname) {
    ent = document.getElementById("ent");
    if (ent) {
        document.body.removeChild(ent);
    }
}

function ShowNotify(_message, _type, _postion) {
    setTimeout(function() {
        $.notify({
            message: _message
        }, {
            type: _type,
            placement: {
                from: _postion
            },
            animate: {
                enter: "animated fadeInRight",
                exit: "animated fadeOutRight"
            }
        });
    }, 500);
}

function ShowNoti(Title, Text, Type) {
    var noti = new PNotify({
        title: Title,
        text: Text,
        type: Type,
        delay: 1000,
        styling: 'bootstrap3'
    });
}

function createCookie(name, value, minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
}
