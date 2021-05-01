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
    } else
        var expires = "";
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
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return "";
}

if (function(n, t) {
    function gt(n) {
        var t = n.length
          , r = i.type(n);
        return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }
    function te(n) {
        var t = ni[n] = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function ur(n, r, u, f) {
        if (i.acceptData(n)) {
            var h, o, c = i.expando, l = n.nodeType, s = l ? i.cache : n, e = l ? n[c] : n[c] && c;
            if (e && s[e] && (f || s[e].data) || u !== t || "string" != typeof r)
                return e || (e = l ? n[c] = b.pop() || i.guid++ : c),
                s[e] || (s[e] = l ? {} : {
                    toJSON: i.noop
                }),
                ("object" == typeof r || "function" == typeof r) && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)),
                o = s[e],
                f || (o.data || (o.data = {}),
                o = o.data),
                u !== t && (o[i.camelCase(r)] = u),
                "string" == typeof r ? (h = o[r],
                null == h && (h = o[i.camelCase(r)])) : h = o,
                h
        }
    }
    function fr(n, t, r) {
        if (i.acceptData(n)) {
            var e, o, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                    t = (t in e) ? [t] : t.split(" ")),
                    o = t.length; o--; )
                        delete e[t[o]];
                    if (r ? !ti(e) : !i.isEmptyObject(e))
                        return
                }
                (r || (delete u[f].data,
                ti(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
            }
        }
    }
    function er(n, r, u) {
        if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(rr, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            "string" == typeof u) {
                try {
                    u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : ir.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function ti(n) {
        var t;
        for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function ct() {
        return !0
    }
    function g() {
        return !1
    }
    function cr() {
        try {
            return r.activeElement
        } catch (n) {}
    }
    function ar(n, t) {
        do
            n = n[t];
        while (n && 1 !== n.nodeType);
        return n
    }
    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (oe.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function vr(n) {
        var i = yr.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function gr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function nu(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function tu(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function hi(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function iu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; o > f; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function be(n, t) {
        var r, f, u;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(),
            !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events)
                    i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando)
            }
            "script" === r && t.text !== n.text ? (nu(t).text = n.text,
            tu(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML),
            i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
        }
    }
    function u(n, r) {
        var s, e, h = 0, f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f)
            for (f = [],
            s = n.childNodes || n; null != (e = s[h]); h++)
                !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }
    function ke(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function ou(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = eu.length; i--; )
            if (t = eu[i] + r,
            t in n)
                return t;
        return u
    }
    function ut(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
    function su(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
            r = n[u],
            r.style && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || "none" !== f || (r.style.display = ""),
            "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", au(r.nodeName)))) : e[u] || (o = ut(r),
            (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++)
            r = n[u],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function hu(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function cu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + p[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
        return o
    }
    function lu(n, t, r) {
        var e = !0
          , u = "width" === t ? n.offsetWidth : n.offsetHeight
          , f = v(n)
          , o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (0 >= u || null == u) {
            if (u = y(n, t, f),
            (0 > u || null == u) && (u = n.style[t]),
            lt.test(u))
                return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + cu(n, t, r || (o ? "border" : "content"), e, f) + "px"
    }
    function au(n) {
        var u = r
          , t = uu[n];
        return t || (t = vu(n, u),
        "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement),
        u = (rt[0].contentWindow || rt[0].contentDocument).document,
        u.write("<!doctype html><html><body>"),
        u.close(),
        t = vu(n, u),
        rt.detach()),
        uu[n] = t),
        t
    }
    function vu(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body)
          , u = i.css(r[0], "display");
        return r.remove(),
        u
    }
    function li(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || fo.test(n) ? u(n, i) : li(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                li(n + "[" + f + "]", t[f], r, u)
    }
    function gu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u[0] ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function nf(n, r, u, f) {
        function o(h) {
            var c;
            return e[h] = !0,
            i.each(n[h] || [], function(n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h),
                o(h),
                !1)
            }),
            c
        }
        var e = {}
          , s = n === yi;
        return o(r.dataTypes[0]) || !e["*"] && o("*")
    }
    function pi(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f),
        n
    }
    function ao(n, i, r) {
        for (var s, o, f, e, h = n.contents, u = n.dataTypes; "*" === u[0]; )
            u.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (e in h)
                if (h[e] && h[e].test(o)) {
                    u.unshift(e);
                    break
                }
        if (u[0]in r)
            f = u[0];
        else {
            for (e in r) {
                if (!u[0] || n.converters[e + " " + u[0]]) {
                    f = e;
                    break
                }
                s || (s = e)
            }
            f = f || s
        }
        return f ? (f !== u[0] && u.unshift(f),
        r[f]) : t
    }
    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function rf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function yo() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function ff() {
        return setTimeout(function() {
            it = t
        }),
        it = i.now()
    }
    function ef(n, t, i) {
        for (var u, f = (ft[t] || []).concat(ft["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function of(n, t, r) {
        var h, e, o = 0, l = pt.length, f = i.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (e)
                return !1;
            for (var s = it || ff(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: it || ff(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (bo(s, u.opts.specialEasing); l > o; o++)
            if (h = pt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, ef, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function bo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function ko(n, t, r) {
        var u, a, v, c, e, y, s = this, l = {}, o = n.style, h = n.nodeType && ut(n), f = i._data(n, "fxshow");
        r.queue || (e = i._queueHooks(n, "fx"),
        null == e.unqueued && (e.unqueued = 0,
        y = e.empty.fire,
        e.empty.fire = function() {
            e.unqueued || y()
        }
        ),
        e.unqueued++,
        s.always(function() {
            s.always(function() {
                e.unqueued--;
                i.queue(n, "fx").length || e.empty.fire()
            })
        }));
        1 === n.nodeType && ("height"in t || "width"in t) && (r.overflow = [o.overflow, o.overflowX, o.overflowY],
        "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== au(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        r.overflow && (o.overflow = "hidden",
        i.support.shrinkWrapBlocks || s.always(function() {
            o.overflow = r.overflow[0];
            o.overflowX = r.overflow[1];
            o.overflowY = r.overflow[2]
        }));
        for (u in t)
            if (a = t[u],
            po.exec(a)) {
                if (delete t[u],
                v = v || "toggle" === a,
                a === (h ? "hide" : "show"))
                    continue;
                l[u] = f && f[u] || i.style(n, u)
            }
        if (!i.isEmptyObject(l)) {
            f ? "hidden"in f && (h = f.hidden) : f = i._data(n, "fxshow", {});
            v && (f.hidden = !h);
            h ? i(n).show() : s.done(function() {
                i(n).hide()
            });
            s.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in l)
                    i.style(n, t, l[t])
            });
            for (u in l)
                c = ef(h ? f[u] : 0, u, s),
                u in f || (f[u] = c.start,
                h && (c.end = c.start,
                c.start = "width" === u || "height" === u ? 1 : 0))
        }
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n,t,i,r,u)
    }
    function wt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = p[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function sf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var et, bi, o = typeof t, hf = n.location, r = n.document, ki = r.documentElement, cf = n.jQuery, lf = n.$, ot = {}, b = [], bt = "1.10.2", di = b.concat, kt = b.push, l = b.slice, gi = b.indexOf, af = ot.toString, k = ot.hasOwnProperty, dt = bt.trim, i = function(n, t) {
        return new i.fn.init(n,t,bi)
    }, st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, s = /\S+/g, vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, yf = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, nr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pf = /^[\],:{}\s]*$/, wf = /(?:^|:|,)(?:\s*\[)+/g, bf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, kf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, df = /^-ms-/, gf = /-([\da-z])/gi, ne = function(n, t) {
        return t.toUpperCase()
    }, h = function(n) {
        (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (tr(),
        i.ready())
    }, tr = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1),
        n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h),
        n.detachEvent("onload", h))
    }, ni, ir, rr, wi, at, nt, tt, tf, vt;
    i.fn = i.prototype = {
        jquery: bt,
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n)
                return this;
            if ("string" == typeof n) {
                if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : yf.exec(n),
                !e || !e[1] && u)
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                if (e[1]) {
                    if (u = u instanceof i ? u[0] : u,
                    i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)),
                    nr.test(e[1]) && i.isPlainObject(u))
                        for (e in u)
                            i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                    return this
                }
                if (o = r.getElementById(e[2]),
                o && o.parentNode) {
                    if (o.id !== e[2])
                        return f.find(n);
                    this.length = 1;
                    this[0] = o
                }
                return this.context = r,
                this.selector = n,
                this
            }
            return n.nodeType ? (this.context = this[0] = n,
            this.length = 1,
            this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
            this.context = n.context),
            i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: kt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var u, o, r, e, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof n && (c = n,
        n = arguments[1] || {},
        f = 2),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        l === f && (n = this,
        --f); l > f; f++)
            if (null != (s = arguments[f]))
                for (e in s)
                    u = n[e],
                    r = s[e],
                    n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1,
                    h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                    n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (bt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = lf),
            t && n.jQuery === i && (n.jQuery = cf),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body)
                    return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        }
        ,
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[af.call(n)] || "object" : typeof n
        },
        isPlainObject: function(n) {
            var r;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !k.call(n, "constructor") && !k.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (i.support.ownLast)
                for (r in n)
                    return k.call(n, r);
            for (r in n)
                ;
            return r === t || k.call(n, r)
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n)
                return !1;
            return !0
        },
        error: function(n) {
            throw Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || "string" != typeof n)
                return null;
            "boolean" == typeof t && (u = t,
            t = !1);
            t = t || r;
            var f = nr.exec(n)
              , e = !u && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
            e && i(e).remove(),
            i.merge([], f.childNodes))
        },
        parseJSON: function(r) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r),
            r && pf.test(r.replace(bf, "@").replace(kf, "]").replace(wf, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r),
            t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || "string" != typeof r)
                return null;
            try {
                n.DOMParser ? (f = new DOMParser,
                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                u.async = "false",
                u.loadXML(r))
            } catch (e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(df, "ms-").replace(gf, ne)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = gt(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: dt && !dt.call("﻿ ") ? function(n) {
            return null == n ? "" : dt.call(n)
        }
        : function(n) {
            return null == n ? "" : (n + "").replace(vf, "")
        }
        ,
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (gt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : kt.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (gi)
                    return gi.call(t, n, i);
                for (r = t.length,
                i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length
              , u = n.length
              , r = 0;
            if ("number" == typeof f)
                for (; f > r; r++)
                    n[u++] = i[r];
            else
                while (i[r] !== t)
                    n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var u, f = [], r = 0, e = n.length;
            for (i = !!i; e > r; r++)
                u = !!t(n[r], r),
                i !== u && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = gt(n), f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i),
                    null != u && (f[f.length] = u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null != u && (f[f.length] = u);
            return di.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, u, e;
            return "string" == typeof r && (e = n[r],
            r = n,
            n = e),
            i.isFunction(n) ? (f = l.call(arguments, 2),
            u = function() {
                return n.apply(r || this, f.concat(l.call(arguments)))
            }
            ,
            u.guid = n.guid = n.guid || i.guid++,
            u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0
              , l = n.length
              , c = null == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u)
                    i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0,
            i.isFunction(f) || (s = !0),
            c && (s ? (r.call(n, f),
            r = null) : (c = r,
            r = function(n, t, r) {
                return c.call(i(n), r)
            }
            )),
            r))
                for (; l > h; h++)
                    r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t)
                e[u] = n.style[u],
                n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t)
                n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function(t) {
        if (!et)
            if (et = i.Deferred(),
            "complete" === r.readyState)
                setTimeout(i.ready);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", h, !1),
                n.addEventListener("load", h, !1);
            else {
                r.attachEvent("onreadystatechange", h);
                n.attachEvent("onload", h);
                var u = !1;
                try {
                    u = null == n.frameElement && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        tr();
                        i.ready()
                    }
                }()
            }
        return et.promise(t)
    }
    ;
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    });
    bi = i(r),
    function(n, t) {
        function u(n, t, i, r) {
            var p, u, f, l, w, a, k, c, g, d;
            if ((t ? t.ownerDocument || t : y) !== s && nt(t),
            t = t || s,
            i = i || [],
            !n || "string" != typeof n)
                return i;
            if (1 !== (l = t.nodeType) && 9 !== l)
                return [];
            if (v && !r) {
                if (p = or.exec(n))
                    if (f = p[1]) {
                        if (9 === l) {
                            if (u = t.getElementById(f),
                            !u || !u.parentNode)
                                return i;
                            if (u.id === f)
                                return i.push(u),
                                i
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f)
                            return i.push(u),
                            i
                    } else {
                        if (p[2])
                            return b.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((f = p[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(f)),
                            i
                    }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = k = o,
                    g = t,
                    d = 9 === l && n,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (a = pt(n),
                        (k = t.getAttribute("id")) ? c = k.replace(cr, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        w = a.length; w--; )
                            a[w] = c + wt(a[w]);
                        g = ti.test(n) && t.parentNode || t;
                        d = a.join(",")
                    }
                    if (d)
                        try {
                            return b.apply(i, g.querySelectorAll(d)),
                            i
                        } catch (tt) {} finally {
                            k || t.removeAttribute("id")
                        }
                }
            }
            return pr(n.replace(vt, "$1"), t, i, r)
        }
        function ri() {
            function n(i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()],
                n[i] = u
            }
            var t = [];
            return n
        }
        function c(n) {
            return n[o] = !0,
            n
        }
        function l(n) {
            var t = s.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ui(n, t) {
            for (var u = n.split("|"), i = n.length; i--; )
                r.attrHandle[u[i]] = t
        }
        function bi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || vi) - (~n.sourceIndex || vi);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function rt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ki() {}
        function pt(n, t) {
            var e, f, s, o, i, h, c, l = li[n + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (i = n,
            h = [],
            c = r.preFilter; i; ) {
                (!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0].length) || i),
                h.push(s = []));
                e = !1;
                (f = rr.exec(i)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(vt, " ")
                }),
                i = i.slice(e.length));
                for (o in r.filter)
                    (f = yt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    i = i.slice(e.length));
                if (!e)
                    break
            }
            return t ? i.length : i ? u.error(n) : li(n, h).slice(0)
        }
        function wt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function fi(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , f = di++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
            : function(t, i, e) {
                var h, s, c, l = p + " " + f;
                if (e) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, e))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u)
                            if (c = t[o] || (t[o] = {}),
                            (s = c[r]) && s[0] === l) {
                                if ((h = s[1]) === !0 || h === ht)
                                    return h === !0
                            } else if (s = c[r] = [l],
                            s[1] = n(t, i, e) || ht,
                            s[1] === !0)
                                return !0
            }
        }
        function ei(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function oi(n, t, i, r, u, f) {
            return r && !r[o] && (r = oi(r)),
            u && !u[o] && (u = oi(u, f)),
            c(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || yr(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : bt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = bt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? it.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = bt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function si(n) {
            for (var s, u, i, e = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = fi(function(n) {
                return n === s
            }, c, !0), a = fi(function(n) {
                return it.call(s, n) > -1
            }, c, !0), f = [function(n, t, i) {
                return !h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }
            ]; e > t; t++)
                if (u = r.relative[n[t].type])
                    f = [fi(ei(f), u)];
                else {
                    if (u = r.filter[n[t].type].apply(null, n[t].matches),
                    u[o]) {
                        for (i = ++t; e > i; i++)
                            if (r.relative[n[i].type])
                                break;
                        return oi(t > 1 && ei(f), t > 1 && wt(n.slice(0, t - 1).concat({
                            value: " " === n[t - 2].type ? "*" : ""
                        })).replace(vt, "$1"), u, i > t && si(n.slice(t, i)), e > i && si(n = n.slice(i)), e > i && wt(n))
                    }
                    f.push(u)
                }
            return ei(f)
        }
        function vr(n, t) {
            var f = 0
              , i = t.length > 0
              , e = n.length > 0
              , o = function(o, h, c, l, a) {
                var y, g, k, w = [], d = 0, v = "0", nt = o && [], tt = null != a, it = lt, ut = o || e && r.find.TAG("*", a && h.parentNode || h), rt = p += null == it ? 1 : Math.random() || .1;
                for (tt && (lt = h !== s && h,
                ht = f); null != (y = ut[v]); v++) {
                    if (e && y) {
                        for (g = 0; k = n[g++]; )
                            if (k(y, h, c)) {
                                l.push(y);
                                break
                            }
                        tt && (p = rt,
                        ht = ++f)
                    }
                    i && ((y = !k && y) && d--,
                    o && nt.push(y))
                }
                if (d += v,
                i && v !== d) {
                    for (g = 0; k = t[g++]; )
                        k(nt, w, h, c);
                    if (o) {
                        if (d > 0)
                            while (v--)
                                nt[v] || w[v] || (w[v] = nr.call(l));
                        w = bt(w)
                    }
                    b.apply(l, w);
                    tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
                }
                return tt && (p = rt,
                lt = it),
                nt
            };
            return i ? c(o) : o
        }
        function yr(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++)
                u(n, t[r], i);
            return i
        }
        function pr(n, t, i, u) {
            var s, f, o, c, l, h = pt(n);
            if (!u && 1 === h.length) {
                if (f = h[0] = h[0].slice(0),
                f.length > 2 && "ID" === (o = f[0]).type && e.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(k, d), t) || [])[0],
                    !t)
                        return i;
                    n = n.slice(f.shift().value.length)
                }
                for (s = yt.needsContext.test(n) ? 0 : f.length; s--; ) {
                    if (o = f[s],
                    r.relative[c = o.type])
                        break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(s, 1),
                        n = u.length && wt(f),
                        !n)
                            return b.apply(i, u),
                            i;
                        break
                    }
                }
            }
            return kt(n, h)(u, t, !v, i, ti.test(n)),
            i
        }
        var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot, o = "sizzle" + -new Date, y = n.document, p = 0, di = 0, ci = ri(), li = ri(), ai = ri(), ft = !1, dt = function(n, t) {
            return n === t ? (ft = !0,
            0) : 0
        }, st = typeof t, vi = -2147483648, gi = {}.hasOwnProperty, w = [], nr = w.pop, tr = w.push, b = w.push, yi = w.slice, it = w.indexOf || function(n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n)
                    return t;
            return -1
        }
        , gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", f = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", pi = et.replace("w", "w#"), wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" + f + "*\\]", ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wi.replace(3, 8) + ")*)|.*)\\)|)", vt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"), ir = RegExp("^" + f + "*," + f + "*"), rr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"), ti = RegExp(f + "*[+~]"), ur = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"), fr = RegExp(ni), er = RegExp("^" + pi + "$"), yt = {
            ID: RegExp("^#(" + et + ")"),
            CLASS: RegExp("^\\.(" + et + ")"),
            TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + wi),
            PSEUDO: RegExp("^" + ni),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
            bool: RegExp("^(?:" + gt + ")$", "i"),
            needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
        }, ii = /^[^{]+\{\s*\[native \w/, or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sr = /^(?:input|select|textarea|button)$/i, hr = /^h\d$/i, cr = /'|\\/g, k = RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"), d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            b.apply(w = yi.call(y.childNodes), y.childNodes);
            w[y.childNodes.length].nodeType
        } catch (wr) {
            b = {
                apply: w.length ? function(n, t) {
                    tr.apply(n, yi.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        hi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ;
        e = u.support = {};
        nt = u.setDocument = function(n) {
            var i = n ? n.ownerDocument || n : y
              , u = i.defaultView;
            return i !== s && 9 === i.nodeType && i.documentElement ? (s = i,
            a = i.documentElement,
            v = !hi(i),
            u && u.attachEvent && u !== u.top && u.attachEvent("onbeforeunload", function() {
                nt()
            }),
            e.attributes = l(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = l(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = l(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }),
            e.getById = l(function(n) {
                return a.appendChild(n).id = o,
                !i.getElementsByName || !i.getElementsByName(o).length
            }),
            e.getById ? (r.find.ID = function(n, t) {
                if (typeof t.getElementById !== st && v) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete r.find.ID,
            r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            r.find.TAG = e.getElementsByTagName ? function(n, i) {
                return typeof i.getElementsByTagName !== st ? i.getElementsByTagName(n) : t
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            r.find.CLASS = e.getElementsByClassName && function(n, i) {
                return typeof i.getElementsByClassName !== st && v ? i.getElementsByClassName(n) : t
            }
            ,
            tt = [],
            h = [],
            (e.qsa = ii.test(i.querySelectorAll)) && (l(function(n) {
                n.innerHTML = "<select><option selected=''><\/option><\/select>";
                n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                n.querySelectorAll(":checked").length || h.push(":checked")
            }),
            l(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("t", "");
                n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                h.push(",.*:")
            })),
            (e.matchesSelector = ii.test(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function(n) {
                e.disconnectedMatch = at.call(n, "div");
                at.call(n, "[s!='']:x");
                tt.push("!=", ni)
            }),
            h = h.length && RegExp(h.join("|")),
            tt = tt.length && RegExp(tt.join("|")),
            ot = ii.test(a.contains) || a.compareDocumentPosition ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            dt = a.compareDocumentPosition ? function(n, t) {
                if (n === t)
                    return ft = !0,
                    0;
                var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t);
                return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(y, n) ? -1 : t === i || ot(y, t) ? 1 : g ? it.call(g, n) - it.call(g, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
            }
            : function(n, t) {
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (n === t)
                    return ft = !0,
                    0;
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, t) : 0;
                if (o === s)
                    return bi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? bi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0
            }
            ,
            i) : s
        }
        ;
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ;
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && nt(n),
            t = t.replace(ur, "='$1']"),
            !(!e.matchesSelector || !v || tt && tt.test(t) || h && h.test(t)))
                try {
                    var i = at.call(n, t);
                    if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (r) {}
            return u(t, s, null, [n]).length > 0
        }
        ;
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && nt(n),
            ot(n, t)
        }
        ;
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()]
              , u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null : u
        }
        ;
        u.error = function(n) {
            throw Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ft = !e.detectDuplicates,
            g = !e.sortStable && n.slice(0),
            n.sort(dt),
            ft) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return n
        }
        ;
        ct = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += ct(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                for (; r = n[u]; u++)
                    i += ct(r);
            return i
        }
        ;
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d),
                    n[3] = (n[4] || n[5] || "").replace(k, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var r, i = !n[5] && n[2];
                    return yt.CHILD.test(n[0]) ? null : (n[3] && n[4] !== t ? n[2] = n[4] : i && fr.test(i) && (r = pt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r),
                    n[2] = i.slice(0, r)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ci[n + " "];
                    return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ci(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , e = "last" !== n.slice(-4)
                      , f = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var a, k, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling", y = t.parentNode, g = f && t.nodeName.toLowerCase(), d = !h && !f;
                        if (y) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [e ? y.firstChild : y.lastChild],
                            e && d) {
                                for (k = y[o] || (y[o] = {}),
                                a = k[n] || [],
                                v = a[0] === p && a[1],
                                l = a[0] === p && a[2],
                                c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [p, v, l];
                                        break
                                    }
                            } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p)
                                l = a[1];
                            else
                                while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || 0 == l % r && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t],
                    r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) {
                        for (var u, f = i(n, t), e = f.length; e--; )
                            u = it.call(n, f[e]),
                            n[u] = !(r[u] = f[e])
                    }) : function(n) {
                        return i(n, 0, f)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: c(function(n) {
                    var i = []
                      , r = []
                      , t = kt(n.replace(vt, "$1"));
                    return t[o] ? c(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ct(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(k, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === a
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !r.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                },
                first: rt(function() {
                    return [0]
                }),
                last: rt(function(n, t) {
                    return [t - 1]
                }),
                eq: rt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: rt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: rt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; t > ++r; )
                        n.push(r);
                    return n
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (ut in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[ut] = lr(ut);
        for (ut in {
            submit: !0,
            reset: !0
        })
            r.pseudos[ut] = ar(ut);
        ki.prototype = r.filters = r.pseudos;
        r.setFilters = new ki;
        kt = u.compile = function(n, t) {
            var r, u = [], f = [], i = ai[n + " "];
            if (!i) {
                for (t || (t = pt(n)),
                r = t.length; r--; )
                    i = si(t[r]),
                    i[o] ? u.push(i) : f.push(i);
                i = ai(n, vr(f, u))
            }
            return i
        }
        ;
        e.sortStable = o.split("").sort(dt).join("") === o;
        e.detectDuplicates = ft;
        nt();
        e.sortDetached = l(function(n) {
            return 1 & n.compareDocumentPosition(s.createElement("div"))
        });
        l(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ui("type|href|height|width", function(n, i, r) {
            return r ? t : n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        });
        e.attributes && l(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ui("value", function(n, i, r) {
            return r || "input" !== n.nodeName.toLowerCase() ? t : n.defaultValue
        });
        l(function(n) {
            return null == n.getAttribute("disabled")
        }) || ui(gt, function(n, i, r) {
            var u;
            return r ? t : (u = n.getAttributeNode(i)) && u.specified ? u.value : n[i] === !0 ? i.toLowerCase() : null
        });
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains
    }(n);
    ni = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ni[n] || te(n) : i.extend({}, n);
        var s, f, c, e, o, l, r = [], u = !n.once && [], a = function(t) {
            for (f = n.memory && t,
            c = !0,
            o = l || 0,
            l = 0,
            e = r.length,
            s = !0; r && e > o; o++)
                if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                    f = !1;
                    break
                }
            s = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        }, h = {
            add: function() {
                if (r) {
                    var t = r.length;
                    (function u(t) {
                        i.each(t, function(t, f) {
                            var e = i.type(f);
                            "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                        })
                    }
                    )(arguments);
                    s ? e = r.length : f && (l = t,
                    a(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1),
                        s && (e >= u && e--,
                        o >= u && o--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
            },
            empty: function() {
                return r = [],
                e = 0,
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(n, t) {
                return !r || c && !u || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                s ? u.push(t) : a(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var s = e[0]
                              , o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = l.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = Array(r),
                c = Array(r),
                s = Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.support = function(t) {
        var a, e, f, h, c, l, v, y, s, u = r.createElement("div");
        if (u.setAttribute("className", "t"),
        u.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        a = u.getElementsByTagName("*") || [],
        e = u.getElementsByTagName("a")[0],
        !e || !e.style || !a.length)
            return t;
        h = r.createElement("select");
        l = h.appendChild(r.createElement("option"));
        f = u.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        t.getSetAttribute = "t" !== u.className;
        t.leadingWhitespace = 3 === u.firstChild.nodeType;
        t.tbody = !u.getElementsByTagName("tbody").length;
        t.htmlSerialize = !!u.getElementsByTagName("link").length;
        t.style = /top/.test(e.getAttribute("style"));
        t.hrefNormalized = "/a" === e.getAttribute("href");
        t.opacity = /^0.5/.test(e.style.opacity);
        t.cssFloat = !!e.style.cssFloat;
        t.checkOn = !!f.value;
        t.optSelected = l.selected;
        t.enctype = !!r.createElement("form").enctype;
        t.html5Clone = "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML;
        t.inlineBlockNeedsLayout = !1;
        t.shrinkWrapBlocks = !1;
        t.pixelPosition = !1;
        t.deleteExpando = !0;
        t.noCloneEvent = !0;
        t.reliableMarginRight = !0;
        t.boxSizingReliable = !0;
        f.checked = !0;
        t.noCloneChecked = f.cloneNode(!0).checked;
        h.disabled = !0;
        t.optDisabled = !l.disabled;
        try {
            delete u.test
        } catch (p) {
            t.deleteExpando = !1
        }
        f = r.createElement("input");
        f.setAttribute("value", "");
        t.input = "" === f.getAttribute("value");
        f.value = "t";
        f.setAttribute("type", "radio");
        t.radioValue = "t" === f.value;
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = r.createDocumentFragment();
        c.appendChild(f);
        t.appendChecked = f.checked;
        t.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.attachEvent && (u.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        u.cloneNode(!0).click());
        for (s in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            u.setAttribute(v = "on" + s, "t"),
            t[s + "Bubbles"] = v in n || u.attributes[v].expando === !1;
        u.style.backgroundClip = "content-box";
        u.cloneNode(!0).style.backgroundClip = "";
        t.clearCloneStyle = "content-box" === u.style.backgroundClip;
        for (s in i(t))
            break;
        return t.ownLast = "0" !== s,
        i(function() {
            var h, e, f, c = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = r.getElementsByTagName("body")[0];
            s && (h = r.createElement("div"),
            h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            s.appendChild(h).appendChild(u),
            u.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            f = u.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            y = 0 === f[0].offsetHeight,
            f[0].style.display = "",
            f[1].style.display = "none",
            t.reliableHiddenOffsets = y && 0 === f[0].offsetHeight,
            u.innerHTML = "",
            u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            i.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === u.offsetWidth
            }),
            n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(u, null) || {}).top,
            t.boxSizingReliable = "4px" === (n.getComputedStyle(u, null) || {
                width: "4px"
            }).width,
            e = u.appendChild(r.createElement("div")),
            e.style.cssText = u.style.cssText = c,
            e.style.marginRight = e.style.width = "0",
            u.style.width = "1px",
            t.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)),
            typeof u.style.zoom !== o && (u.innerHTML = "",
            u.style.cssText = c + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === u.offsetWidth,
            u.style.display = "block",
            u.innerHTML = "<div><\/div>",
            u.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== u.offsetWidth,
            t.inlineBlockNeedsLayout && (s.style.zoom = 1)),
            s.removeChild(h),
            h = u = f = e = null)
        }),
        a = h = c = l = e = f = null,
        t
    }({});
    ir = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    rr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ti(n)
        },
        data: function(n, t, i) {
            return ur(n, t, i)
        },
        removeData: function(n, t) {
            return fr(n, t)
        },
        _data: function(n, t, i) {
            return ur(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return fr(n, t, !0)
        },
        acceptData: function(n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType)
                return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var e, f, o = null, s = 0, u = this[0];
            if (n === t) {
                if (this.length && (o = i.data(u),
                1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                    for (e = u.attributes; e.length > s; s++)
                        f = e[s].name,
                        0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)),
                        er(u, f, o[f]));
                    i._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, r)
            }) : u ? er(u, n, i.data(u, n)) : null
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, r, u) {
            var f;
            return n ? (r = (r || "fx") + "queue",
            f = i._data(n, r),
            u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)),
            f || []) : t
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n,
            n = "fx",
            u--),
            u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (r = n,
            n = t),
            n = n || "fx"; s--; )
                u = i._data(f[s], n + "queueHooks"),
                u && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(r)
        }
    });
    var d, or, ii = /[\t\r\n\f]/g, ie = /\r/g, re = /^(?:input|select|textarea|button|object)$/i, ue = /^(?:a|area)$/i, ri = /^(?:checked|selected)$/i, a = i.support.getSetAttribute, ht = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0, h = this.length, c = "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : " ")) {
                        for (o = 0; u = e[o++]; )
                            0 > r.indexOf(" " + u + " ") && (r += u + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, r, u, o, f = 0, h = this.length, c = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : "")) {
                        for (o = 0; u = e[o++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        t.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(s) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ii, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
            this.each(function(u) {
                var f;
                1 === this.nodeType && (f = e ? n.call(this, u, i(this).val()) : n,
                null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return null == n ? "" : n + ""
                })),
                r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            r && "get"in r && (u = r.get(f, "value")) !== t ? u : (u = f.value,
            "string" == typeof u ? u.replace(ie, "") : null == u ? "" : u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                        if (t = o[f],
                        !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            u)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        r = f[o],
                        (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1),
                    e
                }
            }
        },
        attr: function(n, r, u) {
            var f, e, s = n.nodeType;
            if (n && 3 !== s && 8 !== s && 2 !== s)
                return typeof n.getAttribute === o ? i.prop(n, r, u) : (1 === s && i.isXMLDoc(n) || (r = r.toLowerCase(),
                f = i.attrHooks[r] || (i.expr.match.bool.test(r) ? or : d)),
                u === t ? f && "get"in f && null !== (e = f.get(n, r)) ? e : (e = i.find.attr(n, r),
                null == e ? t : e) : null !== u ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""),
                u) : (i.removeAttr(n, r),
                t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? ht && a || !ri.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(a ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get"in f && null !== (e = f.get(n, r)) ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : re.test(n.nodeName) || ue.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    or = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : ht && a || !ri.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = ht && a || !ri.test(r) ? function(n, r, f) {
            var e = i.expr.attrHandle[r]
              , o = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = e,
            o
        }
        : function(n, r, u) {
            return u ? t : n[i.camelCase("default-" + r)] ? r.toLowerCase() : null
        }
    });
    ht && a || (i.attrHooks.value = {
        set: function(n, r, u) {
            return i.nodeName(n, "input") ? (n.defaultValue = r,
            t) : d && d.set(n, r, u)
        }
    });
    a || (d = {
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)),
            u.value = i += "",
            "value" === r || i === n.getAttribute(r) ? i : t
        }
    },
    i.expr.attrHandle.id = i.expr.attrHandle.name = i.expr.attrHandle.coords = function(n, i, r) {
        var u;
        return r ? t : (u = n.getAttributeNode(i)) && "" !== u.value ? u.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && r.specified ? r.value : t
        },
        set: d.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            d.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, r) {
        i.attrHooks[r] = {
            set: function(n, i) {
                return "" === i ? (n.setAttribute(r, "auto"),
                i) : t
            }
        }
    }));
    i.support.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, r) {
                return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    var ui = /^(?:input|select|textarea)$/i
      , fe = /^key/
      , ee = /^(?:mouse|contextmenu)|click/
      , sr = /^(?:focusinfocus|focusoutblur)$/
      , hr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, r, u, f, e) {
            var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
            if (y) {
                for (u.handler && (w = u,
                u = w.handler,
                e = w.selector),
                u.guid || (u.guid = i.guid++),
                (p = y.events) || (p = y.events = {}),
                (l = y.handle) || (l = y.handle = function(n) {
                    return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = n),
                r = (r || "").match(s) || [""],
                k = r.length; k--; )
                    b = hr.exec(r[k]) || [],
                    h = g = b[1],
                    d = (b[2] || "").split(".").sort(),
                    h && (c = i.event.special[h] || {},
                    h = (e ? c.delegateType : c.bindType) || h,
                    c = i.event.special[h] || {},
                    a = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, w),
                    (v = p[h]) || (v = p[h] = [],
                    v.delegateCount = 0,
                    c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))),
                    c.add && (c.add.call(n, a),
                    a.handler.guid || (a.handler.guid = u.guid)),
                    e ? v.splice(v.delegateCount++, 0, a) : v.push(a),
                    i.event.global[h] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""],
                p = t.length; p--; )
                    if (h = hr.exec(t[p]) || [],
                    e = k = h[1],
                    w = (h[2] || "").split(".").sort(),
                    e) {
                        for (c = i.event.special[e] || {},
                        e = (u ? c.delegateType : c.bindType) || e,
                        l = a[e] || [],
                        h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = y = l.length; y--; )
                            o = l[y],
                            !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1),
                            o.selector && l.delegateCount--,
                            c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                        delete a[e])
                    } else
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(u, f, e, o) {
            var a, v, s, w, l, c, b, p = [e || r], h = k.call(u, "type") ? u.type : u, y = k.call(u, "namespace") ? u.namespace.split(".") : [];
            if (s = c = e = e || r,
            3 !== e.nodeType && 8 !== e.nodeType && !sr.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."),
            h = y.shift(),
            y.sort()),
            v = 0 > h.indexOf(":") && "on" + h,
            u = u[i.expando] ? u : new i.Event(h,"object" == typeof u && u),
            u.isTrigger = o ? 2 : 3,
            u.namespace = y.join("."),
            u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            u.result = t,
            u.target || (u.target = e),
            f = null == f ? [u] : i.makeArray(f, [u]),
            l = i.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (w = l.delegateType || h,
                    sr.test(w + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        c = s;
                    c === (e.ownerDocument || r) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (b = 0; (s = p[b++]) && !u.isPropagationStopped(); )
                    u.type = b > 1 ? w : l.bindType || h,
                    a = (i._data(s, "events") || {})[u.type] && i._data(s, "handle"),
                    a && a.apply(s, f),
                    a = v && s[v],
                    a && i.acceptData(s) && a.apply && a.apply(s, f) === !1 && u.preventDefault();
                if (u.type = h,
                !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && v && e[h] && !i.isWindow(e)) {
                    c = e[v];
                    c && (e[v] = null);
                    i.event.triggered = h;
                    try {
                        e[h]()
                    } catch (d) {}
                    i.event.triggered = t;
                    c && (e[v] = c)
                }
                return u.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, e, r, u, s, h = [], c = l.call(arguments), a = (i._data(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
            if (c[0] = n,
            n.delegateTarget = this,
            !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, a),
                o = 0; (u = h[o++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = u.elem,
                    s = 0; (r = u.handlers[s++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r,
                        n.data = r.data,
                        e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c),
                        e !== t && (n.result = e) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, r) {
            var e, o, f, s, c = [], h = r.delegateCount, u = n.target;
            if (h && u.nodeType && (!n.button || "click" !== n.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                        for (f = [],
                        s = 0; h > s; s++)
                            o = r[s],
                            e = o.selector + " ",
                            f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length),
                            f[e] && f.push(o);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return r.length > h && c.push({
                elem: this,
                handlers: r.slice(h)
            }),
            c
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, u = n.type, f = n, t = this.fixHooks[u];
            for (t || (this.fixHooks[u] = t = ee.test(u) ? this.mouseHooks : fe.test(u) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || r),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var u, o, f, e = i.button, s = i.fromElement;
                return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r,
                f = o.documentElement,
                u = o.body,
                n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0),
                n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cr() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cr() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, r) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ct : g) : this.type = n,
        r && i.extend(this, r),
        this.timeStamp = n && n.timeStamp || i.now(),
        this[i.expando] = !0,
        t) : new i.Event(n,r)
    }
    ;
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ct;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"),
            t)
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }),
            i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })),
            !1) : (i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(n) {
            var i = n.target;
            return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !ui.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
          , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                0 == u++ && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                0 == --u && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var s, o;
            if ("object" == typeof n) {
                "string" != typeof r && (u = u || r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (null == u && null == f ? (f = r,
            u = r = t) : null == f && ("string" == typeof r ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = g;
            else if (!f)
                return this;
            return 1 === e && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if ("object" == typeof n) {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || "function" == typeof r) && (u = r,
            r = t),
            u === !1 && (u = g),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t
        }
    });
    var oe = /^.[^:#\[\.,]*$/
      , se = /^(?:parents|prev(?:Until|All))/
      , lr = i.expr.match.needsContext
      , he = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; f > t; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        is: function(n) {
            return !!fi(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = lr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (he[n] || (f = i.unique(f)),
            se.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"),
            1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u)); )
                1 === f.nodeType && e.push(f),
                f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var yr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ce = / jQuery\d+="(?:null|\d+)"/g
      , pr = RegExp("<(?:" + yr + ")[\\s/>]", "i")
      , ei = /^\s+/
      , wr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , br = /<([\w:]+)/
      , kr = /<tbody/i
      , le = /<|&#?\w+;/
      , ae = /<(?:script|style|link)/i
      , oi = /^(?:checkbox|radio)$/i
      , ve = /checked\s*(?:[^=]|=\s*.checked.)/i
      , dr = /^$|\/(?:java|ecma)script/i
      , ye = /^true\/(.*)/
      , pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    }
      , we = vr(r)
      , si = we.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, f = 0; null != (r = e[f]); f++)
                t || 1 !== r.nodeType || i.cleanData(u(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && hi(u(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                  , f = 0
                  , o = this.length;
                if (n === t)
                    return 1 === r.nodeType ? r.innerHTML.replace(ce, "") : t;
                if (!("string" != typeof n || ae.test(n) || !i.support.htmlSerialize && pr.test(n) || !i.support.leadingWhitespace && ei.test(n) || e[(br.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(wr, "<$1><\/$2>");
                    try {
                        for (; o > f; f++)
                            r = this[f] || {},
                            1 === r.nodeType && (i.cleanData(u(r, !1)),
                            r.innerHTML = n);
                        r = 0
                    } catch (s) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this, function(n) {
                return [n.nextSibling, n.parentNode]
            })
              , n = 0;
            return this.domManip(arguments, function(r) {
                var u = t[n++]
                  , f = t[n++];
                f && (u && u.parentNode !== f && (u = this.nextSibling),
                i(this).remove(),
                f.insertBefore(r, u))
            }, !0),
            n ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, r) {
            n = di.apply([], n);
            var h, f, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
            if (y || !(1 >= l || "string" != typeof a || i.support.checkClone) && ve.test(a))
                return this.each(function(i) {
                    var u = p.eq(i);
                    y && (n[0] = a.call(this, i, u.html()));
                    u.domManip(n, t, r)
                });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, !r && this),
            h = s.firstChild,
            1 === s.childNodes.length && (s = h),
            h)) {
                for (o = i.map(u(s, "script"), nu),
                c = o.length; l > e; e++)
                    f = s,
                    e !== w && (f = i.clone(f, !0, !0),
                    c && i.merge(o, u(f, "script"))),
                    t.call(this[e], f, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument,
                    i.map(o, tu),
                    e = 0; c > e; e++)
                        f = o[e],
                        dr.test(f.type || "") && !i._data(f, "globalEval") && i.contains(v, f) && (f.src ? i._evalUrl(f.src) : i.globalEval((f.text || f.textContent || f.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                kt.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !pr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (si.innerHTML = n.outerHTML,
            si.removeChild(o = si.firstChild)),
            !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = u(o),
                s = u(n),
                e = 0; null != (h = s[e]); ++e)
                    f[e] && be(h, f[e]);
            if (t)
                if (r)
                    for (s = s || u(n),
                    f = f || u(o),
                    e = 0; null != (h = s[e]); e++)
                        iu(h, f[e]);
                else
                    iu(n, o);
            return f = u(o, "script"),
            f.length > 0 && hi(f, !c && u(n, "script")),
            f = s = h = null,
            o
        },
        buildFragment: function(n, t, r, f) {
            for (var h, o, w, s, y, p, l, b = n.length, a = vr(t), c = [], v = 0; b > v; v++)
                if (o = n[v],
                o || 0 === o)
                    if ("object" === i.type(o))
                        i.merge(c, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                        for (s = s || a.appendChild(t.createElement("div")),
                        y = (br.exec(o) || ["", ""])[1].toLowerCase(),
                        l = e[y] || e._default,
                        s.innerHTML = l[1] + o.replace(wr, "<$1><\/$2>") + l[2],
                        h = l[0]; h--; )
                            s = s.lastChild;
                        if (!i.support.leadingWhitespace && ei.test(o) && c.push(t.createTextNode(ei.exec(o)[0])),
                        !i.support.tbody)
                            for (o = "table" !== y || kr.test(o) ? "<table>" !== l[1] || kr.test(o) ? 0 : s : s.firstChild,
                            h = o && o.childNodes.length; h--; )
                                i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                        for (i.merge(c, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = a.lastChild
                    } else
                        c.push(t.createTextNode(o));
            for (s && a.removeChild(s),
            i.support.appendChecked || i.grep(u(c, "input"), ke),
            v = 0; o = c[v++]; )
                if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o),
                s = u(a.appendChild(o), "script"),
                w && hi(s),
                r))
                    for (h = 0; o = s[h++]; )
                        dr.test(o.type || "") && r.push(o);
            return s = null,
            a
        },
        cleanData: function(n, t) {
            for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (r = n[c]); c++)
                if ((t || i.acceptData(r)) && (u = r[s],
                e = u && h[u])) {
                    if (e.events)
                        for (f in e.events)
                            a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                    h[u] && (delete h[u],
                    l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null,
                    b.push(u))
                }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    });
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var rt, v, y, ci = /alpha\([^)]*\)/i, de = /opacity\s*=\s*([^)]*)/, ge = /^(top|right|bottom|left)$/, no = /^(none|table(?!-c[ea]).+)/, ru = /^margin/, to = RegExp("^(" + st + ")(.*)$", "i"), lt = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"), io = RegExp("^([+-])=(" + st + ")", "i"), uu = {
        BODY: "block"
    }, ro = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, fu = {
        letterSpacing: 0,
        fontWeight: 400
    }, p = ["Top", "Right", "Bottom", "Left"], eu = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, o, s = {}, f = 0;
                if (i.isArray(r)) {
                    for (o = v(n),
                    e = r.length; e > f; f++)
                        s[r[f]] = i.css(n, r[f], !1, o);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return su(this, !0)
        },
        hide: function() {
            return su(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ut(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = y(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, s, e, h = i.camelCase(r), c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = ou(c, h)),
                e = i.cssHooks[r] || i.cssHooks[h],
                u === t)
                    return e && "get"in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (s = typeof u,
                "string" === s && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)),
                s = "number"),
                !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"),
                i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"),
                e && "set"in e && (u = e.set(n, u, f)) === t)))
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, u, f) {
            var h, e, o, s = i.camelCase(r);
            return r = i.cssProps[s] || (i.cssProps[s] = ou(n.style, s)),
            o = i.cssHooks[r] || i.cssHooks[s],
            o && "get"in o && (e = o.get(n, !0, u)),
            e === t && (e = y(n, r, f)),
            "normal" === e && r in fu && (e = fu[r]),
            "" === u || u ? (h = parseFloat(e),
            u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    });
    n.getComputedStyle ? (v = function(t) {
        return n.getComputedStyle(t, null)
    }
    ,
    y = function(n, r, u) {
        var s, h, c, o = u || v(n), e = o ? o.getPropertyValue(r) || o[r] : t, f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)),
        lt.test(e) && ru.test(r) && (s = f.width,
        h = f.minWidth,
        c = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = e,
        e = o.width,
        f.width = s,
        f.minWidth = h,
        f.maxWidth = c)),
        e
    }
    ) : r.documentElement.currentStyle && (v = function(n) {
        return n.currentStyle
    }
    ,
    y = function(n, i, r) {
        var s, e, o, h = r || v(n), u = h ? h[i] : t, f = n.style;
        return null == u && f && f[i] && (u = f[i]),
        lt.test(u) && !ge.test(i) && (s = f.left,
        e = n.runtimeStyle,
        o = e && e.left,
        o && (e.left = n.currentStyle.left),
        f.left = "fontSize" === i ? "1em" : u,
        u = f.pixelLeft + "px",
        f.left = s,
        o && (e.left = o)),
        "" === u ? "auto" : u
    }
    );
    i.each(["height", "width"], function(n, r) {
        i.cssHooks[r] = {
            get: function(n, u, f) {
                return u ? 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro, function() {
                    return lu(n, r, f)
                }) : lu(n, r, f) : t
            },
            set: function(n, t, u) {
                var f = u && v(n);
                return hu(n, t, u ? cu(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(ci, "")) && r.removeAttribute && (r.removeAttribute("filter"),
            "" === t || u && !u.filter) || (r.filter = ci.test(f) ? f.replace(ci, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, r) {
                return r ? i.swap(n, {
                    display: "inline-block"
                }, y, [n, "marginRight"]) : t
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u) {
                    return u ? (u = y(n, r),
                    lt.test(u) ? i(n).position()[r] + "px" : u) : t
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    );
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ru.test(n) || (i.cssHooks[n + t].set = hu)
    });
    var uo = /%20/g
      , fo = /\[\]$/
      , yu = /\r?\n/g
      , eo = /^(?:submit|button|image|reset|file)$/i
      , oo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(yu, "\r\n")
                }
            }).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (u in n)
                li(u, n[u], r, e);
        return f.join("&").replace(uo, "+")
    }
    ;
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var w, c, ai = i.now(), vi = /\?/, so = /#.*$/, pu = /([?&])_=[^&]*/, ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, co = /^(?:GET|HEAD)$/, lo = /^\/\//, wu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, bu = i.fn.load, ku = {}, yi = {}, du = "*/".concat("*");
    try {
        c = hf.href
    } catch (go) {
        c = r.createElement("a");
        c.href = "";
        c = c.href
    }
    w = wu.exec(c.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if ("string" != typeof n && bu)
            return bu.apply(this, arguments);
        var f, s, h, e = this, o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o, n.length),
        n = n.slice(0, o)),
        i.isFunction(r) ? (u = r,
        r = t) : r && "object" == typeof r && (h = "POST"),
        e.length > 0 && i.ajax({
            url: n,
            type: h,
            dataType: "html",
            data: r
        }).done(function(n) {
            s = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).complete(u && function(n, t) {
            e.each(u, s || [n.responseText, t, n])
        }
        ),
        this
    }
    ;
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: c,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": du,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n)
        },
        ajaxPrefilter: gu(ku),
        ajaxTransport: gu(yi),
        ajax: function(n, r) {
            function k(n, r, s, c) {
                var a, rt, k, p, w, l = r;
                2 !== o && (o = 2,
                g && clearTimeout(g),
                y = t,
                d = c || "",
                f.readyState = n > 0 ? 4 : 0,
                a = n >= 200 && 300 > n || 304 === n,
                s && (p = ao(u, f, s)),
                p = vo(u, p, f, a),
                a ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"),
                w && (i.lastModified[e] = w),
                w = f.getResponseHeader("etag"),
                w && (i.etag[e] = w)),
                204 === n || "HEAD" === u.type ? l = "nocontent" : 304 === n ? l = "notmodified" : (l = p.state,
                rt = p.data,
                k = p.error,
                a = !k)) : (k = l,
                (n || !l) && (l = "error",
                0 > n && (n = 0))),
                f.status = n,
                f.statusText = (r || l) + "",
                a ? tt.resolveWith(h, [rt, l, f]) : tt.rejectWith(h, [f, l, k]),
                f.statusCode(b),
                b = t,
                v && nt.trigger(a ? "ajaxSuccess" : "ajaxError", [f, u, a ? rt : k]),
                it.fireWith(h, [f, l]),
                v && (nt.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (r = n,
            n = t);
            r = r || {};
            var l, a, e, d, g, v, y, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), b = u.statusCode || {}, rt = {}, ut = {}, o = 0, ft = "canceled", f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === o) {
                        if (!p)
                            for (p = {}; t = ho.exec(d); )
                                p[t[1].toLowerCase()] = t[2];
                        t = p[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === o ? d : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = ut[i] = ut[i] || n,
                    rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (2 > o)
                            for (t in n)
                                b[t] = [b[t], n[t]];
                        else
                            f.always(n[f.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return y && y.abort(t),
                    k(0, t),
                    this
                }
            };
            if (tt.promise(f).complete = it.add,
            f.success = f.done,
            f.error = f.fail,
            u.url = ((n || u.url || c) + "").replace(so, "").replace(lo, w[1] + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""],
            null == u.crossDomain && (l = wu.exec(u.url.toLowerCase()),
            u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (w[3] || ("http:" === w[1] ? "80" : "443")))),
            u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            nf(ku, u, r, f),
            2 === o)
                return f;
            v = u.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !co.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (vi.test(e) ? "&" : "?") + u.data,
            delete u.data),
            u.cache === !1 && (u.url = pu.test(e) ? e.replace(pu, "$1_=" + ai++) : e + (vi.test(e) ? "&" : "?") + "_=" + ai++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
            i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + du + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers)
                f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o))
                return f.abort();
            ft = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[a](u[a]);
            if (y = nf(yi, u, r, f)) {
                f.readyState = 1;
                v && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1;
                    y.send(rt, k)
                } catch (et) {
                    if (!(2 > o))
                        throw et;
                    k(-1, et)
                }
            } else
                k(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
            f = u,
            u = t),
            i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var u, f = r.head || i("head")[0] || r.documentElement;
            return {
                send: function(t, i) {
                    u = r.createElement("script");
                    u.async = !0;
                    n.scriptCharset && (u.charset = n.scriptCharset);
                    u.src = n.url;
                    u.onload = u.onreadystatechange = function(n, t) {
                        (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null,
                        u.parentNode && u.parentNode.removeChild(u),
                        u = null,
                        t || i(200, "success"))
                    }
                    ;
                    f.insertBefore(u, f.firstChild)
                },
                abort: function() {
                    u && u.onload(t, !0)
                }
            }
        }
    });
    wi = [];
    at = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = wi.pop() || i.expando + "_" + ai++;
            return this[n] = !0,
            n
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (at.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && at.test(r.data) && "data");
        return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback,
        h ? r[h] = r[h].replace(at, "$1" + e) : r.jsonp !== !1 && (r.url += (vi.test(r.url) ? "&" : "?") + r.jsonp + "=" + e),
        r.converters["script json"] = function() {
            return o || i.error(e + " was not called"),
            o[0]
        }
        ,
        r.dataTypes[0] = "json",
        s = n[e],
        n[e] = function() {
            o = arguments
        }
        ,
        f.always(function() {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback,
            wi.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t
        }),
        "script") : t
    });
    tf = 0;
    vt = n.ActiveXObject && function() {
        var n;
        for (n in nt)
            nt[n](t, !0)
    }
    ;
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && rf() || yo()
    }
    : rf;
    tt = i.ajaxSettings.xhr();
    i.support.cors = !!tt && "withCredentials"in tt;
    tt = i.support.ajax = !!tt;
    tt && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, l, c;
                        try {
                            if (u && (f || 4 === o.readyState))
                                if (u = t,
                                h && (o.onreadystatechange = i.noop,
                                vt && delete nt[h]),
                                f)
                                    4 !== o.readyState && o.abort();
                                else {
                                    c = {};
                                    s = o.status;
                                    a = o.getAllResponseHeaders();
                                    "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (y) {
                                        l = ""
                                    }
                                    s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                        } catch (v) {
                            f || e(-1, v)
                        }
                        c && e(s, l, c, a)
                    }
                    ;
                    r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++tf,
                    vt && (nt || (nt = {},
                    i(n).unload(vt)),
                    nt[h] = u),
                    o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(t, !0)
                }
            }
        }
    });
    var it, yt, po = /^(?:toggle|show|hide)$/, uf = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"), wo = /queueHooks$/, pt = [ko], ft = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , r = uf.exec(t)
              , e = r && r[3] || (i.cssNumber[n] ? "" : "px")
              , u = (i.cssNumber[n] || "px" !== e && +s) && uf.exec(i.css(f.elem, n))
              , o = 1
              , h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do
                    o = o || ".5",
                    u /= o,
                    i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0,
            f.unit = e,
            f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(of, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                ft[r] = ft[r] || [],
                ft[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? pt.unshift(n) : pt.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : f.propHooks._default.set(this),
            this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = of(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = null != n && n + "queueHooks"
                  , e = i.timers
                  , r = i._data(this);
                if (t)
                    r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && wo.test(t) && f(r[t]);
                for (t = e.length; t--; )
                    e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u),
                    o = !1,
                    e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each({
        slideDown: wt("show"),
        slideUp: wt("hide"),
        slideToggle: wt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers, r = 0;
        for (it = i.now(); n.length > r; r++)
            u = n[r],
            u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        it = t
    }
    ;
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        yt || (yt = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        clearInterval(yt);
        yt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    );
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        var r, e, f = {
            top: 0,
            left: 0
        }, u = this[0], s = u && u.ownerDocument;
        if (s)
            return r = s.documentElement,
            i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()),
            e = sf(s),
            {
                top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }) : f
    }
    ;
    i.offset = {
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            "static" === f && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
            h = s.top,
            c = s.left) : (h = parseFloat(l) || 0,
            c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            null != t.top && (u.top = t.top - o.top + h);
            null != t.left && (u.left = t.left - o.left + c);
            "using"in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || ki; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || ki
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = sf(n);
                return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e,
                t)
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || "boolean" != typeof f)
                  , s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement,
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    i.fn.size = function() {
        return this.length
    }
    ;
    i.fn.andSelf = i.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (n.jQuery = n.$ = i,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }))
}(window),
!function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ui(n) {
        var t = n.length
          , r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }
    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (ef.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return et.call(t, n) >= 0 !== r
        })
    }
    function ur(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n
    }
    function of(n) {
        var t = ei[n] = {};
        return i.each(n.match(c) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function ct() {
        u.removeEventListener("DOMContentLoaded", ct, !1);
        n.removeEventListener("load", ct, !1);
        i.ready()
    }
    function p() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }
    function fr(n, t, r) {
        var u;
        if (void 0 === r && 1 === n.nodeType)
            if (u = "data-" + t.replace(hf, "-$1").toLowerCase(),
            r = n.getAttribute(u),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                e.set(n, t, r)
            } else
                r = void 0;
        return r
    }
    function at() {
        return !0
    }
    function g() {
        return !1
    }
    function hr() {
        try {
            return u.activeElement
        } catch (n) {}
    }
    function vr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function bf(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type,
        n
    }
    function kf(n) {
        var t = pf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function oi(n, t) {
        for (var i = 0, u = n.length; u > i; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function yr(n, t) {
        var u, c, f, s, h, l, a, o;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n),
            h = r.set(t, s),
            o = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in o)
                    for (u = 0,
                    c = o[f].length; c > u; u++)
                        i.event.add(t, f, o[f][u])
            }
            e.hasData(n) && (l = e.access(n),
            a = i.extend({}, l),
            e.set(t, a))
        }
    }
    function o(n, t) {
        var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function df(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
    }
    function pr(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(),
        e
    }
    function hi(n) {
        var r = u
          , t = si[n];
        return t || (t = pr(n, r),
        "none" !== t && t || (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
        r = vt[0].contentDocument,
        r.write(),
        r.close(),
        t = pr(n, r),
        vt.detach()),
        si[n] = t),
        t
    }
    function rt(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || yt(n),
        r && (u = r.getPropertyValue(t) || r[t]),
        r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)),
        ci.test(u) && wr.test(t) && (e = f.width,
        o = f.minWidth,
        s = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = u,
        u = r.width,
        f.width = e,
        f.minWidth = o,
        f.maxWidth = s)),
        void 0 !== u ? u + "" : u
    }
    function br(n, t) {
        return {
            get: function() {
                return n() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function gr(n, t) {
        if (t in n)
            return t;
        for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--; )
            if (t = dr[i] + r,
            t in n)
                return t;
        return u
    }
    function nu(n, t, i) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function tu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + w[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }
    function iu(n, t, r) {
        var o = !0
          , u = "width" === t ? n.offsetWidth : n.offsetHeight
          , e = yt(n)
          , s = "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= u || null == u) {
            if (u = rt(n, t, e),
            (0 > u || null == u) && (u = n.style[t]),
            ci.test(u))
                return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }
    function ru(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++)
            u = n[f],
            u.style && (o[f] = r.get(u, "olddisplay"),
            e = u.style.display,
            t ? (o[f] || "none" !== e || (u.style.display = ""),
            "" === u.style.display && it(u) && (o[f] = r.access(u, "olddisplay", hi(u.nodeName)))) : (s = it(u),
            "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; h > f; f++)
            u = n[f],
            u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }
    function s(n, t, i, r, u) {
        return new s.prototype.init(n,t,i,r,u)
    }
    function fu() {
        return setTimeout(function() {
            nt = void 0
        }),
        nt = i.now()
    }
    function bt(n, t) {
        var r, u = 0, i = {
            height: n
        };
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = w[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function eu(n, t, i) {
        for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function fe(n, t, u) {
        var f, a, p, v, o, w, h, b, l = this, y = {}, s = n.style, c = n.nodeType && it(n), e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"),
        null == o.unqueued && (o.unqueued = 0,
        w = o.empty.fire,
        o.empty.fire = function() {
            o.unqueued || w()
        }
        ),
        o.unqueued++,
        l.always(function() {
            l.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        1 === n.nodeType && ("height"in t || "width"in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY],
        h = i.css(n, "display"),
        b = "none" === h ? r.get(n, "olddisplay") || hi(n.nodeName) : h,
        "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden",
        l.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f],
            re.exec(a)) {
                if (delete t[f],
                p = p || "toggle" === a,
                a === (c ? "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f])
                        continue;
                    c = !0
                }
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = void 0;
        if (i.isEmptyObject(y))
            "inline" === ("none" === h ? hi(n.nodeName) : h) && (s.display = h);
        else {
            e ? "hidden"in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                r.remove(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t])
            });
            for (f in y)
                v = eu(c ? e[f] : 0, f, l),
                f in e || (e[f] = v.start,
                c && (v.end = v.start,
                v.start = "width" === f || "height" === f ? 1 : 0))
        }
    }
    function ee(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function ou(n, t, r) {
        var h, e, o = 0, l = wt.length, f = i.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (e)
                return !1;
            for (var s = nt || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: nt || fu(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (ee(s, u.opts.specialEasing); l > o; o++)
            if (h = wt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, eu, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function pu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(c) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u[0] ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function wu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === li;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ai(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ae(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
            r.shift(),
            void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0]in i)
            f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f)
            return (f !== r[0] && r.unshift(f),
            i[f])
    }
    function ve(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function vi(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                vi(n + "[" + f + "]", t[f], r, u)
    }
    function ku(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
    }
    var k = [], a = k.slice, bi = k.concat, ii = k.push, et = k.indexOf, ot = {}, nf = ot.toString, ri = ot.hasOwnProperty, f = {}, u = n.document, ki = "2.1.1", i = function(n, t) {
        return new i.fn.init(n,t)
    }, tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rf = /^-ms-/, uf = /-([\da-z])/gi, ff = function(n, t) {
        return t.toUpperCase()
    }, y, st, nr, tr, ir, rr, c, ei, ht, l, d, vt, si, oe, su, tt, hu, kt, cu, dt, gt, yi, ti, pi, wi, du, gu;
    i.fn = i.prototype = {
        jquery: ki,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n,
        n = arguments[u] || {},
        u++),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        u === c && (n = this,
        u--); c > u; u++)
            if (null != (e = arguments[u]))
                for (f in e)
                    r = n[f],
                    t = e[f],
                    n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1,
                    s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                    n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return null != n && n === n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) >= 0
        },
        isPlainObject: function(n) {
            return "object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n)
                return !1;
            return !0
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[nf.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"),
            t.text = n,
            u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(rf, "ms-").replace(uf, ff)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = ui(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(tf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : et.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; u > i; i++)
                n[r++] = t[i];
            return n.length = r,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = ui(n), f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            return bi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return "string" == typeof t && (u = n[t],
            t = n,
            n = u),
            i.isFunction(n) ? (f = a.call(arguments, 2),
            r = function() {
                return n.apply(t || this, f.concat(a.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r) : void 0
        },
        now: Date.now,
        support: f
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function r(n, t, i, r) {
            var w, h, c, v, k, y, d, l, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t),
            t = t || e,
            i = i || [],
            !n || "string" != typeof n)
                return i;
            if (1 !== (v = t.nodeType) && 9 !== v)
                return [];
            if (a && !r) {
                if (w = sr.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c),
                            !h || !h.parentNode)
                                return i;
                            if (h.id === c)
                                return i.push(h),
                                i
                        } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c)
                            return i.push(h),
                            i
                    } else {
                        if (w[2])
                            return b.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(c)),
                            i
                    }
                if (u.qsa && (!o || !o.test(n))) {
                    if (l = d = f,
                    nt = t,
                    g = 9 === v && n,
                    1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = et(n),
                        (d = t.getAttribute("id")) ? l = d.replace(hr, "\\$&") : t.setAttribute("id", l),
                        l = "[id='" + l + "'] ",
                        k = y.length; k--; )
                            y[k] = l + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g)
                        try {
                            return b.apply(i, nt.querySelectorAll(g)),
                            i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return si(n.replace(at, "$1"), t, i, r)
        }
        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function h(n) {
            return n[f] = !0,
            n
        }
        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--; )
                t.attrHandle[u[r]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function tt(n) {
            return h(function(t) {
                return t = +t,
                h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }
        function bi() {}
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function ri(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                var s, h, c = [v, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}),
                            (s = h[r]) && s[0] === v && s[1] === e)
                                return c[2] = s[2];
                            if (h[r] = c,
                            c[2] = n(t, i, o))
                                return !0
                        }
            }
        }
        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function ar(n, t, i) {
            for (var u = 0, f = t.length; f > u; u++)
                r(n, t[u], i);
            return i
        }
        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)),
            u && !u[f] && (u = fi(u, e)),
            h(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || ar(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : pt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = pt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = pt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                return n === s
            }, c, !0), a = ri(function(n) {
                return nt.call(s, n) > -1
            }, c, !0), e = [function(n, t, i) {
                return !h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }
            ]; o > i; i++)
                if (u = t.relative[n[i].type])
                    e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }
        function vr(n, i) {
            var u = i.length > 0
              , f = n.length > 0
              , o = function(o, s, h, c, l) {
                var y, d, w, k = 0, a = "0", g = o && [], p = [], nt = ct, tt = o || f && t.find.TAG("*", l), it = v += null == nt ? 1 : Math.random() || .1, rt = tt.length;
                for (l && (ct = s !== e && s); a !== rt && null != (y = tt[a]); a++) {
                    if (f && y) {
                        for (d = 0; w = n[d++]; )
                            if (w(y, s, h)) {
                                c.push(y);
                                break
                            }
                        l && (v = it)
                    }
                    u && ((y = !w && y) && k--,
                    o && g.push(y))
                }
                if (k += a,
                u && a !== k) {
                    for (d = 0; w = i[d++]; )
                        w(g, p, s, h);
                    if (o) {
                        if (k > 0)
                            while (a--)
                                g[a] || p[a] || (p[a] = gi.call(c));
                        p = pt(p)
                    }
                    b.apply(c, p);
                    l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                }
                return l && (v = it,
                ct = nt),
                g
            };
            return u ? h(o) : o
        }
        var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date, s = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), li = ni(), bt = function(n, t) {
            return n === t && (rt = !0),
            0
        }, ut = "undefined", ai = -2147483648, di = {}.hasOwnProperty, w = [], gi = w.pop, nr = w.push, b = w.push, vi = w.slice, nt = w.indexOf || function(n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n)
                    return t;
            return -1
        }
        , kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", yi = ft.replace("w", "w#"), pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]", dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)", at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$","g"), tr = new RegExp("^" + i + "*," + i + "*"), ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]","g"), ur = new RegExp(dt), fr = new RegExp("^" + yi + "$"), vt = {
            ID: new RegExp("^#(" + ft + ")"),
            CLASS: new RegExp("^\\.(" + ft + ")"),
            TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + pi),
            PSEUDO: new RegExp("^" + dt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)","i"),
            bool: new RegExp("^(?:" + kt + ")$","i"),
            needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)","i")
        }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, st = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g, k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)","ig"), d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            b.apply(w = vi.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function(n, t) {
                    nr.apply(n, vi.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        oi = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ;
        p = r.setDocument = function(n) {
            var v, r = n ? n.ownerDocument || n : s, h = r.defaultView;
            return r !== e && 9 === r.nodeType && r.documentElement ? (e = r,
            l = r.documentElement,
            a = !oi(r),
            h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })),
            u.attributes = c(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            u.getElementsByTagName = c(function(n) {
                return n.appendChild(r.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }),
            u.getById = c(function(n) {
                return l.appendChild(n).id = f,
                !r.getElementsByName || !r.getElementsByName(f).length
            }),
            u.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && a) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            t.find.TAG = u.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ut)
                    return t.getElementsByTagName(n)
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = u.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ut && a)
                    return t.getElementsByClassName(n)
            }
            ,
            g = [],
            o = [],
            (u.qsa = st.test(r.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }),
            c(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function(n) {
                u.disconnectedMatch = lt.call(n, "div");
                lt.call(n, "[s!='']:x");
                g.push("!=", dt)
            }),
            o = o.length && new RegExp(o.join("|")),
            g = g.length && new RegExp(g.join("|")),
            v = st.test(l.compareDocumentPosition),
            ot = v || st.test(l.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            bt = v ? function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return rt = !0,
                    0;
                var i, u = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t];
                if (!o || !h)
                    return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h)
                    return wi(n, t);
                for (i = n; i = i.parentNode; )
                    f.unshift(i);
                for (i = t; i = i.parentNode; )
                    e.unshift(i);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
            }
            ,
            r) : e
        }
        ;
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n),
            t = t.replace(rr, "='$1']"),
            !(!u.matchesSelector || !a || g && g.test(t) || o && o.test(t)))
                try {
                    var i = lt.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (f) {}
            return r(t, e, null, [n]).length > 0
        }
        ;
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n),
            ot(n, t)
        }
        ;
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()]
              , r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : void 0;
            return void 0 !== r ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        r.uniqueSort = function(n) {
            var r, f = [], t = 0, i = 0;
            if (rt = !u.detectDuplicates,
            y = !u.sortStable && n.slice(0),
            n.sort(bt),
            rt) {
                while (r = n[i++])
                    r === n[i] && (t = f.push(i));
                while (t--)
                    n.splice(f[t], 1)
            }
            return y = null,
            n
        }
        ;
        ht = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += ht(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += ht(r);
            return i
        }
        ;
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(k, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return null == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild],
                            o && d) {
                                for (k = p[f] || (p[f] = {}),
                                a = k[n] || [],
                                y = a[0] === v && a[1],
                                l = a[0] === v && a[2],
                                c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [v, y, l];
                                        break
                                    }
                            } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
                                l = a[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--; )
                            r = nt.call(n, f[e]),
                            n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }
                    ) : u
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = []
                      , r = []
                      , t = wt(n.replace(at, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return fr.test(n || "") || r.error("unsupported lang: " + n),
                    n = n.replace(k, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === l
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[it] = cr(it);
        for (it in {
            submit: !0,
            reset: !0
        })
            t.pseudos[it] = lr(it);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        et = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (u = n,
            h = [],
            c = t.preFilter; u; ) {
                (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u),
                h.push(s = []));
                e = !1;
                (f = ir.exec(u)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                u = u.slice(e.length));
                for (o in t.filter)
                    (f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    u = u.slice(e.length));
                if (!e)
                    break
            }
            return i ? u.length : u ? r.error(n) : ci(n, h).slice(0)
        }
        ,
        wt = r.compile = function(n, t) {
            var r, u = [], e = [], i = li[n + " "];
            if (!i) {
                for (t || (t = et(n)),
                r = t.length; r--; )
                    i = ei(t[r]),
                    i[f] ? u.push(i) : e.push(i);
                i = li(n, vr(e, u));
                i.selector = n
            }
            return i
        }
        ,
        si = r.select = function(n, i, r, f) {
            var s, e, o, l, v, c = "function" == typeof n && n, h = !f && et(n = c.selector || n);
            if (r = r || [],
            1 === h.length) {
                if (e = h[0] = h[0].slice(0),
                e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && a && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0],
                    !i)
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s],
                    t.relative[l = o.type])
                        break;
                    if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1),
                        n = f.length && yt(e),
                        !n)
                            return b.apply(r, f),
                            r;
                        break
                    }
                }
            }
            return (c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i),
            r
        }
        ,
        u.sortStable = f.split("").sort(bt).join("") === f,
        u.detectDuplicates = !!rt,
        p(),
        u.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }),
        c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        u.attributes && c(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ti("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        c(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        r
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    var di = i.expr.match.needsContext
      , gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ef = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, u = this.length, r = [], f = this;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (t = 0; u > t; t++)
                i.find(n, f[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        is: function(n) {
            return !!fi(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length
        }
    });
    nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    tr = i.fn.init = function(n, t) {
        var r, f;
        if (!n)
            return this;
        if ("string" == typeof n) {
            if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                gi.test(r[1]) && i.isPlainObject(t))
                    for (r in t)
                        i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return f = u.getElementById(r[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = u,
            this.selector = n,
            this
        }
        return n.nodeType ? (this.context = this[0] = n,
        this.length = 1,
        this) : i.isFunction(n) ? "undefined" != typeof st.ready ? st.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector,
        this.context = n.context),
        i.makeArray(n, this))
    }
    ;
    tr.prototype = i.fn;
    st = i(u);
    ir = /^(?:parents|prev(?:Until|All))/;
    rr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
                if (1 === n.nodeType) {
                    if (f && i(n).is(r))
                        break;
                    u.push(n)
                }
            return u
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t = i(n, this)
              , r = t.length;
            return this.filter(function() {
                for (var n = 0; r > n; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ur(n, "nextSibling")
        },
        prev: function(n) {
            return ur(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (rr[n] || i.unique(f),
            ir.test(n) && f.reverse()),
            this.pushStack(f)
        }
    });
    c = /\S+/g;
    ei = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ei[n] || of(n) : i.extend({}, n);
        var u, h, o, c, f, e, t = [], r = !n.once && [], l = function(i) {
            for (u = n.memory && i,
            h = !0,
            e = c || 0,
            c = 0,
            f = t.length,
            o = !0; t && f > e; e++)
                if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                    u = !1;
                    break
                }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        }, s = {
            add: function() {
                if (t) {
                    var r = t.length;
                    !function e(r) {
                        i.each(r, function(r, u) {
                            var f = i.type(u);
                            "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                        })
                    }(arguments);
                    o ? f = t.length : u && (c = r,
                    l(u))
                }
                return this
            },
            remove: function() {
                return t && i.each(arguments, function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1; )
                        t.splice(u, 1),
                        o && (f >= u && f--,
                        e >= u && e--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
            },
            empty: function() {
                return t = [],
                f = 0,
                this
            },
            disable: function() {
                return t = r = u = void 0,
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return r = void 0,
                u || s.disable(),
                this
            },
            locked: function() {
                return !r
            },
            fireWith: function(n, i) {
                return !t || h && !r || (i = i || [],
                i = [n, i.slice ? i.slice() : i],
                o ? r.push(i) : l(i)),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!h
            }
        };
        return s
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = a.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? a.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = new Array(r),
                c = new Array(r),
                s = new Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0,
            n !== !0 && --i.readyWait > 0 || (ht.resolveWith(u, [i]),
            i.fn.triggerHandler && (i(u).triggerHandler("ready"),
            i(u).off("ready"))))
        }
    });
    i.ready.promise = function(t) {
        return ht || (ht = i.Deferred(),
        "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ct, !1),
        n.addEventListener("load", ct, !1))),
        ht.promise(t)
    }
    ;
    i.ready.promise();
    l = i.access = function(n, t, r, u, f, e, o) {
        var s = 0
          , c = n.length
          , h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r)
                i.access(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0,
        i.isFunction(u) || (o = !0),
        h && (o ? (t.call(n, u),
        t = null) : (h = t,
        t = function(n, t, r) {
            return h.call(i(n), r)
        }
        )),
        t))
            for (; c > s; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    }
    ;
    i.acceptData = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    }
    ;
    p.uid = 1;
    p.accepts = i.acceptData;
    p.prototype = {
        key: function(n) {
            if (!p.accepts(n))
                return 0;
            var r = {}
              , t = n[this.expando];
            if (!t) {
                t = p.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}),
            t
        },
        set: function(n, t, r) {
            var f, e = this.key(n), u = this.cache[e];
            if ("string" == typeof t)
                u[t] = r;
            else if (i.isEmptyObject(u))
                i.extend(this.cache[e], t);
            else
                for (f in t)
                    u[f] = t[f];
            return u
        },
        get: function(n, t) {
            var i = this.cache[this.key(n)];
            return void 0 === t ? i : i[t]
        },
        access: function(n, t, r) {
            var u;
            return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t),
            void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r),
            void 0 !== r ? r : t)
        },
        remove: function(n, t) {
            var u, r, f, o = this.key(n), e = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else
                for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t),
                (t in e) ? r = [t, f] : (r = f,
                r = (r in e) ? [r] : r.match(c) || [])),
                u = r.length; u--; )
                    delete e[r[u]]
        },
        hasData: function(n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function(n) {
            n[this.expando] && delete this.cache[n[this.expando]]
        }
    };
    var r = new p
      , e = new p
      , sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , hf = /([A-Z])/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0], h = u && u.attributes;
            if (void 0 === n) {
                if (this.length && (s = e.get(u),
                1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--; )
                        h[o] && (f = h[o].name,
                        0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)),
                        fr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function() {
                e.set(this, n)
            }) : l(this, function(t) {
                var r, f = i.camelCase(n);
                if (u && void 0 === t) {
                    if ((r = e.get(u, n),
                    void 0 !== r) || (r = e.get(u, f),
                    void 0 !== r) || (r = fr(u, f, void 0),
                    void 0 !== r))
                        return r
                } else
                    this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        -1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return (t = (t || "fx") + "queue",
                f = r.get(n, t),
                u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
                f || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; s--; )
                u = r.get(f[s], n + "queueHooks"),
                u && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(t)
        }
    });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , w = ["Top", "Right", "Bottom", "Left"]
      , it = function(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
      , er = /^(?:checkbox|radio)$/i;
    !function() {
        var i = u.createDocumentFragment()
          , n = i.appendChild(u.createElement("div"))
          , t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    d = "undefined";
    f.focusinBubbles = "onfocusin"in n;
    var cf = /^key/
      , lf = /^(?:mouse|pointer|contextmenu)|click/
      , or = /^(?:focusinfocus|focusoutblur)$/
      , sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
            if (a)
                for (u.handler && (v = u,
                u = v.handler,
                e = v.selector),
                u.guid || (u.guid = i.guid++),
                (p = a.events) || (p = a.events = {}),
                (y = a.handle) || (y = a.handle = function(t) {
                    if (typeof i !== d && i.event.triggered !== t.type)
                        return i.event.dispatch.apply(n, arguments)
                }
                ),
                t = (t || "").match(c) || [""],
                b = t.length; b--; )
                    w = sr.exec(t[b]) || [],
                    o = g = w[1],
                    k = (w[2] || "").split(".").sort(),
                    o && (s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    h = i.extend({
                        type: o,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v),
                    (l = p[o]) || (l = p[o] = [],
                    l.delegateCount = 0,
                    s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)),
                    s.add && (s.add.call(n, h),
                    h.handler.guid || (h.handler.guid = u.guid)),
                    e ? l.splice(l.delegateCount++, 0, h) : l.push(h),
                    i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "").match(c) || [""],
                w = t.length; w--; )
                    if (h = sr.exec(t[w]) || [],
                    o = d = h[1],
                    b = (h[2] || "").split(".").sort(),
                    o) {
                        for (l = i.event.special[o] || {},
                        o = (f ? l.delegateType : l.bindType) || o,
                        a = v[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        k = p = a.length; p--; )
                            s = a[p],
                            !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1),
                            s.selector && a.delegateCount--,
                            l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle),
                        delete v[o])
                    } else
                        for (o in v)
                            i.event.remove(n, o + t[w], u, f, !0);
                i.isEmptyObject(v) && (delete y.handle,
                r.remove(n, "events"))
            }
        },
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u], h = ri.call(t, "type") ? t.type : t, y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = e = e || u,
            3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."),
            h = y.shift(),
            y.sort()),
            a = h.indexOf(":") < 0 && "on" + h,
            t = t[i.expando] ? t : new i.Event(h,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = y.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = e),
            f = null == f ? [t] : i.makeArray(f, [t]),
            l = i.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h,
                    or.test(b + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0; (s = p[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? b : l.bindType || h,
                    v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"),
                    v && v.apply(s, f),
                    v = a && s[a],
                    v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f),
                    t.result === !1 && t.preventDefault());
                return t.type = h,
                o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a],
                c && (e[a] = null),
                i.event.triggered = h,
                e[h](),
                i.event.triggered = void 0,
                c && (e[a] = c)),
                t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, s, e, u, t, h = [], c = a.call(arguments), l = (r.get(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
            if (c[0] = n,
            n.delegateTarget = this,
            !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, l),
                o = 0; (u = h[o++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = u.elem,
                    s = 0; (t = u.handlers[s++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t,
                        n.data = t.data,
                        e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c),
                        void 0 !== e && (n.result = e) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r !== this; r = r.parentNode || this)
                    if (r.disabled !== !0 || "click" !== n.type) {
                        for (u = [],
                        e = 0; s > e; e++)
                            o = t[e],
                            f = o.selector + " ",
                            void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length),
                            u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var e, i, r, f = t.button;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u,
                i = e.documentElement,
                r = e.body,
                n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var f, e, o, r = n.type, s = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}),
            o = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(s),
            f = o.length; f--; )
                e = o[f],
                n[e] = s[e];
            return n.target || (n.target = u),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            t.filter ? t.filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== hr() && this.focus)
                        return (this.focus(),
                        !1)
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === hr() && this.blur)
                        return (this.blur(),
                        !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))
                        return (this.click(),
                        !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    ;
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? at : g) : this.type = n,
        t && i.extend(this, t),
        this.timeStamp = n && n.timeStamp || i.now(),
        void (this[i.expando] = !0)) : new i.Event(n,t)
    }
    ;
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = at;
            n && n.preventDefault && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = at;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = at;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    f.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
                r.remove(i, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var e, o;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t,
                t = void 0);
                for (o in n)
                    this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t,
            r = t = void 0) : null == u && ("string" == typeof t ? (u = r,
            r = void 0) : (u = r,
            r = t,
            t = void 0)),
            u === !1)
                u = g;
            else if (!u)
                return this;
            return 1 === f && (e = u,
            u = function(n) {
                return i().off(n),
                e.apply(this, arguments)
            }
            ,
            u.guid = e.guid || (e.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t,
            t = void 0),
            r === !1 && (r = g),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , lr = /<([\w:]+)/
      , af = /<|&#?\w+;/
      , vf = /<(?:script|style|link)/i
      , yf = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ar = /^$|\/(?:java|ecma)script/i
      , pf = /^true\/(.*)/
      , wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , h = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h),
                s = o(n),
                u = 0,
                c = s.length; c > u; u++)
                    df(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n),
                    e = e || o(h),
                    u = 0,
                    c = s.length; c > u; u++)
                        yr(s[u], e[u]);
                else
                    yr(n, h);
            return e = o(h, "script"),
            e.length > 0 && oi(e, !l && o(n, "script")),
            h
        },
        buildFragment: function(n, t, r, u) {
            for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
                if (f = n[c],
                f || 0 === f)
                    if ("object" === i.type(f))
                        i.merge(v, f.nodeType ? [f] : f);
                    else if (af.test(f)) {
                        for (e = e || s.appendChild(t.createElement("div")),
                        y = (lr.exec(f) || ["", ""])[1].toLowerCase(),
                        l = h[y] || h._default,
                        e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2],
                        a = l[0]; a--; )
                            e = e.lastChild;
                        i.merge(v, e.childNodes);
                        e = s.firstChild;
                        e.textContent = ""
                    } else
                        v.push(t.createTextNode(f));
            for (s.textContent = "",
            c = 0; f = v[c++]; )
                if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f),
                e = o(s.appendChild(f), "script"),
                p && oi(e),
                r))
                    for (a = 0; f = e[a++]; )
                        ar.test(f.type || "") && r.push(f);
            return s
        },
        cleanData: function(n) {
            for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) {
                if (i.acceptData(t) && (u = t[r.expando],
                u && (f = r.cache[u]))) {
                    if (f.events)
                        for (o in f.events)
                            h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                    r.cache[u] && delete r.cache[u]
                }
                delete e.cache[t[e.expando]]
            }
        }
    });
    i.fn.extend({
        text: function(n) {
            return l(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = vr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = vr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++)
                t || 1 !== r.nodeType || i.cleanData(o(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++)
                1 === n.nodeType && (i.cleanData(o(n, !1)),
                n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return l(this, function(n) {
                var t = this[0] || {}
                  , r = 0
                  , u = this.length;
                if (void 0 === n && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(cr, "<$1><\/$2>");
                    try {
                        for (; u > r; r++)
                            t = this[r] || {},
                            1 === t.nodeType && (i.cleanData(o(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(o(this));
                n && n.replaceChild(t, this)
            }),
            n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = bi.apply([], n);
            var h, v, s, c, u, y, e = 0, l = this.length, w = this, b = l - 1, a = n[0], p = i.isFunction(a);
            if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a))
                return this.each(function(i) {
                    var r = w.eq(i);
                    p && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this),
            v = h.firstChild,
            1 === h.childNodes.length && (h = v),
            v)) {
                for (s = i.map(o(h, "script"), bf),
                c = s.length; l > e; e++)
                    u = h,
                    e !== b && (u = i.clone(u, !0, !0),
                    c && i.merge(s, o(u, "script"))),
                    t.call(this[e], u, e);
                if (c)
                    for (y = s[s.length - 1].ownerDocument,
                    i.map(s, kf),
                    e = 0; c > e; e++)
                        u = s[e],
                        ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    si = {};
    var wr = /^margin/
      , ci = new RegExp("^(" + lt + ")(?!px)[a-z%]+$","i")
      , yt = function(n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    };
    !function() {
        var s, o, e = u.documentElement, r = u.createElement("div"), t = u.createElement("div");
        if (t.style) {
            t.style.backgroundClip = "content-box";
            t.cloneNode(!0).style.backgroundClip = "";
            f.clearCloneStyle = "content-box" === t.style.backgroundClip;
            r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            r.appendChild(t);
            function h() {
                t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                t.innerHTML = "";
                e.appendChild(r);
                var i = n.getComputedStyle(t, null);
                s = "1%" !== i.top;
                o = "4px" === i.width;
                e.removeChild(r)
            }
            n.getComputedStyle && i.extend(f, {
                pixelPosition: function() {
                    return h(),
                    s
                },
                boxSizingReliable: function() {
                    return null == o && h(),
                    o
                },
                reliableMarginRight: function() {
                    var f, i = t.appendChild(u.createElement("div"));
                    return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    i.style.marginRight = i.style.width = "0",
                    t.style.width = "1px",
                    e.appendChild(r),
                    f = !parseFloat(n.getComputedStyle(i, null).marginRight),
                    e.removeChild(r),
                    f
                }
            })
        }
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
    ;
    var gf = /^(none|table(?!-c[ea]).+)/
      , ne = new RegExp("^(" + lt + ")(.*)$","i")
      , te = new RegExp("^([+-])=(" + lt + ")","i")
      , ie = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , kr = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = rt(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, h, e, s = i.camelCase(t), c = n.style;
                return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)),
                e = i.cssHooks[t] || i.cssHooks[s],
                void 0 === r ? e && "get"in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r,
                "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)),
                h = "number"),
                null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"),
                f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                e && "set"in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)),
                void 0)
            }
        },
        css: function(n, t, r, u) {
            var f, s, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)),
            e = i.cssHooks[t] || i.cssHooks[o],
            e && "get"in e && (f = e.get(n, !0, r)),
            void 0 === f && (f = rt(n, t, u)),
            "normal" === f && t in kr && (f = kr[t]),
            "" === r || r ? (s = parseFloat(f),
            r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function() {
                        return iu(n, t, u)
                    }) : iu(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && yt(n);
                return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) {
        if (t)
            return i.swap(n, {
                display: "inline-block"
            }, rt, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        wr.test(n) || (i.cssHooks[n + t].set = nu)
    });
    i.fn.extend({
        css: function(n, t) {
            return l(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = yt(n),
                    e = t.length; e > u; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return ru(this, !0)
        },
        hide: function() {
            return ru(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                it(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = s.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : s.propHooks._default.set(this),
            this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    var nt, pt, re = /^(?:toggle|show|hide)$/, uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$","i"), ue = /queueHooks$/, wt = [fe], ut = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , r = uu.exec(t)
              , e = r && r[3] || (i.cssNumber[n] ? "" : "px")
              , u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n))
              , o = 1
              , h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do
                    o = o || ".5",
                    u /= o,
                    i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0,
            f.unit = e,
            f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(ou, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                ut[r] = ut[r] || [],
                ut[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(it).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n)
              , o = i.speed(t, u, f)
              , e = function() {
                var t = ou(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e,
            s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t,
            t = n,
            n = void 0),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var s = !0
                  , t = null != n && n + "queueHooks"
                  , o = i.timers
                  , e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && ue.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u),
                    s = !1,
                    o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0,
                i.queue(this, n, []),
                o && o.stop && o.stop.call(this, !0),
                t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
                    f.splice(t, 1));
                for (t = 0; s > t; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0, t = i.timers;
        for (nt = i.now(); n < t.length; n++)
            r = t[n],
            r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        nt = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        clearInterval(pt);
        pt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n,
        t = t || "fx",
        this.queue(t, function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var n = u.createElement("input")
          , t = u.createElement("select")
          , i = t.appendChild(u.createElement("option"));
        n.type = "checkbox";
        f.checkOn = "" !== n.value;
        f.optSelected = i.selected;
        t.disabled = !0;
        f.optDisabled = !i.disabled;
        n = u.createElement("input");
        n.value = "t";
        n.type = "radio";
        f.radioValue = "t" === n.value
    }();
    tt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return l(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return typeof n.getAttribute === d ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(),
                u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)),
                void 0 === r ? u && "get"in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t),
                null == f ? void 0 : f) : null !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
                r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(c);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) && (n[u] = !1),
                    n.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            }
        }
    });
    su = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r),
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = tt[t] || i.find.attr;
        tt[t] = function(n, t, i) {
            var u, f;
            return i || (f = tt[t],
            tt[t] = u,
            u = null != r(n, t, i) ? t.toLowerCase() : null,
            tt[t] = f),
            u
        }
    });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return l(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return o = 1 !== e || !i.isXMLDoc(n),
                o && (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
                }
            }
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    kt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, h = "string" == typeof n && n, e = 0, l = this.length;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : " ")) {
                        for (s = 0; u = o[s++]; )
                            r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n, e = 0, l = this.length;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : "")) {
                        for (s = 0; u = o[s++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }
            : function() {
                if ("string" === u)
                    for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++]; )
                        f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else
                    (u === d || "boolean" === u) && (this.className && r.set(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    });
    cu = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n,
                null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value,
            "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                        if (t = s[e],
                        !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            u)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        r = f[o],
                        (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1),
                    e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    dt = i.now();
    gt = /\?/;
    i.parseJSON = function(n) {
        return JSON.parse(n + "")
    }
    ;
    i.parseXML = function(n) {
        var t, r;
        if (!n || "string" != typeof n)
            return null;
        try {
            r = new DOMParser;
            t = r.parseFromString(n, "text/xml")
        } catch (u) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n),
        t
    }
    ;
    var b, v, se = /#.*$/, lu = /([?&])_=[^&]*/, he = /^(.*?):[ \t]*([^\r\n]*)$/gm, ce = /^(?:GET|HEAD)$/, le = /^\/\//, au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, vu = {}, li = {}, yu = "*/".concat("*");
    try {
        v = location.href
    } catch (ge) {
        v = u.createElement("a");
        v.href = "";
        v = v.href
    }
    b = au.exec(v.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: v,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
        },
        ajaxPrefilter: pu(vu),
        ajaxTransport: pu(li),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, b, y, w, c = t;
                2 !== e && (e = 2,
                d && clearTimeout(d),
                l = void 0,
                k = h || "",
                u.readyState = n > 0 ? 4 : 0,
                v = n >= 200 && 300 > n || 304 === n,
                s && (y = ae(r, u, s)),
                y = ve(r, y, u, v),
                v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"),
                w && (i.lastModified[f] = w),
                w = u.getResponseHeader("etag"),
                w && (i.etag[f] = w)),
                204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state,
                it = y.data,
                b = y.error,
                v = !b)) : (b = c,
                (n || !c) && (c = "error",
                0 > n && (n = 0))),
                u.status = n,
                u.statusText = (t || c) + "",
                v ? nt.resolveWith(o, [it, c, u]) : nt.rejectWith(o, [u, c, b]),
                u.statusCode(p),
                p = void 0,
                a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]),
                tt.fireWith(o, [u, c]),
                a && (g.trigger("ajaxComplete", [u, r]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n,
            n = void 0);
            t = t || {};
            var l, f, k, y, d, s, a, h, r = i.ajaxSetup({}, t), o = r.context || r, g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, nt = i.Deferred(), tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === e) {
                        if (!y)
                            for (y = {}; t = he.exec(k); )
                                y[t[1].toLowerCase()] = t[2];
                        t = y[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === e ? k : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return e || (n = rt[i] = rt[i] || n,
                    it[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return e || (r.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (2 > e)
                            for (t in n)
                                p[t] = [p[t], n[t]];
                        else
                            u.always(n[u.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ut;
                    return l && l.abort(t),
                    w(0, t),
                    this
                }
            };
            if (nt.promise(u).complete = tt.add,
            u.success = u.done,
            u.error = u.fail,
            r.url = ((n || r.url || v) + "").replace(se, "").replace(le, b[1] + "//"),
            r.type = t.method || t.type || r.method || r.type,
            r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""],
            null == r.crossDomain && (s = au.exec(r.url.toLowerCase()),
            r.crossDomain = !(!s || s[1] === b[1] && s[2] === b[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (b[3] || ("http:" === b[1] ? "80" : "443")))),
            r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)),
            wu(vu, r, t, u),
            2 === e)
                return u;
            a = r.global;
            a && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !ce.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (gt.test(f) ? "&" : "?") + r.data,
            delete r.data),
            r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]),
            i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
            for (h in r.headers)
                u.setRequestHeader(h, r.headers[h]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e))
                return u.abort();
            ut = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            })
                u[h](r[h]);
            if (l = wu(li, r, t, u)) {
                u.readyState = 1;
                a && g.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (d = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    l.send(it, w)
                } catch (ft) {
                    if (!(2 > e))
                        throw ft;
                    w(-1, ft)
                }
            } else
                w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u,
            u = r,
            r = void 0),
            i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ;
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this)
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            }
            : function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            }
            )
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0
    }
    ;
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ;
    var ye = /%20/g
      , pe = /\[\]$/
      , bu = /\r?\n/g
      , we = /^(?:submit|button|image|reset|file)$/i
      , be = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [], f = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                vi(r, n[r], t, f);
        return u.join("&").replace(ye, "+")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bu, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (n) {}
    }
    ;
    var ke = 0
      , ni = {}
      , de = {
        0: 200,
        1223: 204
    }
      , ft = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function() {
        for (var n in ni)
            ni[n]()
    }),
    f.cors = !!ft && "withCredentials"in ft,
    f.ajax = ft = !!ft,
    i.ajaxTransport(function(n) {
        var t;
        if (f.cors || ft && !n.crossDomain)
            return {
                send: function(i, r) {
                    var f, u = n.xhr(), e = ++ke;
                    if (u.open(n.type, n.url, n.async, n.username, n.password),
                    n.xhrFields)
                        for (f in n.xhrFields)
                            u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (f in i)
                        u.setRequestHeader(f, i[f]);
                    t = function(n) {
                        return function() {
                            t && (delete ni[e],
                            t = u.onload = u.onerror = null,
                            "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? {
                                text: u.responseText
                            } : void 0, u.getAllResponseHeaders()))
                        }
                    }
                    ;
                    u.onload = t();
                    u.onerror = t("error");
                    t = ni[e] = t("abort");
                    try {
                        u.send(n.hasContent && n.data || null)
                    } catch (o) {
                        if (t)
                            throw o;
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    }
                    );
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }),
    yi = [],
    ti = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = yi.pop() || i.expando + "_" + dt++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            t.converters["script json"] = function() {
                return e || i.error(f + " was not called"),
                e[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[f],
            n[f] = function() {
                e = arguments
            }
            ,
            u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback,
                yi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }),
            "script")
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n)
            return null;
        "boolean" == typeof t && (r = t,
        t = !1);
        t = t || u;
        var f = gi.exec(n)
          , e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
        e && e.length && i(e).remove(),
        i.merge([], f.childNodes))
    }
    ,
    pi = i.fn.load,
    i.fn.load = function(n, t, r) {
        if ("string" != typeof n && pi)
            return pi.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e)),
        n = n.slice(0, e)),
        i.isFunction(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, s || [n.responseText, t, n])
        }
        ),
        this
    }
    ,
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    wi = n.document.documentElement,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(),
            h = e.top,
            o = e.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using"in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, f, t = this[0], u = {
                top: 0,
                left: 0
            }, e = t && t.ownerDocument;
            if (e)
                return r = e.documentElement,
                i.contains(r, t) ? (typeof t.getBoundingClientRect !== d && (u = t.getBoundingClientRect()),
                f = ku(e),
                {
                    top: u.top + f.pageYOffset - r.clientTop,
                    left: u.left + f.pageXOffset - r.clientLeft
                }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, u = this[0], t = {
                    top: 0,
                    left: 0
                };
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || wi
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var u = "pageYOffset" === r;
        i.fn[t] = function(i) {
            return l(this, function(t, i, f) {
                var e = ku(t);
                return void 0 === f ? e ? e[r] : t[i] : void (e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f)
            }, t, i, arguments.length, null)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = br(f.pixelPosition, function(n, r) {
            if (r)
                return (r = rt(n, t),
                ci.test(r) ? i(n).position()[t] + "px" : r)
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u)
                  , o = r || (u === !0 || f === !0 ? "margin" : "border");
                return l(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement,
                    Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    du = n.jQuery,
    gu = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = gu),
        t && n.jQuery === i && (n.jQuery = du),
        i
    }
    ,
    typeof t === d && (n.jQuery = n.$ = i),
    i
}),
function(n) {
    "use strict";
    function o() {
        f = n(window);
        t = {};
        u = {};
        r = {};
        n.each([t, u, r], function(n, t) {
            t.add = function(n) {
                n = n.split(" ");
                for (var i = 0, r = n.length; i < r; i++)
                    t[n[i]] = t.ddd(n[i])
            }
        });
        t.ddd = function(n) {
            return "ddd-" + n
        }
        ;
        t.add("truncated keep text");
        u.ddd = function(n) {
            return "ddd-" + n
        }
        ;
        u.add("text");
        r.ddd = function(n) {
            return n + ".ddd"
        }
        ;
        r.add("resize");
        o = function() {}
    }
    var i = "dotdotdot", e = "3.0.5", t, u, r, f;
    n[i] && n[i].version > e || (n[i] = function(n, t) {
        this.$dot = n;
        this.api = ["getInstance", "truncate", "restore", "destroy", "watch", "unwatch"];
        this.opts = t;
        var r = this.$dot.data(i);
        return r && r.destroy(),
        this.init(),
        this.truncate(),
        this.opts.watch && this.watch(),
        this
    }
    ,
    n[i].version = e,
    n[i].uniqueId = 0,
    n[i].defaults = {
        ellipsis: "… ",
        truncate: "word",
        tolerance: 0,
        keep: null,
        watch: "window"
    },
    n[i].prototype = {
        init: function() {
            this.watchTimeout = null;
            this.watchInterval = null;
            this.uniqueId = n[i].uniqueId++;
            this.originalContent = this.$dot.contents();
            this.originalStyle = this.$dot.attr("style") || "";
            this.maxHeight = this._getMaxHeight() + this.opts.tolerance;
            this.$dot.css("word-wrap") !== "break-word" && this.$dot.css("word-wrap", "break-word");
            this.$dot.css("white-space") === "nowrap" && this.$dot.css("white-space", "normal")
        },
        getInstance: function() {
            return this
        },
        truncate: function() {
            var r = this, i;
            return this.$inner = this.$dot.wrapInner("<div />").children().css({
                display: "block",
                height: "auto",
                width: "auto",
                border: "none",
                padding: 0,
                margin: 0
            }),
            this.$inner.contents().detach().end().append(this.originalContent.clone(!0)),
            this.$inner.find("script, style").addClass(t.keep),
            this.opts.keep && this.$inner.find(this.opts.keep).addClass(t.keep),
            this.$inner.find("*").not("." + t.keep).add(this.$inner).contents().each(function() {
                var u = this, i = n(this), f;
                if (u.nodeType == 3) {
                    if (i.prev().is("table, thead, tfoot, tr, th, td, dl, dt, dd, ul, ol, li, video")) {
                        i.remove();
                        return
                    }
                    i.parent().contents().length > 1 && (f = n('<span class="' + t.text + '">' + r.__getTextContent(u) + "<\/span>").css({
                        display: "inline",
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    }),
                    i.replaceWith(f))
                } else
                    u.nodeType == 8 && i.remove()
            }),
            i = this._truncateNode(this.$dot),
            this.$dot[i ? "addClass" : "removeClass"](t.truncated),
            this.$inner.find("." + t.text).each(function() {
                n(this).replaceWith(n(this).contents())
            }),
            this.$inner.find("." + t.keep).removeClass(t.keep),
            this.$inner.replaceWith(this.$inner.contents()),
            this.$inner = null,
            i
        },
        restore: function() {
            this.unwatch();
            this.$dot.contents().detach().end().append(this.originalContent).attr("style", this.originalStyle).removeClass(t.truncated)
        },
        destroy: function() {
            this.restore();
            this.$dot.data(i, null)
        },
        watch: function() {
            var n = this, t;
            if (this.unwatch(),
            t = {},
            this.opts.watch == "window")
                f.on(r.resize + n.uniqueId, function() {
                    n.watchTimeout && clearTimeout(n.watchTimeout);
                    n.watchTimeout = setTimeout(function() {
                        t = n._watchSizes(t, f, "width", "height")
                    }, 100)
                });
            else
                this.watchInterval = setInterval(function() {
                    t = n._watchSizes(t, n.$dot, "innerWidth", "innerHeight")
                }, 500)
        },
        unwatch: function() {
            f.off(r.resize + this.uniqueId);
            this.watchInterval && clearInterval(this.watchInterval);
            this.watchTimeout && clearTimeout(this.watchTimeout)
        },
        _api: function() {
            var i = this
              , t = {};
            return n.each(this.api, function() {
                var n = this;
                t[n] = function() {
                    var r = i[n].apply(i, arguments);
                    return typeof r == "undefined" ? t : r
                }
            }),
            t
        },
        _truncateNode: function(i) {
            var r = this
              , u = !1
              , f = !1;
            return n(i.children().get().reverse()).not("." + t.keep).each(function() {
                var o = n(this).contents()[0], i = n(this), e;
                if (!u && !i.hasClass(t.keep)) {
                    if (i.children().length)
                        u = r._truncateNode(i);
                    else if (!r._fits() || f)
                        if (e = n("<span>").css("display", "none"),
                        i.replaceWith(e),
                        i.detach(),
                        r._fits()) {
                            if (r.opts.truncate == "node")
                                return !0;
                            e.replaceWith(i);
                            u = r._truncateWord(i);
                            u || (f = !0,
                            i.detach())
                        } else
                            e.remove();
                    i.contents().length || i.remove()
                }
            }),
            u
        },
        _truncateWord: function(n) {
            var i = n.contents()[0], r;
            if (!i)
                return !1;
            var t = this
              , o = this.__getTextContent(i)
              , u = o.indexOf(" ") !== -1 ? " " : "　"
              , f = o.split(u)
              , e = "";
            for (r = f.length; r >= 0; r--) {
                if (e = f.slice(0, r).join(u),
                r == 0)
                    return t.opts.truncate == "letter" ? (t.__setTextContent(i, f.slice(0, r + 1).join(u)),
                    t._truncateLetter(i)) : !1;
                if (e.length && (t.__setTextContent(i, t._addEllipsis(e)),
                t._fits()))
                    return t.opts.truncate == "letter" ? (t.__setTextContent(i, f.slice(0, r + 1).join(u)),
                    t._truncateLetter(i)) : !0
            }
            return !1
        },
        _truncateLetter: function(n) {
            for (var i = this, f = this.__getTextContent(n), u = f.split(""), r = "", t = u.length; t >= 0; t--)
                if ((r = u.slice(0, t).join(""),
                r.length) && (i.__setTextContent(n, i._addEllipsis(r)),
                i._fits()))
                    return !0;
            return !1
        },
        _fits: function() {
            return this.$inner.innerHeight() <= this.maxHeight
        },
        _addEllipsis: function(t) {
            for (var i = [" ", "　", ",", ";", ".", "!", "?"]; n.inArray(t.slice(-1), i) > -1; )
                t = t.slice(0, -1);
            return t + this.opts.ellipsis
        },
        _getMaxHeight: function() {
            for (var t = ["height", "maxHeight"], r = 0, i, u, n = 0; n < t.length; n++)
                i = window.getComputedStyle(this.$dot[0])[t[n]],
                i.slice(-2) == "px" && (i = parseFloat(i),
                r = r ? Math.min(r, i) : i);
            switch (this.$dot.css("boxSizing")) {
            case "padding-box":
            case "border-box":
                for (t = ["paddingTop", "paddingBottom"],
                n = 0; n < t.length; n++)
                    u = window.getComputedStyle(this.$dot[0])[t[n]],
                    u.slice(-2) == "px" && (r -= parseFloat(u))
            }
            return Math.max(r, 0)
        },
        _watchSizes: function(n, t, i, r) {
            if (this.$dot.is(":visible")) {
                var u = {
                    width: t[i](),
                    height: t[r]()
                };
                return (n.width != u.width || n.height != u.height) && this.truncate(),
                u
            }
            return n
        },
        __getTextContent: function(n) {
            for (var i = ["nodeValue", "textContent", "innerText"], t = 0; t < i.length; t++)
                if (typeof n[i[t]] == "string")
                    return n[i[t]];
            return ""
        },
        __setTextContent: function(n, t) {
            for (var r = ["nodeValue", "textContent", "innerText"], i = 0; i < r.length; i++)
                n[r[i]] = t
        }
    },
    n.fn[i] = function(t) {
        return o(),
        t = n.extend(!0, {}, n[i].defaults, t),
        this.each(function() {
            n(this).data(i, new n[i](n(this),t)._api())
        })
    }
    )
}(jQuery),
function(n) {
    function i(i) {
        var r = n(".roller-title-number-" + i).attr("data-min")
          , u = n(".roller-title-number-" + i).attr("data-max")
          , f = n(".roller-title-number-" + i).attr("data-delay")
          , e = n(".roller-title-number-" + i).attr("data-increment")
          , o = u - r
          , s = f * 1e3 / o;
        t(i, r, u, e, s)
    }
    function t(i, r, u, f, e) {
        r <= u ? (n(".roller-title-number-" + i).html(r),
        r = parseInt(r) + parseInt(f),
        setTimeout(function() {
            t(eval(i), eval(r), eval(u), eval(f), eval(e))
        }, e)) : n(".roller-title-number-" + i).html(u)
    }
    n(window).on("load", function() {
        n(document).scrollzipInit();
        n(document).rollerInit()
    });
    n(window).on("load scroll resize", function() {
        n(".numscroller").scrollzip({
            showFunction: function() {
                i(n(this).attr("data-slno"))
            },
            wholeVisible: !1
        })
    });
    n.fn.scrollzipInit = function() {
        n("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'><\/div>")
    }
    ;
    n.fn.rollerInit = function() {
        var t = 0;
        n(".numscroller").each(function() {
            t++;
            n(this).attr("data-slno", t);
            n(this).addClass("roller-title-number-" + t)
        })
    }
    ;
    n.fn.scrollzip = function(t) {
        var i = n.extend({
            showFunction: null,
            hideFunction: null,
            showShift: 0,
            wholeVisible: !1,
            hideShift: 0
        }, t);
        return this.each(function() {
            return n(this).addClass("scrollzip"),
            n.isFunction(i.showFunction) && !n(this).hasClass("isShown") && n(window).outerHeight() + n("#scrollzipPoint").offset().top - i.showShift > n(this).offset().top + (i.wholeVisible ? n(this).outerHeight() : 0) && n("#scrollzipPoint").offset().top + (i.wholeVisible ? n(this).outerHeight() : 0) < n(this).outerHeight() + n(this).offset().top - i.showShift && (n(this).addClass("isShown"),
            i.showFunction.call(this)),
            n.isFunction(i.hideFunction) && n(this).hasClass("isShown") && (n(window).outerHeight() + n("#scrollzipPoint").offset().top - i.hideShift < n(this).offset().top + (i.wholeVisible ? n(this).outerHeight() : 0) || n("#scrollzipPoint").offset().top + (i.wholeVisible ? n(this).outerHeight() : 0) > n(this).outerHeight() + n(this).offset().top - i.hideShift) && (n(this).removeClass("isShown"),
            i.hideFunction.call(this)),
            this
        })
    }
}(jQuery),
function() {
    var n, f, i, r, u, t = function(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    }, e = [].indexOf || function(n) {
        for (var t = 0, i = this.length; i > t; t++)
            if (t in this && this[t] === n)
                return t;
        return -1
    }
    ;
    f = function() {
        function n() {}
        return n.prototype.extend = function(n, t) {
            var i, r;
            for (i in t)
                r = t[i],
                null == n[i] && (n[i] = r);
            return n
        }
        ,
        n.prototype.isMobile = function(n) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
        }
        ,
        n.prototype.createEvent = function(n, t, i, r) {
            var u;
            return null == t && (t = !1),
            null == i && (i = !1),
            null == r && (r = null),
            null != document.createEvent ? (u = document.createEvent("CustomEvent"),
            u.initCustomEvent(n, t, i, r)) : null != document.createEventObject ? (u = document.createEventObject(),
            u.eventType = n) : u.eventName = n,
            u
        }
        ,
        n.prototype.emitEvent = function(n, t) {
            return null != n.dispatchEvent ? n.dispatchEvent(t) : t in (null != n) ? n[t]() : "on" + t in (null != n) ? n["on" + t]() : void 0
        }
        ,
        n.prototype.addEvent = function(n, t, i) {
            return null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
        }
        ,
        n.prototype.removeEvent = function(n, t, i) {
            return null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
        }
        ,
        n.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        n
    }();
    i = this.WeakMap || this.MozWeakMap || (i = function() {
        function n() {
            this.keys = [];
            this.values = []
        }
        return n.prototype.get = function(n) {
            var t, u, i, f, r;
            for (r = this.keys,
            t = i = 0,
            f = r.length; f > i; t = ++i)
                if (u = r[t],
                u === n)
                    return this.values[t]
        }
        ,
        n.prototype.set = function(n, t) {
            var i, f, r, e, u;
            for (u = this.keys,
            i = r = 0,
            e = u.length; e > r; i = ++r)
                if (f = u[i],
                f === n)
                    return void (this.values[i] = t);
            return this.keys.push(n),
            this.values.push(t)
        }
        ,
        n
    }());
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function() {
        function n() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return n.notSupported = !0,
        n.prototype.observe = function() {}
        ,
        n
    }());
    r = this.getComputedStyle || function(n) {
        return this.getPropertyValue = function(t) {
            var i;
            return "float" === t && (t = "styleFloat"),
            u.test(t) && t.replace(u, function(n, t) {
                return t.toUpperCase()
            }),
            (null != (i = n.currentStyle) ? i[t] : void 0) || null
        }
        ,
        this
    }
    ;
    u = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function u(n) {
            null == n && (n = {});
            this.scrollCallback = t(this.scrollCallback, this);
            this.scrollHandler = t(this.scrollHandler, this);
            this.resetAnimation = t(this.resetAnimation, this);
            this.start = t(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(n, this.defaults);
            this.animationNameCache = new i;
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return u.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        },
        u.prototype.init = function() {
            var n;
            return this.element = window.document.documentElement,
            "interactive" === (n = document.readyState) || "complete" === n ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        u.prototype.start = function() {
            var t, i, u, r;
            if (this.stopped = !1,
            this.boxes = function() {
                var n, u, i, r;
                for (i = this.element.querySelectorAll("." + this.config.boxClass),
                r = [],
                n = 0,
                u = i.length; u > n; n++)
                    t = i[n],
                    r.push(t);
                return r
            }
            .call(this),
            this.all = function() {
                var n, u, i, r;
                for (i = this.boxes,
                r = [],
                n = 0,
                u = i.length; u > n; n++)
                    t = i[n],
                    r.push(t);
                return r
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (r = this.boxes,
                    i = 0,
                    u = r.length; u > i; i++)
                        t = r[i],
                        this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new n(function(n) {
                return function(t) {
                    var i, u, f, e, r;
                    for (r = [],
                    i = 0,
                    u = t.length; u > i; i++)
                        e = t[i],
                        r.push(function() {
                            var n, r, t, i;
                            for (t = e.addedNodes || [],
                            i = [],
                            n = 0,
                            r = t.length; r > n; n++)
                                f = t[n],
                                i.push(this.doSync(f));
                            return i
                        }
                        .call(n));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        u.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        u.prototype.sync = function() {
            if (n.notSupported)
                return this.doSync(this.element)
        }
        ,
        u.prototype.doSync = function(n) {
            var t, i, f, u, r;
            if (null == n && (n = this.element),
            1 === n.nodeType) {
                for (n = n.parentNode || n,
                u = n.querySelectorAll("." + this.config.boxClass),
                r = [],
                i = 0,
                f = u.length; f > i; i++)
                    t = u[i],
                    e.call(this.all, t) < 0 ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                    r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }
        ,
        u.prototype.show = function(n) {
            return this.applyStyle(n),
            n.className = n.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(n),
            this.util().emitEvent(n, this.wowEvent),
            this.util().addEvent(n, "animationend", this.resetAnimation),
            this.util().addEvent(n, "oanimationend", this.resetAnimation),
            this.util().addEvent(n, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(n, "MSAnimationEnd", this.resetAnimation),
            n
        }
        ,
        u.prototype.applyStyle = function(n, t) {
            var i, r, u;
            return r = n.getAttribute("data-wow-duration"),
            i = n.getAttribute("data-wow-delay"),
            u = n.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(n, t, r, i, u)
                }
            }(this))
        }
        ,
        u.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(n) {
                return window.requestAnimationFrame(n)
            }
            : function(n) {
                return n()
            }
        }(),
        u.prototype.resetStyle = function() {
            var r, n, u, t, i;
            for (t = this.boxes,
            i = [],
            n = 0,
            u = t.length; u > n; n++)
                r = t[n],
                i.push(r.style.visibility = "visible");
            return i
        }
        ,
        u.prototype.resetAnimation = function(n) {
            var t;
            if (n.type.toLowerCase().indexOf("animationend") >= 0)
                return (t = n.target || n.srcElement,
                t.className = t.className.replace(this.config.animateClass, "").trim())
        }
        ,
        u.prototype.customStyle = function(n, t, i, r, u) {
            return t && this.cacheAnimationName(n),
            n.style.visibility = t ? "hidden" : "visible",
            i && this.vendorSet(n.style, {
                animationDuration: i
            }),
            r && this.vendorSet(n.style, {
                animationDelay: r
            }),
            u && this.vendorSet(n.style, {
                animationIterationCount: u
            }),
            this.vendorSet(n.style, {
                animationName: t ? "none" : this.cachedAnimationName(n)
            }),
            n
        }
        ,
        u.prototype.vendors = ["moz", "webkit"],
        u.prototype.vendorSet = function(n, t) {
            var i, r, u, f;
            r = [];
            for (i in t)
                u = t[i],
                n["" + i] = u,
                r.push(function() {
                    var t, o, r, e;
                    for (r = this.vendors,
                    e = [],
                    t = 0,
                    o = r.length; o > t; t++)
                        f = r[t],
                        e.push(n["" + f + i.charAt(0).toUpperCase() + i.substr(1)] = u);
                    return e
                }
                .call(this));
            return r
        }
        ,
        u.prototype.vendorCSS = function(n, t) {
            var i, o, f, u, e, s;
            for (e = r(n),
            u = e.getPropertyCSSValue(t),
            f = this.vendors,
            i = 0,
            o = f.length; o > i; i++)
                s = f[i],
                u = u || e.getPropertyCSSValue("-" + s + "-" + t);
            return u
        }
        ,
        u.prototype.animationName = function(n) {
            var t;
            try {
                t = this.vendorCSS(n, "animation-name").cssText
            } catch (i) {
                t = r(n).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }
        ,
        u.prototype.cacheAnimationName = function(n) {
            return this.animationNameCache.set(n, this.animationName(n))
        }
        ,
        u.prototype.cachedAnimationName = function(n) {
            return this.animationNameCache.get(n)
        }
        ,
        u.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        u.prototype.scrollCallback = function() {
            var n;
            if (this.scrolled && !(this.scrolled = !1,
            this.boxes = function() {
                var t, u, i, r;
                for (i = this.boxes,
                r = [],
                t = 0,
                u = i.length; u > t; t++)
                    n = i[t],
                    n && (this.isVisible(n) ? this.show(n) : r.push(n));
                return r
            }
            .call(this),
            this.boxes.length || this.config.live))
                return this.stop()
        }
        ,
        u.prototype.offsetTop = function(n) {
            for (var t; void 0 === n.offsetTop; )
                n = n.parentNode;
            for (t = n.offsetTop; n = n.offsetParent; )
                t += n.offsetTop;
            return t
        }
        ,
        u.prototype.isVisible = function(n) {
            var r, u, t, f, i;
            return u = n.getAttribute("data-wow-offset") || this.config.offset,
            i = window.pageYOffset,
            f = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - u,
            t = this.offsetTop(n),
            r = t + n.clientHeight,
            f >= t && r >= i
        }
        ,
        u.prototype.util = function() {
            return null != this._util ? this._util : this._util = new f
        }
        ,
        u.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        u
    }()
}
.call(this),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery);
+function(n) {
    "use strict";
    function t() {
        var i = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, n;
        for (n in t)
            if (void 0 !== i.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1, u = this, r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }
        ,
        setTimeout(r, t),
        this
    }
    ;
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function u(i) {
        return this.each(function() {
            var r = n(this)
              , u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]', t = function(t) {
        n(t).on("click", i, this.close)
    }, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this), u = f.attr("data-target"), r;
        u || (u = f.attr("href"),
        u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"),
        n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    }
    ;
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r,
        this
    }
    ;
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.button")
              , f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this,f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    }, r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled"
          , r = this.$element
          , f = r.is("input") ? "val" : "html"
          , u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0,
            r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1,
            r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }
    ;
    t.prototype.toggle = function() {
        var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
        i.length ? (n = this.$element.find("input"),
        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
        i.find(".active").removeClass("active"),
        this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
        this.$element.toggleClass("active")),
        n.prop("checked", this.$element.hasClass("active")),
        t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
        this.$element.toggleClass("active"))
    }
    ;
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r,
        this
    }
    ;
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(),
        r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.carousel")
              , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i)
              , e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this,f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    }, u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            n.preventDefault()
        }
    }
    ;
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
        this
    }
    ;
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"),
        this.$items.index(n || this.$active)
    }
    ;
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1,
        u = (i + r) % this.$items.length,
        this.$items.eq(u))
    }
    ;
    t.prototype.to = function(n) {
        var i = this
          , t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1 || n < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                i.to(n)
            }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    }
    ;
    t.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ;
    t.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ;
    t.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ;
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0],
        s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }),
        (this.$element.trigger(s),
        !s.isDefaultPrevented()) ? ((this.sliding = !0,
        l && this.pause(),
        this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"),
        h = n(this.$indicators.children()[this.getItemIndex(u)]),
        h && h.addClass("active")),
        c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }),
        n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i),
        u[0].offsetWidth,
        e.addClass(f),
        u.addClass(f),
        e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"),
        u.addClass("active"),
        this.sliding = !1,
        this.$element.trigger(c)),
        l && this.cycle(),
        this) : void 0)
    }
    ;
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u,
        this
    }
    ;
    r = function(t) {
        var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()),
        f = r.attr("data-slide-to"),
        f && (e.interval = !1),
        i.call(u, e),
        f && u.data("bs.carousel").to(f),
        t.preventDefault())
    }
    ;
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.collapse")
              , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    }, u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }
    ;
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
        !(r && r.length && (f = r.data("bs.collapse"),
        f && f.transitioning)) && (e = n.Event("show.bs.collapse"),
        this.$element.trigger(e),
        !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"),
            f || r.data("bs.collapse", null)),
            u = this.dimension(),
            this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
            this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
            this.transitioning = 1,
            o = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse")
            }
            ,
            !n.support.transition)
                return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    }
    ;
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"),
        this.$element.trigger(r),
        !r.isDefaultPrevented()))
            return i = this.dimension(),
            this.$element[i](this.$element[i]())[0].offsetHeight,
            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
            this.transitioning = 1,
            u = function() {
                this.transitioning = 0;
                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            }
            ,
            n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    }
    ;
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    }
    ;
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
    ;
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u,
        this
    }
    ;
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u)
          , e = f.data("bs.collapse")
          , o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(t) {
        var i = t.attr("data-target"), r;
        return i || (i = t.attr("href"),
        i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
        r = i && n(i),
        r && r.length ? r : t.parent()
    }
    function u(t) {
        t && 3 === t.which || (n(o).remove(),
        n(i).each(function() {
            var u = n(this)
              , i = r(u)
              , f = {
                relatedTarget: this
            };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)),
            t.isDefaultPrevented() || (u.attr("aria-expanded", "false"),
            i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function e(i) {
        return this.each(function() {
            var r = n(this)
              , u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function(t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }, f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this), i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f),
            o = i.hasClass("open"),
            u(),
            !o) {
                if ("ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u),
                e = {
                    relatedTarget: this
                },
                i.trigger(t = n.Event("show.bs.dropdown", e)),
                t.isDefaultPrevented())
                    return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    }
    ;
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this),
        t.preventDefault(),
        t.stopPropagation(),
        !e.is(".disabled, :disabled"))) {
            if (o = r(e),
            s = o.hasClass("open"),
            !s && 27 != t.which || s && 27 == t.which)
                return 27 == t.which && o.find(i).trigger("focus"),
                e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target),
            38 == t.which && u > 0 && u--,
            40 == t.which && u < f.length - 1 && u++,
            ~u || (u = 0),
            f.eq(u).trigger("focus"))
        }
    }
    ;
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f,
        this
    }
    ;
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery);
+function(n) {
    "use strict";
    function i(i, r) {
        return this.each(function() {
            var f = n(this)
              , u = f.data("bs.modal")
              , e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this,e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    }
    ;
    t.prototype.show = function(i) {
        var r = this
          , u = n.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"), u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    }
    ;
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        n(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    }
    ;
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    }
    ;
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ;
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    }
    ;
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    }
    ;
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    }
    ;
    t.prototype.backdrop = function(i) {
        var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f,
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !i)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            u = function() {
                e.removeBackdrop();
                i && i()
            }
            ,
            n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    }
    ;
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ;
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    }
    ;
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ;
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth, t;
        n || (t = document.documentElement.getBoundingClientRect(),
        n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    }
    ;
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    }
    ;
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ;
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"), t;
        return n.className = "modal-scrollbar-measure",
        this.$body.append(n),
        t = n.offsetWidth - n.clientWidth,
        this.$body[0].removeChild(n),
        t
    }
    ;
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r,
        this
    }
    ;
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this)
          , f = r.attr("href")
          , u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""))
          , e = u.data("bs.modal") ? "toggle" : n.extend({
            remote: !/#/.test(f) && f
        }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.tooltip")
              , f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this,f)),
            "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    }, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0,
        this.type = t,
        this.$element = n(i),
        this.options = this.getOptions(r),
        this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "),
        e = f.length; e--; )
            if (u = f[e],
            "click" == u)
                this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else
                "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin",
                s = "hover" == u ? "mouseleave" : "focusout",
                this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)),
                this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }
    ;
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ;
    t.prototype.getDelegateOptions = function() {
        var t = {}
          , i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }),
        t
    }
    ;
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)),
        t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }
    ;
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n])
                return !0;
        return !1
    }
    ;
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)),
        t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !i.isInStateTrue())
            return clearTimeout(i.timeout),
            i.hoverState = "out",
            i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
    }
    ;
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type), l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c),
            l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
            c.isDefaultPrevented() || !l)
                return;
            var u = this
              , r = this.tip()
              , a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
              , v = /\s?auto?\s?/i
              , y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition()
              , o = r[0].offsetWidth
              , s = r[0].offsetHeight;
            y && (p = i,
            e = this.getPosition(this.$viewport),
            i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i,
            r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            }
            ;
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    }
    ;
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i)
          , a = c ? 2 * u.left - l + h : 2 * u.top - e + f
          , v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    }
    ;
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    }
    ;
    t.prototype.setContent = function() {
        var n = this.tip()
          , t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    }
    ;
    t.prototype.hide = function(i) {
        function f() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this
          , u = n(this.$tip)
          , e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e),
        !e.isDefaultPrevented())
            return u.removeClass("in"),
            n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(),
            this.hoverState = null,
            this
    }
    ;
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }
    ;
    t.prototype.hasContent = function() {
        return this.getTitle()
    }
    ;
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0]
          , u = "BODY" == r.tagName
          , i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement
          , e = u ? {
            top: 0,
            left: 0
        } : f ? null : t.offset()
          , o = {
            scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , s = u ? {
            width: n(window).width(),
            height: n(window).height()
        } : null;
        return n.extend({}, i, o, s, e)
    }
    ;
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }
    ;
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        }, e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0,
        u = this.getPosition(this.$viewport),
        /right|left/.test(n) ? (o = t.top - e - u.scroll,
        s = t.top + e - u.scroll + r,
        o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e,
        c = t.left + e + i,
        h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)),
        f) : f
    }
    ;
    t.prototype.getTitle = function() {
        var t = this.$element
          , n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }
    ;
    t.prototype.getUID = function(n) {
        do
            n += ~~(1e6 * Math.random());
        while (document.getElementById(n));
        return n
    }
    ;
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ;
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ;
    t.prototype.enable = function() {
        this.enabled = !0
    }
    ;
    t.prototype.disable = function() {
        this.enabled = !1
    }
    ;
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ;
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type),
        i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click,
        i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
    ;
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    }
    ;
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i,
        this
    }
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.popover")
              , f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this,f)),
            "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.init("popover", n, t)
    }, i;
    if (!n.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }
    ;
    t.prototype.setContent = function() {
        var n = this.tip()
          , i = this.getTitle()
          , t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    }
    ;
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ;
    t.prototype.getContent = function() {
        var t = this.$element
          , n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    }
    ;
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i,
        this
    }
}(jQuery);
+function(n) {
    "use strict";
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.scrollspy")
              , f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ;
    t.prototype.refresh = function() {
        var t = this
          , i = "offset"
          , r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position",
        r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this)
              , u = f.data("target") || f.attr("href")
              , t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    }
    ;
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(),
        i >= e)
            return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0])
            return this.activeTarget = null,
            this.clear();
        for (n = t.length; n--; )
            u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    }
    ;
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    }
    ;
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r,
        this
    }
    ;
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
        this.element = n(t)
    }, u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
        if (i || (i = t.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a")
              , e = n.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , o = n.Event("show.bs.tab", {
                relatedTarget: r[0]
            });
            (r.trigger(e),
            t.trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i),
            this.activate(t.closest("li"), f),
            this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    }
    ;
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth,
            i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active")
          , o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    }
    ;
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u,
        this
    }
    ;
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    }
    ;
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.affix")
              , f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    }, r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop()
          , f = this.$element.offset()
          , e = this.$target.height();
        if (null != i && "top" == this.affixed)
            return u < i && "top";
        if ("bottom" == this.affixed)
            return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed
          , s = o ? u : f.top
          , h = o ? e : t;
        return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
    }
    ;
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop()
          , i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    }
    ;
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }
    ;
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height()
              , r = this.options.offset
              , f = r.top
              , u = r.bottom
              , h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r),
            "function" == typeof f && (f = r.top(this.$element)),
            "function" == typeof u && (u = r.bottom(this.$element)),
            i = this.getState(h, s, f, u),
            this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""),
                e = "affix" + (i ? "-" + i : ""),
                o = n.Event(e + ".bs.affix"),
                this.$element.trigger(o),
                o.isDefaultPrevented())
                    return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    }
    ;
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r,
        this
    }
    ;
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this)
              , t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n) {
    n.fn.hoverIntent = function(t, i, r) {
        var u = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        u = typeof t == "object" ? n.extend(u, t) : n.isFunction(i) ? n.extend(u, {
            over: t,
            out: i,
            selector: r
        }) : n.extend(u, {
            over: t,
            out: t,
            selector: i
        });
        var f, e, o, s, h = function(n) {
            f = n.pageX;
            e = n.pageY
        }, c = function(t, i) {
            if (i.hoverIntent_t = clearTimeout(i.hoverIntent_t),
            Math.abs(o - f) + Math.abs(s - e) < u.sensitivity)
                return n(i).off("mousemove.hoverIntent", h),
                i.hoverIntent_s = 1,
                u.over.apply(i, [t]);
            o = f;
            s = e;
            i.hoverIntent_t = setTimeout(function() {
                c(t, i)
            }, u.interval)
        }, a = function(n, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            u.out.apply(t, [n])
        }, l = function(t) {
            var r = jQuery.extend({}, t)
              , i = this;
            if (i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
            t.type == "mouseenter") {
                o = r.pageX;
                s = r.pageY;
                n(i).on("mousemove.hoverIntent", h);
                i.hoverIntent_s != 1 && (i.hoverIntent_t = setTimeout(function() {
                    c(r, i)
                }, u.interval))
            } else
                n(i).off("mousemove.hoverIntent", h),
                i.hoverIntent_s == 1 && (i.hoverIntent_t = setTimeout(function() {
                    a(r, i)
                }, u.timeout))
        };
        return this.on({
            "mouseenter.hoverIntent": l,
            "mouseleave.hoverIntent": l
        }, u.selector)
    }
}(jQuery),
function(n) {
    n.fn.shorten = function(t) {
        var i = {
            showChars: 100,
            ellipsesText: "...",
            moreText: "",
            lessText: ""
        };
        t && n.extend(i, t);
        n(document).off("click", ".morelink");
        n(document).on({
            click: function() {
                var t = n(this);
                return t.hasClass("less") ? (t.removeClass("less"),
                t.html(i.moreText)) : (t.addClass("less"),
                t.html(i.lessText)),
                t.parent().prev().toggle(),
                t.prev().slideToggle(),
                !1
            }
        }, ".morelink");
        return this.each(function() {
            var r = n(this), t;
            if (!r.hasClass("shortened") && (r.addClass("shortened"),
            t = r.html(),
            t.length > i.showChars)) {
                var u = t.substr(0, i.showChars)
                  , f = t.substr(i.showChars, t.length - i.showChars)
                  , e = u + '<span class="moreellipses"> <\/span><span class="morecontent"><span>' + f + '<\/span> <a href="#" class="morelink">' + i.ellipsesText + "" + i.moreText + "<\/a><\/span>";
                r.html(e);
                n(".morecontent span").hide()
            }
        })
    }
}(jQuery);
!function(n, t) {
    function u() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function e() {
        var n = new Date;
        return u(n.getFullYear(), n.getMonth(), n.getDate())
    }
    function y(n, t) {
        return n.getUTCFullYear() === t.getUTCFullYear() && n.getUTCMonth() === t.getUTCMonth() && n.getUTCDate() === t.getUTCDate()
    }
    function c(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }
    function p(t, i) {
        function o(n, t) {
            return t.toLowerCase()
        }
        var u, f = n(t).data(), e = {}, s = new RegExp("^" + i.toLowerCase() + "([A-Z])"), r;
        i = new RegExp("^" + i.toLowerCase());
        for (r in f)
            i.test(r) && (u = r.replace(s, o),
            e[u] = f[r]);
        return e
    }
    function w(t) {
        var u = {}, i;
        if (r[t] || (t = t.split("-")[0],
        r[t]))
            return i = r[t],
            n.each(v, function(n, t) {
                t in i && (u[t] = i[t])
            }),
            u
    }
    var l = function() {
        var t = {
            get: function(n) {
                return this.slice(n)[0]
            },
            contains: function(n) {
                for (var i = n && n.valueOf(), t = 0, r = this.length; r > t; t++)
                    if (this[t].valueOf() === i)
                        return t;
                return -1
            },
            remove: function(n) {
                this.splice(n, 1)
            },
            replace: function(t) {
                t && (n.isArray(t) || (t = [t]),
                this.clear(),
                this.push.apply(this, t))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var n = new l;
                return n.replace(this),
                n
            }
        };
        return function() {
            var i = [];
            return i.push.apply(i, arguments),
            n.extend(i, t),
            i
        }
    }(), f = function(t, r) {
        this._process_options(r);
        this.dates = new l;
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;
        this.element = n(t);
        this.isInline = !1;
        this.isInput = this.element.is("input");
        this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1;
        this.hasInput = this.component && this.element.find("input").length;
        this.component && 0 === this.component.length && (this.component = !1);
        this.picker = n(i.template);
        this._buildEvents();
        this._attachEvents();
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
        this.o.rtl && this.picker.addClass("datepicker-rtl");
        this.viewMode = this.o.startView;
        this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(n, t) {
            return parseInt(t) + 1
        });
        this._allow_update = !1;
        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.setDatesDisabled(this.o.datesDisabled);
        this.fillDow();
        this.fillMonths();
        this._allow_update = !0;
        this.update();
        this.showMode();
        this.isInline && this.show()
    }, h, a, o, s, v, r, i;
    f.prototype = {
        constructor: f,
        _process_options: function(f) {
            var o, c, a, v, h, l;
            this._o = n.extend({}, this._o, f);
            o = this.o = n.extend({}, this._o);
            c = o.language;
            switch (r[c] || (c = c.split("-")[0],
            r[c] || (c = s.language)),
            o.language = c,
            o.startView) {
            case 2:
            case "decade":
                o.startView = 2;
                break;
            case 1:
            case "year":
                o.startView = 1;
                break;
            default:
                o.startView = 0
            }
            switch (o.minViewMode) {
            case 1:
            case "months":
                o.minViewMode = 1;
                break;
            case 2:
            case "years":
                o.minViewMode = 2;
                break;
            default:
                o.minViewMode = 0
            }
            if (o.startView = Math.max(o.startView, o.minViewMode),
            o.multidate !== !0 && (o.multidate = Number(o.multidate) || !1,
            o.multidate !== !1 && (o.multidate = Math.max(0, o.multidate))),
            o.multidateSeparator = String(o.multidateSeparator),
            o.weekStart %= 7,
            o.weekEnd = (o.weekStart + 6) % 7,
            a = i.parseFormat(o.format),
            (o.startDate !== -(1 / 0) && (o.startDate = o.startDate ? o.startDate instanceof Date ? this._local_to_utc(this._zero_time(o.startDate)) : i.parseDate(o.startDate, a, o.language) : -(1 / 0)),
            o.endDate !== 1 / 0 && (o.endDate = o.endDate ? o.endDate instanceof Date ? this._local_to_utc(this._zero_time(o.endDate)) : i.parseDate(o.endDate, a, o.language) : 1 / 0),
            o.daysOfWeekDisabled = o.daysOfWeekDisabled || [],
            n.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)),
            o.daysOfWeekDisabled = n.map(o.daysOfWeekDisabled, function(n) {
                return parseInt(n, 10)
            }),
            o.datesDisabled = o.datesDisabled || [],
            n.isArray(o.datesDisabled)) || (v = [],
            v.push(i.parseDate(o.datesDisabled, a, o.language)),
            o.datesDisabled = v),
            o.datesDisabled = n.map(o.datesDisabled, function(n) {
                return i.parseDate(n, a, o.language)
            }),
            h = String(o.orientation).toLowerCase().split(/\s+/g),
            l = o.orientation.toLowerCase(),
            h = n.grep(h, function(n) {
                return /^auto|left|right|top|bottom$/.test(n)
            }),
            o.orientation = {
                x: "auto",
                y: "auto"
            },
            l && "auto" !== l)
                if (1 === h.length)
                    switch (h[0]) {
                    case "top":
                    case "bottom":
                        o.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        o.orientation.x = h[0]
                    }
                else
                    l = n.grep(h, function(n) {
                        return /^left|right$/.test(n)
                    }),
                    o.orientation.x = l[0] || "auto",
                    l = n.grep(h, function(n) {
                        return /^top|bottom$/.test(n)
                    }),
                    o.orientation.y = l[0] || "auto";
            if (o.defaultViewDate) {
                var y = o.defaultViewDate.year || (new Date).getFullYear()
                  , p = o.defaultViewDate.month || 0
                  , w = o.defaultViewDate.day || 1;
                o.defaultViewDate = u(y, p, w)
            } else
                o.defaultViewDate = e();
            o.showOnFocus = o.showOnFocus !== t ? o.showOnFocus : !0
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++)
                f = n[i][0],
                2 === n[i].length ? (r = t,
                u = n[i][1]) : 3 === n[i].length && (r = n[i][1],
                u = n[i][2]),
                f.on(u, r)
        },
        _unapplyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++)
                f = n[i][0],
                2 === n[i].length ? (u = t,
                r = n[i][1]) : 3 === n[i].length && (u = n[i][1],
                r = n[i][2]),
                f.off(r, u)
        },
        _buildEvents: function() {
            var t = {
                keyup: n.proxy(function(t) {
                    -1 === n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: n.proxy(this.keydown, this)
            };
            this.o.showOnFocus === !0 && (t.focus = n.proxy(this.show, this));
            this.isInput ? this._events = [[this.element, t]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), t], [this.component, {
                click: n.proxy(this.show, this)
            }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: n.proxy(this.show, this)
            }]];
            this._events.push([this.element, "*", {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }], [this.element, {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }]);
            this._secondaryEvents = [[this.picker, {
                click: n.proxy(this.click, this)
            }], [n(window), {
                resize: n.proxy(this.place, this)
            }], [n(document), {
                "mousedown touchstart": n.proxy(function(n) {
                    this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(t, r) {
            var u = r || this.dates.get(-1)
              , f = this._utc_to_local(u);
            this.element.trigger({
                type: t,
                date: f,
                dates: n.map(this.dates, this._utc_to_local),
                format: n.proxy(function(n, t) {
                    0 === arguments.length ? (n = this.dates.length - 1,
                    t = this.o.format) : "string" == typeof n && (t = n,
                    n = this.dates.length - 1);
                    t = t || this.o.format;
                    var r = this.dates.get(n);
                    return i.formatDate(r, t, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!this.element.attr("readonly") || this.o.enableOnReadonly !== !1)
                return (this.isInline || this.picker.appendTo(this.o.container),
                this.place(),
                this.picker.show(),
                this._attachSecondaryEvents(),
                this._trigger("show"),
                (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && n(this.element).blur(),
                this)
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null,
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.viewMode = this.o.startView,
            this.showMode(),
            this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(),
            this._trigger("hide"),
            this) : this
        },
        remove: function() {
            return this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
            this
        },
        _utc_to_local: function(n) {
            return n && new Date(n.getTime() + 6e4 * n.getTimezoneOffset())
        },
        _local_to_utc: function(n) {
            return n && new Date(n.getTime() - 6e4 * n.getTimezoneOffset())
        },
        _zero_time: function(n) {
            return n && new Date(n.getFullYear(),n.getMonth(),n.getDate())
        },
        _zero_utc_time: function(n) {
            return n && new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()))
        },
        getDates: function() {
            return n.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return n.map(this.dates, function(n) {
                return new Date(n)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var n = this.dates.get(-1);
            return "undefined" != typeof n ? new Date(n) : null
        },
        clearDates: function() {
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find("input"));
            n && n.val("").change();
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t),
            this._trigger("changeDate"),
            this.setValue(),
            this
        },
        setUTCDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, n.map(t, this._utc_to_local)),
            this._trigger("changeDate"),
            this.setValue(),
            this
        },
        setDate: c("setDates"),
        setUTCDate: c("setUTCDates"),
        setValue: function() {
            var n = this.getFormattedDate();
            return this.isInput ? this.element.val(n).change() : this.component && this.element.find("input").val(n).change(),
            this
        },
        getFormattedDate: function(r) {
            r === t && (r = this.o.format);
            var u = this.o.language;
            return n.map(this.dates, function(n) {
                return i.formatDate(n, r, u)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(n) {
            return this._process_options({
                startDate: n
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setEndDate: function(n) {
            return this._process_options({
                endDate: n
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setDaysOfWeekDisabled: function(n) {
            return this._process_options({
                daysOfWeekDisabled: n
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setDatesDisabled: function(n) {
            this._process_options({
                datesDisabled: n
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            var p, s, u, w;
            if (this.isInline)
                return this;
            var f = this.picker.outerWidth()
              , e = this.picker.outerHeight()
              , h = n(this.o.container).width()
              , b = n(this.o.container).height()
              , c = n(this.o.container).scrollTop()
              , l = n(this.o.container).offset()
              , a = [];
            this.element.parents().each(function() {
                var t = n(this).css("z-index");
                "auto" !== t && 0 !== t && a.push(parseInt(t))
            });
            var v = Math.max.apply(Math, a) + 10
              , r = this.component ? this.component.parent().offset() : this.element.offset()
              , y = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
              , o = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
              , t = r.left - l.left
              , i = r.top - l.top;
            return this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
            "right" === this.o.orientation.x && (t -= f - o)) : r.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
            t -= r.left - 10) : t + f > h ? (this.picker.addClass("datepicker-orient-right"),
            t = r.left + o - f) : this.picker.addClass("datepicker-orient-left"),
            u = this.o.orientation.y,
            ("auto" === u && (p = -c + i - e,
            s = c + b - (i + y + e),
            u = Math.max(p, s) === s ? "top" : "bottom"),
            this.picker.addClass("datepicker-orient-" + u),
            "top" === u ? i += y : i -= e + parseInt(this.picker.css("padding-top")),
            this.o.rtl) ? (w = h - (t + o),
            this.picker.css({
                top: i,
                right: w,
                zIndex: v
            })) : this.picker.css({
                top: i,
                left: t,
                zIndex: v
            }),
            this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update)
                return this;
            var r = this.dates.copy()
              , t = []
              , u = !1;
            return arguments.length ? (n.each(arguments, n.proxy(function(n, i) {
                i instanceof Date && (i = this._local_to_utc(i));
                t.push(i)
            }, this)),
            u = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(),
            t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t],
            delete this.element.data().date),
            t = n.map(t, n.proxy(function(n) {
                return i.parseDate(n, this.o.format, this.o.language)
            }, this)),
            t = n.grep(t, n.proxy(function(n) {
                return n < this.o.startDate || n > this.o.endDate || !n
            }, this), !0),
            this.dates.replace(t),
            this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)),
            u ? this.setValue() : t.length && String(r) !== String(this.dates) && this._trigger("changeDate"),
            !this.dates.length && r.length && this._trigger("clearDate"),
            this.fill(),
            this
        },
        fillDow: function() {
            var t = this.o.weekStart, n = "<tr>", i;
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(n, t) {
                return parseInt(t) + 1
            }),
            i = '<th class="cw">&#160;<\/th>',
            n += i); t < this.o.weekStart + 7; )
                n += '<th class="dow">' + r[this.o.language].daysMin[t++ % 7] + "<\/th>";
            n += "<\/tr>";
            this.picker.find(".datepicker-days thead").append(n)
        },
        fillMonths: function() {
            for (var n = "", t = 0; 12 > t; )
                n += '<span class="month">' + r[this.o.language].monthsShort[t++] + "<\/span>";
            this.picker.find(".datepicker-months td").html(n)
        },
        setRange: function(t) {
            t && t.length ? this.range = n.map(t, function(n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function(t) {
            var i = []
              , r = this.viewDate.getUTCFullYear()
              , f = this.viewDate.getUTCMonth()
              , u = new Date;
            return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < f ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > f) && i.push("new"),
            this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"),
            this.o.todayHighlight && t.getUTCFullYear() === u.getFullYear() && t.getUTCMonth() === u.getMonth() && t.getUTCDate() === u.getDate() && i.push("today"),
            -1 !== this.dates.contains(t) && i.push("active"),
            (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"),
            this.o.datesDisabled.length > 0 && n.grep(this.o.datesDisabled, function(n) {
                return y(t, n)
            }).length > 0 && i.push("disabled", "disabled-date"),
            this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"),
            -1 !== n.inArray(t.valueOf(), this.range) && i.push("selected")),
            i
        },
        fill: function() {
            var y, g = new Date(this.viewDate), f = g.getUTCFullYear(), p = g.getUTCMonth(), w = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), ft = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), b = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, et = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, ot = r[this.o.language].today || r.en.today || "", st = r[this.o.language].clear || r.en.clear || "", e, k, c, h, s, o, l, it, rt, a, ut, v;
            if (!isNaN(f) && !isNaN(p)) {
                for (this.picker.find(".datepicker-days thead .datepicker-switch").text(r[this.o.language].months[p] + " " + f),
                this.picker.find("tfoot .today").text(ot).toggle(this.o.todayBtn !== !1),
                this.picker.find("tfoot .clear").text(st).toggle(this.o.clearBtn !== !1),
                this.updateNavArrows(),
                this.fillMonths(),
                e = u(f, p - 1, 28),
                k = i.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()),
                e.setUTCDate(k),
                e.setUTCDate(k - (e.getUTCDay() - this.o.weekStart + 7) % 7),
                c = new Date(e),
                c.setUTCDate(c.getUTCDate() + 42),
                c = c.valueOf(),
                s = []; e.valueOf() < c; ) {
                    if (e.getUTCDay() === this.o.weekStart && (s.push("<tr>"),
                    this.o.calendarWeeks)) {
                        var nt = new Date(+e + (this.o.weekStart - e.getUTCDay() - 7) % 7 * 864e5)
                          , tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5)
                          , d = new Date(Number(d = u(tt.getUTCFullYear(), 0, 1)) + (11 - d.getUTCDay()) % 7 * 864e5)
                          , ht = (tt - d) / 6048e5 + 1;
                        s.push('<td class="cw">' + ht + "<\/td>")
                    }
                    (h = this.getClassNames(e),
                    h.push("day"),
                    this.o.beforeShowDay !== n.noop) && (o = this.o.beforeShowDay(this._utc_to_local(e)),
                    o === t ? o = {} : "boolean" == typeof o ? o = {
                        enabled: o
                    } : "string" == typeof o && (o = {
                        classes: o
                    }),
                    o.enabled === !1 && h.push("disabled"),
                    o.classes && (h = h.concat(o.classes.split(/\s+/))),
                    o.tooltip && (y = o.tooltip));
                    h = n.unique(h);
                    s.push('<td class="' + h.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ">" + e.getUTCDate() + "<\/td>");
                    y = null;
                    e.getUTCDay() === this.o.weekEnd && s.push("<\/tr>");
                    e.setUTCDate(e.getUTCDate() + 1)
                }
                for (this.picker.find(".datepicker-days tbody").empty().append(s.join("")),
                l = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active"),
                (n.each(this.dates, function(n, t) {
                    t.getUTCFullYear() === f && l.eq(t.getUTCMonth()).addClass("active")
                }),
                (w > f || f > b) && l.addClass("disabled"),
                f === w && l.slice(0, ft).addClass("disabled"),
                f === b && l.slice(et + 1).addClass("disabled"),
                this.o.beforeShowMonth !== n.noop) && (it = this,
                n.each(l, function(t, i) {
                    if (!n(i).hasClass("disabled")) {
                        var r = new Date(f,t,1)
                          , u = it.o.beforeShowMonth(r);
                        u === !1 && n(i).addClass("disabled")
                    }
                })),
                s = "",
                f = 10 * parseInt(f / 10, 10),
                rt = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td"),
                f -= 1,
                ut = n.map(this.dates, function(n) {
                    return n.getUTCFullYear()
                }),
                v = -1; 11 > v; v++)
                    a = ["year"],
                    -1 === v ? a.push("old") : 10 === v && a.push("new"),
                    -1 !== n.inArray(f, ut) && a.push("active"),
                    (w > f || f > b) && a.push("disabled"),
                    s += '<span class="' + a.join(" ") + '">' + f + "<\/span>",
                    f += 1;
                rt.html(s)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate)
                  , n = t.getUTCFullYear()
                  , i = t.getUTCMonth();
                switch (this.viewMode) {
                case 0:
                    this.o.startDate !== -(1 / 0) && n <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    });
                    this.o.endDate !== 1 / 0 && n >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 1:
                case 2:
                    this.o.startDate !== -(1 / 0) && n <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    });
                    this.o.endDate !== 1 / 0 && n >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    })
                }
            }
        },
        click: function(t) {
            var e, f, o, r, h, s, c;
            if (t.preventDefault(),
            r = n(t.target).closest("span, td, th"),
            1 === r.length)
                switch (r[0].nodeName.toLowerCase()) {
                case "th":
                    switch (r[0].className) {
                    case "datepicker-switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        h = i.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
                        switch (this.viewMode) {
                        case 0:
                            this.viewDate = this.moveMonth(this.viewDate, h);
                            this._trigger("changeMonth", this.viewDate);
                            break;
                        case 1:
                        case 2:
                            this.viewDate = this.moveYear(this.viewDate, h);
                            1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                        }
                        this.fill();
                        break;
                    case "today":
                        s = new Date;
                        s = u(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
                        this.showMode(-2);
                        c = "linked" === this.o.todayBtn ? null : "view";
                        this._setDate(s, c);
                        break;
                    case "clear":
                        this.clearDates()
                    }
                    break;
                case "span":
                    r.hasClass("disabled") || (this.viewDate.setUTCDate(1),
                    r.hasClass("month") ? (o = 1,
                    f = r.parent().find("span").index(r),
                    e = this.viewDate.getUTCFullYear(),
                    this.viewDate.setUTCMonth(f),
                    this._trigger("changeMonth", this.viewDate),
                    1 === this.o.minViewMode && this._setDate(u(e, f, o))) : (o = 1,
                    f = 0,
                    e = parseInt(r.text(), 10) || 0,
                    this.viewDate.setUTCFullYear(e),
                    this._trigger("changeYear", this.viewDate),
                    2 === this.o.minViewMode && this._setDate(u(e, f, o))),
                    this.showMode(-1),
                    this.fill());
                    break;
                case "td":
                    r.hasClass("day") && !r.hasClass("disabled") && (o = parseInt(r.text(), 10) || 1,
                    e = this.viewDate.getUTCFullYear(),
                    f = this.viewDate.getUTCMonth(),
                    r.hasClass("old") ? 0 === f ? (f = 11,
                    e -= 1) : f -= 1 : r.hasClass("new") && (11 === f ? (f = 0,
                    e += 1) : f += 1),
                    this._setDate(u(e, f, o)))
                }
            this.picker.is(":visible") && this._focused_from && n(this._focused_from).focus();
            delete this._focused_from
        },
        _toggle_multidate: function(n) {
            var t = this.dates.contains(n);
            if (n || this.dates.clear(),
            -1 !== t ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(),
            this.dates.push(n)) : this.dates.push(n),
            "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate; )
                    this.dates.remove(0)
        },
        _setDate: function(n, t) {
            t && "date" !== t || this._toggle_multidate(n && new Date(n));
            t && "view" !== t || (this.viewDate = n && new Date(n));
            this.fill();
            this.setValue();
            t && "view" === t || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input"));
            i && i.change();
            !this.o.autoclose || t && "date" !== t || this.hide()
        },
        moveMonth: function(n, i) {
            var e;
            if (!n)
                return t;
            if (!i)
                return n;
            var u, f, r = new Date(n.valueOf()), o = r.getUTCDate(), s = r.getUTCMonth(), h = Math.abs(i);
            if (i = i > 0 ? 1 : -1,
            1 === h)
                f = -1 === i ? function() {
                    return r.getUTCMonth() === s
                }
                : function() {
                    return r.getUTCMonth() !== u
                }
                ,
                u = s + i,
                r.setUTCMonth(u),
                (0 > u || u > 11) && (u = (u + 12) % 12);
            else {
                for (e = 0; h > e; e++)
                    r = this.moveMonth(r, i);
                u = r.getUTCMonth();
                r.setUTCDate(o);
                f = function() {
                    return u !== r.getUTCMonth()
                }
            }
            for (; f(); )
                r.setUTCDate(--o),
                r.setUTCMonth(u);
            return r
        },
        moveYear: function(n, t) {
            return this.moveMonth(n, 12 * t)
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function(n) {
            var t, u, i, o, r, f;
            if (!this.picker.is(":visible"))
                return void (27 === n.keyCode && this.show());
            o = !1;
            r = this.focusDate || this.viewDate;
            switch (n.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.fill()) : this.hide();
                n.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation)
                    break;
                t = 37 === n.keyCode ? -1 : 1;
                n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t),
                i = this.moveYear(r, t),
                this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t),
                i = this.moveMonth(r, t),
                this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()),
                u.setUTCDate(u.getUTCDate() + t),
                i = new Date(r),
                i.setUTCDate(r.getUTCDate() + t));
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = i,
                this.setValue(),
                this.fill(),
                n.preventDefault());
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation)
                    break;
                t = 38 === n.keyCode ? -1 : 1;
                n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t),
                i = this.moveYear(r, t),
                this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t),
                i = this.moveMonth(r, t),
                this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()),
                u.setUTCDate(u.getUTCDate() + 7 * t),
                i = new Date(r),
                i.setUTCDate(r.getUTCDate() + 7 * t));
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = i,
                this.setValue(),
                this.fill(),
                n.preventDefault());
                break;
            case 13:
                r = this.focusDate || this.dates.get(-1) || this.viewDate;
                this.o.keyboardNavigation && (this._toggle_multidate(r),
                o = !0);
                this.focusDate = null;
                this.viewDate = this.dates.get(-1) || this.viewDate;
                this.setValue();
                this.fill();
                this.picker.is(":visible") && (n.preventDefault(),
                "function" == typeof n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0,
                this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null;
                this.viewDate = this.dates.get(-1) || this.viewDate;
                this.fill();
                this.hide()
            }
            o && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"),
            this.isInput ? f = this.element : this.component && (f = this.element.find("input")),
            f && f.change())
        },
        showMode: function(n) {
            n && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n)));
            this.picker.children("div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    h = function(t, i) {
        this.element = n(t);
        this.inputs = n.map(i.inputs, function(n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        o.call(n(this.inputs), i).bind("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function(t) {
            return n(t).data("datepicker")
        });
        this.updateDates()
    }
    ;
    h.prototype = {
        updateDates: function() {
            this.dates = n.map(this.pickers, function(n) {
                return n.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = n.map(this.dates, function(n) {
                return n.valueOf()
            });
            n.each(this.pickers, function(n, i) {
                i.setRange(t)
            })
        },
        dateUpdated: function(t) {
            if (!this.updating) {
                this.updating = !0;
                var e = n(t.target).data("datepicker")
                  , i = e.getUTCDate()
                  , f = n.inArray(t.target, this.inputs)
                  , r = f - 1
                  , u = f + 1
                  , o = this.inputs.length;
                if (-1 !== f) {
                    if (n.each(this.pickers, function(n, t) {
                        t.getUTCDate() || t.setUTCDate(i)
                    }),
                    i < this.dates[r])
                        for (; r >= 0 && i < this.dates[r]; )
                            this.pickers[r--].setUTCDate(i);
                    else if (i > this.dates[u])
                        for (; o > u && i > this.dates[u]; )
                            this.pickers[u++].setUTCDate(i);
                    this.updateDates();
                    delete this.updating
                }
            }
        },
        remove: function() {
            n.map(this.pickers, function(n) {
                n.remove()
            });
            delete this.element.data().datepicker
        }
    };
    a = n.fn.datepicker;
    o = function(i) {
        var u = Array.apply(null, arguments), r;
        return u.shift(),
        this.each(function() {
            var o = n(this), e = o.data("datepicker"), l = "object" == typeof i && i, v;
            if (!e) {
                var a = p(this, "date")
                  , y = n.extend({}, s, a, l)
                  , b = w(y.language)
                  , c = n.extend({}, s, b, a, l);
                o.hasClass("input-daterange") || c.inputs ? (v = {
                    inputs: c.inputs || o.find("input").toArray()
                },
                o.data("datepicker", e = new h(this,n.extend(c, v)))) : o.data("datepicker", e = new f(this,c))
            }
            if ("string" == typeof i && "function" == typeof e[i] && (r = e[i].apply(e, u),
            r !== t))
                return !1
        }),
        r !== t ? r : this
    }
    ;
    n.fn.datepicker = o;
    s = n.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: n.noop,
        beforeShowMonth: n.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        container: "body"
    };
    v = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = f;
    r = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    i = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        },
        getDaysInMonth: function(n, t) {
            return [31, i.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(n) {
            var t = n.replace(this.validParts, "\x00").split("\x00")
              , i = n.match(this.validParts);
            if (!t || !t.length || !i || 0 === i.length)
                throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function(e, o, s) {
            function nt() {
                var n = this.slice(0, c[h].length)
                  , t = c[h].slice(0, n.length);
                return n.toLowerCase() === t.toLowerCase()
            }
            var v, y, h, tt, c, a, it, d, w;
            if (!e)
                return t;
            if (e instanceof Date)
                return e;
            if ("string" == typeof o && (o = i.parseFormat(o)),
            tt = /([\-+]\d+)([dmwy])/,
            c = e.match(/([\-+]\d+)([dmwy])/g),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                for (e = new Date,
                h = 0; h < c.length; h++)
                    switch (v = tt.exec(c[h]),
                    y = parseInt(v[1]),
                    v[2]) {
                    case "d":
                        e.setUTCDate(e.getUTCDate() + y);
                        break;
                    case "m":
                        e = f.prototype.moveMonth.call(f.prototype, e, y);
                        break;
                    case "w":
                        e.setUTCDate(e.getUTCDate() + 7 * y);
                        break;
                    case "y":
                        e = f.prototype.moveYear.call(f.prototype, e, y)
                    }
                return u(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0)
            }
            c = e && e.match(this.nonpunctuation) || [];
            e = new Date;
            var p, b, k = {}, g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], l = {
                yyyy: function(n, t) {
                    return n.setUTCFullYear(t)
                },
                yy: function(n, t) {
                    return n.setUTCFullYear(2e3 + t)
                },
                m: function(n, t) {
                    if (isNaN(n))
                        return n;
                    for (t -= 1; 0 > t; )
                        t += 12;
                    for (t %= 12,
                    n.setUTCMonth(t); n.getUTCMonth() !== t; )
                        n.setUTCDate(n.getUTCDate() - 1);
                    return n
                },
                d: function(n, t) {
                    return n.setUTCDate(t)
                }
            };
            if (l.M = l.MM = l.mm = l.m,
            l.dd = l.d,
            e = u(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
            a = o.parts.slice(),
            c.length !== a.length && (a = n(a).filter(function(t, i) {
                return -1 !== n.inArray(i, g)
            }).toArray()),
            c.length === a.length) {
                for (h = 0,
                it = a.length; it > h; h++) {
                    if (p = parseInt(c[h], 10),
                    v = a[h],
                    isNaN(p))
                        switch (v) {
                        case "MM":
                            b = n(r[s].months).filter(nt);
                            p = n.inArray(b[0], r[s].months) + 1;
                            break;
                        case "M":
                            b = n(r[s].monthsShort).filter(nt);
                            p = n.inArray(b[0], r[s].monthsShort) + 1
                        }
                    k[v] = p
                }
                for (h = 0; h < g.length; h++)
                    w = g[h],
                    w in k && !isNaN(k[w]) && (d = new Date(e),
                    l[w](d, k[w]),
                    isNaN(d) || (e = d))
            }
            return e
        },
        formatDate: function(t, u, f) {
            var e;
            if (!t)
                return "";
            "string" == typeof u && (u = i.parseFormat(u));
            e = {
                d: t.getUTCDate(),
                D: r[f].daysShort[t.getUTCDay()],
                DD: r[f].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: r[f].monthsShort[t.getUTCMonth()],
                MM: r[f].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d;
            e.mm = (e.m < 10 ? "0" : "") + e.m;
            t = [];
            for (var s = n.extend([], u.separators), o = 0, h = u.parts.length; h >= o; o++)
                s.length && t.push(s.shift()),
                t.push(e[u.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&#171;<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">&#187;<\/th><\/tr><\/thead>',
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    i.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = i;
    n.fn.datepicker.noConflict = function() {
        return n.fn.datepicker = a,
        this
    }
    ;
    n.fn.datepicker.version = "1.4.1";
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(),
        o.call(i, "show"))
    });
    n(function() {
        o.call(n('[data-provide="datepicker-inline"]'))
    })
}(window.jQuery),
function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, window, document)
    }) : "object" == typeof exports ? module.exports = function(t, i) {
        return t || (t = window),
        i || (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
        n(i, t, t.document)
    }
    : n(jQuery, window, document)
}(function(n, t, i, r) {
    function at(t) {
        var i, r, u = {};
        n.each(t, function(n) {
            (i = n.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(i[1] + " ") && (r = n.replace(i[0], i[2].toLowerCase()),
            u[r] = n,
            "o" === i[1] && at(t[n]))
        });
        t._hungarianMap = u
    }
    function nt(t, i, u) {
        t._hungarianMap || at(t);
        var f;
        n.each(i, function(e) {
            f = t._hungarianMap[e];
            f !== r && (u || i[f] === r) && ("o" === f.charAt(0) ? (i[f] || (i[f] = {}),
            n.extend(!0, i[f], i[e]),
            nt(t[f], i[f], u)) : i[f] = i[e])
        })
    }
    function fr(n) {
        var t = u.defaults.oLanguage
          , i = n.sZeroRecords;
        !n.sEmptyTable && i && "No data available in table" === t.sEmptyTable && k(n, n, "sZeroRecords", "sEmptyTable");
        !n.sLoadingRecords && i && "Loading..." === t.sLoadingRecords && k(n, n, "sZeroRecords", "sLoadingRecords");
        n.sInfoThousands && (n.sThousands = n.sInfoThousands);
        (n = n.sDecimal) && re(n)
    }
    function lu(n) {
        if (p(n, "ordering", "bSort"),
        p(n, "orderMulti", "bSortMulti"),
        p(n, "orderClasses", "bSortClasses"),
        p(n, "orderCellsTop", "bSortCellsTop"),
        p(n, "order", "aaSorting"),
        p(n, "orderFixed", "aaSortingFixed"),
        p(n, "paging", "bPaginate"),
        p(n, "pagingType", "sPaginationType"),
        p(n, "pageLength", "iDisplayLength"),
        p(n, "searching", "bFilter"),
        "boolean" == typeof n.sScrollX && (n.sScrollX = n.sScrollX ? "100%" : ""),
        "boolean" == typeof n.scrollX && (n.scrollX = n.scrollX ? "100%" : ""),
        n = n.aoSearchCols)
            for (var t = 0, i = n.length; t < i; t++)
                n[t] && nt(u.models.oSearch, n[t])
    }
    function au(t) {
        p(t, "orderable", "bSortable");
        p(t, "orderData", "aDataSort");
        p(t, "orderSequence", "asSorting");
        p(t, "orderDataType", "sortDataType");
        var i = t.aDataSort;
        i && !n.isArray(i) && (t.aDataSort = [i])
    }
    function vu(t) {
        var i;
        if (!u.__browser) {
            i = {};
            u.__browser = i;
            var f = n("<div/>").css({
                position: "fixed",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(n("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(n("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body")
              , r = f.children()
              , e = r.children();
            i.barWidth = r[0].offsetWidth - r[0].clientWidth;
            i.bScrollOversize = 100 === e[0].offsetWidth && 100 !== r[0].clientWidth;
            i.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            i.bBounding = f[0].getBoundingClientRect().width ? !0 : !1;
            f.remove()
        }
        n.extend(t.oBrowser, u.__browser);
        t.oScroll.iBarWidth = u.__browser.barWidth
    }
    function yu(n, t, i, u, f, e) {
        var o, s = !1;
        for (i !== r && (o = i,
        s = !0); u !== f; )
            n.hasOwnProperty(u) && (o = s ? t(o, n[u], u, n) : n[u],
            s = !0,
            u += e);
        return o
    }
    function er(t, r) {
        var f = u.defaults.column
          , e = t.aoColumns.length
          , f = n.extend({}, u.models.oColumn, f, {
            nTh: r ? r : i.createElement("th"),
            sTitle: f.sTitle ? f.sTitle : r ? r.innerHTML : "",
            aDataSort: f.aDataSort ? f.aDataSort : [e],
            mData: f.mData ? f.mData : e,
            idx: e
        });
        t.aoColumns.push(f);
        f = t.aoPreSearchCols;
        f[e] = n.extend({}, u.models.oSearch, f[e]);
        ei(t, e, n(r).data())
    }
    function ei(t, i, f) {
        var i = t.aoColumns[i], e = t.oClasses, s = n(i.nTh), h;
        i.sWidthOrig || (i.sWidthOrig = s.attr("width") || null,
        h = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/),
        h && (i.sWidthOrig = h[1]));
        f !== r && null !== f && (au(f),
        nt(u.defaults.column, f),
        f.mDataProp !== r && !f.mData && (f.mData = f.mDataProp),
        f.sType && (i._sManualType = f.sType),
        f.className && !f.sClass && (f.sClass = f.className),
        n.extend(i, f),
        k(i, f, "sWidth", "sWidthOrig"),
        f.iDataSort !== r && (i.aDataSort = [f.iDataSort]),
        k(i, f, "aDataSort"));
        var o = i.mData
          , l = ft(o)
          , c = i.mRender ? ft(i.mRender) : null
          , f = function(n) {
            return "string" == typeof n && -1 !== n.indexOf("@")
        };
        i._bAttrSrc = n.isPlainObject(o) && (f(o.sort) || f(o.type) || f(o.filter));
        i.fnGetData = function(n, t, i) {
            var u = l(n, t, r, i);
            return c && t ? c(u, t, n, i) : u
        }
        ;
        i.fnSetData = function(n, t, i) {
            return et(o)(n, t, i)
        }
        ;
        "number" != typeof o && (t._rowReadObject = !0);
        t.oFeatures.bSort || (i.bSortable = !1,
        s.addClass(e.sSortableNone));
        t = -1 !== n.inArray("asc", i.asSorting);
        f = -1 !== n.inArray("desc", i.asSorting);
        !i.bSortable || !t && !f ? (i.sSortingClass = e.sSortableNone,
        i.sSortingClassJUI = "") : t && !f ? (i.sSortingClass = e.sSortableAsc,
        i.sSortingClassJUI = e.sSortJUIAscAllowed) : !t && f ? (i.sSortingClass = e.sSortableDesc,
        i.sSortingClassJUI = e.sSortJUIDescAllowed) : (i.sSortingClass = e.sSortable,
        i.sSortingClassJUI = e.sSortJUI)
    }
    function st(n) {
        var t, i, r;
        if (!1 !== n.oFeatures.bAutoWidth)
            for (t = n.aoColumns,
            wr(n),
            i = 0,
            r = t.length; i < r; i++)
                t[i].nTh.style.width = t[i].sWidth;
        t = n.oScroll;
        ("" !== t.sY || "" !== t.sX) && ti(n);
        o(n, null, "column-sizing", [n])
    }
    function vt(n, t) {
        var i = wt(n, "bVisible");
        return "number" == typeof i[t] ? i[t] : null
    }
    function yt(t, i) {
        var r = wt(t, "bVisible")
          , r = n.inArray(i, r);
        return -1 !== r ? r : null
    }
    function pt(n) {
        return wt(n, "bVisible").length
    }
    function wt(t, i) {
        var r = [];
        return n.map(t.aoColumns, function(n, t) {
            n[i] && r.push(t)
        }),
        r
    }
    function or(n) {
        for (var c = n.aoColumns, p = n.aoData, h = u.ext.type.detect, e, a, i, v, t, o, s, f = 0, l = c.length; f < l; f++)
            if (t = c[f],
            s = [],
            !t.sType && t._sManualType)
                t.sType = t._sManualType;
            else if (!t.sType) {
                for (e = 0,
                a = h.length; e < a; e++) {
                    for (i = 0,
                    v = p.length; i < v; i++) {
                        if (s[i] === r && (s[i] = y(n, i, f, "type")),
                        o = h[e](s[i], n),
                        !o && e !== h.length - 1)
                            break;
                        if ("html" === o)
                            break
                    }
                    if (o) {
                        t.sType = o;
                        break
                    }
                }
                t.sType || (t.sType = "string")
            }
    }
    function pu(t, i, u, f) {
        var s, o, a, c, v, h, l = t.aoColumns, e;
        if (i)
            for (s = i.length - 1; 0 <= s; s--)
                for (h = i[s],
                e = h.targets !== r ? h.targets : h.aTargets,
                n.isArray(e) || (e = [e]),
                o = 0,
                a = e.length; o < a; o++)
                    if ("number" == typeof e[o] && 0 <= e[o]) {
                        for (; l.length <= e[o]; )
                            er(t);
                        f(e[o], h)
                    } else if ("number" == typeof e[o] && 0 > e[o])
                        f(l.length + e[o], h);
                    else if ("string" == typeof e[o])
                        for (c = 0,
                        v = l.length; c < v; c++)
                            ("_all" == e[o] || n(l[c].nTh).hasClass(e[o])) && f(c, h);
        if (u)
            for (s = 0,
            t = u.length; s < t; s++)
                f(s, u[s])
    }
    function rt(t, i, f, e) {
        var o = t.aoData.length
          , s = n.extend(!0, {}, u.models.oRow, {
            src: f ? "dom" : "data",
            idx: o
        });
        s._aData = i;
        t.aoData.push(s);
        for (var c = t.aoColumns, h = 0, l = c.length; h < l; h++)
            c[h].sType = null;
        return t.aiDisplayMaster.push(o),
        i = t.rowIdFn(i),
        i !== r && (t.aIds[i] = s),
        (f || !t.oFeatures.bDeferRender) && lr(t, o, f, e),
        o
    }
    function oi(t, i) {
        var r;
        return i instanceof n || (i = n(i)),
        i.map(function(n, i) {
            return r = cr(t, i),
            rt(t, r.data, i, r.cells)
        })
    }
    function y(n, t, i, u) {
        var h = n.iDraw
          , e = n.aoColumns[i]
          , s = n.aoData[t]._aData
          , o = e.sDefaultContent
          , f = e.fnGetData(s, u, {
            settings: n,
            row: t,
            col: i
        });
        if (f === r)
            return n.iDrawError != h && null === o && (tt(n, 0, "Requested unknown parameter " + ("function" == typeof e.mData ? "{function}" : "'" + e.mData + "'") + " for row " + t + ", column " + i, 4),
            n.iDrawError = h),
            o;
        if ((f === s || null === f) && null !== o)
            f = o;
        else if ("function" == typeof f)
            return f.call(s);
        return null === f && "display" == u ? "" : f
    }
    function wu(n, t, i, r) {
        n.aoColumns[i].fnSetData(n.aoData[t]._aData, r, {
            settings: n,
            row: t,
            col: i
        })
    }
    function sr(t) {
        return n.map(t.match(/(\\.|[^\.])+/g) || [""], function(n) {
            return n.replace(/\\./g, ".")
        })
    }
    function ft(t) {
        var i, u;
        return n.isPlainObject(t) ? (i = {},
        n.each(t, function(n, t) {
            t && (i[n] = ft(t))
        }),
        function(n, t, u, f) {
            var e = i[t] || i._;
            return e !== r ? e(n, t, u, f) : n
        }
        ) : null === t ? function(n) {
            return n
        }
        : "function" == typeof t ? function(n, i, r, u) {
            return t(n, i, r, u)
        }
        : "string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("(")) ? (u = function(t, i, f) {
            var s, o, e, h;
            if ("" !== f)
                for (o = sr(f),
                e = 0,
                h = o.length; e < h; e++) {
                    if (f = o[e].match(ri),
                    s = o[e].match(lt),
                    f) {
                        if (o[e] = o[e].replace(ri, ""),
                        "" !== o[e] && (t = t[o[e]]),
                        s = [],
                        o.splice(0, e + 1),
                        o = o.join("."),
                        n.isArray(t))
                            for (e = 0,
                            h = t.length; e < h; e++)
                                s.push(u(t[e], i, o));
                        t = f[0].substring(1, f[0].length - 1);
                        t = "" === t ? s : s.join(t);
                        break
                    } else if (s) {
                        o[e] = o[e].replace(lt, "");
                        t = t[o[e]]();
                        continue
                    }
                    if (null === t || t[o[e]] === r)
                        return r;
                    t = t[o[e]]
                }
            return t
        }
        ,
        function(n, i) {
            return u(n, i, t)
        }
        ) : function(n) {
            return n[t]
        }
    }
    function et(t) {
        if (n.isPlainObject(t))
            return et(t._);
        if (null === t)
            return function() {}
            ;
        if ("function" == typeof t)
            return function(n, i, r) {
                t(n, "set", i, r)
            }
            ;
        if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
            var i = function(t, u, f) {
                var f = sr(f), o, h, s, e, c;
                for (o = f[f.length - 1],
                e = 0,
                c = f.length - 1; e < c; e++) {
                    if (h = f[e].match(ri),
                    s = f[e].match(lt),
                    h) {
                        if (f[e] = f[e].replace(ri, ""),
                        t[f[e]] = [],
                        o = f.slice(),
                        o.splice(0, e + 1),
                        h = o.join("."),
                        n.isArray(u))
                            for (s = 0,
                            c = u.length; s < c; s++)
                                o = {},
                                i(o, u[s], h),
                                t[f[e]].push(o);
                        else
                            t[f[e]] = u;
                        return
                    }
                    s && (f[e] = f[e].replace(lt, ""),
                    t = t[f[e]](u));
                    (null === t[f[e]] || t[f[e]] === r) && (t[f[e]] = {});
                    t = t[f[e]]
                }
                o.match(lt) ? t[o.replace(lt, "")](u) : t[o.replace(ri, "")] = u
            };
            return function(n, r) {
                return i(n, r, t)
            }
        }
        return function(n, i) {
            n[t] = i
        }
    }
    function hr(n) {
        return b(n.aoData, "_aData")
    }
    function si(n) {
        n.aoData.length = 0;
        n.aiDisplayMaster.length = 0;
        n.aiDisplay.length = 0;
        n.aIds = {}
    }
    function hi(n, t, i) {
        for (var f = -1, u = 0, e = n.length; u < e; u++)
            n[u] == t ? f = u : n[u] > t && n[u]--;
        -1 != f && i === r && n.splice(f, 1)
    }
    function bt(n, t, i, u) {
        var f = n.aoData[t], s, e = function(i, r) {
            for (; i.childNodes.length; )
                i.removeChild(i.firstChild);
            i.innerHTML = y(n, t, r, "display")
        }, o;
        if ("dom" !== i && (i && "auto" !== i || "dom" !== f.src)) {
            if (o = f.anCells,
            o)
                if (u !== r)
                    e(o[u], u);
                else
                    for (i = 0,
                    s = o.length; i < s; i++)
                        e(o[i], i)
        } else
            f._aData = cr(n, f, u, u === r ? r : f._aData).data;
        if (f._aSortData = null,
        f._aFilterData = null,
        e = n.aoColumns,
        u !== r)
            e[u].sType = null;
        else {
            for (i = 0,
            s = e.length; i < s; i++)
                e[i].sType = null;
            ar(n, f)
        }
    }
    function cr(t, i, u, f) {
        var s = [], e = i.firstChild, h, o, c = 0, l, p = t.aoColumns, v = t._rowReadObject, f = f !== r ? f : v ? {} : [], a = function(n, t) {
            if ("string" == typeof n) {
                var i = n.indexOf("@");
                -1 !== i && (i = n.substring(i + 1),
                et(n)(f, t.getAttribute(i)))
            }
        }, y = function(t) {
            (u === r || u === c) && (o = p[c],
            l = n.trim(t.innerHTML),
            o && o._bAttrSrc ? (et(o.mData._)(f, l),
            a(o.mData.sort, t),
            a(o.mData.type, t),
            a(o.mData.filter, t)) : v ? (o._setter || (o._setter = et(o.mData)),
            o._setter(f, l)) : f[c] = l);
            c++
        };
        if (e)
            for (; e; )
                h = e.nodeName.toUpperCase(),
                ("TD" == h || "TH" == h) && (y(e),
                s.push(e)),
                e = e.nextSibling;
        else
            for (s = i.anCells,
            e = 0,
            h = s.length; e < h; e++)
                y(s[e]);
        return (i = i.firstChild ? i : i.nTr) && (i = i.getAttribute("id")) && et(t.rowId)(f, i),
        {
            data: f,
            cells: s
        }
    }
    function lr(n, t, r, u) {
        var h = n.aoData[t], l = h._aData, a = [], c, s, f, e, v;
        if (null === h.nTr) {
            for (c = r || i.createElement("tr"),
            h.nTr = c,
            h.anCells = a,
            c._DT_RowIndex = t,
            ar(n, h),
            e = 0,
            v = n.aoColumns.length; e < v; e++)
                f = n.aoColumns[e],
                s = r ? u[e] : i.createElement(f.sCellType),
                s._DT_CellIndex = {
                    row: t,
                    column: e
                },
                a.push(s),
                (!r || f.mRender || f.mData !== e) && (s.innerHTML = y(n, t, e, "display")),
                f.sClass && (s.className += " " + f.sClass),
                f.bVisible && !r ? c.appendChild(s) : !f.bVisible && r && s.parentNode.removeChild(s),
                f.fnCreatedCell && f.fnCreatedCell.call(n.oInstance, s, y(n, t, e), l, t, e);
            o(n, "aoRowCreatedCallback", null, [c, l, t])
        }
        h.nTr.setAttribute("role", "row")
    }
    function ar(t, i) {
        var f = i.nTr, r = i._aData, u;
        f && (u = t.rowIdFn(r),
        u && (f.id = u),
        r.DT_RowClass && (u = r.DT_RowClass.split(" "),
        i.__rowc = i.__rowc ? nr(i.__rowc.concat(u)) : u,
        n(f).removeClass(i.__rowc.join(" ")).addClass(r.DT_RowClass)),
        r.DT_RowAttr && n(f).attr(r.DT_RowAttr),
        r.DT_RowData && n(f).data(r.DT_RowData))
    }
    function bu(t) {
        var r, e, u, c, i, f = t.nTHead, l = t.nTFoot, o = 0 === n("th, td", f).length, s = t.oClasses, h = t.aoColumns;
        for (o && (c = n("<tr/>").appendTo(f)),
        r = 0,
        e = h.length; r < e; r++)
            i = h[r],
            u = n(i.nTh).addClass(i.sClass),
            o && u.appendTo(c),
            t.oFeatures.bSort && (u.addClass(i.sSortingClass),
            !1 !== i.bSortable && (u.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
            kr(t, i.nTh, r))),
            i.sTitle != u[0].innerHTML && u.html(i.sTitle),
            nu(t, "header")(t, u, i, s);
        if (o && dt(t.aoHeader, f),
        n(f).find(">tr").attr("role", "row"),
        n(f).find(">tr>th, >tr>td").addClass(s.sHeaderTH),
        n(l).find(">tr>th, >tr>td").addClass(s.sFooterTH),
        null !== l)
            for (t = t.aoFooter[0],
            r = 0,
            e = t.length; r < e; r++)
                i = h[r],
                i.nTf = t[r].cell,
                i.sClass && n(i.nTf).addClass(i.sClass)
    }
    function kt(t, i, u) {
        var f, l, e, o = [], c = [], s = t.aoColumns.length, h;
        if (i) {
            for (u === r && (u = !1),
            f = 0,
            l = i.length; f < l; f++) {
                for (o[f] = i[f].slice(),
                o[f].nTr = i[f].nTr,
                e = s - 1; 0 <= e; e--)
                    t.aoColumns[e].bVisible || u || o[f].splice(e, 1);
                c.push([])
            }
            for (f = 0,
            l = o.length; f < l; f++) {
                if (t = o[f].nTr)
                    for (; e = t.firstChild; )
                        t.removeChild(e);
                for (e = 0,
                i = o[f].length; e < i; e++)
                    if (h = s = 1,
                    c[f][e] === r) {
                        for (t.appendChild(o[f][e].cell),
                        c[f][e] = 1; o[f + s] !== r && o[f][e].cell == o[f + s][e].cell; )
                            c[f + s][e] = 1,
                            s++;
                        for (; o[f][e + h] !== r && o[f][e].cell == o[f][e + h].cell; ) {
                            for (u = 0; u < s; u++)
                                c[f + u][e + h] = 1;
                            h++
                        }
                        n(o[f][e].cell).attr("rowspan", s).attr("colspan", h)
                    }
            }
        }
    }
    function ut(t) {
        var l = o(t, "aoPreDrawCallback", "preDraw", [t]), i, y, e, s, p;
        if (-1 !== n.inArray(!1, l))
            w(t, !1);
        else {
            var l = []
              , f = 0
              , h = t.asStripeClasses
              , b = h.length
              , c = t.oLanguage
              , i = t.iInitDisplayStart
              , u = "ssp" == v(t)
              , a = t.aiDisplay;
            if (t.bDrawing = !0,
            i !== r && -1 !== i && (t._iDisplayStart = u ? i : i >= t.fnRecordsDisplay() ? 0 : i,
            t.iInitDisplayStart = -1),
            i = t._iDisplayStart,
            y = t.fnDisplayEnd(),
            t.bDeferLoading)
                t.bDeferLoading = !1,
                t.iDraw++,
                w(t, !1);
            else if (u) {
                if (!t.bDestroying && !du(t))
                    return
            } else
                t.iDraw++;
            if (0 !== a.length)
                for (c = u ? t.aoData.length : y,
                u = u ? 0 : i; u < c; u++)
                    e = a[u],
                    s = t.aoData[e],
                    null === s.nTr && lr(t, e),
                    e = s.nTr,
                    0 !== b && (p = h[f % b],
                    s._sRowStripe != p && (n(e).removeClass(s._sRowStripe).addClass(p),
                    s._sRowStripe = p)),
                    o(t, "aoRowCallback", null, [e, s._aData, f, u]),
                    l.push(e),
                    f++;
            else
                f = c.sZeroRecords,
                1 == t.iDraw && "ajax" == v(t) ? f = c.sLoadingRecords : c.sEmptyTable && 0 === t.fnRecordsTotal() && (f = c.sEmptyTable),
                l[0] = n("<tr/>", {
                    "class": b ? h[0] : ""
                }).append(n("<td />", {
                    valign: "top",
                    colSpan: pt(t),
                    "class": t.oClasses.sRowEmpty
                }).html(f))[0];
            o(t, "aoHeaderCallback", "header", [n(t.nTHead).children("tr")[0], hr(t), i, y, a]);
            o(t, "aoFooterCallback", "footer", [n(t.nTFoot).children("tr")[0], hr(t), i, y, a]);
            h = n(t.nTBody);
            h.children().detach();
            h.append(n(l));
            o(t, "aoDrawCallback", "draw", [t]);
            t.bSorted = !1;
            t.bFiltered = !1;
            t.bDrawing = !1
        }
    }
    function ot(n, t) {
        var i = n.oFeatures
          , r = i.bFilter;
        i.bSort && df(n);
        r ? gt(n, n.oPreviousSearch) : n.aiDisplay = n.aiDisplayMaster.slice();
        !0 !== t && (n._iDisplayStart = 0);
        n._drawHold = t;
        ut(n);
        n._drawHold = !1
    }
    function ku(t) {
        var v = t.oClasses, y = n(t.nTable), y = n("<div/>").insertBefore(y), l = t.oFeatures, c = n("<div/>", {
            id: t.sTableId + "_wrapper",
            "class": v.sWrapper + (t.nTFoot ? "" : " " + v.sNoFooter)
        }), a, e, r, i, o, f, s, h;
        for (t.nHolding = y[0],
        t.nTableWrapper = c[0],
        t.nTableReinsertBefore = t.nTable.nextSibling,
        a = t.sDom.split(""),
        h = 0; h < a.length; h++) {
            if (e = null,
            r = a[h],
            "<" == r) {
                if (i = n("<div/>")[0],
                o = a[h + 1],
                "'" == o || '"' == o) {
                    for (f = "",
                    s = 2; a[h + s] != o; )
                        f += a[h + s],
                        s++;
                    "H" == f ? f = v.sJUIHeader : "F" == f && (f = v.sJUIFooter);
                    -1 != f.indexOf(".") ? (o = f.split("."),
                    i.id = o[0].substr(1, o[0].length - 1),
                    i.className = o[1]) : "#" == f.charAt(0) ? i.id = f.substr(1, f.length - 1) : i.className = f;
                    h += s
                }
                c.append(i);
                c = n(i)
            } else if (">" == r)
                c = c.parent();
            else if ("l" == r && l.bPaginate && l.bLengthChange)
                e = af(t);
            else if ("f" == r && l.bFilter)
                e = tf(t);
            else if ("r" == r && l.bProcessing)
                e = yf(t);
            else if ("t" == r)
                e = pf(t);
            else if ("i" == r && l.bInfo)
                e = hf(t);
            else if ("p" == r && l.bPaginate)
                e = vf(t);
            else if (0 !== u.ext.feature.length)
                for (i = u.ext.feature,
                s = 0,
                o = i.length; s < o; s++)
                    if (r == i[s].cFeature) {
                        e = i[s].fnInit(t);
                        break
                    }
            e && (i = t.aanFeatures,
            i[r] || (i[r] = []),
            i[r].push(e),
            c.append(e))
        }
        y.replaceWith(c);
        t.nHolding = null
    }
    function dt(t, i) {
        var c = n(i).children("tr"), l, u, r, f, s, h, a, e, o, v;
        for (t.splice(0, t.length),
        r = 0,
        h = c.length; r < h; r++)
            t.push([]);
        for (r = 0,
        h = c.length; r < h; r++)
            for (l = c[r],
            u = l.firstChild; u; ) {
                if ("TD" == u.nodeName.toUpperCase() || "TH" == u.nodeName.toUpperCase()) {
                    for (e = 1 * u.getAttribute("colspan"),
                    o = 1 * u.getAttribute("rowspan"),
                    e = !e || 0 === e || 1 === e ? 1 : e,
                    o = !o || 0 === o || 1 === o ? 1 : o,
                    f = 0,
                    s = t[r]; s[f]; )
                        f++;
                    for (a = f,
                    v = 1 === e ? !0 : !1,
                    s = 0; s < e; s++)
                        for (f = 0; f < o; f++)
                            t[r + f][a + s] = {
                                cell: u,
                                unique: v
                            },
                            t[r + f].nTr = l
                }
                u = u.nextSibling
            }
    }
    function ci(n, t, i) {
        var u = [], t, f, r, e;
        for (i || (i = n.aoHeader,
        t && (i = [],
        dt(i, t))),
        t = 0,
        f = i.length; t < f; t++)
            for (r = 0,
            e = i[t].length; r < e; r++)
                !i[t][r].unique || u[r] && n.bSortCellsTop || (u[r] = i[t][r].cell);
        return u
    }
    function li(t, i, r) {
        var e, c, f, i;
        o(t, "aoServerParams", "serverParams", [i]);
        i && n.isArray(i) && (e = {},
        c = /(.*?)\[\]$/,
        n.each(i, function(n, t) {
            var i = t.name.match(c);
            i ? (i = i[0],
            e[i] || (e[i] = []),
            e[i].push(t.value)) : e[t.name] = t.value
        }),
        i = e);
        var s, u = t.ajax, l = t.oInstance, h = function(n) {
            o(t, null, "xhr", [t, n, t.jqXHR]);
            r(n)
        };
        n.isPlainObject(u) && u.data && (s = u.data,
        f = n.isFunction(s) ? s(i, t) : s,
        i = n.isFunction(s) && f ? f : n.extend(!0, i, f),
        delete u.data);
        f = {
            data: i,
            success: function(n) {
                var i = n.error || n.sError;
                i && tt(t, 0, i);
                t.json = n;
                h(n)
            },
            dataType: "json",
            cache: !1,
            type: t.sServerMethod,
            error: function(i, r) {
                var u = o(t, null, "xhr", [t, null, t.jqXHR]);
                -1 === n.inArray(!0, u) && ("parsererror" == r ? tt(t, 0, "Invalid JSON response", 1) : 4 === i.readyState && tt(t, 0, "Ajax error", 7));
                w(t, !1)
            }
        };
        t.oAjaxData = i;
        o(t, null, "preXhr", [t, i]);
        t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, n.map(i, function(n, t) {
            return {
                name: t,
                value: n
            }
        }), h, t) : t.sAjaxSource || "string" == typeof u ? t.jqXHR = n.ajax(n.extend(f, {
            url: u || t.sAjaxSource
        })) : n.isFunction(u) ? t.jqXHR = u.call(l, i, h, t) : (t.jqXHR = n.ajax(n.extend(f, u)),
        u.data = s)
    }
    function du(n) {
        return n.bAjaxDataGet ? (n.iDraw++,
        w(n, !0),
        li(n, gu(n), function(t) {
            nf(n, t)
        }),
        !1) : !0
    }
    function gu(t) {
        var e = t.aoColumns, v = e.length, s = t.oFeatures, l = t.oPreviousSearch, p = t.aoPreSearchCols, r, a = [], o, f, h, y = ht(t), i, c;
        for (r = t._iDisplayStart,
        o = !1 !== s.bPaginate ? t._iDisplayLength : -1,
        i = function(n, t) {
            a.push({
                name: n,
                value: t
            })
        }
        ,
        i("sEcho", t.iDraw),
        i("iColumns", v),
        i("sColumns", b(e, "sName").join(",")),
        i("iDisplayStart", r),
        i("iDisplayLength", o),
        c = {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: r,
            length: o,
            search: {
                value: l.sSearch,
                regex: l.bRegex
            }
        },
        r = 0; r < v; r++)
            f = e[r],
            h = p[r],
            o = "function" == typeof f.mData ? "function" : f.mData,
            c.columns.push({
                data: o,
                name: f.sName,
                searchable: f.bSearchable,
                orderable: f.bSortable,
                search: {
                    value: h.sSearch,
                    regex: h.bRegex
                }
            }),
            i("mDataProp_" + r, o),
            s.bFilter && (i("sSearch_" + r, h.sSearch),
            i("bRegex_" + r, h.bRegex),
            i("bSearchable_" + r, f.bSearchable)),
            s.bSort && i("bSortable_" + r, f.bSortable);
        return s.bFilter && (i("sSearch", l.sSearch),
        i("bRegex", l.bRegex)),
        s.bSort && (n.each(y, function(n, t) {
            c.order.push({
                column: t.col,
                dir: t.dir
            });
            i("iSortCol_" + n, t.col);
            i("sSortDir_" + n, t.dir)
        }),
        i("iSortingCols", y.length)),
        e = u.ext.legacy.ajax,
        null === e ? t.sAjaxSource ? a : c : e ? a : c
    }
    function nf(n, t) {
        var f = ai(n, t)
          , i = t.sEcho !== r ? t.sEcho : t.draw
          , u = t.iTotalRecords !== r ? t.iTotalRecords : t.recordsTotal
          , e = t.iTotalDisplayRecords !== r ? t.iTotalDisplayRecords : t.recordsFiltered;
        if (i) {
            if (1 * i < n.iDraw)
                return;
            n.iDraw = 1 * i
        }
        for (si(n),
        n._iRecordsTotal = parseInt(u, 10),
        n._iRecordsDisplay = parseInt(e, 10),
        i = 0,
        u = f.length; i < u; i++)
            rt(n, f[i]);
        n.aiDisplay = n.aiDisplayMaster.slice();
        n.bAjaxDataGet = !1;
        ut(n);
        n._bInitComplete || yi(n, t);
        n.bAjaxDataGet = !0;
        w(n, !1)
    }
    function ai(t, i) {
        var u = n.isPlainObject(t.ajax) && t.ajax.dataSrc !== r ? t.ajax.dataSrc : t.sAjaxDataProp;
        return "data" === u ? i.aaData || i[u] : "" !== u ? ft(u)(i) : i
    }
    function tf(t) {
        var u = t.oClasses
          , s = t.sTableId
          , h = t.oLanguage
          , r = t.oPreviousSearch
          , o = t.aanFeatures
          , f = '<input type="search" class="' + u.sFilterInput + '"/>'
          , e = h.sSearch
          , e = e.match(/_INPUT_/) ? e.replace("_INPUT_", f) : e + f
          , u = n("<div/>", {
            id: o.f ? null : s + "_filter",
            "class": u.sFilter
        }).append(n("<label/>").append(e))
          , o = function() {
            var n = this.value ? this.value : "";
            n != r.sSearch && (gt(t, {
                sSearch: n,
                bRegex: r.bRegex,
                bSmart: r.bSmart,
                bCaseInsensitive: r.bCaseInsensitive
            }),
            t._iDisplayStart = 0,
            ut(t))
        }
          , f = null !== t.searchDelay ? t.searchDelay : "ssp" === v(t) ? 400 : 0
          , c = n("input", u).val(r.sSearch).attr("placeholder", h.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", f ? pi(o, f) : o).bind("keypress.DT", function(n) {
            if (13 == n.keyCode)
                return !1
        }).attr("aria-controls", s);
        n(t.nTable).on("search.dt.DT", function(n, u) {
            if (t === u)
                try {
                    c[0] !== i.activeElement && c.val(r.sSearch)
                } catch (f) {}
        });
        return u[0]
    }
    function gt(n, t, i) {
        var f = n.oPreviousSearch
          , u = n.aoPreSearchCols
          , e = function(n) {
            f.sSearch = n.sSearch;
            f.bRegex = n.bRegex;
            f.bSmart = n.bSmart;
            f.bCaseInsensitive = n.bCaseInsensitive
        };
        if (or(n),
        "ssp" != v(n)) {
            for (ff(n, t.sSearch, i, t.bEscapeRegex !== r ? !t.bEscapeRegex : t.bRegex, t.bSmart, t.bCaseInsensitive),
            e(t),
            t = 0; t < u.length; t++)
                uf(n, u[t].sSearch, t, u[t].bEscapeRegex !== r ? !u[t].bEscapeRegex : u[t].bRegex, u[t].bSmart, u[t].bCaseInsensitive);
            rf(n)
        } else
            e(t);
        n.bFiltered = !0;
        o(n, null, "search", [n])
    }
    function rf(t) {
        for (var s = u.ext.search, i = t.aiDisplay, e, r, o = 0, c = s.length; o < c; o++) {
            for (var h = [], f = 0, l = i.length; f < l; f++)
                r = i[f],
                e = t.aoData[r],
                s[o](t, e._aFilterData, r, e._aData, f) && h.push(r);
            i.length = 0;
            n.merge(i, h)
        }
    }
    function uf(n, t, i, r, u, f) {
        if ("" !== t)
            for (var e = n.aiDisplay, r = vr(t, r, u, f), u = e.length - 1; 0 <= u; u--)
                t = n.aoData[e[u]]._aFilterData[i],
                r.test(t) || e.splice(u, 1)
    }
    function ff(n, t, i, r, f, e) {
        var r = vr(t, r, f, e), f = n.oPreviousSearch.sSearch, e = n.aiDisplayMaster, o;
        if (0 !== u.ext.search.length && (i = !0),
        o = ef(n),
        0 >= t.length)
            n.aiDisplay = e.slice();
        else
            for ((o || i || f.length > t.length || 0 !== t.indexOf(f) || n.bSorted) && (n.aiDisplay = e.slice()),
            t = n.aiDisplay,
            i = t.length - 1; 0 <= i; i--)
                r.test(n.aoData[t[i]]._sFilterRow) || t.splice(i, 1)
    }
    function vr(t, i, r, u) {
        return t = i ? t : vi(t),
        r && (t = "^(?=.*?" + n.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(n) {
            if ('"' === n.charAt(0))
                var t = n.match(/^"(.*)"$/)
                  , n = t ? t[1] : n;
            return n.replace('"', "")
        }).join(")(?=.*?") + ").*$"),
        RegExp(t, u ? "i" : "")
    }
    function vi(n) {
        return n.replace(pe, "\\$1")
    }
    function ef(n) {
        var s = n.aoColumns, i, r, f, h, c, e, t, o, l = u.ext.type.search;
        for (i = !1,
        r = 0,
        h = n.aoData.length; r < h; r++)
            if (o = n.aoData[r],
            !o._aFilterData) {
                for (e = [],
                f = 0,
                c = s.length; f < c; f++)
                    i = s[f],
                    i.bSearchable ? (t = y(n, r, f, "filter"),
                    l[i.sType] && (t = l[i.sType](t)),
                    null === t && (t = ""),
                    "string" != typeof t && t.toString && (t = t.toString())) : t = "",
                    t.indexOf && -1 !== t.indexOf("&") && (tr.innerHTML = t,
                    t = we ? tr.textContent : tr.innerText),
                    t.replace && (t = t.replace(/[\r\n]/g, "")),
                    e.push(t);
                o._aFilterData = e;
                o._sFilterRow = e.join("  ");
                i = !0
            }
        return i
    }
    function of(n) {
        return {
            search: n.sSearch,
            smart: n.bSmart,
            regex: n.bRegex,
            caseInsensitive: n.bCaseInsensitive
        }
    }
    function sf(n) {
        return {
            sSearch: n.search,
            bSmart: n.smart,
            bRegex: n.regex,
            bCaseInsensitive: n.caseInsensitive
        }
    }
    function hf(t) {
        var i = t.sTableId
          , r = t.aanFeatures.i
          , u = n("<div/>", {
            "class": t.oClasses.sInfo,
            id: r ? null : i + "_info"
        });
        return r || (t.aoDrawCallback.push({
            fn: cf,
            sName: "information"
        }),
        u.attr("role", "status").attr("aria-live", "polite"),
        n(t.nTable).attr("aria-describedby", i + "_info")),
        u[0]
    }
    function cf(t) {
        var f = t.aanFeatures.i;
        if (0 !== f.length) {
            var i = t.oLanguage
              , o = t._iDisplayStart + 1
              , s = t.fnDisplayEnd()
              , e = t.fnRecordsTotal()
              , u = t.fnRecordsDisplay()
              , r = u ? i.sInfo : i.sInfoEmpty;
            u !== e && (r += " " + i.sInfoFiltered);
            r += i.sInfoPostFix;
            r = lf(t, r);
            i = i.fnInfoCallback;
            null !== i && (r = i.call(t.oInstance, t, o, s, e, u, r));
            n(f).html(r)
        }
    }
    function lf(n, t) {
        var i = n.fnFormatNumber
          , u = n._iDisplayStart + 1
          , r = n._iDisplayLength
          , f = n.fnRecordsDisplay()
          , e = -1 === r;
        return t.replace(/_START_/g, i.call(n, u)).replace(/_END_/g, i.call(n, n.fnDisplayEnd())).replace(/_MAX_/g, i.call(n, n.fnRecordsTotal())).replace(/_TOTAL_/g, i.call(n, f)).replace(/_PAGE_/g, i.call(n, e ? 1 : Math.ceil(u / r))).replace(/_PAGES_/g, i.call(n, e ? 1 : Math.ceil(f / r)))
    }
    function ni(n) {
        var t, r, e = n.iInitDisplayStart, i = n.aoColumns, u, f;
        if (r = n.oFeatures,
        f = n.bDeferLoading,
        n.bInitialised) {
            for (ku(n),
            bu(n),
            kt(n, n.aoHeader),
            kt(n, n.aoFooter),
            w(n, !0),
            r.bAutoWidth && wr(n),
            t = 0,
            r = i.length; t < r; t++)
                u = i[t],
                u.sWidth && (u.nTh.style.width = h(u.sWidth));
            o(n, null, "preInit", [n]);
            ot(n);
            i = v(n);
            ("ssp" != i || f) && ("ajax" == i ? li(n, [], function(i) {
                var r = ai(n, i);
                for (t = 0; t < r.length; t++)
                    rt(n, r[t]);
                n.iInitDisplayStart = e;
                ot(n);
                w(n, !1);
                yi(n, i)
            }, n) : (w(n, !1),
            yi(n)))
        } else
            setTimeout(function() {
                ni(n)
            }, 200)
    }
    function yi(n, t) {
        n._bInitComplete = !0;
        (t || n.oInit.aaData) && st(n);
        o(n, null, "plugin-init", [n, t]);
        o(n, "aoInitComplete", "init", [n, t])
    }
    function yr(n, t) {
        var i = parseInt(t, 10);
        n._iDisplayLength = i;
        gr(n);
        o(n, null, "length", [n, i])
    }
    function af(t) {
        for (var r, o = t.oClasses, e = t.sTableId, i = t.aLengthMenu, u = n.isArray(i[0]), s = u ? i[0] : i, i = u ? i[1] : i, u = n("<select/>", {
            name: e + "_length",
            "aria-controls": e,
            "class": o.sLengthSelect
        }), f = 0, h = s.length; f < h; f++)
            u[0][f] = new Option(i[f],s[f]);
        return r = n("<div><label/><\/div>").addClass(o.sLength),
        t.aanFeatures.l || (r[0].id = e + "_length"),
        r.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", u[0].outerHTML)),
        n("select", r).val(t._iDisplayLength).bind("change.DT", function() {
            yr(t, n(this).val());
            ut(t)
        }),
        n(t.nTable).bind("length.dt.DT", function(i, u, f) {
            t === u && n("select", r).val(f)
        }),
        r[0]
    }
    function vf(t) {
        var i = t.sPaginationType
          , r = u.ext.pager[i]
          , e = "function" == typeof r
          , o = function(n) {
            ut(n)
        }
          , i = n("<div/>").addClass(t.oClasses.sPaging + i)[0]
          , f = t.aanFeatures;
        return e || r.fnInit(t, i, o),
        f.p || (i.id = t.sTableId + "_paginate",
        t.aoDrawCallback.push({
            fn: function(n) {
                if (e)
                    for (var u = n._iDisplayStart, i = n._iDisplayLength, s = n.fnRecordsDisplay(), t = -1 === i, u = t ? 0 : Math.ceil(u / i), i = t ? 1 : Math.ceil(s / i), s = r(u, i), t = 0, h = f.p.length; t < h; t++)
                        nu(n, "pageButton")(n, f.p[t], t, s, u, i);
                else
                    r.fnUpdate(n, o)
            },
            sName: "pagination"
        })),
        i
    }
    function pr(n, t, i) {
        var r = n._iDisplayStart
          , u = n._iDisplayLength
          , f = n.fnRecordsDisplay();
        return 0 === f || -1 === u ? r = 0 : "number" == typeof t ? (r = t * u,
        r > f && (r = 0)) : "first" == t ? r = 0 : "previous" == t ? (r = 0 <= u ? r - u : 0,
        0 > r && (r = 0)) : "next" == t ? r + u < f && (r += u) : "last" == t ? r = Math.floor((f - 1) / u) * u : tt(n, 0, "Unknown paging action: " + t, 5),
        t = n._iDisplayStart !== r,
        n._iDisplayStart = r,
        t && (o(n, null, "page", [n]),
        i && ut(n)),
        t
    }
    function yf(t) {
        return n("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            "class": t.oClasses.sProcessing
        }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
    }
    function w(t, i) {
        t.oFeatures.bProcessing && n(t.aanFeatures.r).css("display", i ? "block" : "none");
        o(t, null, "processing", [t, i])
    }
    function pf(t) {
        var i = n(t.nTable), f;
        if (i.attr("role", "grid"),
        f = t.oScroll,
        "" === f.sX && "" === f.sY)
            return t.nTable;
        var u = f.sX
          , c = f.sY
          , r = t.oClasses
          , s = i.children("caption")
          , l = s.length ? s[0]._captionSide : null
          , e = n(i[0].cloneNode(!1))
          , y = n(i[0].cloneNode(!1))
          , o = i.children("tfoot");
        o.length || (o = null);
        e = n("<div/>", {
            "class": r.sScrollWrapper
        }).append(n("<div/>", {
            "class": r.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: u ? u ? h(u) : null : "100%"
        }).append(n("<div/>", {
            "class": r.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: f.sXInner || "100%"
        }).append(e.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(i.children("thead"))))).append(n("<div/>", {
            "class": r.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: u ? h(u) : null
        }).append(i));
        o && e.append(n("<div/>", {
            "class": r.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: u ? u ? h(u) : null : "100%"
        }).append(n("<div/>", {
            "class": r.sScrollFootInner
        }).append(y.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(i.children("tfoot")))));
        var i = e.children()
          , a = i[0]
          , r = i[1]
          , v = o ? i[2] : null;
        if (u)
            n(r).on("scroll.DT", function() {
                var n = this.scrollLeft;
                a.scrollLeft = n;
                o && (v.scrollLeft = n)
            });
        return n(r).css(c && f.bCollapse ? "max-height" : "height", c),
        t.nScrollHead = a,
        t.nScrollBody = r,
        t.nScrollFoot = v,
        t.aoDrawCallback.push({
            fn: ti,
            sName: "scrolling"
        }),
        e[0]
    }
    function ti(t) {
        var f = t.oScroll, s = f.sX, v = f.sXInner, p = f.sY, f = f.iBarWidth, e = n(t.nScrollHead), at = e[0].style, i = e.children("div"), ft = i[0].style, yt = i.children("table"), i = t.nScrollBody, y = n(i), d = i.style, nt = n(t.nScrollFoot).children("div"), pt = nt.children("table"), w = n(t.nTHead), u = n(t.nTable), et = u[0], b = et.style, c = t.nTFoot ? n(t.nTFoot) : null, ot = t.oBrowser, it = ot.bScrollOversize, l, o, a, k, rt = [], ut = [], ht = [], ct, lt = function(n) {
            n = n.style;
            n.paddingTop = "0";
            n.paddingBottom = "0";
            n.borderTopWidth = "0";
            n.borderBottomWidth = "0";
            n.height = 0
        };
        o = i.scrollHeight > i.clientHeight;
        t.scrollBarVis !== o && t.scrollBarVis !== r ? (t.scrollBarVis = o,
        st(t)) : (t.scrollBarVis = o,
        u.children("thead, tfoot").remove(),
        k = w.clone().prependTo(u),
        w = w.find("tr"),
        o = k.find("tr"),
        k.find("th, td").removeAttr("tabindex"),
        c && (a = c.clone().prependTo(u),
        l = c.find("tr"),
        a = a.find("tr")),
        s || (d.width = "100%",
        e[0].style.width = "100%"),
        n.each(ci(t, k), function(n, i) {
            ct = vt(t, n);
            i.style.width = t.aoColumns[ct].sWidth
        }),
        c && g(function(n) {
            n.style.width = ""
        }, a),
        e = u.outerWidth(),
        "" === s ? (b.width = "100%",
        it && (u.find("tbody").height() > i.offsetHeight || "scroll" == y.css("overflow-y")) && (b.width = h(u.outerWidth() - f)),
        e = u.outerWidth()) : "" !== v && (b.width = h(v),
        e = u.outerWidth()),
        g(lt, o),
        g(function(t) {
            ht.push(t.innerHTML);
            rt.push(h(n(t).css("width")))
        }, o),
        g(function(n, t) {
            n.style.width = rt[t]
        }, w),
        n(o).height(0),
        c && (g(lt, a),
        g(function(t) {
            ut.push(h(n(t).css("width")))
        }, a),
        g(function(n, t) {
            n.style.width = ut[t]
        }, l),
        n(a).height(0)),
        g(function(n, t) {
            n.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + ht[t] + "<\/div>";
            n.style.width = rt[t]
        }, o),
        c && g(function(n, t) {
            n.innerHTML = "";
            n.style.width = ut[t]
        }, a),
        u.outerWidth() < e ? (l = i.scrollHeight > i.offsetHeight || "scroll" == y.css("overflow-y") ? e + f : e,
        it && (i.scrollHeight > i.offsetHeight || "scroll" == y.css("overflow-y")) && (b.width = h(l - f)),
        ("" === s || "" !== v) && tt(t, 1, "Possible column misalignment", 6)) : l = "100%",
        d.width = h(l),
        at.width = h(l),
        c && (t.nScrollFoot.style.width = h(l)),
        !p && it && (d.height = h(et.offsetHeight + f)),
        s = u.outerWidth(),
        yt[0].style.width = h(s),
        ft.width = h(s),
        v = u.height() > i.clientHeight || "scroll" == y.css("overflow-y"),
        p = "padding" + (ot.bScrollbarLeft ? "Left" : "Right"),
        ft[p] = v ? f + "px" : "0px",
        c && (pt[0].style.width = h(s),
        nt[0].style.width = h(s),
        nt[0].style[p] = v ? f + "px" : "0px"),
        y.scroll(),
        (t.bSorted || t.bFiltered) && !t._drawHold && (i.scrollTop = 0))
    }
    function g(n, t, i) {
        for (var e = 0, u = 0, o = t.length, r, f; u < o; ) {
            for (r = t[u].firstChild,
            f = i ? i[u].firstChild : null; r; )
                1 === r.nodeType && (i ? n(r, f, e) : n(r, e),
                e++),
                r = r.nextSibling,
                f = i ? f.nextSibling : null;
            u++
        }
    }
    function wr(i) {
        var s = i.nTable, a = i.aoColumns, v = i.oScroll, y = v.sY, p = v.sX, b = v.sXInner, u = a.length, o = wt(i, "bVisible"), c = n("th", i.nTHead), l = s.getAttribute("width"), e = s.parentNode, w = !1, r, f, k = i.oBrowser, v = k.bScrollOversize, d;
        for ((r = s.style.width) && -1 !== r.indexOf("%") && (l = r),
        r = 0; r < o.length; r++)
            f = a[o[r]],
            null !== f.sWidth && (f.sWidth = wf(f.sWidthOrig, e),
            w = !0);
        if (!v && (w || p || y || u != pt(i) || u != c.length)) {
            for (u = n(s).clone().css("visibility", "hidden").removeAttr("id"),
            u.find("tbody tr").remove(),
            d = n("<tr/>").appendTo(u.find("tbody")),
            u.find("thead, tfoot").remove(),
            u.append(n(i.nTHead).clone()).append(n(i.nTFoot).clone()),
            u.find("tfoot th, tfoot td").css("width", ""),
            c = ci(i, u.find("thead")[0]),
            r = 0; r < o.length; r++)
                f = a[o[r]],
                c[r].style.width = null !== f.sWidthOrig && "" !== f.sWidthOrig ? h(f.sWidthOrig) : "",
                f.sWidthOrig && p && n(c[r]).append(n("<div/>").css({
                    width: f.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
            if (i.aoData.length)
                for (r = 0; r < o.length; r++)
                    w = o[r],
                    f = a[w],
                    n(bf(i, w)).clone(!1).append(f.sContentPadding).appendTo(d);
            for (f = n("<div/>").css(p || y ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(u).appendTo(e),
            p && b ? u.width(b) : p ? (u.css("width", "auto"),
            u.removeAttr("width"),
            u.width() < e.clientWidth && l && u.width(e.clientWidth)) : y ? u.width(e.clientWidth) : l && u.width(l),
            r = y = 0; r < o.length; r++)
                e = n(c[r]),
                b = e.outerWidth() - e.width(),
                e = k.bBounding ? Math.ceil(c[r].getBoundingClientRect().width) : e.outerWidth(),
                y += e,
                a[o[r]].sWidth = h(e - b);
            s.style.width = h(y);
            f.remove()
        } else
            for (r = 0; r < u; r++)
                o = vt(i, r),
                null !== o && (a[o].sWidth = h(c.eq(r).width()));
        l && (s.style.width = h(l));
        (l || p) && !i._reszEvt && (s = function() {
            n(t).bind("resize.DT-" + i.sInstance, pi(function() {
                st(i)
            }))
        }
        ,
        v ? setTimeout(s, 1e3) : s(),
        i._reszEvt = !0)
    }
    function pi(n, t) {
        var u = t !== r ? t : 200, i, f;
        return function() {
            var t = this
              , e = +new Date
              , o = arguments;
            i && e < i + u ? (clearTimeout(f),
            f = setTimeout(function() {
                i = r;
                n.apply(t, o)
            }, u)) : (i = e,
            n.apply(t, o))
        }
    }
    function wf(t, r) {
        if (!t)
            return 0;
        var u = n("<div/>").css("width", h(t)).appendTo(r || i.body)
          , f = u[0].offsetWidth;
        return u.remove(),
        f
    }
    function bf(t, i) {
        var r = kf(t, i), u;
        return 0 > r ? null : (u = t.aoData[r],
        u.nTr ? u.anCells[i] : n("<td/>").html(y(t, r, i, "display"))[0])
    }
    function kf(n, t) {
        for (var i, u = -1, f = -1, r = 0, e = n.aoData.length; r < e; r++)
            i = y(n, r, t, "display") + "",
            i = i.replace(be, ""),
            i = i.replace(/&nbsp;/g, " "),
            i.length > u && (u = i.length,
            f = r);
        return f
    }
    function h(n) {
        return null === n ? "0px" : "number" == typeof n ? 0 > n ? "0px" : n + "px" : n.match(/\d$/) ? n + "px" : n
    }
    function ht(t) {
        var i, o, a = [], h = t.aoColumns, e, s, c, l, f;
        for (i = t.aaSortingFixed,
        o = n.isPlainObject(i),
        f = [],
        e = function(t) {
            t.length && !n.isArray(t[0]) ? f.push(t) : n.merge(f, t)
        }
        ,
        n.isArray(i) && e(i),
        o && i.pre && e(i.pre),
        e(t.aaSorting),
        o && i.post && e(i.post),
        t = 0; t < f.length; t++)
            for (l = f[t][0],
            e = h[l].aDataSort,
            i = 0,
            o = e.length; i < o; i++)
                s = e[i],
                c = h[s].sType || "string",
                f[t]._idx === r && (f[t]._idx = n.inArray(f[t][1], h[s].asSorting)),
                a.push({
                    src: l,
                    col: s,
                    dir: f[t][1],
                    index: f[t]._idx,
                    type: c,
                    formatter: u.ext.type.order[c + "-pre"]
                });
        return a
    }
    function df(n) {
        var t, f, r = [], h = u.ext.type.order, e = n.aoData, c = 0, s, o = n.aiDisplayMaster, i;
        for (or(n),
        i = ht(n),
        t = 0,
        f = i.length; t < f; t++)
            s = i[t],
            s.formatter && c++,
            ne(n, s.col);
        if ("ssp" != v(n) && 0 !== i.length) {
            for (t = 0,
            f = o.length; t < f; t++)
                r[o[t]] = t;
            c === i.length ? o.sort(function(n, t) {
                for (var u, f, s, h = i.length, c = e[n]._aSortData, l = e[t]._aSortData, o = 0; o < h; o++)
                    if (s = i[o],
                    u = c[s.col],
                    f = l[s.col],
                    u = u < f ? -1 : u > f ? 1 : 0,
                    0 !== u)
                        return "asc" === s.dir ? u : -u;
                return u = r[n],
                f = r[t],
                u < f ? -1 : u > f ? 1 : 0
            }) : o.sort(function(n, t) {
                for (var u, o, f, c = i.length, l = e[n]._aSortData, a = e[t]._aSortData, s = 0; s < c; s++)
                    if (f = i[s],
                    u = l[f.col],
                    o = a[f.col],
                    f = h[f.type + "-" + f.dir] || h["string-" + f.dir],
                    u = f(u, o),
                    0 !== u)
                        return u;
                return u = r[n],
                o = r[t],
                u < o ? -1 : u > o ? 1 : 0
            })
        }
        n.bSorted = !0
    }
    function gf(n) {
        for (var u, f, e, t, o = n.aoColumns, i = ht(n), n = n.oLanguage.oAria, r = 0, s = o.length; r < s; r++)
            t = o[r],
            u = t.asSorting,
            e = t.sTitle.replace(/<.*?>/g, ""),
            f = t.nTh,
            f.removeAttribute("aria-sort"),
            t.bSortable && (0 < i.length && i[0].col == r ? (f.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"),
            t = u[i[0].index + 1] || u[0]) : t = u[0],
            e += "asc" === t ? n.sSortAscending : n.sSortDescending),
            f.setAttribute("aria-label", e)
    }
    function br(t, i, u, f) {
        var e = t.aaSorting
          , o = t.aoColumns[i].asSorting
          , s = function(t, i) {
            var u = t._idx;
            return u === r && (u = n.inArray(t[1], o)),
            u + 1 < o.length ? u + 1 : i ? null : 0
        };
        "number" == typeof e[0] && (e = t.aaSorting = [e]);
        u && t.oFeatures.bSortMulti ? (u = n.inArray(i, b(e, "0")),
        -1 !== u ? (i = s(e[u], !0),
        null === i && 1 === e.length && (i = 0),
        null === i ? e.splice(u, 1) : (e[u][1] = o[i],
        e[u]._idx = i)) : (e.push([i, o[0], 0]),
        e[e.length - 1]._idx = 0)) : e.length && e[0][0] == i ? (i = s(e[0]),
        e.length = 1,
        e[0][1] = o[i],
        e[0]._idx = i) : (e.length = 0,
        e.push([i, o[0]]),
        e[0]._idx = 0);
        ot(t);
        "function" == typeof f && f(t)
    }
    function kr(n, t, i, r) {
        var u = n.aoColumns[i];
        dr(t, {}, function(t) {
            !1 !== u.bSortable && (n.oFeatures.bProcessing ? (w(n, !0),
            setTimeout(function() {
                br(n, i, t.shiftKey, r);
                "ssp" !== v(n) && w(n, !1)
            }, 0)) : br(n, i, t.shiftKey, r))
        })
    }
    function wi(t) {
        var e = t.aLastSort, o = t.oClasses.sSortColumn, f = ht(t), i = t.oFeatures, r, u;
        if (i.bSort && i.bSortClasses) {
            for (i = 0,
            r = e.length; i < r; i++)
                u = e[i].src,
                n(b(t.aoData, "anCells", u)).removeClass(o + (2 > i ? i + 1 : 3));
            for (i = 0,
            r = f.length; i < r; i++)
                u = f[i].src,
                n(b(t.aoData, "anCells", u)).addClass(o + (2 > i ? i + 1 : 3))
        }
        t.aLastSort = f
    }
    function ne(n, t) {
        var i = n.aoColumns[t], f = u.ext.order[i.sSortDataType], o;
        f && (o = f.call(n.oInstance, n, t, yt(n, t)));
        for (var e, s = u.ext.type.order[i.sType + "-pre"], r = 0, h = n.aoData.length; r < h; r++)
            (i = n.aoData[r],
            i._aSortData || (i._aSortData = []),
            !i._aSortData[t] || f) && (e = f ? o[r] : y(n, r, t, "sort"),
            i._aSortData[t] = s ? s(e) : e)
    }
    function bi(t) {
        if (t.oFeatures.bStateSave && !t.bDestroying) {
            var i = {
                time: +new Date,
                start: t._iDisplayStart,
                length: t._iDisplayLength,
                order: n.extend(!0, [], t.aaSorting),
                search: of(t.oPreviousSearch),
                columns: n.map(t.aoColumns, function(n, i) {
                    return {
                        visible: n.bVisible,
                        search: of(t.aoPreSearchCols[i])
                    }
                })
            };
            o(t, "aoStateSaveParams", "stateSaveParams", [t, i]);
            t.oSavedState = i;
            t.fnStateSaveCallback.call(t.oInstance, t, i)
        }
    }
    function te(t) {
        var u, s, e = t.aoColumns, i, f;
        if (t.oFeatures.bStateSave && (i = t.fnStateLoadCallback.call(t.oInstance, t),
        i && i.time && (u = o(t, "aoStateLoadParams", "stateLoadParams", [t, i]),
        -1 === n.inArray(!1, u) && (u = t.iStateDuration,
        !(0 < u && i.time < +new Date - 1e3 * u) && e.length === i.columns.length)))) {
            for (t.oLoadedState = n.extend(!0, {}, i),
            i.start !== r && (t._iDisplayStart = i.start,
            t.iInitDisplayStart = i.start),
            i.length !== r && (t._iDisplayLength = i.length),
            i.order !== r && (t.aaSorting = [],
            n.each(i.order, function(n, i) {
                t.aaSorting.push(i[0] >= e.length ? [0, i[1]] : i)
            })),
            i.search !== r && n.extend(t.oPreviousSearch, sf(i.search)),
            u = 0,
            s = i.columns.length; u < s; u++)
                f = i.columns[u],
                f.visible !== r && (e[u].bVisible = f.visible),
                f.search !== r && n.extend(t.aoPreSearchCols[u], sf(f.search));
            o(t, "aoStateLoaded", "stateLoaded", [t, i])
        }
    }
    function ki(t) {
        var i = u.settings
          , t = n.inArray(t, b(i, "nTable"));
        return -1 !== t ? i[t] : null
    }
    function tt(n, i, r, f) {
        if (r = "DataTables warning: " + (n ? "table id=" + n.sTableId + " - " : "") + r,
        f && (r += ". For more information about this error, please see http://datatables.net/tn/" + f),
        i)
            t.console && console.log && console.log(r);
        else if (i = u.ext,
        i = i.sErrMode || i.errMode,
        n && o(n, null, "error", [n, f, r]),
        "alert" == i)
            alert(r);
        else {
            if ("throw" == i)
                throw Error(r);
            "function" == typeof i && i(n, f, r)
        }
    }
    function k(t, i, u, f) {
        n.isArray(u) ? n.each(u, function(r, u) {
            n.isArray(u) ? k(t, i, u[0], u[1]) : k(t, i, u)
        }) : (f === r && (f = u),
        i[u] !== r && (t[f] = i[u]))
    }
    function ie(t, i, r) {
        var f, u;
        for (u in i)
            i.hasOwnProperty(u) && (f = i[u],
            n.isPlainObject(f) ? (n.isPlainObject(t[u]) || (t[u] = {}),
            n.extend(!0, t[u], f)) : t[u] = r && "data" !== u && "aaData" !== u && n.isArray(f) ? f.slice() : f);
        return t
    }
    function dr(t, i, r) {
        n(t).bind("click.DT", i, function(n) {
            t.blur();
            r(n)
        }).bind("keypress.DT", i, function(n) {
            13 === n.which && (n.preventDefault(),
            r(n))
        }).bind("selectstart.DT", function() {
            return !1
        })
    }
    function a(n, t, i, r) {
        i && n[t].push({
            fn: i,
            sName: r
        })
    }
    function o(t, i, r, u) {
        var f = [];
        return i && (f = n.map(t[i].slice().reverse(), function(n) {
            return n.fn.apply(t.oInstance, u)
        })),
        null !== r && (i = n.Event(r + ".dt"),
        n(t.nTable).trigger(i, u),
        f.push(i.result)),
        f
    }
    function gr(n) {
        var t = n._iDisplayStart
          , r = n.fnDisplayEnd()
          , i = n._iDisplayLength;
        t >= r && (t = r - i);
        t -= t % i;
        (-1 === i || 0 > t) && (t = 0);
        n._iDisplayStart = t
    }
    function nu(t, i) {
        var r = t.renderer
          , f = u.ext.renderer[i];
        return n.isPlainObject(r) && r[i] ? f[r[i]] || f._ : "string" == typeof r ? f[r] || f._ : f._
    }
    function v(n) {
        return n.oFeatures.bServerSide ? "ssp" : n.ajax || n.sAjaxSource ? "ajax" : "dom"
    }
    function di(n, t) {
        var i = []
          , i = cu.numbers_length
          , r = Math.floor(i / 2);
        return t <= i ? i = ct(0, t) : n <= r ? (i = ct(0, i - 2),
        i.push("ellipsis"),
        i.push(t - 1)) : (n >= t - 1 - r ? i = ct(t - (i - 2), t) : (i = ct(n - r + 2, n + r - 1),
        i.push("ellipsis"),
        i.push(t - 1)),
        i.splice(0, 0, "ellipsis"),
        i.splice(0, 0, 0)),
        i.DT_el = "span",
        i
    }
    function re(t) {
        n.each({
            num: function(n) {
                return fi(n, t)
            },
            "num-fmt": function(n) {
                return fi(n, t, iu)
            },
            "html-num": function(n) {
                return fi(n, t, gi)
            },
            "html-num-fmt": function(n) {
                return fi(n, t, gi, iu)
            }
        }, function(n, i) {
            c.type.order[n + t + "-pre"] = i;
            n.match(/^html\-/) && (c.type.search[n + t] = c.type.search.html)
        })
    }
    function ue(n) {
        return function() {
            var t = [ki(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return u.ext.internal[n].apply(this, t)
        }
    }
    var u, c, e, f, s, tu = {}, fe = /[\r\n]/g, gi = /<.*?>/g, ve = /^[\w\+\-]/, ye = /[\w\+\-]$/, pe = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), iu = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, it = function(n) {
        return !n || !0 === n || "-" === n ? !0 : !1
    }, ee = function(n) {
        var t = parseInt(n, 10);
        return !isNaN(t) && isFinite(n) ? t : null
    }, oe = function(n, t) {
        return tu[t] || (tu[t] = RegExp(vi(t), "g")),
        "string" == typeof n && "." !== t ? n.replace(/\./g, "").replace(tu[t], ".") : n
    }, ru = function(n, t, i) {
        var r = "string" == typeof n;
        return it(n) ? !0 : (t && r && (n = oe(n, t)),
        i && r && (n = n.replace(iu, "")),
        !isNaN(parseFloat(n)) && isFinite(n))
    }, se = function(n, t, i) {
        return it(n) ? !0 : (it(n) || "string" == typeof n) ? ru(n.replace(gi, ""), t, i) ? !0 : null : null
    }, b = function(n, t, i) {
        var f = []
          , u = 0
          , e = n.length;
        if (i !== r)
            for (; u < e; u++)
                n[u] && n[u][t] && f.push(n[u][t][i]);
        else
            for (; u < e; u++)
                n[u] && f.push(n[u][t]);
        return f
    }, ii = function(n, t, i, u) {
        var e = []
          , f = 0
          , o = t.length;
        if (u !== r)
            for (; f < o; f++)
                n[t[f]][i] && e.push(n[t[f]][i][u]);
        else
            for (; f < o; f++)
                e.push(n[t[f]][i]);
        return e
    }, ct = function(n, t) {
        var f = [], u, i;
        for (t === r ? (t = 0,
        u = n) : (u = t,
        t = n),
        i = t; i < u; i++)
            f.push(i);
        return f
    }, he = function(n) {
        for (var i = [], t = 0, r = n.length; t < r; t++)
            n[t] && i.push(n[t]);
        return i
    }, nr = function(n) {
        var r = [], u, t, e = n.length, i, f = 0;
        t = 0;
        n: for (; t < e; t++) {
            for (u = n[t],
            i = 0; i < f; i++)
                if (r[i] === u)
                    continue n;
            r.push(u);
            f++
        }
        return r
    }, p = function(n, t, i) {
        n[t] !== r && (n[i] = n[t])
    }, ri = /\[.*?\]$/, lt = /\(\)$/, tr = n("<div>")[0], we = tr.textContent !== r, be = /<.*?>/g, uu, rr, su, le, hu, cu, fi;
    u = function(t) {
        var f;
        this.$ = function(n, t) {
            return this.api(!0).$(n, t)
        }
        ;
        this._ = function(n, t) {
            return this.api(!0).rows(n, t).data()
        }
        ;
        this.api = function(n) {
            return n ? new e(ki(this[c.iApiIndex])) : new e(this)
        }
        ;
        this.fnAddData = function(t, i) {
            var u = this.api(!0)
              , f = n.isArray(t) && (n.isArray(t[0]) || n.isPlainObject(t[0])) ? u.rows.add(t) : u.row.add(t);
            return (i === r || i) && u.draw(),
            f.flatten().toArray()
        }
        ;
        this.fnAdjustColumnSizing = function(n) {
            var t = this.api(!0).columns.adjust()
              , i = t.settings()[0]
              , u = i.oScroll;
            n === r || n ? t.draw(!1) : ("" !== u.sX || "" !== u.sY) && ti(i)
        }
        ;
        this.fnClearTable = function(n) {
            var t = this.api(!0).clear();
            (n === r || n) && t.draw()
        }
        ;
        this.fnClose = function(n) {
            this.api(!0).row(n).child.hide()
        }
        ;
        this.fnDeleteRow = function(n, t, i) {
            var u = this.api(!0)
              , n = u.rows(n)
              , f = n.settings()[0]
              , e = f.aoData[n[0][0]];
            return n.remove(),
            t && t.call(this, f, e),
            (i === r || i) && u.draw(),
            e
        }
        ;
        this.fnDestroy = function(n) {
            this.api(!0).destroy(n)
        }
        ;
        this.fnDraw = function(n) {
            this.api(!0).draw(n)
        }
        ;
        this.fnFilter = function(n, t, i, u, f, e) {
            f = this.api(!0);
            null === t || t === r ? f.search(n, i, u, e) : f.column(t).search(n, i, u, e);
            f.draw()
        }
        ;
        this.fnGetData = function(n, t) {
            var i = this.api(!0), u;
            return n !== r ? (u = n.nodeName ? n.nodeName.toLowerCase() : "",
            t !== r || "td" == u || "th" == u ? i.cell(n, t).data() : i.row(n).data() || null) : i.data().toArray()
        }
        ;
        this.fnGetNodes = function(n) {
            var t = this.api(!0);
            return n !== r ? t.row(n).node() : t.rows().nodes().flatten().toArray()
        }
        ;
        this.fnGetPosition = function(n) {
            var i = this.api(!0)
              , t = n.nodeName.toUpperCase();
            return "TR" == t ? i.row(n).index() : "TD" == t || "TH" == t ? (n = i.cell(n).index(),
            [n.row, n.columnVisible, n.column]) : null
        }
        ;
        this.fnIsOpen = function(n) {
            return this.api(!0).row(n).child.isShown()
        }
        ;
        this.fnOpen = function(n, t, i) {
            return this.api(!0).row(n).child(t, i).show().child()[0]
        }
        ;
        this.fnPageChange = function(n, t) {
            var i = this.api(!0).page(n);
            (t === r || t) && i.draw(!1)
        }
        ;
        this.fnSetColumnVis = function(n, t, i) {
            n = this.api(!0).column(n).visible(t);
            (i === r || i) && n.columns.adjust().draw()
        }
        ;
        this.fnSettings = function() {
            return ki(this[c.iApiIndex])
        }
        ;
        this.fnSort = function(n) {
            this.api(!0).order(n).draw()
        }
        ;
        this.fnSortListener = function(n, t, i) {
            this.api(!0).order.listener(n, t, i)
        }
        ;
        this.fnUpdate = function(n, t, i, u, f) {
            var e = this.api(!0);
            return i === r || null === i ? e.row(t).data(n) : e.cell(t, i).data(n),
            (f === r || f) && e.columns.adjust(),
            (u === r || u) && e.draw(),
            0
        }
        ;
        this.fnVersionCheck = c.fnVersionCheck;
        var i = this
          , s = t === r
          , h = this.length;
        s && (t = {});
        this.oApi = this.internal = c.internal;
        for (f in u.ext.internal)
            f && (this[f] = ue(f));
        return this.each(function() {
            var e = {}, e = 1 < h ? ie(e, t, !0) : t, c = 0, l, b = this.getAttribute("id"), ot = !1, p = u.defaults, d = n(this), w, y, f, g, ut, it, et;
            if ("table" != this.nodeName.toLowerCase())
                tt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            else {
                for (lu(p),
                au(p.column),
                nt(p, p, !0),
                nt(p.column, p.column, !0),
                nt(p, n.extend(e, d.data())),
                w = u.settings,
                c = 0,
                l = w.length; c < l; c++) {
                    if (y = w[c],
                    y.nTable == this || y.nTHead.parentNode == this || y.nTFoot && y.nTFoot.parentNode == this) {
                        if (c = e.bRetrieve !== r ? e.bRetrieve : p.bRetrieve,
                        s || c)
                            return y.oInstance;
                        if (e.bDestroy !== r ? e.bDestroy : p.bDestroy) {
                            y.oInstance.fnDestroy();
                            break
                        } else {
                            tt(y, 0, "Cannot reinitialise DataTable", 3);
                            return
                        }
                    }
                    if (y.sTableId == this.id) {
                        w.splice(c, 1);
                        break
                    }
                }
                if ((null === b || "" === b) && (this.id = b = "DataTables_Table_" + u.ext._unique++),
                f = n.extend(!0, {}, u.models.oSettings, {
                    sDestroyWidth: d[0].style.width,
                    sInstance: b,
                    sTableId: b
                }),
                f.nTable = this,
                f.oApi = i.internal,
                f.oInit = e,
                w.push(f),
                f.oInstance = 1 === i.length ? i : d.dataTable(),
                lu(e),
                e.oLanguage && fr(e.oLanguage),
                e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = n.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]),
                e = ie(n.extend(!0, {}, p), e),
                k(f.oFeatures, e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),
                k(f, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]),
                k(f.oScroll, e, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]),
                k(f.oLanguage, e, "fnInfoCallback"),
                a(f, "aoDrawCallback", e.fnDrawCallback, "user"),
                a(f, "aoServerParams", e.fnServerParams, "user"),
                a(f, "aoStateSaveParams", e.fnStateSaveParams, "user"),
                a(f, "aoStateLoadParams", e.fnStateLoadParams, "user"),
                a(f, "aoStateLoaded", e.fnStateLoaded, "user"),
                a(f, "aoRowCallback", e.fnRowCallback, "user"),
                a(f, "aoRowCreatedCallback", e.fnCreatedRow, "user"),
                a(f, "aoHeaderCallback", e.fnHeaderCallback, "user"),
                a(f, "aoFooterCallback", e.fnFooterCallback, "user"),
                a(f, "aoInitComplete", e.fnInitComplete, "user"),
                a(f, "aoPreDrawCallback", e.fnPreDrawCallback, "user"),
                f.rowIdFn = ft(e.rowId),
                vu(f),
                b = f.oClasses,
                e.bJQueryUI ? (n.extend(b, u.ext.oJUIClasses, e.oClasses),
                e.sDom === p.sDom && "lfrtip" === p.sDom && (f.sDom = '<"H"lfr>t<"F"ip>'),
                f.renderer) ? n.isPlainObject(f.renderer) && !f.renderer.header && (f.renderer.header = "jqueryui") : f.renderer = "jqueryui" : n.extend(b, u.ext.classes, e.oClasses),
                d.addClass(b.sTable),
                f.iInitDisplayStart === r && (f.iInitDisplayStart = e.iDisplayStart,
                f._iDisplayStart = e.iDisplayStart),
                null !== e.iDeferLoading && (f.bDeferLoading = !0,
                c = n.isArray(e.iDeferLoading),
                f._iRecordsDisplay = c ? e.iDeferLoading[0] : e.iDeferLoading,
                f._iRecordsTotal = c ? e.iDeferLoading[1] : e.iDeferLoading),
                g = f.oLanguage,
                n.extend(!0, g, e.oLanguage),
                "" !== g.sUrl && (n.ajax({
                    dataType: "json",
                    url: g.sUrl,
                    success: function(t) {
                        fr(t);
                        nt(p.oLanguage, t);
                        n.extend(!0, g, t);
                        ni(f)
                    },
                    error: function() {
                        ni(f)
                    }
                }),
                ot = !0),
                null === e.asStripeClasses && (f.asStripeClasses = [b.sStripeOdd, b.sStripeEven]),
                c = f.asStripeClasses,
                ut = d.children("tbody").find("tr").eq(0),
                -1 !== n.inArray(!0, n.map(c, function(n) {
                    return ut.hasClass(n)
                })) && (n("tbody tr", this).removeClass(c.join(" ")),
                f.asDestroyStripes = c.slice()),
                w = [],
                c = this.getElementsByTagName("thead"),
                0 !== c.length && (dt(f.aoHeader, c[0]),
                w = ci(f)),
                null === e.aoColumns)
                    for (y = [],
                    c = 0,
                    l = w.length; c < l; c++)
                        y.push(null);
                else
                    y = e.aoColumns;
                for (c = 0,
                l = y.length; c < l; c++)
                    er(f, w ? w[c] : null);
                if (pu(f, e.aoColumnDefs, y, function(n, t) {
                    ei(f, n, t)
                }),
                ut.length && (it = function(n, t) {
                    return n.getAttribute("data-" + t) !== null ? t : null
                }
                ,
                n(ut[0]).children("th, td").each(function(n, t) {
                    var e = f.aoColumns[n], i, u;
                    e.mData === n && (i = it(t, "sort") || it(t, "order"),
                    u = it(t, "filter") || it(t, "search"),
                    (i !== null || u !== null) && (e.mData = {
                        _: n + ".display",
                        sort: i !== null ? n + ".@data-" + i : r,
                        type: i !== null ? n + ".@data-" + i : r,
                        filter: u !== null ? n + ".@data-" + u : r
                    },
                    ei(f, n)))
                })),
                et = f.oFeatures,
                e.bStateSave && (et.bStateSave = !0,
                te(f, e),
                a(f, "aoDrawCallback", bi, "state_save")),
                e.aaSorting === r)
                    for (w = f.aaSorting,
                    c = 0,
                    l = w.length; c < l; c++)
                        w[c][1] = f.aoColumns[c].asSorting[0];
                if (wi(f),
                et.bSort && a(f, "aoDrawCallback", function() {
                    if (f.bSorted) {
                        var t = ht(f)
                          , i = {};
                        n.each(t, function(n, t) {
                            i[t.src] = t.dir
                        });
                        o(f, null, "order", [f, t, i]);
                        gf(f)
                    }
                }),
                a(f, "aoDrawCallback", function() {
                    (f.bSorted || v(f) === "ssp" || et.bDeferRender) && wi(f)
                }, "sc"),
                c = d.children("caption").each(function() {
                    this._captionSide = d.css("caption-side")
                }),
                l = d.children("thead"),
                0 === l.length && (l = n("<thead/>").appendTo(this)),
                f.nTHead = l[0],
                l = d.children("tbody"),
                0 === l.length && (l = n("<tbody/>").appendTo(this)),
                f.nTBody = l[0],
                l = d.children("tfoot"),
                0 === l.length && 0 < c.length && ("" !== f.oScroll.sX || "" !== f.oScroll.sY) && (l = n("<tfoot/>").appendTo(this)),
                0 === l.length || 0 === l.children().length ? d.addClass(b.sNoFooter) : 0 < l.length && (f.nTFoot = l[0],
                dt(f.aoFooter, f.nTFoot)),
                e.aaData)
                    for (c = 0; c < e.aaData.length; c++)
                        rt(f, e.aaData[c]);
                else
                    (f.bDeferLoading || "dom" == v(f)) && oi(f, n(f.nTBody).children("tr"));
                f.aiDisplay = f.aiDisplayMaster.slice();
                f.bInitialised = !0;
                !1 === ot && ni(f)
            }
        }),
        i = null,
        this
    }
    ;
    var ce = []
      , l = Array.prototype
      , ke = function(t) {
        var i, r, f = u.settings, e = n.map(f, function(n) {
            return n.nTable
        });
        if (t) {
            if (t.nTable && t.oApi)
                return [t];
            if (t.nodeName && "table" === t.nodeName.toLowerCase())
                return i = n.inArray(t, e),
                -1 !== i ? [f[i]] : null;
            if (t && "function" == typeof t.settings)
                return t.settings().toArray();
            "string" == typeof t ? r = n(t) : t instanceof n && (r = t)
        } else
            return [];
        if (r)
            return r.map(function() {
                return i = n.inArray(this, e),
                -1 !== i ? f[i] : null
            }).toArray()
    };
    e = function(t, i) {
        var r, f, u, o;
        if (!(this instanceof e))
            return new e(t,i);
        if (r = [],
        f = function(n) {
            (n = ke(n)) && (r = r.concat(n))
        }
        ,
        n.isArray(t))
            for (u = 0,
            o = t.length; u < o; u++)
                f(t[u]);
        else
            f(t);
        this.context = nr(r);
        i && n.merge(this, i);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        e.extend(this, this, ce)
    }
    ;
    u.Api = e;
    n.extend(e.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: l.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(n) {
            for (var t = 0, i = this.length; t < i; t++)
                n.call(this, this[t], t, this);
            return this
        },
        eq: function(n) {
            var t = this.context;
            return t.length > n ? new e(t[n],this[n]) : null
        },
        filter: function(n) {
            var i = [], t, r;
            if (l.filter)
                i = l.filter.call(this, n, this);
            else
                for (t = 0,
                r = this.length; t < r; t++)
                    n.call(this, this[t], t, this) && i.push(this[t]);
            return new e(this.context,i)
        },
        flatten: function() {
            var n = [];
            return new e(this.context,n.concat.apply(n, this.toArray()))
        },
        join: l.join,
        indexOf: l.indexOf || function(n, t) {
            for (var i = t || 0, r = this.length; i < r; i++)
                if (this[i] === n)
                    return i;
            return -1
        }
        ,
        iterator: function(n, t, i, u) {
            var h = [], o, f, y, c, p, s = this.context, w, v, a = this.selector, l;
            for ("string" == typeof n && (u = i,
            i = t,
            t = n,
            n = !1),
            f = 0,
            y = s.length; f < y; f++)
                if (l = new e(s[f]),
                "table" === t)
                    o = i.call(l, s[f], f),
                    o !== r && h.push(o);
                else if ("columns" === t || "rows" === t)
                    o = i.call(l, s[f], this[f], f),
                    o !== r && h.push(o);
                else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                    for (v = this[f],
                    "column-rows" === t && (w = ir(s[f], a.opts)),
                    c = 0,
                    p = v.length; c < p; c++)
                        o = v[c],
                        o = "cell" === t ? i.call(l, s[f], o.row, o.column, f, c) : i.call(l, s[f], o, f, c, w),
                        o !== r && h.push(o);
            return h.length || u ? (n = new e(s,n ? h.concat.apply([], h) : h),
            t = n.selector,
            t.rows = a.rows,
            t.cols = a.cols,
            t.opts = a.opts,
            n) : this
        },
        lastIndexOf: l.lastIndexOf || function() {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        }
        ,
        length: 0,
        map: function(n) {
            var i = [], t, r;
            if (l.map)
                i = l.map.call(this, n, this);
            else
                for (t = 0,
                r = this.length; t < r; t++)
                    i.push(n.call(this, this[t], t));
            return new e(this.context,i)
        },
        pluck: function(n) {
            return this.map(function(t) {
                return t[n]
            })
        },
        pop: l.pop,
        push: l.push,
        reduce: l.reduce || function(n, t) {
            return yu(this, n, t, 0, this.length, 1)
        }
        ,
        reduceRight: l.reduceRight || function(n, t) {
            return yu(this, n, t, this.length - 1, -1, -1)
        }
        ,
        reverse: l.reverse,
        selector: null,
        shift: l.shift,
        sort: l.sort,
        splice: l.splice,
        toArray: function() {
            return l.slice.call(this)
        },
        to$: function() {
            return n(this)
        },
        toJQuery: function() {
            return n(this)
        },
        unique: function() {
            return new e(this.context,nr(this))
        },
        unshift: l.unshift
    });
    e.extend = function(t, i, r) {
        if (r.length && i && (i instanceof e || i.__dt_wrapper))
            for (var u, s = function(n, t, i) {
                return function() {
                    var r = t.apply(n, arguments);
                    return e.extend(r, r, i.methodExt),
                    r
                }
            }, f = 0, o = r.length; f < o; f++)
                u = r[f],
                i[u.name] = "function" == typeof u.val ? s(t, u.val, u) : n.isPlainObject(u.val) ? {} : u.val,
                i[u.name].__dt_wrapper = !0,
                e.extend(t, i[u.name], u.propExt)
    }
    ;
    e.register = f = function(t, i) {
        var u, f, r, l;
        if (n.isArray(t))
            for (u = 0,
            f = t.length; u < f; u++)
                e.register(t[u], i);
        else
            for (var s = t.split("."), o = ce, h, c, u = 0, f = s.length; u < f; u++) {
                h = (c = -1 !== s[u].indexOf("()")) ? s[u].replace("()", "") : s[u];
                n: {
                    for (r = 0,
                    l = o.length; r < l; r++)
                        if (o[r].name === h) {
                            r = o[r];
                            break n
                        }
                    r = null
                }
                r || (r = {
                    name: h,
                    val: {},
                    methodExt: [],
                    propExt: []
                },
                o.push(r));
                u === f - 1 ? r.val = i : o = c ? r.methodExt : r.propExt
            }
    }
    ;
    e.registerPlural = s = function(t, i, u) {
        e.register(t, u);
        e.register(i, function() {
            var t = u.apply(this, arguments);
            return t === this ? this : t instanceof e ? t.length ? n.isArray(t[0]) ? new e(t.context,t[0]) : t[0] : r : t
        })
    }
    ;
    f("tables()", function(t) {
        var i, r, u, t;
        return t ? (i = e,
        r = this.context,
        "number" == typeof t ? t = [r[t]] : (u = n.map(r, function(n) {
            return n.nTable
        }),
        t = n(u).filter(t).map(function() {
            var t = n.inArray(this, u);
            return r[t]
        }).toArray()),
        i = new i(t)) : i = this,
        i
    });
    f("table()", function(n) {
        var n = this.tables(n)
          , t = n.context;
        return t.length ? new e(t[0]) : n
    });
    s("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(n) {
            return n.nTable
        }, 1)
    });
    s("tables().body()", "table().body()", function() {
        return this.iterator("table", function(n) {
            return n.nTBody
        }, 1)
    });
    s("tables().header()", "table().header()", function() {
        return this.iterator("table", function(n) {
            return n.nTHead
        }, 1)
    });
    s("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(n) {
            return n.nTFoot
        }, 1)
    });
    s("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(n) {
            return n.nTableWrapper
        }, 1)
    });
    f("draw()", function(n) {
        return this.iterator("table", function(t) {
            "page" === n ? ut(t) : ("string" == typeof n && (n = "full-hold" === n ? !1 : !0),
            ot(t, !1 === n))
        })
    });
    f("page()", function(n) {
        return n === r ? this.page.info().page : this.iterator("table", function(t) {
            pr(t, n)
        })
    });
    f("page.info()", function() {
        if (0 === this.context.length)
            return r;
        var n = this.context[0]
          , i = n._iDisplayStart
          , t = n.oFeatures.bPaginate ? n._iDisplayLength : -1
          , u = n.fnRecordsDisplay()
          , f = -1 === t;
        return {
            page: f ? 0 : Math.floor(i / t),
            pages: f ? 1 : Math.ceil(u / t),
            start: i,
            end: n.fnDisplayEnd(),
            length: t,
            recordsTotal: n.fnRecordsTotal(),
            recordsDisplay: u,
            serverSide: "ssp" === v(n)
        }
    });
    f("page.len()", function(n) {
        return n === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", function(t) {
            yr(t, n)
        })
    });
    uu = function(n, t, i) {
        var u, r;
        if (i) {
            u = new e(n);
            u.one("draw", function() {
                i(u.ajax.json())
            })
        }
        "ssp" == v(n) ? ot(n, t) : (w(n, !0),
        r = n.jqXHR,
        r && 4 !== r.readyState && r.abort(),
        li(n, [], function(i) {
            si(n);
            for (var i = ai(n, i), r = 0, u = i.length; r < u; r++)
                rt(n, i[r]);
            ot(n, t);
            w(n, !1)
        }))
    }
    ;
    f("ajax.json()", function() {
        var n = this.context;
        if (0 < n.length)
            return n[0].json
    });
    f("ajax.params()", function() {
        var n = this.context;
        if (0 < n.length)
            return n[0].oAjaxData
    });
    f("ajax.reload()", function(n, t) {
        return this.iterator("table", function(i) {
            uu(i, !1 === t, n)
        })
    });
    f("ajax.url()", function(t) {
        var i = this.context;
        return t === r ? 0 === i.length ? r : (i = i[0],
        i.ajax ? n.isPlainObject(i.ajax) ? i.ajax.url : i.ajax : i.sAjaxSource) : this.iterator("table", function(i) {
            n.isPlainObject(i.ajax) ? i.ajax.url = t : i.ajax = t
        })
    });
    f("ajax.url().load()", function(n, t) {
        return this.iterator("table", function(i) {
            uu(i, !1 === t, n)
        })
    });
    var fu = function(t, i, u, f, e) {
        var h = [], v, l, o, a, s, y;
        for (o = typeof i,
        i && "string" !== o && "function" !== o && i.length !== r || (i = [i]),
        o = 0,
        a = i.length; o < a; o++)
            for (l = i[o] && i[o].split ? i[o].split(",") : [i[o]],
            s = 0,
            y = l.length; s < y; s++)
                (v = u("string" == typeof l[s] ? n.trim(l[s]) : l[s])) && v.length && (h = h.concat(v));
        if (t = c.selector[t],
        t.length)
            for (o = 0,
            a = t.length; o < a; o++)
                h = t[o](f, e, h);
        return nr(h)
    }
      , eu = function(t) {
        return t || (t = {}),
        t.filter && t.search === r && (t.search = t.filter),
        n.extend({
            search: "none",
            order: "current",
            page: "all"
        }, t)
    }
      , ou = function(n) {
        for (var t = 0, i = n.length; t < i; t++)
            if (0 < n[t].length)
                return n[0] = n[t],
                n[0].length = 1,
                n.length = 1,
                n.context = [n.context[t]],
                n;
        return n.length = 0,
        n
    }
      , ir = function(t, i) {
        var r, u, e, o = [], s = t.aiDisplay, f;
        if (r = t.aiDisplayMaster,
        f = i.search,
        u = i.order,
        e = i.page,
        "ssp" == v(t))
            return "removed" === f ? [] : ct(0, r.length);
        if ("current" == e)
            for (r = t._iDisplayStart,
            u = t.fnDisplayEnd(); r < u; r++)
                o.push(s[r]);
        else if ("current" == u || "applied" == u)
            o = "none" == f ? r.slice() : "applied" == f ? s.slice() : n.map(r, function(t) {
                return -1 === n.inArray(t, s) ? t : null
            });
        else if ("index" == u || "original" == u)
            for (r = 0,
            u = t.aoData.length; r < u; r++)
                "none" == f ? o.push(r) : (e = n.inArray(r, s),
                (-1 === e && "removed" == f || 0 <= e && "applied" == f) && o.push(r));
        return o
    };
    f("rows()", function(t, i) {
        t === r ? t = "" : n.isPlainObject(t) && (i = t,
        t = "");
        var i = eu(i)
          , u = this.iterator("table", function(u) {
            var f = i;
            return fu("row", t, function(t) {
                var i = ee(t), e;
                return i !== null && !f ? [i] : (e = ir(u, f),
                i !== null && n.inArray(i, e) !== -1) ? [i] : t ? typeof t == "function" ? n.map(e, function(n) {
                    var i = u.aoData[n];
                    return t(n, i._aData, i.nTr) ? n : null
                }) : (i = he(ii(u.aoData, e, "nTr")),
                t.nodeName && n.inArray(t, i) !== -1) ? [t._DT_RowIndex] : typeof t == "string" && t.charAt(0) === "#" && (e = u.aIds[t.replace(/^#/, "")],
                e !== r) ? [e.idx] : n(i).filter(t).map(function() {
                    return this._DT_RowIndex
                }).toArray() : e
            }, u, f)
        }, 1);
        return u.selector.rows = t,
        u.selector.opts = i,
        u
    });
    f("rows().nodes()", function() {
        return this.iterator("row", function(n, t) {
            return n.aoData[t].nTr || r
        }, 1)
    });
    f("rows().data()", function() {
        return this.iterator(!0, "rows", function(n, t) {
            return ii(n.aoData, t, "_aData")
        }, 1)
    });
    s("rows().cache()", "row().cache()", function(n) {
        return this.iterator("row", function(t, i) {
            var r = t.aoData[i];
            return "search" === n ? r._aFilterData : r._aSortData
        }, 1)
    });
    s("rows().invalidate()", "row().invalidate()", function(n) {
        return this.iterator("row", function(t, i) {
            bt(t, i, n)
        })
    });
    s("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(n, t) {
            return t
        }, 1)
    });
    s("rows().ids()", "row().id()", function(n) {
        for (var r, f, o, u = [], i = this.context, t = 0, s = i.length; t < s; t++)
            for (r = 0,
            f = this[t].length; r < f; r++)
                o = i[t].rowIdFn(i[t].aoData[this[t][r]]._aData),
                u.push((!0 === n ? "#" : "") + o);
        return new e(i,u)
    });
    s("rows().remove()", "row().remove()", function() {
        var n = this;
        return this.iterator("row", function(t, i, u) {
            var o = t.aoData, l = o[i], e, h, f, c, s;
            for (o.splice(i, 1),
            e = 0,
            h = o.length; e < h; e++)
                if (f = o[e],
                s = f.anCells,
                null !== f.nTr && (f.nTr._DT_RowIndex = e),
                null !== s)
                    for (f = 0,
                    c = s.length; f < c; f++)
                        s[f]._DT_CellIndex.row = e;
            hi(t.aiDisplayMaster, i);
            hi(t.aiDisplay, i);
            hi(n[u], i, !1);
            gr(t);
            i = t.rowIdFn(l._aData);
            i !== r && delete t.aIds[i]
        }),
        this.iterator("table", function(n) {
            for (var t = 0, i = n.aoData.length; t < i; t++)
                n.aoData[t].idx = t
        }),
        this
    });
    f("rows.add()", function(t) {
        var r = this.iterator("table", function(n) {
            for (var i, u = [], r = 0, f = t.length; r < f; r++)
                i = t[r],
                i.nodeName && "TR" === i.nodeName.toUpperCase() ? u.push(oi(n, i)[0]) : u.push(rt(n, i));
            return u
        }, 1)
          , i = this.rows(-1);
        return i.pop(),
        n.merge(i, r),
        i
    });
    f("row()", function(n, t) {
        return ou(this.rows(n, t))
    });
    f("row().data()", function(n) {
        var t = this.context;
        return n === r ? t.length && this.length ? t[0].aoData[this[0]]._aData : r : (t[0].aoData[this[0]]._aData = n,
        bt(t[0], this[0], "data"),
        this)
    });
    f("row().node()", function() {
        var n = this.context;
        return n.length && this.length ? n[0].aoData[this[0]].nTr || null : null
    });
    f("row.add()", function(t) {
        t instanceof n && t.length && (t = t[0]);
        var i = this.iterator("table", function(n) {
            return t.nodeName && "TR" === t.nodeName.toUpperCase() ? oi(n, t)[0] : rt(n, t)
        });
        return this.row(i[0])
    });
    rr = function(n, t) {
        var i = n.context;
        i.length && (i = i[0].aoData[t !== r ? t : n[0]]) && i._details && (i._details.remove(),
        i._detailsShow = r,
        i._details = r)
    }
    ;
    su = function(n, t) {
        var o = n.context, i;
        if (o.length && n.length && (i = o[0].aoData[n[0]],
        i._details)) {
            (i._detailsShow = t) ? i._details.insertAfter(i.nTr) : i._details.detach();
            var f = o[0]
              , r = new e(f)
              , u = f.aoData;
            r.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
            0 < b(u, "_details").length && (r.on("draw.dt.DT_details", function(n, t) {
                f === t && r.rows({
                    page: "current"
                }).eq(0).each(function(n) {
                    n = u[n];
                    n._detailsShow && n._details.insertAfter(n.nTr)
                })
            }),
            r.on("column-visibility.dt.DT_details", function(n, t) {
                if (f === t)
                    for (var i, e = pt(t), r = 0, o = u.length; r < o; r++)
                        i = u[r],
                        i._details && i._details.children("td[colspan]").attr("colspan", e)
            }),
            r.on("destroy.dt.DT_details", function(n, t) {
                if (f === t)
                    for (var i = 0, e = u.length; i < e; i++)
                        u[i]._details && rr(r, i)
            }))
        }
    }
    ;
    f("row().child()", function(t, i) {
        var u = this.context;
        if (t === r)
            return u.length && this.length ? u[0].aoData[this[0]]._details : r;
        if (!0 === t)
            this.child.show();
        else if (!1 === t)
            rr(this);
        else if (u.length && this.length) {
            var o = u[0]
              , u = u[0].aoData[this[0]]
              , f = []
              , e = function(t, i) {
                if (n.isArray(t) || t instanceof n)
                    for (var r = 0, u = t.length; r < u; r++)
                        e(t[r], i);
                else
                    t.nodeName && "tr" === t.nodeName.toLowerCase() ? f.push(t) : (r = n("<tr><td/><\/tr>").addClass(i),
                    n("td", r).addClass(i).html(t)[0].colSpan = pt(o),
                    f.push(r[0]))
            };
            e(t, i);
            u._details && u._details.remove();
            u._details = n(f);
            u._detailsShow && u._details.insertAfter(u.nTr)
        }
        return this
    });
    f(["row().child.show()", "row().child().show()"], function() {
        return su(this, !0),
        this
    });
    f(["row().child.hide()", "row().child().hide()"], function() {
        return su(this, !1),
        this
    });
    f(["row().child.remove()", "row().child().remove()"], function() {
        return rr(this),
        this
    });
    f("row().child.isShown()", function() {
        var n = this.context;
        return n.length && this.length ? n[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    le = /^(.+):(name|visIdx|visible)$/;
    hu = function(n, t, i, r, u) {
        for (var i = [], r = 0, f = u.length; r < f; r++)
            i.push(y(n, u[r], t));
        return i
    }
    ;
    f("columns()", function(t, i) {
        t === r ? t = "" : n.isPlainObject(t) && (i = t,
        t = "");
        var i = eu(i)
          , u = this.iterator("table", function(r) {
            var o = t
              , e = i
              , u = r.aoColumns
              , s = b(u, "sName")
              , f = b(u, "nTh");
            return fu("column", o, function(t) {
                var i = ee(t), c, o, h;
                if (t === "")
                    return ct(u.length);
                if (i !== null)
                    return [i >= 0 ? i : u.length + i];
                if (typeof t == "function")
                    return c = ir(r, e),
                    n.map(u, function(n, i) {
                        return t(i, hu(r, i, 0, 0, c), f[i]) ? i : null
                    });
                if (o = typeof t == "string" ? t.match(le) : "",
                o)
                    switch (o[2]) {
                    case "visIdx":
                    case "visible":
                        return (i = parseInt(o[1], 10),
                        i < 0) ? (h = n.map(u, function(n, t) {
                            return n.bVisible ? t : null
                        }),
                        [h[h.length + i]]) : [vt(r, i)];
                    case "name":
                        return n.map(s, function(n, t) {
                            return n === o[1] ? t : null
                        })
                    }
                else
                    return n(f).filter(t).map(function() {
                        return n.inArray(this, f)
                    }).toArray()
            }, r, e)
        }, 1);
        return u.selector.cols = t,
        u.selector.opts = i,
        u
    });
    s("columns().header()", "column().header()", function() {
        return this.iterator("column", function(n, t) {
            return n.aoColumns[t].nTh
        }, 1)
    });
    s("columns().footer()", "column().footer()", function() {
        return this.iterator("column", function(n, t) {
            return n.aoColumns[t].nTf
        }, 1)
    });
    s("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", hu, 1)
    });
    s("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(n, t) {
            return n.aoColumns[t].mData
        }, 1)
    });
    s("columns().cache()", "column().cache()", function(n) {
        return this.iterator("column-rows", function(t, i, r, u, f) {
            return ii(t.aoData, f, "search" === n ? "_aFilterData" : "_aSortData", i)
        }, 1)
    });
    s("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(n, t, i, r, u) {
            return ii(n.aoData, u, "anCells", t)
        }, 1)
    });
    s("columns().visible()", "column().visible()", function(t, i) {
        return this.iterator("column", function(u, f) {
            var v;
            if (t === r)
                return u.aoColumns[f].bVisible;
            var e = u.aoColumns, l = e[f], h = u.aoData, s, a, c;
            if (t !== r && l.bVisible !== t) {
                if (t)
                    for (v = n.inArray(!0, b(e, "bVisible"), f + 1),
                    s = 0,
                    a = h.length; s < a; s++)
                        c = h[s].nTr,
                        e = h[s].anCells,
                        c && c.insertBefore(e[f], e[v] || null);
                else
                    n(b(u.aoData, "anCells", f)).detach();
                l.bVisible = t;
                kt(u, u.aoHeader);
                kt(u, u.aoFooter);
                (i === r || i) && (st(u),
                (u.oScroll.sX || u.oScroll.sY) && ti(u));
                o(u, null, "column-visibility", [u, f, t, i]);
                bi(u)
            }
        })
    });
    s("columns().indexes()", "column().index()", function(n) {
        return this.iterator("column", function(t, i) {
            return "visible" === n ? yt(t, i) : i
        }, 1)
    });
    f("columns.adjust()", function() {
        return this.iterator("table", function(n) {
            st(n)
        }, 1)
    });
    f("column.index()", function(n, t) {
        if (0 !== this.context.length) {
            var i = this.context[0];
            if ("fromVisible" === n || "toData" === n)
                return vt(i, t);
            if ("fromData" === n || "toVisible" === n)
                return yt(i, t)
        }
    });
    f("column()", function(n, t) {
        return ou(this.columns(n, t))
    });
    f("cells()", function(t, i, u) {
        if (n.isPlainObject(t) && (t.row === r ? (u = t,
        t = null) : (u = i,
        i = null)),
        n.isPlainObject(i) && (u = i,
        i = null),
        null === i || i === r)
            return this.iterator("table", function(i) {
                var w = t, a = eu(u), v = i.aoData, c = ir(i, a), b = he(ii(v, c, "anCells")), k = n([].concat.apply([], b)), e, d = i.aoColumns.length, o, s, p, f, h, l;
                return fu("cell", w, function(t) {
                    var u = typeof t == "function";
                    if (t === null || t === r || u) {
                        for (o = [],
                        s = 0,
                        p = c.length; s < p; s++)
                            for (e = c[s],
                            f = 0; f < d; f++)
                                h = {
                                    row: e,
                                    column: f
                                },
                                u ? (l = v[e],
                                t(h, y(i, e, f), l.anCells ? l.anCells[f] : null) && o.push(h)) : o.push(h);
                        return o
                    }
                    return n.isPlainObject(t) ? [t] : k.filter(t).map(function(n, t) {
                        return {
                            row: t._DT_CellIndex.row,
                            column: t._DT_CellIndex.column
                        }
                    }).toArray()
                }, i, a)
            });
        var s = this.columns(i, u), h = this.rows(t, u), o, f, c, e, l, a = this.iterator("table", function(n, t) {
            for (o = [],
            f = 0,
            c = h[t].length; f < c; f++)
                for (e = 0,
                l = s[t].length; e < l; e++)
                    o.push({
                        row: h[t][f],
                        column: s[t][e]
                    });
            return o
        }, 1);
        return n.extend(a.selector, {
            cols: i,
            rows: t,
            opts: u
        }),
        a
    });
    s("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(n, t, i) {
            return (n = n.aoData[t].anCells) ? n[i] : r
        }, 1)
    });
    f("cells().data()", function() {
        return this.iterator("cell", function(n, t, i) {
            return y(n, t, i)
        }, 1)
    });
    s("cells().cache()", "cell().cache()", function(n) {
        return n = "search" === n ? "_aFilterData" : "_aSortData",
        this.iterator("cell", function(t, i, r) {
            return t.aoData[i][n][r]
        }, 1)
    });
    s("cells().render()", "cell().render()", function(n) {
        return this.iterator("cell", function(t, i, r) {
            return y(t, i, r, n)
        }, 1)
    });
    s("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(n, t, i) {
            return {
                row: t,
                column: i,
                columnVisible: yt(n, i)
            }
        }, 1)
    });
    s("cells().invalidate()", "cell().invalidate()", function(n) {
        return this.iterator("cell", function(t, i, r) {
            bt(t, i, n, r)
        })
    });
    f("cell()", function(n, t, i) {
        return ou(this.cells(n, t, i))
    });
    f("cell().data()", function(n) {
        var i = this.context
          , t = this[0];
        return n === r ? i.length && t.length ? y(i[0], t[0].row, t[0].column) : r : (wu(i[0], t[0].row, t[0].column, n),
        bt(i[0], t[0].row, "data", t[0].column),
        this)
    });
    f("order()", function(t, i) {
        var u = this.context;
        return t === r ? 0 !== u.length ? u[0].aaSorting : r : ("number" == typeof t ? t = [[t, i]] : n.isArray(t[0]) || (t = Array.prototype.slice.call(arguments)),
        this.iterator("table", function(n) {
            n.aaSorting = t.slice()
        }))
    });
    f("order.listener()", function(n, t, i) {
        return this.iterator("table", function(r) {
            kr(r, n, t, i)
        })
    });
    f("order.fixed()", function(t) {
        if (!t) {
            var i = this.context
              , i = i.length ? i[0].aaSortingFixed : r;
            return n.isArray(i) ? {
                pre: i
            } : i
        }
        return this.iterator("table", function(i) {
            i.aaSortingFixed = n.extend(!0, {}, t)
        })
    });
    f(["columns().order()", "column().order()"], function(t) {
        var i = this;
        return this.iterator("table", function(r, u) {
            var f = [];
            n.each(i[u], function(n, i) {
                f.push([i, t])
            });
            r.aaSorting = f
        })
    });
    f("search()", function(t, i, u, f) {
        var e = this.context;
        return t === r ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : r : this.iterator("table", function(r) {
            r.oFeatures.bFilter && gt(r, n.extend({}, r.oPreviousSearch, {
                sSearch: t + "",
                bRegex: null === i ? !1 : i,
                bSmart: null === u ? !0 : u,
                bCaseInsensitive: null === f ? !0 : f
            }), 1)
        })
    });
    s("columns().search()", "column().search()", function(t, i, u, f) {
        return this.iterator("column", function(e, o) {
            var s = e.aoPreSearchCols;
            if (t === r)
                return s[o].sSearch;
            e.oFeatures.bFilter && (n.extend(s[o], {
                sSearch: t + "",
                bRegex: null === i ? !1 : i,
                bSmart: null === u ? !0 : u,
                bCaseInsensitive: null === f ? !0 : f
            }),
            gt(e, e.oPreviousSearch, 1))
        })
    });
    f("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    });
    f("state.clear()", function() {
        return this.iterator("table", function(n) {
            n.fnStateSaveCallback.call(n.oInstance, n, {})
        })
    });
    f("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null
    });
    f("state.save()", function() {
        return this.iterator("table", function(n) {
            bi(n)
        })
    });
    u.versionCheck = u.fnVersionCheck = function(n) {
        for (var f = u.version.split("."), n = n.split("."), i, r, t = 0, e = n.length; t < e; t++)
            if (i = parseInt(f[t], 10) || 0,
            r = parseInt(n[t], 10) || 0,
            i !== r)
                return i > r;
        return !0
    }
    ;
    u.isDataTable = u.fnIsDataTable = function(t) {
        var i = n(t).get(0)
          , r = !1;
        return n.each(u.settings, function(t, u) {
            var f = u.nScrollHead ? n("table", u.nScrollHead)[0] : null
              , e = u.nScrollFoot ? n("table", u.nScrollFoot)[0] : null;
            (u.nTable === i || f === i || e === i) && (r = !0)
        }),
        r
    }
    ;
    u.tables = u.fnTables = function(t) {
        var r = !1, i;
        return n.isPlainObject(t) && (r = t.api,
        t = t.visible),
        i = n.map(u.settings, function(i) {
            if (!t || t && n(i.nTable).is(":visible"))
                return i.nTable
        }),
        r ? new e(i) : i
    }
    ;
    u.util = {
        throttle: pi,
        escapeRegex: vi
    };
    u.camelToHungarian = nt;
    f("$()", function(t, i) {
        var r = this.rows(i).nodes()
          , r = n(r);
        return n([].concat(r.filter(t).toArray(), r.find(t).toArray()))
    });
    n.each(["on", "one", "off"], function(t, i) {
        f(i + "()", function() {
            var t = Array.prototype.slice.call(arguments), r;
            return t[0].match(/\.dt\b/) || (t[0] += ".dt"),
            r = n(this.tables().nodes()),
            r[i].apply(r, t),
            this
        })
    });
    f("clear()", function() {
        return this.iterator("table", function(n) {
            si(n)
        })
    });
    f("settings()", function() {
        return new e(this.context,this.context)
    });
    f("init()", function() {
        var n = this.context;
        return n.length ? n[0].oInit : null
    });
    f("data()", function() {
        return this.iterator("table", function(n) {
            return b(n.aoData, "_aData")
        }).flatten()
    });
    f("destroy()", function(i) {
        return i = i || !1,
        this.iterator("table", function(r) {
            var c = r.nTableWrapper.parentNode, f = r.oClasses, a = r.nTable, l = r.nTBody, s = r.nTHead, v = r.nTFoot, h = n(a), l = n(l), y = n(r.nTableWrapper), p = n.map(r.aoData, function(n) {
                return n.nTr
            }), w;
            r.bDestroying = !0;
            o(r, "aoDestroyCallback", "destroy", [r]);
            i || new e(r).columns().visible(!0);
            y.unbind(".DT").find(":not(tbody *)").unbind(".DT");
            n(t).unbind(".DT-" + r.sInstance);
            a != s.parentNode && (h.children("thead").detach(),
            h.append(s));
            v && a != v.parentNode && (h.children("tfoot").detach(),
            h.append(v));
            r.aaSorting = [];
            r.aaSortingFixed = [];
            wi(r);
            n(p).removeClass(r.asStripeClasses.join(" "));
            n("th, td", s).removeClass(f.sSortable + " " + f.sSortableAsc + " " + f.sSortableDesc + " " + f.sSortableNone);
            r.bJUI && (n("th span." + f.sSortIcon + ", td span." + f.sSortIcon, s).detach(),
            n("th, td", s).each(function() {
                var t = n("div." + f.sSortJUIWrapper, this);
                n(this).append(t.contents());
                t.detach()
            }));
            l.children().detach();
            l.append(p);
            s = i ? "remove" : "detach";
            h[s]();
            y[s]();
            !i && c && (c.insertBefore(a, r.nTableReinsertBefore),
            h.css("width", r.sDestroyWidth).removeClass(f.sTable),
            (w = r.asDestroyStripes.length) && l.children().each(function(t) {
                n(this).addClass(r.asDestroyStripes[t % w])
            }));
            c = n.inArray(r, u.settings);
            -1 !== c && u.settings.splice(c, 1)
        })
    });
    n.each(["column", "row", "cell"], function(n, t) {
        f(t + "s().every()", function(n) {
            var i = this.selector.opts
              , u = this;
            return this.iterator(t, function(f, e, o, s, h) {
                n.call(u[t](e, "cell" === t ? o : i, "cell" === t ? i : r), e, o, s, h)
            })
        })
    });
    f("i18n()", function(t, i, u) {
        var f = this.context[0]
          , t = ft(t)(f.oLanguage);
        return t === r && (t = i),
        u !== r && n.isPlainObject(t) && (t = t[u] !== r ? t[u] : t._),
        t.replace("%d", u)
    });
    u.version = "1.10.10";
    u.settings = [];
    u.models = {};
    u.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    u.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    u.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    u.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bJQueryUI: !1,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(n) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(n) {
            try {
                return JSON.parse((-1 === n.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + n.sInstance + "_" + location.pathname))
            } catch (t) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(n, t) {
            try {
                (-1 === n.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + n.sInstance + "_" + location.pathname, JSON.stringify(t))
            } catch (i) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: n.extend({}, u.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    at(u.defaults);
    u.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    at(u.defaults.column);
    u.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: r,
        oAjaxData: r,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == v(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == v(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var n = this._iDisplayLength
              , t = this._iDisplayStart
              , r = t + n
              , i = this.aiDisplay.length
              , u = this.oFeatures
              , f = u.bPaginate;
            return u.bServerSide ? !1 === f || -1 === n ? t + i : Math.min(t + n, this._iRecordsDisplay) : !f || r > i || -1 === n ? i : r
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    u.ext = c = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: u.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: u.version
    };
    n.extend(c, {
        afnFiltering: c.search,
        aTypes: c.type.detect,
        ofnSearch: c.type.search,
        oSort: c.type.order,
        afnSortData: c.order,
        aoFeatures: c.feature,
        oApi: c.internal,
        oStdClasses: c.classes,
        oPagination: c.pager
    });
    n.extend(u.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var ur = ""
      , ur = ""
      , d = ur + "ui-state-default"
      , ui = ur + "css_right ui-icon ui-icon-"
      , ae = ur + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    return n.extend(u.ext.oJUIClasses, u.ext.classes, {
        sPageButton: "fg-button ui-button " + d,
        sPageButtonActive: "ui-state-disabled",
        sPageButtonDisabled: "ui-state-disabled",
        sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
        sSortAsc: d + " sorting_asc",
        sSortDesc: d + " sorting_desc",
        sSortable: d + " sorting",
        sSortableAsc: d + " sorting_asc_disabled",
        sSortableDesc: d + " sorting_desc_disabled",
        sSortableNone: d + " sorting_disabled",
        sSortJUIAsc: ui + "triangle-1-n",
        sSortJUIDesc: ui + "triangle-1-s",
        sSortJUI: ui + "carat-2-n-s",
        sSortJUIAscAllowed: ui + "carat-1-n",
        sSortJUIDescAllowed: ui + "carat-1-s",
        sSortJUIWrapper: "DataTables_sort_wrapper",
        sSortIcon: "DataTables_sort_icon",
        sScrollHead: "dataTables_scrollHead " + d,
        sScrollFoot: "dataTables_scrollFoot " + d,
        sHeaderTH: d,
        sFooterTH: d,
        sJUIHeader: ae + " ui-corner-tl ui-corner-tr",
        sJUIFooter: ae + " ui-corner-bl ui-corner-br"
    }),
    cu = u.ext.pager,
    n.extend(cu, {
        simple: function() {
            return ["previous", "next"]
        },
        full: function() {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(n, t) {
            return [di(n, t)]
        },
        simple_numbers: function(n, t) {
            return ["previous", di(n, t), "next"]
        },
        full_numbers: function(n, t) {
            return ["first", "previous", di(n, t), "next", "last"]
        },
        _numbers: di,
        numbers_length: 7
    }),
    n.extend(!0, u.ext.renderer, {
        pageButton: {
            _: function(t, r, u, f, e, o) {
                var c = t.oClasses, l = t.oLanguage.oPaginate, p = t.oLanguage.oAria.paginate || {}, s, h, v = 0, y = function(i, r) {
                    for (var w, f, k = function(n) {
                        pr(t, n.data.action, !0)
                    }, a = 0, b = r.length; a < b; a++)
                        if (f = r[a],
                        n.isArray(f))
                            w = n("<" + (f.DT_el || "div") + "/>").appendTo(i),
                            y(w, f);
                        else {
                            s = null;
                            h = "";
                            switch (f) {
                            case "ellipsis":
                                i.append('<span class="ellipsis">&#x2026;<\/span>');
                                break;
                            case "first":
                                s = l.sFirst;
                                h = f + (e > 0 ? "" : " " + c.sPageButtonDisabled);
                                break;
                            case "previous":
                                s = l.sPrevious;
                                h = f + (e > 0 ? "" : " " + c.sPageButtonDisabled);
                                break;
                            case "next":
                                s = l.sNext;
                                h = f + (e < o - 1 ? "" : " " + c.sPageButtonDisabled);
                                break;
                            case "last":
                                s = l.sLast;
                                h = f + (e < o - 1 ? "" : " " + c.sPageButtonDisabled);
                                break;
                            default:
                                s = f + 1;
                                h = e === f ? c.sPageButtonActive : ""
                            }
                            s !== null && (w = n("<a>", {
                                "class": c.sPageButton + " " + h,
                                "aria-controls": t.sTableId,
                                "aria-label": p[f],
                                "data-dt-idx": v,
                                tabindex: t.iTabIndex,
                                id: u === 0 && typeof f == "string" ? t.sTableId + "_" + f : null
                            }).html(s).appendTo(i),
                            dr(w, {
                                action: f
                            }, k),
                            v++)
                        }
                }, a;
                try {
                    a = n(r).find(i.activeElement).data("dt-idx")
                } catch (w) {}
                y(n(r).empty(), f);
                a && n(r).find("[data-dt-idx=" + a + "]").focus()
            }
        }
    }),
    n.extend(u.ext.type.detect, [function(n, t) {
        var i = t.oLanguage.sDecimal;
        return ru(n, i) ? "num" + i : null
    }
    , function(n) {
        if (n && !(n instanceof Date) && (!ve.test(n) || !ye.test(n)))
            return null;
        var t = Date.parse(n);
        return null !== t && !isNaN(t) || it(n) ? "date" : null
    }
    , function(n, t) {
        var i = t.oLanguage.sDecimal;
        return ru(n, i, !0) ? "num-fmt" + i : null
    }
    , function(n, t) {
        var i = t.oLanguage.sDecimal;
        return se(n, i) ? "html-num" + i : null
    }
    , function(n, t) {
        var i = t.oLanguage.sDecimal;
        return se(n, i, !0) ? "html-num-fmt" + i : null
    }
    , function(n) {
        return it(n) || "string" == typeof n && -1 !== n.indexOf("<") ? "html" : null
    }
    ]),
    n.extend(u.ext.type.search, {
        html: function(n) {
            return it(n) ? n : "string" == typeof n ? n.replace(fe, " ").replace(gi, "") : ""
        },
        string: function(n) {
            return it(n) ? n : "string" == typeof n ? n.replace(fe, " ") : n
        }
    }),
    fi = function(n, t, i, r) {
        return 0 !== n && (!n || "-" === n) ? -Infinity : (t && (n = oe(n, t)),
        n.replace && (i && (n = n.replace(i, "")),
        r && (n = n.replace(r, ""))),
        1 * n)
    }
    ,
    n.extend(c.type.order, {
        "date-pre": function(n) {
            return Date.parse(n) || 0
        },
        "html-pre": function(n) {
            return it(n) ? "" : n.replace ? n.replace(/<.*?>/g, "").toLowerCase() : n + ""
        },
        "string-pre": function(n) {
            return it(n) ? "" : "string" == typeof n ? n.toLowerCase() : n.toString ? n.toString() : ""
        },
        "string-asc": function(n, t) {
            return n < t ? -1 : n > t ? 1 : 0
        },
        "string-desc": function(n, t) {
            return n < t ? 1 : n > t ? -1 : 0
        }
    }),
    re(""),
    n.extend(!0, u.ext.renderer, {
        header: {
            _: function(t, i, r, u) {
                n(t.nTable).on("order.dt.DT", function(n, f, e, o) {
                    t === f && (n = r.idx,
                    i.removeClass(r.sSortingClass + " " + u.sSortAsc + " " + u.sSortDesc).addClass(o[n] == "asc" ? u.sSortAsc : o[n] == "desc" ? u.sSortDesc : r.sSortingClass))
                })
            },
            jqueryui: function(t, i, r, u) {
                n("<div/>").addClass(u.sSortJUIWrapper).append(i.contents()).append(n("<span/>").addClass(u.sSortIcon + " " + r.sSortingClassJUI)).appendTo(i);
                n(t.nTable).on("order.dt.DT", function(n, f, e, o) {
                    t === f && (n = r.idx,
                    i.removeClass(u.sSortAsc + " " + u.sSortDesc).addClass(o[n] == "asc" ? u.sSortAsc : o[n] == "desc" ? u.sSortDesc : r.sSortingClass),
                    i.find("span." + u.sSortIcon).removeClass(u.sSortJUIAsc + " " + u.sSortJUIDesc + " " + u.sSortJUI + " " + u.sSortJUIAscAllowed + " " + u.sSortJUIDescAllowed).addClass(o[n] == "asc" ? u.sSortJUIAsc : o[n] == "desc" ? u.sSortJUIDesc : r.sSortingClassJUI))
                })
            }
        }
    }),
    u.render = {
        number: function(n, t, i, r, u) {
            return {
                display: function(f) {
                    if ("number" != typeof f && "string" != typeof f)
                        return f;
                    var o = 0 > f ? "-" : ""
                      , e = parseFloat(f);
                    return isNaN(e) ? f : (f = Math.abs(e),
                    e = parseInt(f, 10),
                    f = i ? t + (f - e).toFixed(i).substring(2) : "",
                    o + (r || "") + e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n) + f + (u || ""))
                }
            }
        },
        text: function() {
            return {
                display: function(n) {
                    return "string" == typeof n ? n.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : n
                }
            }
        }
    },
    n.extend(u.ext.internal, {
        _fnExternApiFunc: ue,
        _fnBuildAjax: li,
        _fnAjaxUpdate: du,
        _fnAjaxParameters: gu,
        _fnAjaxUpdateDraw: nf,
        _fnAjaxDataSrc: ai,
        _fnAddColumn: er,
        _fnColumnOptions: ei,
        _fnAdjustColumnSizing: st,
        _fnVisibleToColumnIndex: vt,
        _fnColumnIndexToVisible: yt,
        _fnVisbleColumns: pt,
        _fnGetColumns: wt,
        _fnColumnTypes: or,
        _fnApplyColumnDefs: pu,
        _fnHungarianMap: at,
        _fnCamelToHungarian: nt,
        _fnLanguageCompat: fr,
        _fnBrowserDetect: vu,
        _fnAddData: rt,
        _fnAddTr: oi,
        _fnNodeToDataIndex: function(n, t) {
            return t._DT_RowIndex !== r ? t._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(t, i, r) {
            return n.inArray(r, t.aoData[i].anCells)
        },
        _fnGetCellData: y,
        _fnSetCellData: wu,
        _fnSplitObjNotation: sr,
        _fnGetObjectDataFn: ft,
        _fnSetObjectDataFn: et,
        _fnGetDataMaster: hr,
        _fnClearTable: si,
        _fnDeleteIndex: hi,
        _fnInvalidate: bt,
        _fnGetRowElements: cr,
        _fnCreateTr: lr,
        _fnBuildHead: bu,
        _fnDrawHead: kt,
        _fnDraw: ut,
        _fnReDraw: ot,
        _fnAddOptionsHtml: ku,
        _fnDetectHeader: dt,
        _fnGetUniqueThs: ci,
        _fnFeatureHtmlFilter: tf,
        _fnFilterComplete: gt,
        _fnFilterCustom: rf,
        _fnFilterColumn: uf,
        _fnFilter: ff,
        _fnFilterCreateSearch: vr,
        _fnEscapeRegex: vi,
        _fnFilterData: ef,
        _fnFeatureHtmlInfo: hf,
        _fnUpdateInfo: cf,
        _fnInfoMacros: lf,
        _fnInitialise: ni,
        _fnInitComplete: yi,
        _fnLengthChange: yr,
        _fnFeatureHtmlLength: af,
        _fnFeatureHtmlPaginate: vf,
        _fnPageChange: pr,
        _fnFeatureHtmlProcessing: yf,
        _fnProcessingDisplay: w,
        _fnFeatureHtmlTable: pf,
        _fnScrollDraw: ti,
        _fnApplyToChildren: g,
        _fnCalculateColumnWidths: wr,
        _fnThrottle: pi,
        _fnConvertToWidth: wf,
        _fnGetWidestNode: bf,
        _fnGetMaxLenString: kf,
        _fnStringToCss: h,
        _fnSortFlatten: ht,
        _fnSort: df,
        _fnSortAria: gf,
        _fnSortListener: br,
        _fnSortAttachListener: kr,
        _fnSortingClasses: wi,
        _fnSortData: ne,
        _fnSaveState: bi,
        _fnLoadState: te,
        _fnSettingsFromNode: ki,
        _fnLog: tt,
        _fnMap: k,
        _fnBindAction: dr,
        _fnCallbackReg: a,
        _fnCallbackFire: o,
        _fnLengthOverflow: gr,
        _fnRenderer: nu,
        _fnDataSource: v,
        _fnRowAttributes: ar,
        _fnCalculateEnd: function() {}
    }),
    n.fn.dataTable = u,
    u.$ = n,
    n.fn.dataTableSettings = u.settings,
    n.fn.dataTableExt = u.ext,
    n.fn.DataTable = function(t) {
        return n(this).dataTable(t).api()
    }
    ,
    n.each(u, function(t, i) {
        n.fn.DataTable[t] = i
    }),
    n.fn.dataTable
}),
function(n) {
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(t) {
        return n(t, window, document)
    }) : "object" == typeof exports ? module.exports = function(t, i) {
        return t || (t = window),
        i && i.fn.dataTable || (i = require("datatables.net")(t, i).$),
        n(i, t, t.document)
    }
    : n(jQuery, window, document)
}(function(n, t, i) {
    var r = n.fn.dataTable;
    return n.extend(!0, r.defaults, {
        dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
        renderer: "bootstrap"
    }),
    n.extend(r.ext.classes, {
        sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
        sFilterInput: "form-control input-sm",
        sLengthSelect: "form-control input-sm",
        sProcessing: "dataTables_processing panel panel-default"
    }),
    r.ext.renderer.pageButton.bootstrap = function(t, u, f, e, o, s) {
        var v = new r.Api(t), w = t.oClasses, l = t.oLanguage.oPaginate, b = t.oLanguage.oAria.paginate || {}, h, c, y = 0, p = function(i, r) {
            for (var k, u, d = function(t) {
                t.preventDefault();
                n(t.currentTarget).hasClass("disabled") || v.page() == t.data.action || v.page(t.data.action).draw("page")
            }, e = 0, a = r.length; e < a; e++)
                if (u = r[e],
                n.isArray(u))
                    p(i, u);
                else {
                    c = h = "";
                    switch (u) {
                    case "ellipsis":
                        h = "&#x2026;";
                        c = "disabled";
                        break;
                    case "first":
                        h = l.sFirst;
                        c = u + (0 < o ? "" : " disabled");
                        break;
                    case "previous":
                        h = l.sPrevious;
                        c = u + (0 < o ? "" : " disabled");
                        break;
                    case "next":
                        h = l.sNext;
                        c = u + (o < s - 1 ? "" : " disabled");
                        break;
                    case "last":
                        h = l.sLast;
                        c = u + (o < s - 1 ? "" : " disabled");
                        break;
                    default:
                        h = u + 1;
                        c = o === u ? "active" : ""
                    }
                    h && (k = n("<li>", {
                        "class": w.sPageButton + " " + c,
                        id: 0 === f && "string" == typeof u ? t.sTableId + "_" + u : null
                    }).append(n("<a>", {
                        href: "#",
                        "aria-controls": t.sTableId,
                        "aria-label": b[u],
                        "data-dt-idx": y,
                        tabindex: t.iTabIndex
                    }).html(h)).appendTo(i),
                    t.oApi._fnBindAction(k, {
                        action: u
                    }, d),
                    y++)
                }
        }, a;
        try {
            a = n(u).find(i.activeElement).data("dt-idx")
        } catch (k) {}
        p(n(u).empty().html('<ul class="pagination"/>').children("ul"), e);
        a && n(u).find("[data-dt-idx=" + a + "]").focus()
    }
    ,
    r.TableTools && (n.extend(!0, r.TableTools.classes, {
        container: "DTTT btn-group",
        buttons: {
            normal: "btn btn-default",
            disabled: "disabled"
        },
        collection: {
            container: "DTTT_dropdown dropdown-menu",
            buttons: {
                normal: "",
                disabled: "disabled"
            }
        },
        print: {
            info: "DTTT_print_info"
        },
        select: {
            row: "active"
        }
    }),
    n.extend(!0, r.TableTools.DEFAULTS.oTags, {
        collection: {
            container: "ul",
            button: "li",
            liner: "a"
        }
    })),
    r
})

!function() {
    "use strict";
    function e(e) {
        try {
            if ("undefined" == typeof console)
                return;
            "error"in console ? console.error(e) : console.log(e)
        } catch (e) {}
    }
    function t(e) {
        return d.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>',
        d.childNodes[0].getAttribute("href") || ""
    }
    function r(e, t) {
        var r = e.substr(t, 2);
        return parseInt(r, 16)
    }
    function n(n, c) {
        for (var o = "", a = r(n, c), i = c + 2; i < n.length; i += 2) {
            var l = r(n, i) ^ a;
            o += String.fromCharCode(l)
        }
        try {
            o = decodeURIComponent(escape(o))
        } catch (u) {
            e(u)
        }
        return t(o)
    }
    function c(t) {
        for (var r = t.querySelectorAll("a"), c = 0; c < r.length; c++)
            try {
                var o = r[c]
                  , a = o.href.indexOf(l);
                a > -1 && (o.href = "mailto:" + n(o.href, a + l.length))
            } catch (i) {
                e(i)
            }
    }
    function o(t) {
        for (var r = t.querySelectorAll(u), c = 0; c < r.length; c++)
            try {
                var o = r[c]
                  , a = o.parentNode
                  , i = o.getAttribute(f);
                if (i) {
                    var l = n(i, 0)
                      , d = document.createTextNode(l);
                    a.replaceChild(d, o)
                }
            } catch (h) {
                e(h)
            }
    }
    function a(t) {
        for (var r = t.querySelectorAll("template"), n = 0; n < r.length; n++)
            try {
                i(r[n].content)
            } catch (c) {
                e(c)
            }
    }
    function i(t) {
        try {
            c(t),
            o(t),
            a(t)
        } catch (r) {
            e(r)
        }
    }
    var l = "/cdn-cgi/l/email-protection#"
      , u = ".__cf_email__"
      , f = "data-cfemail"
      , d = document.createElement("div");
    i(document),
    function() {
        var e = document.currentScript || document.scripts[document.scripts.length - 1];
        e.parentNode.removeChild(e)
    }()
}();

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

(function($, w, d) {
    function vtv_closepopup() {
        $("#vtv_overlay").hide();
        $("#vtv_popup").hide();
    }
    ;function vtv_setmycookie(name, value, minutes) {
        var myday = new Date();
        myday.setMinutes(myday.getMinutes() + minutes);
        d.cookie = name + "=" + value + ";path=/;expires=" + myday.toGMTString();
    }
    ;function vtv_showpopupcookie(name, width, height) {
        var cookiename = '__vtv_' + name;
        if (d.cookie.match(new RegExp(cookiename + '=[^;]+'))) {
            return;
        }
        vtv_setmycookie(cookiename, 'show', 2);
        html = "<div id='vtv_overlay' class='hidden-xs'></div>\
<div id='vtv_popup' class='hidden-xs'>\
<div id='vtv_close'><img src='https://travel.com.vn/images/vtvpopup/close.png' alt='Close Popup'/> </div>\
<a href='http://bit.ly/popupUudaiT5'><img src='https://travel.com.vn/Content/ThemeHe/img/fs-ngay-hoi-du-lich.png' alt='Ngày hội du lịch' /></a>\
</div>";
        $('body').append(html);
        $('#vtv_overlay').click(vtv_closepopup);
        $('#vtv_close').click(vtv_closepopup);
        $('#vtv_popup').css({
            position: 'fixed',
            width: width + 'px',
            height: height + 'px',
            left: '0px',
            bottom: '0px',
            'z-index': 9,
            background: 'transparent'
        });
        $('#vtv_close').css({
            background: 'transparent',
            float: 'right',
            cursor: 'pointer',
            'font-weight': 'bold',
            color: '#fff',
            'margin-top': '-18px',
        });
        $('#vtv_popup>iframe').css({
            width: '100%',
            height: '100%'
        });
    }
    $(d).ready(function() {
        vtv_showpopupcookie("showpopup", 230, 230);
    });
}
)(jQuery, window, document);
