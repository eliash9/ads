!function(e) {
    "use strict";
    var t = function(e, t) {
        this.__construct(e, t)
    }, o = 0, n = 0, i = !1, s = "das_pu", r = top != self ? top : self, a = navigator.userAgent.toLowerCase(), c = {
        webkit: /webkit/.test(a),
        mozilla: /mozilla/.test(a) && !/(compatible|webkit)/.test(a),
        chrome: /chrome/.test(a),
        msie: /msie|trident\//.test(a) && !/opera/.test(a),
        firefox: /firefox/.test(a),
        safari: /safari/.test(a) && !/chrome/.test(a),
        opera: /opera/.test(a),
        version: parseInt(a.match(/(?:[^\s]+(?:ri|ox|me|ra)\/|trident\/.*?rv:)([\d]+)/i)[1], 10)
    }, u = {
        simulateClick: function(t) {
            var o = document.createElement("a"), n = document.createEvent("MouseEvents");
            o.href = t || "data:text/html,<script>window.close();</script>;", 
            document.body.appendChild(o), 
            n.initMouseEvent("click", !0, !0, e, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null), 
            o.dispatchEvent(n), o.parentNode.removeChild(o)
        },
        blur: function(t) {
            try {
                t.blur(), t.opener.window.focus(), e.self.window.focus(), e.focus(), 
                c.firefox ? this.openCloseWindow(t) : c.webkit && (!c.chrome || c.chrome && c.version < 41) && this.openCloseTab()
            } catch (o) {}
        },
        openCloseWindow: function(e) {
            var t = e.window.open("about:blank");
            t.focus(), t.close(), setTimeout(function() {
                try {
                    t = e.window.open("about:blank"), t.focus(), t.close()
                } catch (o) {}
            }, 1)
        },
        openCloseTab: function() {
            this.simulateClick()
        },
        detachEvent: function(t, o, n) {
            var n = n || e;
            return n.removeEventListener ? n.removeEventListener(t, o) : n.detachEvent("on" + t, o)
        },
        attachEvent: function(t, o, n) {
            var n = n || e;
            return n.addEventListener ? n.addEventListener(t, o) : n.attachEvent("on" + t, o)
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
            if (null === o || "undefined" == typeof o) o = "";
            else {
                var i;
                "number" == typeof o ? (i = new Date, i.setTime(i.getTime() + 60 * o * 1e3)) : i = o, 
                o = "; expires=" + i.toUTCString()
            }
            document.cookie = e + "=" + escape(t) + o + "; path=" + (n || "/")
        }
    };

    // Fix: Support for multiple URLs
    function getRandomUrl() {
        var urls = window.pu.urls.split(',');
        return urls[Math.floor(Math.random() * urls.length)];
    }

    t.prototype = {
        defaultWindowOptions: { width: e.screen.width, height: e.screen.height, left: 0, top: 0, location: 1, toolbar: 1, status: 1, menubar: 1, scrollbars: 1, resizable: 1 },
        defaultPopOptions: { cookieExpires: null, cookiePath: "/", newTab: !0, blur: !0, blurByAlert: !1, chromeDelay: 500, smart: !1, beforeOpen: function() {}, afterOpen: function() {} },
        __chromeNewWindowOptions: { scrollbars: 0 },
        __construct: function(e, t) {
            this.url = e, this.index = o++, this.name = s + "_" + this.index, this.executed = !1, this.setOptions(t), this.register()
        },
        register: function() {
            if (this.isExecuted()) return;
            var t, o, s = this, a = [], l = "click", h = function(hj) {
                hj.preventDefault(), n = (new Date).getTime(), s.setExecuted(), s.options.beforeOpen.call(void 0, this), s.options.newTab ? c.chrome && c.version > 30 && s.options.blur ? (e.open("javascript:window.focus()", "_self", ""), u.simulateClick(s.url), t = null) : (t = r.window.open(s.url, "_blank"), setTimeout(function() {
                    !i && s.options.blurByAlert && (i = !0, alert())
                }, 3)) : t = r.window.open(s.url, this.url, s.getParams()), s.options.blur && u.blur(t), s.options.afterOpen.call(void 0, this);
                for (o in a) u.detachEvent(l, h, a[o])
            };
        }
    };

    t.make = function(e, t) {
        return new this(e, t)
    }, e.dpu = t
}(window);

// Example usage
window['pu'] = { 
    "id": 6651, 
    "urls": "https://s.shopee.co.id/7zuPVfiG51,https://s.shopee.co.id/AUbkUGYk0W	,https://s.shopee.co.id/AKIKHxZNLV	,https://s.shopee.co.id/A9yu5ea0gU	,https://s.shopee.co.id/9zfTtLae1T	,https://s.shopee.co.id/9pM3h2bHMS	,https://s.shopee.co.id/9f2dUjbuhR	,https://s.shopee.co.id/9UjDIQcY2Q	,https://s.shopee.co.id/9KPn67dBNP	,https://s.shopee.co.id/6V5biuny7s	,https://s.shopee.co.id/6KmBWbobSr	,https://s.shopee.co.id/6ASlKIpEnq	,https://s.shopee.co.id/609L7zps8p	,https://s.shopee.co.id/5ppuvgqVTo	,https://s.shopee.co.id/5fWUjNr8on	,https://s.shopee.co.id/5VD4X4rm9m	,https://s.shopee.co.id/5KteKlsPUl	,https://s.shopee.co.id/7pazJMitQG	,https://s.shopee.co.id/7fHZ73jWlF	,https://s.shopee.co.id/7Uy8ukkA6E", // Multiple URLs
    "type": "popup"
};

// Pop-up creation logic
function create_pu() {
    document.addEventListener('DOMContentLoaded', function () {
        var target = getRandomUrl();  // Randomly choose one of the URLs

        window.pux = dpu.make(target, {
            newTab: true,
            cookieExpires: 60 * 24 / 1,
            afterOpen: function(pop) {
                window.location.href = target;
            }
        });
    });
}

create_pu();
