'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Module : Sparrow util tools
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 创建一个带壳的对象,防止外部修改
 * @param {Object} proto
 */
var createShellObject = function createShellObject(proto) {
	var exf = function exf() {};
	exf.prototype = proto;
	return new exf();
};
var execIgnoreError = function execIgnoreError(a, b, c) {
	try {
		a.call(b, c);
	} catch (e) {}
};

var getFunction = function getFunction(target, val) {
	if (!val || typeof val == 'function') return val;
	if (typeof target[val] == 'function') return target[val];else if (typeof window[val] == 'function') return window[val];else if (val.indexOf('.') != -1) {
		var func = getJSObject(target, val);
		if (typeof func == 'function') return func;
		func = getJSObject(window, val);
		if (typeof func == 'function') return func;
	}
	return val;
};
var getJSObject = function getJSObject(target, names) {
	if (!names) {
		return;
	}
	if ((typeof names === 'undefined' ? 'undefined' : _typeof(names)) == 'object') return names;
	var nameArr = names.split('.');
	var obj = target;
	for (var i = 0; i < nameArr.length; i++) {
		obj = obj[nameArr[i]];
		if (!obj) return null;
	}
	return obj;
};
var isDate = function isDate(input) {
	return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
};
var isNumber = function isNumber(obj) {
	//return obj === +obj
	return obj - parseFloat(obj) + 1 >= 0;
};
var isArray = Array.isArray || function (val) {
	return Object.prototype.toString.call(val) === '[object Array]';
};
var isEmptyObject = function isEmptyObject(obj) {
	var name;
	for (name in obj) {
		return false;
	}
	return true;
};
var inArray = function inArray(node, arr) {
	if (!arr instanceof Array) {
		throw "arguments is not Array";
	}
	for (var i = 0, k = arr.length; i < k; i++) {
		if (node == arr[i]) {
			return true;
		}
	}
	return false;
};
var isDomElement = function isDomElement(obj) {
	if (window['HTMLElement']) {
		return obj instanceof HTMLElement;
	} else {
		return obj && obj.tagName && obj.nodeType === 1;
	}
};
var each = function each(obj, callback) {
	if (obj.forEach) {
		obj.forEach(function (v, k) {
			callback(k, v);
		});
	} else if (obj instanceof Object) {
		for (var k in obj) {
			callback(k, obj[k]);
		}
	} else {
		return;
	}
};

NodeList.prototype.forEach = Array.prototype.forEach;

/**
 * 获得字符串的字节长度
 */
String.prototype.lengthb = function () {
	//	var str = this.replace(/[^\x800-\x10000]/g, "***");
	var str = this.replace(/[^\x00-\xff]/g, "**");
	return str.length;
};

/**
 * 将AFindText全部替换为ARepText
 */
String.prototype.replaceAll = function (AFindText, ARepText) {
	//自定义String对象的方法
	var raRegExp = new RegExp(AFindText, "g");
	return this.replace(raRegExp, ARepText);
};

exports.createShellObject = createShellObject;
exports.execIgnoreError = execIgnoreError;
exports.getFunction = getFunction;
exports.getJSObject = getJSObject;
exports.isDate = isDate;
exports.isNumber = isNumber;
exports.isArray = isArray;
exports.isEmptyObject = isEmptyObject;
exports.inArray = inArray;
exports.isDomElement = isDomElement;
exports.each = each;