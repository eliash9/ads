!function(e) {
    "use strict";
    var t = function(e, t) {
        this.__construct(e, t)
    },
    o = 0,
    n = 0,
    i = !1,
    s = "das_pu",
    r = top != self ? top : self,
    a = navigator.userAgent.toLowerCase(),
    c = {
        webkit: /webkit/.test(a),
        mozilla: /mozilla/.test(a) && !/(compatible|webkit)/.test(a),
        chrome: /chrome/.test(a),
        msie: /msie|trident\//.test(a) && !/opera/.test(a),
        firefox: /firefox/.test(a),
        safari: /safari/.test(a) && !/chrome/.test(a),
        opera: /opera/.test(a),
        version: parseInt(a.match(/(?:[^\s]+(?:ri|ox|me|ra)\/|trident\/.*?rv:)([\d]+)/i)[1], 10)
    },
    u = {
        simulateClick: function(t) {
            var o = document.createElement("a"),
                n = document.createEvent("MouseEvents");
            o.href = t || "data:text/html,<script>window.close();</script>;",
            document.body.appendChild(o),
            n.initMouseEvent("click", !0, !0, e, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null),
            o.dispatchEvent(n),
            o.parentNode.removeChild(o)
        },
        blur: function(t) {
            try {
                t.blur(),
                t.opener.window.focus(),
                e.self.window.focus(),
                e.focus(),
                c.firefox ? this.openCloseWindow(t) : c.webkit && (!c.chrome || c.chrome && c.version < 41) && this.openCloseTab()
            } catch (o) {}
        },
        openCloseWindow: function(e) {
            var t = e.window.open("about:blank");
            t.focus(),
            t.close(),
            setTimeout(function() {
                try {
                    t = e.window.open("about:blank"),
                    t.focus(),
                    t.close()
                } catch (o) {}
            }, 1)
        },
        openCloseTab: function() {
            this.simulateClick()
        },
        mergeObject: function() {
            var e, t, o = {};
            for (e = 0; e < arguments.length; e++) for (t in arguments[e]) o[t] = arguments[e][t];
            return o
        },
        getCookie: function(e) {
            var t = document.cookie.match(new RegExp(e + "=[^;]+", "i"));
            return t ? decodeURIComponent(t[0].split("=")[1]) : null
        },
        setCookie: function(e, t, o, n) {
            var i;
            "number" == typeof o ? (i = new Date, i.setTime(i.getTime() + 60 * o * 1e3)) : i = o,
            document.cookie = e + "=" + escape(t) + "; expires=" + i.toUTCString() + "; path=" + (n || "/")
        }
    };
    t.prototype = {
        defaultWindowOptions: {
            width: e.screen.width,
            height: e.screen.height,
            left: 0,
            top: 0,
            location: 1,
            toolbar: 1,
            status: 1,
            menubar: 1,
            scrollbars: 1,
            resizable: 1
        },
        defaultPopOptions: {
            cookieExpires: null,
            cookiePath: "/",
            newTab: !0,
            blur: !0,
            chromeDelay: 500,
            beforeOpen: function() {},
            afterOpen: function() {}
        },
        __construct: function(e, t) {
            this.urls = Array.isArray(e) ? e : [e]; // Support multiple URLs
            this.index = o++,
            this.name = s + "_" + this.index,
            this.executed = !1,
            this.setOptions(t),
            this.register()
        },
        register: function() {
            if (this.isExecuted()) return;
            var t, o, s = this,
                a = [],
                l = "click",
                h = function(hj) {
                    hj.preventDefault(),
                    n = (new Date).getTime(),
                    s.setExecuted(),
                    s.options.beforeOpen.call(void 0, this);
                    // Pick random URL if there are multiple
                    var randomUrl = s.urls[Math.floor(Math.random() * s.urls.length)];
                    t = r.window.open(randomUrl, "_blank"),
                    s.options.blur && u.blur(t),
                    s.options.afterOpen.call(void 0, this);
                    for (o in a) u.detachEvent(l, h, a[o])
                };
            u.attachEvent(l, h, document),
            a.push(document)
        },
        isExecuted: function() {
            return this.executed || !!u.getCookie(this.name)
        },
        setExecuted: function() {
            this.executed = !0,
            u.setCookie(this.name, 1, this.options.cookieExpires, this.options.cookiePath)
        },
        setOptions: function(e) {
            this.options = u.mergeObject(this.defaultWindowOptions, this.defaultPopOptions, e || {})
        }
    },
    t.make = function(e, t) {
        return new this(e, t)
    },
    e.dpu = t
}(window);

function create_pu() {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Popup init');
        var urls = ["https://s.shopee.co.id/7zuPVfiG51","https://s.shopee.co.id/AUbkUGYk0W","https://s.shopee.co.id/AKIKHxZNLV","https://s.shopee.co.id/A9yu5ea0gU","https://s.shopee.co.id/9zfTtLae1T","https://s.shopee.co.id/9pM3h2bHMS","https://s.shopee.co.id/9f2dUjbuhR","https://s.shopee.co.id/9UjDIQcY2Q","https://s.shopee.co.id/9KPn67dBNP","https://s.shopee.co.id/6V5biuny7s","https://s.shopee.co.id/6KmBWbobSr","https://s.shopee.co.id/6ASlKIpEnq","https://s.shopee.co.id/609L7zps8p","https://s.shopee.co.id/5ppuvgqVTo","https://s.shopee.co.id/5fWUjNr8on","https://s.shopee.co.id/5VD4X4rm9m","https://s.shopee.co.id/5KteKlsPUl","https://s.shopee.co.id/7pazJMitQG","https://s.shopee.co.id/7fHZ73jWlF","https://s.shopee.co.id/7Uy8uk"];
        window.pux = dpu.make(urls, {
            newTab: true,
            cookieExpires: 60 * 24, // 1 day
            afterOpen: function() {
                window.location.href = urls[0]; // Navigate back to the first URL after popup
            }
        });
    });
}

create_pu();
