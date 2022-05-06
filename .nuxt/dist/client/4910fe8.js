(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{626:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(26),{props:["id"],data:function(){return{addPermModel:!1,valid:!1,form:{vx_name:"",vx_videourl:""},vx_nameRule:[function(e){return!!e||"required"}],vx_videourlRule:[function(e){return!!e||"required"}],snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.valid=!0,e.loading=!0,t.prev=3,t.next=6,e.$axios.post("api/admin/videos",e.form).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("videos/getVideos"),e.$refs.form.reset(),e.addPermModel=!1}));case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}}),d=r(79),l=r(87),c=r.n(l),v=r(251),m=r(230),f=r(113),_=r(529),x=r(522),V=r(231),k=r(526),h=r(509),C=r(523),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){e.addPermModel=!0}}},[e._v("Add video "),r("v-icon",[e._v("mdi-video-wireless-outline")])],1),e._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n          Add Video\n          "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Video Title",outlined:"",rules:e.vx_nameRule},model:{value:e.form.vx_name,callback:function(t){e.$set(e.form,"vx_name",t)},expression:"form.vx_name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Video url",outlined:"",rules:e.vx_videourlRule},model:{value:e.form.vx_videourl,callback:function(t){e.$set(e.form,"vx_videourl",t)},expression:"form.vx_videourl"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:_.a,VForm:x.a,VIcon:V.a,VSnackbar:k.a,VSpacer:h.a,VTextField:C.a})},627:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(26),{props:["video"],data:function(){return{addSubModel:!1,valid:!1,form:{vx_name:this.video.vx_name,vx_videourl:this.video.vx_videourl},vx_nameRule:[function(e){return!!e||" required"}],vx_videourlRule:[function(e){return!!e||" required"}],snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.valid=!0,e.loading=!0,t.prev=3,t.next=6,e.$axios.patch("api/admin/videos/"+e.video.id,e.form).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("videos/getVideos"),e.$refs.form.reset(),e.addSubModel=!1}));case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}}),d=r(79),l=r(87),c=r.n(l),v=r(251),m=r(230),f=r(113),_=r(529),x=r(522),V=r(231),k=r(526),h=r(509),C=r(523),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{icon:"",depressed:"",color:"primary"},on:{click:function(t){e.addSubModel=!0}}},[r("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:e.addSubModel,callback:function(t){e.addSubModel=t},expression:"addSubModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n          Update video\n          "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addSubModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Video Title",outlined:"",rules:e.vx_nameRule},model:{value:e.form.vx_name,callback:function(t){e.$set(e.form,"vx_name",t)},expression:"form.vx_name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Video url",outlined:"",rules:e.vx_videourlRule},model:{value:e.form.vx_videourl,callback:function(t){e.$set(e.form,"vx_videourl",t)},expression:"form.vx_videourl"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addSubModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:_.a,VForm:x.a,VIcon:V.a,VSnackbar:k.a,VSpacer:h.a,VTextField:C.a})},628:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(26),{props:["video"],data:function(){return{addPermModel:!1,valid:!1,snackbar:!1,color:"",text:"",loading:!1}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.valid=!0,e.loading=!0,t.prev=3,t.next=6,e.$axios.delete("api/admin/videos/"+e.video.id).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("videos/getVideos"),e.$refs.form.reset(),e.addPermModel=!1}));case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}}),d=r(79),l=r(87),c=r.n(l),v=r(251),m=r(230),f=r(113),_=r(529),x=r(522),V=r(231),k=r(526),h=r(509),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{icon:"",depressed:"",color:"error"},on:{click:function(t){e.addPermModel=!0}}},[r("v-icon",[e._v("mdi-trash-can")])],1),e._v(" "),r("v-dialog",{attrs:{width:"300"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n             Delete video\n             "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",{staticClass:"text-center"},[r("h4",[e._v("You are about to delete ")]),e._v(" "),r("p",[e._v(e._s(e.video.vx_name))])]),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",attrs:{rounded:""},on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{rounded:"",loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:_.a,VForm:x.a,VIcon:V.a,VSnackbar:k.a,VSpacer:h.a})},695:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(31),r(252),r(14),r(8),r(26),r(535)),d=r(661),l=r.n(d),c={layout:"user",components:{downloadexcel:n.a,VideoPlayer:l.a},data:function(){return{overlay:!1,isPaid:!0,search:""}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.overlay=!0,e.$store.dispatch("videos/getVideos"),e.overlay=!1;case 3:case"end":return t.stop()}}),t)})))()},computed:{videos:function(){var e=this,data=this.$store.state.videos.videos;return this.search?data.filter((function(dt){return!dt.vx_name.toUpperCase().indexOf(e.search.toUpperCase())})):data}},methods:{}},v=r(79),m=r(87),f=r.n(m),_=r(251),x=r(230),V=r(113),k=r(663),h=r(512),C=r(236),w=r(235),M=r(664),$=r(537),S=r(509),y=r(523),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",[r("v-card",[r("v-card-text",{staticClass:"d-flex"},[r("v-btn",{attrs:{text:"",to:"dashboard"}},[e._v("Dashboard")]),e._v(" "),r("v-btn",{attrs:{text:"",disabled:""}},[e._v(" Conference Videos")])],1)],1)],1)],1),e._v(" "),r("v-row",{staticClass:"mt-5"},[r("v-col",[r("v-card",[r("v-card-title",[e._v("\n          Conference Videos\n          "),r("v-spacer"),e._v(" "),r("VideosAdd")],1),e._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-4"},[r("v-col",[r("v-text-field",{attrs:{outlined:"",width:"100",label:"Search Video.."},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),r("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("Video Code")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Video Title")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("Video")]),e._v(" "),r("th",{staticClass:"text-left"})])]),e._v(" "),r("tbody",[e.videos.length>0?e._l(e.videos,(function(t,i){return r("tr",{key:i},[r("td",[e._v(e._s(t.vx_number))]),e._v(" "),r("td",[e._v(e._s(t.vx_name))]),e._v(" "),r("td",[r("video-player",{attrs:{loop:e.loop,muted:e.muted,poster:e.poster,preload:e.preload,src:t.vx_videourl}})],1),e._v(" "),r("td",{staticClass:"d-flex justify-end"},[r("VideosEdit",{attrs:{video:t}}),e._v(" "),r("VideosDelete",{attrs:{video:t}})],1)])})):[r("tr",[r("td",{staticClass:"text-center red--text",attrs:{colspan:"5"}},[e._v("\n                      No Video yet\n                    ")])])]],2)]},proxy:!0}])})],1)],1)],1)],1),e._v(" "),r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VideosAdd:r(626).default,VideosEdit:r(627).default,VideosDelete:r(628).default}),f()(component,{VBtn:_.a,VCard:x.a,VCardText:V.b,VCardTitle:V.c,VCol:k.a,VContainer:h.a,VOverlay:C.a,VProgressCircular:w.a,VRow:M.a,VSimpleTable:$.a,VSpacer:S.a,VTextField:y.a})}}]);