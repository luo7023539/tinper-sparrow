"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Module : Sparrow i18n
* Author : Kvkens(yueming@yonyou.com)
* Date	  : 2016-07-29 10:16:54
*/
//import {uuii18n} from '?';//缺失故修改为default值
var trans = function trans(key, dftValue) {
  //return  uuii18n ?  uuii18n.t('uui-trans:' + key) : dftValue;
  return dftValue;
};

exports.trans = trans;