/*!
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/

(function(){var f=function(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,b)},g=function(a,c){for(key in c)c.hasOwnProperty(key)&&(a[key]=c[key]);return a};window.fitText=function(a,c,b){var e=g({minFontSize:-1/0,maxFontSize:1/0},b);b=function(a){var b=c||1,d=function(){a.style.fontSize=Math.max(Math.min(a.clientWidth/(10*b),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize))+"px"};d();f(window,"resize",d)};if(a.length)for(var d=0;d<a.length;d++)b(a[d]);else b(a);return a}})();

/*!
 * spin.js
 *
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});



var App = App || {};

(function (window, document, undefined) {
	'use strict';

	if (typeof Modernizr === 'undefined') return;


	/* Utils */

	App.utils = {};

	App.utils.noop = function () {};

	App.utils.supplant = function (str, data) {
		return str.replace(/{([^{}]*)}/g, function (a, b) {
			var r = data[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		});
	};

	App.utils.addEvent = function (el, event, fn, capture) {
		if (el.addEventListener) {
			el.addEventListener(event, fn, capture || false);
		} else if (el.attachEvent) {
			el.attachEvent('on' + event, fn);
		}
	};
	
	App.utils.hasClass = function (el, className) {
		return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	};

	App.utils.addClass = function (el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else if (!App.utils.hasClass(el, className)) {
			el.className += ' ' + className;
		}
	};
	
	App.utils.removeClass = function (el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else if (App.utils.hasClass(el, className)) {
			el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
		}
	};


	/* Widgets */

	App._widgets = [];
	
	App.registerWidget = function (widget) {
		this._widgets.push(widget);
		return this;
	};

	App.init = function () {
		this._widgets.filter(function (widget) {
			return widget.isEnabled();
		}).forEach(function (widget) {
			widget.init();
		});
	};


	/* Generic widget */

	var genericWidget = {};

	genericWidget._config = {
		enabled: true
	};

	genericWidget.isEnabled = function () {
		return this._config.enabled;
	};

	genericWidget.init = App.utils.noop;


	/* oldIE */

	var oldIE = Object.create(genericWidget);

	oldIE._config = {
		className: 'oldie',
		treshold: 8
	};

	oldIE.isEnabled = function () {
		var version;
		var re;

		if (navigator.appName == 'Microsoft Internet Explorer') {
			re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(navigator.userAgent) != null) version = parseFloat(RegExp.$1);
		}

		return version && version <= this._config.treshold;
	};

	oldIE.init = function () {
		App.utils.addClass(document.documentElement, this._config.className);
	};


	/* mq */

	var mq = Object.create(genericWidget);

	mq._config = {
		enabled: !Modernizr.mq('only all'),
		base: 16,
		breakpoints: [
			{ name: 'bp-narrow', size: 35.5 },
			{ name: 'bp-medium', size: 48 },
			{ name: 'bp-wide', size: 61 }
		]
	};

	mq._update = function () {
		var root = document.documentElement;
		var docWidth = root.offsetWidth;

		this._config.breakpoints.forEach(function (bp) {
			App.utils[docWidth / this._config.base >= bp.size ?
				'addClass' : 'removeClass'](root, bp.name);
		}.bind(this));
	};

	mq.init = function () {
		App.utils.addEvent(window, 'resize', this._update.bind(this));
		this._update();
	};


	/* fit */

	var fit = Object.create(genericWidget);

	fit._initOne = function (el) {
		var kompressor = +el.getAttribute('data-k');
		fitText(el, kompressor || 1);
	};

	fit.init = function () {
		Array.prototype.forEach.call(document.querySelectorAll('.js_fit'),
				this._initOne.bind(this));
	};


	/* touch */

	var touch = Object.create(genericWidget);

	touch._config = {
		enabled: Modernizr.touch
	};

	touch.init = function () {
		// hackin'
		App.utils.addEvent(document, 'touchstart', App.utils.noop, true);
	};


	/* map */

	var map = Object.create(genericWidget);

	map._busy = false;
	map._visible = false;
	map._loaded = false;

	map._gmapInstance = null;
	map._gmapLocation = null;
	map._gmapMarker = null;

	map._mapContainer = null;
	map._mapToggle = null;
	map._preloader = null;
	map._spinner = null;
	
	map._config = {
		enabled: true,
		libUrl: '//maps.googleapis.com/maps/api/js?v=3.exp' +
				'&sensor=false&callback=App.callbacks.map',
		mapOptions: {
			zoom: 16,
			scrollwheel: false,
			streetViewControl: false,
			mapTypeControl: false,
			panControl: false,
			zoomControl: true,
			scaleControl: true
		},
		spinOptions: {
			className: 'location__spinner',
			color: '#71625a'
		},
		coords: {
			lat: 51.533139,
			lng: -0.1785
		}
	};

	map._toggle = function (e) {
		var event = e || window.event;

		if (typeof event.preventDefault !== 'undefined') {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		if (this._busy) return;
		this._busy = true;

		this[this._visible ? '_hide' : '_show']();
	};

	map._hide = function () {
		this._updateView(false);
	};

	map._load = function () {
		var script = document.createElement('script');
		script.src = this._config.libUrl;
		document.body.appendChild(script);

		this._spinner = new Spinner(this._config.spinOptions)
				.spin(this._preloader);

		App.utils.removeClass(this._preloader, 'hidden');
	};

	map._show = function () {
		if (!this._loaded) {
			this._load();
		} else {
			this._updateView(true);
			this._reset();			
		}
	};

	map._setup = function () {
		this._gmapInstance = new google.maps.Map(this._mapContainer,
				this._config.mapOptions);
		this._gmapLocation = new google.maps.LatLng(this._config.coords.lat,
				this._config.coords.lng);
		this._gmapMarker = new google.maps.Marker({
			map: this._gmapInstance,
			position: this._gmapLocation,
			animation: google.maps.Animation.DROP
		});

		this._gmapInstance.setCenter(this._gmapLocation);
		this._spinner.stop();
		this._preloader.parentNode.removeChild(this._preloader);
		this._loaded = true;
		this._updateView(true);
	};

	map._reset = function () {
		google.maps.event.trigger(this._gmapInstance, 'resize');
		this._gmapInstance.setZoom(this._config.mapOptions.zoom);
		this._gmapInstance.setCenter(this._gmapLocation);
	};

	map._updateView = function (visible) {
		App.utils[visible ? 'removeClass' : 'addClass'](this._mapContainer,
				'hidden');
		App.utils[visible ? 'removeClass' : 'addClass'](this._mapToggle, 
				'location__toggle--show');
		App.utils[visible ? 'addClass' : 'removeClass'](this._mapToggle,
				'location__toggle--hide');

		this._visible = visible;
		this._busy = false;
	};

	map.init = function () {
		this._mapContainer = document.querySelector('.js_map');
		this._mapToggle = document.querySelector('.js_map-toggle');
		this._preloader = document.querySelector('.js_map-preloader');

		this._updateView(false);

		App.callbacks = App.callbacks || {};
		App.callbacks.map = this._setup.bind(this);
		App.utils.removeClass(this._mapToggle, 'hidden');
		App.utils.addEvent(this._mapToggle, 'click', this._toggle.bind(this));
	};


	/* rtRank */

	var rtRank = Object.create(genericWidget);

	rtRank._config = {
		enabled: !Modernizr.meter,
		template: [
			'<span class="rt-rank-dummy" title="{title}" role="progressbar" ' +
					'aria-valuenow="{value}" aria-valuemin="0" aria-valuemax="100">',
				'<span class="rt-rank-dummy__val" style="width: {value}%;">{value}%</span>',
			'</span>'
		].join('')
	};

	rtRank._initOne = function (el) {
		el.setAttribute('aria-hidden', true);
		el.insertAdjacentHTML('afterend',
			App.utils.supplant(this._config.template, {
				value: el.getAttribute('value'),
				title: el.getAttribute('title')
			}));
	};

	rtRank.init = function () {
		Array.prototype.forEach.call(document.querySelectorAll('.js_rt-rank'), 
				this._initOne.bind(this));
	};


	/* Init */

	App
		.registerWidget(oldIE)
		.registerWidget(mq)
		.registerWidget(fit)
		.registerWidget(touch)
		.registerWidget(map)
		.registerWidget(rtRank)
		.init();

}(window, document));
