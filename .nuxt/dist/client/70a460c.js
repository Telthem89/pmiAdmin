(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{612:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(26),{data:function(){return{addPermModel:!1,valid:!1,form:{cfgr_name:"",file:null},cfgr_nameRule:[function(e){return!!e||"required"}],fileRule:[function(e){return!!e||"Upload image required"}],snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=17;break}return e.valid=!0,e.loading=!0,t.prev=3,(r=new FormData).append("cfgr_name",e.form.cfgr_name),r.append("file",e.form.file),t.next=9,e.$axios.post("api/admin/confgroups",r).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("groups/getConGroups"),e.$refs.form.reset(),e.addPermModel=!1}));case 9:t.next=17;break;case 11:t.prev=11,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}}),c=r(79),l=r(87),d=r.n(l),v=r(247),f=r(230),m=r(113),_=r(533),x=r(540),h=r(525),k=r(231),C=r(532),V=r(512),w=r(524),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){e.addPermModel=!0}}},[e._v("Add Group "),r("v-icon",[e._v("mdi-home-group")])],1),e._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n          Add Conference Group\n          "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Channel Name",outlined:"",rules:e.cfgr_nameRule},model:{value:e.form.cfgr_name,callback:function(t){e.$set(e.form,"cfgr_name",t)},expression:"form.cfgr_name"}}),e._v(" "),r("v-file-input",{attrs:{accept:".png,.jpeg,.jpg",label:"Upload Feature Image",rules:e.fileRule},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:_.a,VFileInput:x.a,VForm:h.a,VIcon:k.a,VSnackbar:C.a,VSpacer:V.a,VTextField:w.a})},613:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(26),{props:["group"],data:function(){return{addPermModel:!1,valid:!1,form:{cfgr_name:this.group.cfgr_name},cfgr_nameRule:[function(e){return!!e||"required"}],snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=16;break}return e.valid=!0,e.loading=!0,t.prev=3,(r=new FormData).append("cfgr_name",e.form.cfgr_name),t.next=8,e.$axios.patch("api/admin/confgroups/"+e.group.id,r).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("groups/getConGroups"),e.$refs.form.reset(),e.addPermModel=!1}));case 8:t.next=16;break;case 10:t.prev=10,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 16:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),c=r(79),l=r(87),d=r.n(l),v=r(247),f=r(230),m=r(113),_=r(533),x=r(540),h=r(525),k=r(231),C=r(532),V=r(512),w=r(524),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{icon:"",depressed:"",color:"primary"},on:{click:function(t){e.addPermModel=!0}}},[r("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n          Update Conference Group\n          "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Channel Name",outlined:"",rules:e.cfgr_nameRule},model:{value:e.form.cfgr_name,callback:function(t){e.$set(e.form,"cfgr_name",t)},expression:"form.cfgr_name"}}),e._v(" "),r("v-file-input",{attrs:{accept:".png,.jpeg,.jpg",label:"Upload Feature Image",rules:e.fileRule},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:_.a,VFileInput:x.a,VForm:h.a,VIcon:k.a,VSnackbar:C.a,VSpacer:V.a,VTextField:w.a})},614:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(26),{props:["group"],data:function(){return{addPermModel:!1,valid:!1,snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.valid=!0,e.loading=!0,t.prev=3,t.next=6,e.$axios.delete("api/admin/confgroups/"+e.group.id).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("groups/getConGroups"),e.$refs.form.reset(),e.addPermModel=!1}));case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}}),c=r(79),l=r(87),d=r.n(l),v=r(542),f=r(247),m=r(230),_=r(113),x=r(533),h=r(525),k=r(231),C=r(532),V=r(512),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{icon:"",depressed:"",color:"error"},on:{click:function(t){e.addPermModel=!0}}},[r("v-icon",[e._v("mdi-trash-can")])],1),e._v(" "),r("v-dialog",{attrs:{width:"300"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n             Delete Customer "),r("v-icon",[e._v("mdi-warning")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",{staticClass:"text-center"},[r("v-alert",{attrs:{outlined:"",type:"error",prominent:"",border:"left"}},[e._v("\n                      You are about to delete  "),r("b",[e._v(e._s(e.group.cfgr_name))])])],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAlert:v.a,VBtn:f.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:x.a,VForm:h.a,VIcon:k.a,VSnackbar:C.a,VSpacer:V.a})},719:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(31),r(252),r(14),r(8),r(26),{layout:"user",components:{downloadexcel:r(538).a},data:function(){return{overlay:!1,isPaid:!0,search:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.overlay=!0,e.$store.dispatch("groups/getConGroups"),e.overlay=!1;case 3:case"end":return t.stop()}}),t)})))()},computed:{baseurl:function(){return this.$axios.defaults.baseURL+"/"},groups:function(){var e=this,data=this.$store.state.groups.list;return this.search?data.filter((function(dt){return!dt.cfgr_name.toUpperCase().indexOf(e.search.toUpperCase())})):data}},methods:{}}),c=r(79),l=r(87),d=r.n(l),v=r(247),f=r(230),m=r(113),_=r(702),x=r(507),h=r(236),k=r(235),C=r(703),V=r(541),w=r(512),P=r(524),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",[r("v-card",[r("v-card-text",{staticClass:"d-flex"},[r("v-btn",{attrs:{text:"",to:"dashboard"}},[e._v("Dashboard")]),e._v(" "),r("v-btn",{attrs:{text:"",disabled:""}},[e._v("Conference Groups")])],1)],1)],1)],1),e._v(" "),r("v-row",{staticClass:"mt-5"},[r("v-col",[r("v-card",[r("v-card-title",[e._v("\n              Conference Groups\n                "),r("v-spacer"),e._v(" "),r("GroupsAdd")],1),e._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-4"},[r("v-col",[r("v-text-field",{attrs:{outlined:"",width:"100",label:"Search Group Name..."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),r("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",[e._v("#")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n                      Channel Number \n                    ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n                      Channel logo\n                    ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n                      Channel Name\n                    ")]),e._v(" "),r("th",{staticClass:"text-right"})])]),e._v(" "),r("tbody",[e.groups.length>0?e._l(e.groups,(function(t,i){return r("tr",{key:i},[r("td",[e._v(e._s(i+1))]),e._v(" "),r("td",[e._v(e._s(t.cfgr_number))]),e._v(" "),r("td",[r("img",{staticClass:"mt-3",attrs:{src:e.baseurl+t.cfgr_featureimg,width:"60px"}})]),e._v(" "),r("td",[e._v(e._s(t.cfgr_name))]),e._v(" "),r("td",{staticClass:"d-flex justify-end pb-8 mt-7"},[r("GroupsEdit",{attrs:{group:t}}),e._v(" "),r("GroupsDelete",{attrs:{group:t}})],1)])})):[r("tr",[r("td",{staticClass:"text-center red--text",attrs:{colspan:"5"}},[e._v("No group  yet")])])]],2)]},proxy:!0}])})],1)],1)],1)],1),e._v(" "),r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{GroupsAdd:r(612).default,GroupsEdit:r(613).default,GroupsDelete:r(614).default}),d()(component,{VBtn:v.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VCol:_.a,VContainer:x.a,VOverlay:h.a,VProgressCircular:k.a,VRow:C.a,VSimpleTable:V.a,VSpacer:w.a,VTextField:P.a})}}]);