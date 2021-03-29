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
