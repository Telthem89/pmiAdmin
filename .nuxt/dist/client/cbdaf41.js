(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{693:function(e,r,t){"use strict";t.r(r);var o=t(4),n=(t(23),{data:function(){return{items:["Male","Female"],provinces:["Harare","Bulawayo","Masvingo","Midlands","Manicaland","Mashonaland East","Mashonaland West","Mashonaland Central","Matebeleland North","Matebeleland South"],addModel:!1,valid:!1,show1:!1,show2:!1,form:{name:"",surname:"",email:"",gender:"",phone:"",province:"",district:"",password:"",password_confirmation:"",company_name:"",city:""},passwordrules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"}},usernameRule:[function(e){return!!e||"Required"}],emailRule:[function(e){return!!e||"Required"}],districtRule:[function(e){return!!e||"Required"}],snackbar:!1,color:"",text:"",loading:!1}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{computeList:function(){var e=[];return"Matabeleland South"==this.form.province?e=["Beitbridge","Bulilima","Gwanda","Insiza","Mangwe","Matobo","Umzingwane"]:"Bulawayo"==this.form.province?e=["Bulawayo"]:"Matebeleland North"==this.form.province?e=["Binga","Bubi","Hwange","Lupane","Nkayi","Tsholotsho","Umguza","Victoria Falls"]:"Mashonaland Central"==this.form.province?e=["Bindura","Guruve","Mazowe","Mbire","Mount Darwin","Muzarabani"]:"Mashonaland West"==this.form.province?e=["Chegutu","Chinhoyi","Hurungwe","Kariba","Makonde","Mhondoro-Ngezi","Sanyati","Zvimba"]:"Mashonaland East"==this.form.province?e=["Chikomba","Goromonzi","Marondera","Mudzi","Murehwa","Mutoko","Seke","Uzumba-Maramba-Pfungwe"]:"Masvingo"==this.form.province?e=["Bikita","Chiredzi","Chivi","Gutu","Masvingo","Mwenezi","Zaka"]:"Midlands"==this.form.province?e=["Chirumhanzu","Gokwe North","Gokwe South","Gweru","Kwekwe","Mberengwa","Shurugwi","Zvishavane","Rusape","Buhera","Chipinge Urban","Chipinge Rural","Makoni","Mutasa","Mutare"]:"Manicaland"==this.form.province?e=["Buhera","Chimanimani","Chipinge","Makoni","Mutare","Mutasa","Nyanga"]:"Harare"==this.form.province&&(e=["Harare","Chitungwiza","Epworth","Harare Urban","Harare Rural"]),e}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.$refs.form.validate()){e.valid=!0,e.overlay=!0;try{e.$axios.post("/api/auth/register",e.form).then((function(r){e.$swal("success",r.data.message,"success"),e.$store.dispatch("customers/getCustomers"),e.$refs.form.reset(),e.addModel=!1})).catch((function(r){e.overlay=!1,e.$swal("error",r.response.data.message,"error")}))}catch(r){e.overlay=!1,e.$swal("error",r.response.data.message,"error")}}case 1:case"end":return r.stop()}}),r)})))()}}}),l=t(69),c=t(74),d=t.n(c),m=t(227),v=t(206),f=t(99),h=t(755),w=t(632),M=t(628),k=t(207),x=t(756),_=t(765),y=t(631),C=t(615),R=t(633),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-btn",{attrs:{color:"primary"},on:{click:function(r){e.addModel=!0}}},[e._v("Add Customer "),t("v-icon",{staticClass:"pl-3 mb-2"},[e._v("mdi-account-cog")])],1),e._v(" "),t("v-dialog",{attrs:{width:"1200"},model:{value:e.addModel,callback:function(r){e.addModel=r},expression:"addModel"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-card",[t("v-card-title",[e._v("\n          Add Customer\n          "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:""},on:{click:function(r){e.addModel=!1}}},[t("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),t("v-card-text",[t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"First Name",outlined:"",rules:e.fnameRule},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Surname",outlined:"",rules:e.surnameRule},model:{value:e.form.surname,callback:function(r){e.$set(e.form,"surname",r)},expression:"form.surname"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Username",outlined:"",rules:e.usernameRule},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Email",type:"email",outlined:"",rules:e.emailRule},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-select",{attrs:{label:"Select Gender",outlined:"",rules:e.genderRule,items:e.items,"item-text":"name","item-value":"id"},model:{value:e.form.gender,callback:function(r){e.$set(e.form,"gender",r)},expression:"form.gender"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Phone Number",outlined:"",rules:e.phoneNumberRule},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-select",{attrs:{label:"Select Province",outlined:"",rules:e.provinceRule,items:e.provinces,"item-text":"name","item-value":"id"},model:{value:e.form.province,callback:function(r){e.$set(e.form,"province",r)},expression:"form.province"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-select",{attrs:{items:e.computeList,label:"District",outlined:"",rules:e.districtRule},model:{value:e.form.district,callback:function(r){e.$set(e.form,"district",r)},expression:"form.district"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.passwordrules.required,e.passwordrules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:"",outlined:""},on:{"click:append":function(r){e.show1=!e.show1}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{outlined:"","append-icon":e.show2?"mdi-eye":"mdi-eye-off",type:e.show2?"text":"password",label:"ConfirmPassword",hint:"At least 8 characters",counter:"",rules:e.confirmpasswordRule},on:{"click:append":function(r){e.show2=!e.show2}},model:{value:e.form.password_confirmation,callback:function(r){e.$set(e.form,"password_confirmation",r)},expression:"form.password_confirmation"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"City",outlined:""},model:{value:e.form.city,callback:function(r){e.$set(e.form,"city",r)},expression:"form.city"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Company Name",outlined:""},model:{value:e.form.company_name,callback:function(r){e.$set(e.form,"company_name",r)},expression:"form.company_name"}})],1)],1)],1),e._v(" "),t("v-card-actions",[t("v-btn",{staticClass:"error",on:{click:function(r){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),t("v-snackbar",{attrs:{absolute:"",color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(r){e.snackbar=r},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);r.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VDialog:w.a,VForm:M.a,VIcon:k.a,VRow:x.a,VSelect:_.a,VSnackbar:y.a,VSpacer:C.a,VTextField:R.a})}}]);