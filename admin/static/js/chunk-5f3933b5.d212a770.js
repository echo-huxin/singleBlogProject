(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f3933b5"],{"0cb4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("EditArticle",{attrs:{mode:"add"}})],1)},o=[],i=n("137d"),r={components:{EditArticle:i["a"]}},c=r,s=n("2877"),l=Object(s["a"])(c,a,o,!1,null,"566d4e5a",null);e["default"]=l.exports},"137d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block"},[t._v("文章标题")]),n("div",{staticStyle:{"margin-bottom":"15px"}},[n("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("div",{staticClass:"block"},[t._v("文章编辑")]),n("editor",{ref:"toastuiEditor",attrs:{initialValue:t.form.editorText,height:"600px",options:t.editorOptions}}),n("div",{staticClass:"block"},[t._v("文章描述")]),n("el-input",{attrs:{type:"textarea",rows:6},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),n("Upload",{attrs:{uploadTitle:"文章头图"},model:{value:t.form.thumb,callback:function(e){t.$set(t.form,"thumb",e)},expression:"form.thumb"}}),n("div",{staticClass:"block"},[t._v("选择分类")]),n("el-select",{attrs:{slot:"prepend",placeholder:"请选择文章分类"},on:{change:t.change},slot:"prepend",model:{value:t.form.select,callback:function(e){t.$set(t.form,"select",e)},expression:"form.select"}},t._l(t.blogType,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),n("div",[n("el-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary"},on:{click:t.addArticleHandle}},[t._v(t._s(t.btnContent))])],1)],1)},o=[],i=(n("a4d3"),n("e01a"),n("f513"),n("e459")),r=n("d443"),c=n("c19d"),s=n("864d"),l=(n("f4c3"),{props:["mode"],data:function(){return{form:{title:"",editorText:"",description:"",thumb:"",select:""},blogType:[],imageUrl:"",editorOptions:{language:"zh-CN"},btnContent:"发布文章"}},created:function(){var t=this;Object(c["d"])().then((function(e){var n=e.data;t.blogType=n})),"edit"===this.mode&&(this.id=this.$route.params.id,Object(s["e"])(this.id).then((function(e){var n=e.data;t.form=n,t.form.select=null===n.category?"":n.category.id,t.$refs.toastuiEditor.invoke("setHTML",n.htmlContent)})),this.btnContent="确认修改")},components:{editor:i["a"],Upload:r["a"]},methods:{addArticleHandle:function(){var t=this,e=this.$refs.toastuiEditor.invoke("getHTML"),n=this.$refs.toastuiEditor.invoke("getMarkdown"),a={title:this.form.title,description:this.form.description,createDate:(new Date).getTime(),categoryId:this.form.select,toc:[],htmlContent:e,thumb:this.form.thumb,markdownContent:n};a.title&&a.description&&a.htmlContent&&a.categoryId?"add"===this.mode?Object(s["a"])(a).then((function(){t.$router.push("/blogList")})):Object(s["c"])({id:this.form.id,data:a}).then((function(){t.$router.push("/blogList"),t.$message.success("文章修改成功")})):this.$message.error("请填写所有内容")},change:function(){this.$forceUpdate()}}}),u=l,d=(n("7dc3"),n("2877")),p=Object(d["a"])(u,a,o,!1,null,"57464daa",null);e["a"]=p.exports},"476d":function(t,e,n){},7443:function(t,e,n){"use strict";n("b4f5")},"7dc3":function(t,e,n){"use strict";n("476d")},"864d":function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return s}));var a=n("b775");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(a["a"])({url:"/api/blog",method:"get",params:{page:t,limit:e}})}function i(t){return Object(a["a"])({url:"/api/blog/".concat(t),method:"delete"})}function r(t){return Object(a["a"])({url:"/api/blog",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/api/blog/".concat(t.id),method:"put",data:t.data})}function s(t){return Object(a["a"])({url:"/api/blog/".concat(t),method:"get"})}},b4f5:function(t,e,n){},c19d:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return s}));var a=n("b775");function o(){return a["a"].get("/api/blogtype")}function i(t){return Object(a["a"])({url:"/api/blogtype",method:"post",data:t})}function r(t){return a["a"].delete("/api/blogtype/".concat(t))}function c(t){return Object(a["a"])({url:"/api/blogtype/".concat(t),method:"get"})}function s(t){return Object(a["a"])({url:"/api/blogtype/".concat(t.id),method:"put",data:t.data})}},d443:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block"},[t._v(t._s(t.uploadTitle))]),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,headers:t.headers}},[t.value?n("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},o=[],i={props:["uploadTitle","value"],computed:{imageUrl:function(){if(this.value)return this.value},headers:function(){return{Authorization:"Bearer "+localStorage.getItem("adminToken")}}},methods:{handleAvatarSuccess:function(t){!t.code&&t.data&&this.$emit("input",t.data)}}},r=i,c=(n("7443"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"2fab909e",null);e["a"]=s.exports}}]);