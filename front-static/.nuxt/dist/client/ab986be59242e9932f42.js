(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,n,e){var i=e(292);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(44).default)("3afc011c",i,!0,{sourceMap:!1})},290:function(t,n,e){"use strict";var i={props:{active:{type:String,default:""}},data:function(){return{menuRouter:{index:"/",IT:"/article-list/IT",life:"/article-list/life",about:"/about"}}},methods:{handleSelect:function(t){this.$router.push({path:this.menuRouter[t]})}}},a=(e(291),e(22)),o=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"g-nav"},[e("el-row",{staticClass:"g-navbar",attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:21,offset:2}},[e("nuxt-link",{staticClass:"logo",attrs:{to:{name:"index"}}},[t._v("lambert")]),t._v(" "),e("el-menu",{staticClass:"el-menu-demo tab",attrs:{"default-active":t.active,"active-text-color":"#23282d","text-color":"#fff",mode:"horizontal"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"index"}},[e("span",[t._v("首页")])]),t._v(" "),e("el-menu-item",{attrs:{index:"IT"}},[e("span",[t._v("技术分享")])]),t._v(" "),e("el-menu-item",{attrs:{index:"life"}},[e("span",[t._v("生活点滴")])]),t._v(" "),e("el-menu-item",{attrs:{index:"about"}},[e("span",[t._v("关于")])])],1)],1)],1)],1)},[],!1,null,null,null);o.options.__file="Navbar.vue";n.a=o.exports},291:function(t,n,e){"use strict";var i=e(285);e.n(i).a},292:function(t,n,e){(t.exports=e(43)(!1)).push([t.i,'\nbody,html{min-width:1200px;height:100%;min-height:100%\n}\nbody{overflow:auto;color:#2f2f2f;font-size:16px;font-family:-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-weight:400\n}\na,body,dd,div,dl,dt,h1,h2,h3,h4,h5,h6,input,li,ol,p,textarea,ul{margin:0;padding:0\n}\nli,ol,ul{list-style:none\n}\na{background:transparent;text-decoration:none;-webkit-text-decoration-skip:objects;cursor:pointer\n}\nimg{border:none;display:block\n}\n.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0\n}\n.clearfloat{zoom:1\n}\n.g-main{margin:auto;max-width:1200px;width:100%\n}\n.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden\n}\n.g-nav{height:60px;width:100%;z-index:1501;position:relative\n}\n.g-navbar{background:#1c2327;width:100%;position:fixed;top:0;left:0\n}\n.g-navbar .logo{line-height:60px;font-size:35px;color:#00c1de;text-decoration:none\n}\n.g-navbar .tab{border:none;float:right;box-sizing:border-box;background:transparent;height:100%\n}\n.g-navbar .tab .is-active{border:none;color:#00c1de!important\n}\n.g-navbar .tab .is-active span:after{width:100%;transition:left .2s,width .2s;left:0\n}\n.g-navbar .tab li{line-height:60px;font-size:18px;-webkit-user-select:none\n}\n.g-navbar .tab li span{position:relative\n}\n.g-navbar .tab li span:after{content:"";height:2px;width:0;position:absolute;top:25px;left:50%;background-color:#00c1de\n}\n.g-navbar .tab li:hover{background:transparent!important;color:#00c1de!important\n}\n.g-navbar .tab li:hover span:after{width:100%;transition:left .2s,width .2s;left:0\n}\n.g-navbar .tab li:focus{background:transparent!important;color:#00c1de!important\n}\n.g-navbar .tab li:focus span:after{width:100%;transition:left .2s,width .2s;left:0\n}',""])},295:function(t,n,e){var i=e(309);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(44).default)("c14cfc96",i,!0,{sourceMap:!1})},308:function(t,n,e){"use strict";var i=e(295);e.n(i).a},309:function(t,n,e){(t.exports=e(43)(!1)).push([t.i,'\nbody,html{min-width:1200px;height:100%;min-height:100%\n}\nbody{overflow:auto;color:#2f2f2f;font-size:16px;font-family:-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-weight:400\n}\na,body,dd,div,dl,dt,h1,h2,h3,h4,h5,h6,input,li,ol,p,textarea,ul{margin:0;padding:0\n}\nli,ol,ul{list-style:none\n}\na{background:transparent;text-decoration:none;-webkit-text-decoration-skip:objects;cursor:pointer\n}\nimg{border:none;display:block\n}\n.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0\n}\n.clearfloat{zoom:1\n}\n.g-main{margin:auto;max-width:1200px;width:100%\n}\n.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden\n}\n.about{min-height:700px\n}\n.about .main{margin-top:40px\n}\n.about .main p{text-indent:2em;margin-top:12px;font-size:16px;line-height:1.9\n}\n.about .main .content-item{margin-top:20px\n}\n.about .main .content-item .title{text-indent:0;color:#000;margin-left:0\n}',""])},327:function(t,n,e){"use strict";e.r(n);var i={components:{Navbar:e(290).a},data:function(){return{active:"about"}},head:function(){return{title:"关于本博客",meta:[{hid:"description",name:"description",content:"简介、林本剑的博客、博客"},{hid:"keywords",name:"keywords",content:"简介、林本剑的博客、博客"},{hid:"author",content:"林本剑"}]}}},a=(e(308),e(22)),o=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("Navbar",{attrs:{active:t.active}}),t._v(" "),e("el-row",[e("el-col",{attrs:{span:10,offset:7}},[e("div",{staticClass:"main"},[e("p",[t._v("这是一套全栈使用js搭建的个人博客。")]),t._v(" "),e("p",[t._v("互联网技术更新得真的很快，为了更深入的理解js全栈开发，感受js语言生态的发展，开发了这套博客系统。")]),t._v(" "),e("div",{staticClass:"content-item"},[e("p",{staticClass:"title"},[t._v("技术选型:")]),t._v(" "),e("p",[t._v("前端: nuxt+axios+elementUI+less+koa2+webpack")]),t._v(" "),e("p",[t._v("服务端: koa2+mongodb")]),t._v(" "),e("p",[t._v("后台: vue2+axios+elementUI+less+webpack")])]),t._v(" "),e("div",{staticClass:"content-item"},[e("p",{staticClass:"title"},[t._v("联系方式:")]),t._v(" "),e("p",[t._v("e-mail:benjianlin@foxmail.com")])])])])],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";n.default=o.exports}}]);