(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{591:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(26),r(34),{props:["cust"],data:function(){return{items:["Male","Female"],provinces:["Harare","Bulawayo","Masvingo","Midlands","Manicaland","Mashonaland East","Mashonaland West","Mashonaland Central","Matebeleland North","Matebeleland South"],addModel:!1,valid:!1,show1:!1,show2:!1,form:{name:this.cust.name,surname:this.cust.surname,username:this.cust.username,email:this.cust.email,gender:this.cust.gender,phone:this.cust.phone,province:this.cust.province,district:this.cust.district,company_name:this.cust.company_name,city:this.cust.city},snackbar:!1,color:"",text:"",loading:!1}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{computeList:function(){var e=[];return"Matabeleland South"==this.form.province?e=["Beitbridge","Bulilima","Gwanda","Insiza","Mangwe","Matobo","Umzingwane"]:"Bulawayo"==this.form.province?e=["Bulawayo"]:"Matebeleland North"==this.form.province?e=["Binga","Bubi","Hwange","Lupane","Nkayi","Tsholotsho","Umguza","Victoria Falls"]:"Mashonaland Central"==this.form.province?e=["Bindura","Guruve","Mazowe","Mbire","Mount Darwin","Muzarabani"]:"Mashonaland West"==this.form.province?e=["Chegutu","Chinhoyi","Hurungwe","Kariba","Makonde","Mhondoro-Ngezi","Sanyati","Zvimba"]:"Mashonaland East"==this.form.province?e=["Chikomba","Goromonzi","Marondera","Mudzi","Murehwa","Mutoko","Seke","Uzumba-Maramba-Pfungwe"]:"Masvingo"==this.form.province?e=["Bikita","Chiredzi","Chivi","Gutu","Masvingo","Mwenezi","Zaka"]:"Midlands"==this.form.province?e=["Chirumhanzu","Gokwe North","Gokwe South","Gweru","Kwekwe","Mberengwa","Shurugwi","Zvishavane","Rusape","Buhera","Chipinge Urban","Chipinge Rural","Makoni","Mutasa","Mutare"]:"Manicaland"==this.form.province?e=["Buhera","Chimanimani","Chipinge","Makoni","Mutare","Mutasa","Nyanga"]:"Harare"==this.form.province&&(e=["Harare","Chitungwiza","Epworth","Harare Urban","Harare Rural"]),e}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){e.valid=!0,e.overlay=!0;try{e.$axios.patch("/api/admin/customers/"+e.cust.id,e.form).then((function(t){e.$swal("success",t.data.message,"success"),e.$store.dispatch("customers/getCustomers"),e.$refs.form.reset(),e.addModel=!1})).catch((function(t){e.overlay=!1,e.$swal("error",t.response.data.message,"error")}))}catch(t){e.overlay=!1,e.$swal("error",t.response.data.message,"error")}}case 1:case"end":return t.stop()}}),t)})))()}}}),l=r(79),c=r(87),m=r.n(c),d=r(253),v=r(230),f=r(114),h=r(664),M=r(528),w=r(524),k=r(231),x=r(665),_=r(673),y=r(527),C=r(511),$=r(529),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(t){e.addModel=!0}}},[r("v-icon",{staticClass:"pl-3 mb-2"},[e._v("mdi-pencil")])],1),e._v(" "),r("v-dialog",{attrs:{width:"1200"},model:{value:e.addModel,callback:function(t){e.addModel=t},expression:"addModel"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card",[r("v-card-title",[e._v("\n          Update Customer Details \n          "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.addModel=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"First Name",outlined:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"Surname",outlined:""},model:{value:e.form.surname,callback:function(t){e.$set(e.form,"surname",t)},expression:"form.surname"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"Username",outlined:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{md:"6"}},[r("v-select",{attrs:{label:"Select Gender",outlined:"",items:e.items,"item-text":"name","item-value":"id"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"Phone Number",outlined:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{md:"6"}},[r("v-select",{attrs:{label:"Select Province",outlined:"",items:e.provinces,"item-text":"name","item-value":"id"},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}})],1),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-select",{attrs:{items:e.computeList,label:"District",outlined:""},model:{value:e.form.district,callback:function(t){e.$set(e.form,"district",t)},expression:"form.district"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"City",outlined:""},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-text-field",{attrs:{label:"Company Name",outlined:""},model:{value:e.form.company_name,callback:function(t){e.$set(e.form,"company_name",t)},expression:"form.company_name"}})],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),r("v-snackbar",{attrs:{absolute:"",color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VDialog:M.a,VForm:w.a,VIcon:k.a,VRow:x.a,VSelect:_.a,VSnackbar:y.a,VSpacer:C.a,VTextField:$.a})}}]);