(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6781a75e"],{"1e9b":function(e,t,a){},2541:function(e,t,a){"use strict";a("a87f")},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{staticClass:"at-pagination",attrs:{background:"","current-page":e.page,"page-sizes":[20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.pageSizeChange,"current-change":e.pageChange}})},i=[],r=(a("a9e3"),{name:"Pagination",props:{page:Number,pageSize:Number,total:Number},methods:{pageChange:function(e){this.$emit("pageChange",e)},pageSizeChange:function(e){this.$emit("pageSizeChange",e)}}}),o=r,s=(a("3dbf"),a("2877")),l=Object(s["a"])(o,n,i,!1,null,"d6f0d324",null);t["a"]=l.exports},"3dbf":function(e,t,a){"use strict";a("736a")},"736a":function(e,t,a){},"8de9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("AtTableSearch",{on:{fetchData:e.fetchData}}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{fixed:"left",align:"center",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.previewAtRecord(t.row)}}},[e._v(e._s((e.page-1)*e.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"机器人名称",align:"center",width:"160","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.robotName||"--")+" ")]}}])}),a("el-table-column",{attrs:{label:"群聊名称",align:"center",width:"160","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.conversationTitle||"--")+" ")]}}])}),a("el-table-column",{attrs:{label:"内容",align:"center","min-width":"200","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.content||"--"))])]}}])}),a("el-table-column",{attrs:{label:"发送者昵称",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.senderNick)+" ")]}}])}),a("el-table-column",{attrs:{label:"会话是否过期",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.isExpired?"info":"success"}},[e._v(e._s(t.row.isExpired?"已过期":"未过期"))])]}}])}),a("el-table-column",{attrs:{label:"@ 时间",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createAt)+" ")]}}])}),a("el-table-column",{attrs:{label:"会话过期时间",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sessionWebhookExpiredTime)+" ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"详情",align:"center",width:"160"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"row-flex"},[e._v(" 详情 "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"已过期的会话不能进行模拟重发",placement:"top-end"}},[a("i",{staticClass:"el-icon-question help-icon"})])],1)]}},{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{title:"重发会将内容再次发送给钉钉机器人，并将收到机器人的回复，确认？"},on:{onConfirm:function(a){return e.reSend(t.row)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",disabled:t.row.isExpired},slot:"reference"},[e._v("模拟重发")])],1)]}}])})],1),a("Pagination",{attrs:{page:e.page,pageSize:e.pageSize,total:e.total},on:{pageChange:e.pageChange,pageSizeChange:e.pageSizeChange}}),a("el-dialog",{attrs:{title:"记录详情",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("pre",{staticClass:"pre-json"},[e._v(e._s(e.atRecord))])])],1)},i=[],r=a("5530"),o=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"at-form",attrs:{inline:!0,model:e.searchForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",[a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容",clearable:""},model:{value:e.searchForm.content,callback:function(t){e.$set(e.searchForm,"content",t)},expression:"searchForm.content"}})],1),a("el-form-item",{attrs:{label:"发送者昵称"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入发送者昵称",clearable:""},model:{value:e.searchForm.senderNick,callback:function(t){e.$set(e.searchForm,"senderNick",t)},expression:"searchForm.senderNick"}})],1),a("el-form-item",{attrs:{label:"@ 时间"}},[a("el-date-picker",{attrs:{size:"mini",type:"datetimerange","start-placeholder":"开始时间",clearable:"","end-placeholder":"结束时间",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["09:00:00","18:00:00"]},on:{change:e.handleChange},model:{value:e.searchForm.atTime,callback:function(t){e.$set(e.searchForm,"atTime",t)},expression:"searchForm.atTime"}})],1)],1),a("div",[a("el-form-item",[a("el-button",{attrs:{size:"mini"},on:{click:e.onReset}},[e._v("重置")]),a("el-button",{attrs:{type:"primary",size:"mini","native-type":"submit"},on:{click:e.onSearch}},[e._v("查询")])],1)],1)])}),s=[],l={name:"AtTableSearch",data:function(){return{searchForm:{content:"",senderNick:"",atTime:""}}},methods:{handleChange:function(){this.onSearch()},onReset:function(){this.searchForm={content:"",senderNick:"",atTime:[]},this.$emit("fetchData")},onSearch:function(){var e=this.searchForm,t=e.content,a=e.senderNick,n=e.atTime;!n&&(n=["",""]);var i=n[0],r=n[1];this.$emit("fetchData",{content:t,senderNick:a,startDate:i,endDate:r})}}},c=l,u=(a("aad6"),a("2877")),d=Object(u["a"])(c,o,s,!1,null,"a530e8d4",null),f=d.exports,p=a("333d"),h=a("b775");function g(e){return Object(h["a"])({url:"/atRecord/getAtRecords",method:"get",params:e})}function m(e){return Object(h["a"])({url:"/atRecord/reSendAt",method:"post",data:e})}var b=a("5c96"),v={data:function(){return{listLoading:!0,list:[],page:1,pageSize:20,total:0,dialogVisible:!1,atRecord:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.listLoading=!0;var a=Object(r["a"])({page:this.page,pageSize:this.pageSize},t);g(a).then((function(t){var a=t.data,n=a.rows,i=a.page,r=a.pageSize,o=a.total;e.list=n,e.page=i,e.pageSize=r,e.total=o})).finally((function(){e.listLoading=!1}))},pageChange:function(e){this.page=e,this.fetchData()},pageSizeChange:function(e){this.pageSize=e,this.fetchData()},previewAtRecord:function(e){this.atRecord=e,this.dialogVisible=!0},reSend:function(e){var t=e.content,a=e.senderStaffId,n=e.conversationTitle,i=e.sessionWebhook,r=e.senderNick,o=e.senderId,s=e.isDev,l=e.appKey,c={text:{content:t},senderStaffId:a,conversationTitle:n,sessionWebhook:i,senderNick:r,senderId:o,isDev:s,appKey:l};m(c).then((function(e){var t=e.data,a=t.result,n=void 0===a?{errcode:"",errmsg:""}:a;if(0===n.errcode)return b["Message"].success("模拟重发成功");b["Message"].error("发送失败 ".concat(n.errmsg))}))}},components:{AtTableSearch:f,Pagination:p["a"]}},_=v,S=(a("2541"),Object(u["a"])(_,n,i,!1,null,"d9fb7728",null));t["default"]=S.exports},a87f:function(e,t,a){},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),p=a("241c").f,h=a("06cf").f,g=a("9bf2").f,m=a("58a8").trim,b="Number",v=i[b],_=v.prototype,S=l(f(_))==b,w=function(e){var t,a,n,i,r,o,s,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=m(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),o=r.length,s=0;s<o;s++)if(l=r.charCodeAt(s),l<48||l>i)return NaN;return parseInt(r,n)}return+c};if(r(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,N=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof N&&(S?d((function(){_.valueOf.call(a)})):l(a)!=b)?c(new v(w(t)),a,N):w(t)},y=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),z=0;y.length>z;z++)s(v,k=y[z])&&!s(N,k)&&g(N,k,h(v,k));N.prototype=_,_.constructor=N,o(i,b,N)}},aad6:function(e,t,a){"use strict";a("1e9b")}}]);