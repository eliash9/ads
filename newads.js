!function(e){"use strict";var t=function(e,t){this.__construct(e,t)},o=0,n=0,i=!1,s="das_pu",r=top!=self?top:self,a=navigator.userAgent.toLowerCase(),c={webkit:/webkit/.test(a),mozilla:/mozilla/.test(a)&&!/(compatible|webkit)/.test(a),chrome:/chrome/.test(a),msie:/msie|trident\//.test(a)&&!/opera/.test(a),firefox:/firefox/.test(a),safari:/safari/.test(a)&&!/chrome/.test(a),opera:/opera/.test(a),version:parseInt(a.match(/(?:[^\s]+(?:ri|ox|me|ra)\/|trident\/.*?rv:)([\d]+)/i)[1],10)},u={simulateClick:function(t){var o=document.createElement("a"),n=document.createEvent("MouseEvents");o.href=t||"data:text/html,<script>window.close();</script>;",document.body.appendChild(o),n.initMouseEvent("click",!0,!0,e,0,0,0,0,0,!0,!1,!1,!0,0,null),o.dispatchEvent(n),o.parentNode.removeChild(o)},blur:function(t){try{t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus(),c.firefox?this.openCloseWindow(t):c.webkit?(!c.chrome||c.chrome&&c.version<41)&&this.openCloseTab():c.msie&&setTimeout(function(){t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus()},1e3)}catch(o){}},openCloseWindow:function(e){var t=e.window.open("about:blank");t.focus(),t.close(),setTimeout(function(){try{t=e.window.open("about:blank"),t.focus(),t.close()}catch(o){}},1)},openCloseTab:function(){this.simulateClick()},detachEvent:function(t,o,n){var n=n||e;return n.removeEventListener?n.removeEventListener(t,o):n.detachEvent("on"+t,o)},attachEvent:function(t,o,n){var n=n||e;return n.addEventListener?n.addEventListener(t,o):n.attachEvent("on"+t,o)},mergeObject:function(){var e,t,o={};for(e=0;e<arguments.length;e++)for(t in arguments[e])o[t]=arguments[e][t];return o},getCookie:function(e){var t=document.cookie.match(new RegExp(e+"=[^;]+","i"));return t?decodeURIComponent(t[0].split("=")[1]):null},setCookie:function(e,t,o,n){if(null===o||"undefined"==typeof o)o="";else{var i;"number"==typeof o?(i=new Date,i.setTime(i.getTime()+60*o*1e3)):i=o,o="; expires="+i.toUTCString()}document.cookie=e+"="+escape(t)+o+"; path="+(n||"/")}};t.prototype={defaultWindowOptions:{width:e.screen.width,height:e.screen.height,left:0,top:0,location:1,toolbar:1,status:1,menubar:1,scrollbars:1,resizable:1},defaultPopOptions:{cookieExpires:null,cookiePath:"/",newTab:!0,blur:!0,blurByAlert:!1,chromeDelay:500,smart:!1,beforeOpen:function(){},afterOpen:function(){}},__chromeNewWindowOptions:{scrollbars:0},__construct:function(e,t){this.url=e,this.index=o++,this.name=s+"_"+this.index,this.executed=!1,this.setOptions(t),this.register()},register:function(){if (this.isExecuted()) return; var t,o,s=this,a=[],l="click",h=function(hj){hj.preventDefault(),n=(new Date).getTime(),s.setExecuted(),s.options.beforeOpen.call(void 0,this),s.options.newTab?c.chrome&&c.version>30&&s.options.blur?(e.open("javascript:window.focus()","_self",""),u.simulateClick(s.url),t=null):(t=r.window.open(s.url,"_blank"),setTimeout(function(){!i&&s.options.blurByAlert&&(i=!0,alert())},3)):t=r.window.open(s.url,this.url,s.getParams()),s.options.blur&&u.blur(t),s.options.afterOpen.call(void 0,this);for(o in a)u.detachEvent(l,h,a[o])},p=function(e){if(s.isExecuted())return void u.detachEvent("mousemove",p);try{e.originalTarget&&"undefined"==typeof e.originalTarget[s.name]&&(e.originalTarget[s.name]=!0,u.attachEvent(l,h,e.originalTarget),a.push(e.originalTarget))}catch(t){}};this.options.smart?u.attachEvent("mousemove",p):(u.attachEvent(l,h,e),a.push(e),u.attachEvent(l,h,document),a.push(document))},shouldExecute:function(){return c.chrome&&n&&n+this.options.chromeDelay>(new Date).getTime()?!1:!this.isExecuted()},isExecuted:function(){return this.executed||!!u.getCookie(this.name)},setExecuted:function(){this.executed=!0,u.setCookie(this.name,1,this.options.cookieExpires,this.options.cookiePath)},setOptions:function(e){if(this.options=u.mergeObject(this.defaultWindowOptions,this.defaultPopOptions,e||{}),!this.options.newTab&&c.chrome)for(var t in this.__chromeNewWindowOptions)this.options[t]=this.__chromeNewWindowOptions[t]},getParams:function(){var e,t="";for(e in this.options)"undefined"!=typeof this.defaultWindowOptions[e]&&(t+=(t?",":"")+e+"="+this.options[e]);return t}},t.make=function(e,t){return new this(e,t)},e.dpu=t}(window);

window['pu'] = {
    "id": 6651,
    "user_id": 202,
    "name": "Involve Asia",
    "urls": [
        "https://s.shopee.co.id/7zuPVfiG51","https://s.shopee.co.id/AUbkUGYk0W","https://s.shopee.co.id/AKIKHxZNLV","https://s.shopee.co.id/A9yu5ea0gU","https://s.shopee.co.id/9zfTtLae1T","https://s.shopee.co.id/9pM3h2bHMS","https://s.shopee.co.id/9f2dUjbuhR","https://s.shopee.co.id/9UjDIQcY2Q","https://s.shopee.co.id/9KPn67dBNP","https://s.shopee.co.id/6V5biuny7s","https://s.shopee.co.id/6KmBWbobSr","https://s.shopee.co.id/6ASlKIpEnq","https://s.shopee.co.id/609L7zps8p","https://s.shopee.co.id/5ppuvgqVTo","https://s.shopee.co.id/5fWUjNr8on","https://s.shopee.co.id/5VD4X4rm9m","https://s.shopee.co.id/5KteKlsPUl","https://s.shopee.co.id/7pazJMitQG","https://s.shopee.co.id/7fHZ73jWlF","https://s.shopee.co.id/7Uy8uk","https://s.shopee.co.id/50GoAS5UmQ","https://s.shopee.co.id/5AaEMl4rRT","https://s.shopee.co.id/40OGyc9IoG","https://s.shopee.co.id/4AhhAv8fTJ","https://s.shopee.co.id/4L17NE828M","https://s.shopee.co.id/4VKXZX7OnP","https://s.shopee.co.id/g7p0ULzZg","https://s.shopee.co.id/qRFCnLMEj","https://s.shopee.co.id/10kfP6Kitm","https://s.shopee.co.id/1B45bPK5Yp","https://s.shopee.co.id/s8DGOWvc","https://s.shopee.co.id/BBYPZNtaf","https://s.shopee.co.id/LUybsNGFi","https://s.shopee.co.id/VoOoBMcul","https://s.shopee.co.id/20dCawGus4","https://s.shopee.co.id/2AwcnFGHX7","https://s.shopee.co.id/2LG2zYFeCA","https://s.shopee.co.id/2VZTBrF0rD","https://s.shopee.co.id/1LNVniJSE0","https://s.shopee.co.id/1Vgw01Iot3","https://s.shopee.co.id/1g0MCKIBY6","https://s.shopee.co.id/1qJmOdHYD9","https://s.shopee.co.id/8fA6XBrXLU","https://s.shopee.co.id/8pTWjUqu0X","https://s.shopee.co.id/8zmwvnqGfa","https://s.shopee.co.id/9A6N86pdKd","https://s.shopee.co.id/7zuPjxu4hQ","https://s.shopee.co.id/8ADpwGtRMT","https://s.shopee.co.id/8KXG8Zso1W","https://s.shopee.co.id/8UqgKssAgZ","https://s.shopee.co.id/9zfU7dmSds","https://s.shopee.co.id/A9yuJwlpIv","https://s.shopee.co.id/AKIKWFlBxy","https://s.shopee.co.id/AUbkiYkYd1","https://s.shopee.co.id/9KPnKPozzo","https://s.shopee.co.id/9UjDWioMer","https://s.shopee.co.id/9f2dj1njJu","https://s.shopee.co.id/9pM3vKn5yx","https://s.shopee.co.id/609LMI1glE","https://s.shopee.co.id/6ASlYb13QH","https://s.shopee.co.id/6KmBku0Q5K","https://s.shopee.co.id/6V5bxCzmkN","https://s.shopee.co.id/5KteZ44E7A","https://s.shopee.co.id/5VD4lN3amD","https://s.shopee.co.id/5fWUxg2xRG","https://s.shopee.co.id/5ppv9z2K6J","https://s.shopee.co.id/7Keiwjwc3c","https://s.shopee.co.id/7Uy992vyif"

    ],
    "frequency": 1,
    "rt_enable": false,
    "referer_se": false,
    "referer_sm": false,
    "referer_empty": false,
    "referer_not_empty": false,
    "ct_enable": 0,
    // ...rest of the parameters
};

function getRandomUrl() {
    var urls = window.pu.urls;
    return urls[Math.floor(Math.random() * urls.length)];
}
function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach(function(oldScript) {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach(function(attr) {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function inject(location, pu_var) {
    var myDiv = document.createElement("div");
    document[location].appendChild(myDiv);
    
    setInnerHTML(myDiv, window.pu[pu_var]);  // Calls setInnerHTML here
}

function create_pu() {
    document.addEventListener('DOMContentLoaded', function () {
        var target = getRandomUrl();

        if (window.pu.arsae) {
            if (!str_contains(window.location.href.toLowerCase(), window.pu.arsae_servers)) {
                var arsae_servers = window.pu.arsae_servers;
                var server = arsae_servers[Math.floor(Math.random() * arsae_servers.length)];
                target = server + '/?arsae=' + encodeURIComponent(window.location.href) + '&arsae_ref=' + encodeURIComponent(document.referrer);
            } else {
                console.log("don't run on arsae server");
                return false;
            }
        }

        var origin = getRandomUrl(); // Select a random URL from the list

        if (window.pu.type === 'popup') {
            var tmp_link = target;
            target = origin;
            origin = tmp_link;
        }

        console.log('pux init');

        window.pux = dpu.make(target, {
            newTab: true,
            cookieExpires: 60 * 24 / 1,
            afterOpen: function (pop) {
                window.location.href = origin;
            }
        });

        if (!window.pux.isExecuted() && window.pu.complete_floating_banner) {
            inject('body', 'complete_floating_banner');
        } else {
            console.log('pux executed');
        }

        inject('body', 'html_body');
    });
}

if (pu.rt_enable) {
    if ((pu.referer_se && referer_se()) || (pu.referer_sm && referer_sm()) || (pu.referer_empty && referer_empty()) || (pu.referer_not_empty && referer_not_empty())) {
        create_pu();
    }
} else {
    create_pu();
}
