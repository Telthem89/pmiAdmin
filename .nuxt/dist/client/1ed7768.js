(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{711:function(e,o,t){"use strict";t.r(o);var r=t(4),n=(t(6),t(11),t(23),{props:["hotelBook"],data:function(){return{addPermModel:!1,valid:!1,form:{userId:this.hotelBook.userId,numberofdays:this.hotelBook.numberofdays,numberofnights:this.hotelBook.numberofnights,numberofppeople:this.hotelBook.numberofppeople,numberofmale:this.hotelBook.numberofmale,numberoffemale:this.hotelBook.numberoffemale,reservationId:this.hotelBook.reservationId,totalbookingnumberofdays:this.hotelBook.totalbookingnumberofdays},htx_nameRule:[function(e){return!!e||"required"}],htx_hotelcityRule:[function(e){return!!e||" required"}],fileRule:[function(e){return!!e||"Upload image required"}],snackbar:!1,color:"",text:"",loading:!1}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.overlay=!0,e.$store.dispatch("hotels/getReservations"),e.$store.dispatch("customers/getCustomers"),e.overlay=!1;case 4:case"end":return o.stop()}}),o)})))()},computed:{gethotels:function(){var e=[];return this.$store.state.hotels.hotels.forEach((function(element){var o={id:element.id,htx_name:element.htx_name,htx_number:element.htx_number};e.push(o)})),e},customers:function(){return this.$store.state.customers.customers}},methods:{calculateTotalDays:function(){this.form.totalbookingnumberofdays=this.form.numberofdays+this.form.numberofnights},calculateTotalPeople:function(){this.form.numberofppeople=this.form.numberofmale+this.form.numberoffemale},submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.$refs.form.validate()){o.next=23;break}return e.valid=!0,e.loading=!0,o.prev=3,(t=new FormData).append("userId",e.form.userId),t.append("numberofdays",e.form.numberofdays),t.append("numberofnights",e.form.numberofnights),t.append("numberofppeople",e.form.numberofppeople),t.append("numberofmale",e.form.numberofmale),t.append("numberoffemale",e.form.numberoffemale),t.append("reservationId",e.form.reservationId),t.append("totalbookingnumberofdays",e.form.totalbookingnumberofdays),o.next=15,e.$axios.patch("api/admin/bookhotel/"+e.hotelBook.id,t).then((function(o){e.loading=!1,e.color="success",e.snackbar=!0,e.text=o.data.message,e.$store.dispatch("bookings/getHotelBooking"),e.$refs.form.reset(),e.addPermModel=!1}));case 15:o.next=23;break;case 17:o.prev=17,o.t0=o.catch(3),e.loading=!1,e.color="error",e.snackbar=!0,e.text=o.t0.response.data.message;case 23:case"end":return o.stop()}}),o,null,[[3,17]])})))()}}}),l=t(69),m=t(74),c=t.n(m),f=t(227),d=t(206),v=t(99),h=t(755),k=t(632),x=t(628),_=t(207),y=t(756),w=t(765),$=t(631),I=t(615),B=t(633),component=Object(l.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(o){e.addPermModel=!0}}},[t("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),t("v-dialog",{attrs:{width:"600"},model:{value:e.addPermModel,callback:function(o){e.addPermModel=o},expression:"addPermModel"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(o){e.valid=o},expression:"valid"}},[t("v-card",[t("v-card-title",[e._v("\n          Update Book Hotel\n          "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:""},on:{click:function(o){e.addPermModel=!1}}},[t("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),t("v-card-text",[t("v-row",[t("v-col",{attrs:{md:"6"}},[t("div",{staticClass:"form-group"},e._l(e.gethotels,(function(o,i){return t("select",{directives:[{name:"model",rawName:"v-model",value:e.form.reservationId,expression:"form.reservationId"}],key:i,staticClass:"form-control",on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"reservationId",o.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Hotel")]),e._v(" "),t("option",{domProps:{value:o.id}},[e._v(e._s(o.htx_name))])])})),0)]),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-select",{attrs:{items:e.customers,label:"Select Customer",outlined:"","item-value":"id","item-text":"name"},model:{value:e.form.userId,callback:function(o){e.$set(e.form,"userId",o)},expression:"form.userId"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Number of Days",outlined:"",type:"number"},model:{value:e.form.numberofdays,callback:function(o){e.$set(e.form,"numberofdays",o)},expression:"form.numberofdays"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Number of Night",outlined:"",type:"number"},on:{change:e.calculateTotalDays},model:{value:e.form.numberofnights,callback:function(o){e.$set(e.form,"numberofnights",o)},expression:"form.numberofnights"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Number of Male",outlined:"",type:"number"},model:{value:e.form.numberofmale,callback:function(o){e.$set(e.form,"numberofmale",o)},expression:"form.numberofmale"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Number of Female",outlined:"",type:"number"},on:{change:e.calculateTotalPeople},model:{value:e.form.numberoffemale,callback:function(o){e.$set(e.form,"numberoffemale",o)},expression:"form.numberoffemale"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Total Number of People",outlined:"",disabled:""},model:{value:e.form.numberofppeople,callback:function(o){e.$set(e.form,"numberofppeople",o)},expression:"form.numberofppeople"}})],1),e._v(" "),t("v-col",{attrs:{md:"6"}},[t("v-text-field",{attrs:{label:"Total of Booking days",outlined:"",disabled:"",type:"number"},model:{value:e.form.totalbookingnumberofdays,callback:function(o){e.$set(e.form,"totalbookingnumberofdays",o)},expression:"form.totalbookingnumberofdays"}})],1)],1)],1),e._v(" "),t("v-card-actions",[t("v-btn",{staticClass:"error",on:{click:function(o){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),t("v-snackbar",{attrs:{color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(o){e.snackbar=o},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{VBtn:f.a,VCard:d.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VDialog:k.a,VForm:x.a,VIcon:_.a,VRow:y.a,VSelect:w.a,VSnackbar:$.a,VSpacer:I.a,VTextField:B.a})}}]);