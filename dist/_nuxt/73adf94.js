(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{563:function(e,t,o){var content=o(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("26fa3bd6",content,!0,{sourceMap:!1})},575:function(e,t,o){"use strict";o(563)},576:function(e,t,o){var r=o(24)(!1);r.push([e.i,".telthem{width:10%!important;background-color:red}",""]),e.exports=r},607:function(e,t,o){"use strict";o.r(t);var r=o(6),n=(o(8),o(15),o(29),o(26),{fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.overlay=!0,e.$store.dispatch("hotels/getReservations"),e.$store.dispatch("customers/getCustomers");case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{addPermModel:!1,valid:!1,form:{userId:"",numberofdays:"",numberofnights:"",numberofppeople:"",numberofmale:"",numberoffemale:"",reservationId:"",totalbookingnumberofdays:""},htx_nameRule:[function(e){return!!e||"required"}],htx_hotelcityRule:[function(e){return!!e||" required"}],fileRule:[function(e){return!!e||"Upload image required"}],snackbar:!1,color:"",text:"",loading:!1}},computed:{gethotels:function(){var e=[];return this.$store.state.hotels.hotels.forEach((function(element){var t={id:element.id,htx_name:element.htx_name,htx_number:element.htx_number};e.push(t)})),e},customers:function(){return this.$store.state.customers.customers}},methods:{calculateTotalDays:function(){this.form.totalbookingnumberofdays=Number(this.form.numberofdays)+Number(this.form.numberofnights)},calculateTotalPeople:function(){this.form.numberofppeople=Number(this.form.numberofmale)+Number(this.form.numberoffemale)},submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.valid=!0,e.loading=!0,t.prev=3,t.next=6,e.$axios.post("api/admin/bookhotel",e.form).then((function(t){e.loading=!1,e.color="success",e.snackbar=!0,e.text=t.data.message,e.$store.dispatch("bookings/getHotelBooking"),e.$refs.form.reset(),e.addPermModel=!1}));case 6:t.next=14;break;case 8:t.prev=8,t.t0=t.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}}),l=(o(575),o(79)),c=o(87),m=o.n(c),d=o(253),f=o(230),v=o(114),h=o(664),k=o(528),x=o(524),_=o(231),y=o(665),w=o(673),$=o(527),V=o(511),C=o(529),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.addPermModel=!0}}},[e._v("Book hotel"),o("v-icon",[e._v("mdi-domain")])],1),e._v(" "),o("v-dialog",{attrs:{width:"600"},model:{value:e.addPermModel,callback:function(t){e.addPermModel=t},expression:"addPermModel"}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-card",[o("v-card-title",[e._v("\n          Book Hotel\n          "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(t){e.addPermModel=!1}}},[o("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),o("v-card-text",[o("v-row",[o("v-col",{attrs:{md:"6"}},[o("div",{staticClass:"form-group"},e._l(e.gethotels,(function(t,i){return o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.reservationId,expression:"form.reservationId"}],key:i,staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"reservationId",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[e._v("Select Hotel")]),e._v(" "),o("option",{domProps:{value:t.id}},[e._v(e._s(t.htx_name))])])})),0)]),e._v(" "),o("v-col",{attrs:{md:"6"}},[o("v-select",{attrs:{items:e.customers,label:"Select Customer",outlined:"","item-value":"id","item-text":"name"},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Number of Days",outlined:"",type:"number"},model:{value:e.form.numberofdays,callback:function(t){e.$set(e.form,"numberofdays",t)},expression:"form.numberofdays"}})],1),e._v(" "),o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Number of Night",outlined:"",type:"number"},on:{change:e.calculateTotalDays},model:{value:e.form.numberofnights,callback:function(t){e.$set(e.form,"numberofnights",t)},expression:"form.numberofnights"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Number of Male",outlined:"",type:"number"},model:{value:e.form.numberofmale,callback:function(t){e.$set(e.form,"numberofmale",t)},expression:"form.numberofmale"}})],1),e._v(" "),o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Number of Female",outlined:"",type:"number"},on:{change:e.calculateTotalPeople},model:{value:e.form.numberoffemale,callback:function(t){e.$set(e.form,"numberoffemale",t)},expression:"form.numberoffemale"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Total Number of People",outlined:"",disabled:""},model:{value:e.form.numberofppeople,callback:function(t){e.$set(e.form,"numberofppeople",t)},expression:"form.numberofppeople"}})],1),e._v(" "),o("v-col",{attrs:{md:"6"}},[o("v-text-field",{attrs:{label:"Total of Booking days",outlined:"",disabled:"",type:"number"},model:{value:e.form.totalbookingnumberofdays,callback:function(t){e.$set(e.form,"totalbookingnumberofdays",t)},expression:"form.totalbookingnumberofdays"}})],1)],1)],1),e._v(" "),o("v-card-actions",[o("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),o("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VDialog:k.a,VForm:x.a,VIcon:_.a,VRow:y.a,VSelect:w.a,VSnackbar:$.a,VSpacer:V.a,VTextField:C.a})}}]);