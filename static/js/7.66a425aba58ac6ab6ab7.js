webpackJsonp([7],{181:function(t,e,o){o(231);var a=o(67)(o(199),o(246),null,null);t.exports=a.exports},199:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(20),l=o.n(a);e.default={data:function(){return{form:{title:"",desc:""},radio:4}},methods:{onSubmit:function(){var t={accesstoken:this.$store.state.Access_Token,title:"fuqi",tab:"dev",content:"dddddd"};t.accesstoken||(t.accesstoken=window.localStorage.getItem("Access_Token"));try{console.log(t),l.a.post("https://cnodejs.org/api/v1/topics",t).catch(function(t){console.log(t)})}catch(t){console.log(t)}console.log("submit!")}}}},216:function(t,e,o){e=t.exports=o(172)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.table_container{padding:20px}",""])},231:function(t,e,o){var a=o(216);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(173)("79c7961d",a,!0)},246:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fillcontain"},[o("h2",{staticStyle:{color:"red","text-align":"center"}},[t._v("社区规定测试请勾选dev")]),t._v(" "),o("div",{staticClass:"table_container"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.form.title=e},expression:"form.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发帖类型"}},[o("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[o("el-radio",{attrs:{label:1}},[t._v("ask")]),t._v(" "),o("el-radio",{attrs:{label:2}},[t._v("share")]),t._v(" "),o("el-radio",{attrs:{label:3}},[t._v("job")]),t._v(" "),o("el-radio",{attrs:{label:4}},[t._v("dev")])],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"内容"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.form.desc=e},expression:"form.desc"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),t._v(" "),o("el-button",[t._v("取消")])],1)],1)],1)])},staticRenderFns:[]}}});