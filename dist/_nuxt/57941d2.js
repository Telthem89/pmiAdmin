(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{623:function(e,t,n){"use strict";var o=n(635);t.a=o.a},636:function(e,t,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("83ff91dc",content,!0,{sourceMap:!1})},637:function(e,t,n){var o=n(20)(!1);o.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=o},646:function(e,t,n){"use strict";n(12),n(9),n(10),n(17),n(18);var o=n(75),r=n(3),l=n(19),c=(n(25),n(42),n(6),n(76),n(29),n(31),n(180),n(11),n(45),n(636),n(623)),m=n(685),d=n(0),f=n(13),h=n(94);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(d.z)(e).every((function(e){return null!=e&&"object"===Object(l.a)(e)}))}}},computed:{classes:function(){return y(y({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(d.r)(t,1024===this.base))},internalArrayValue:function(){return Object(d.z)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,o=void 0===n?"":n,r=t.size,l=void 0===r?0:r,c=e.truncateText(o);return e.showSize?"".concat(c," (").concat(Object(d.r)(l,1024===e.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(f.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(d.i)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(m.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=c.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(h.b)(e.data.style,{display:"none"})),e},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[o],file:n,index:o}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=c.a.options.methods.genTextFieldSlot.call(this);return t.data.on=y(y({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(o.a)(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},720:function(e,t,n){"use strict";n.r(t);var o=n(4),r=(n(23),{props:["sponsor"],data:function(){return{provinces:["Harare","Bulawayo","Masvingo","Midlands","Manicaland","Mashonaland East","Mashonaland West","Mashonaland Central","Matebeleland North","Matebeleland South"],addModel:!1,valid:!1,form:{cnmy_name:this.sponsor.cnmy_name,file:null,cnmy_address:this.sponsor.cnmy_address,cnmy_country:this.sponsor.cnmy_country,cnmy_city:this.sponsor.cnmy_city,cnmy_province:this.sponsor.cnmy_province,cnmy_district:this.sponsor.cnmy_district,cnmy_website:this.sponsor.cnmy_website,cnmy_bio_info:this.sponsor.cnmy_bio_info,cnmy_facebookurl:this.sponsor.cnmy_facebookurl,cnmy_twitter:this.sponsor.cnmy_twitter,cnmy_whatsappurl:this.sponsor.cnmy_whatsappurl,cnmy_instagram:this.sponsor.cnmy_instagram,cnmy_youtube:this.sponsor.cnmy_youtube,cnmy_linkedIn:this.sponsor.cnmy_linkedIn,skypename:this.sponsor.skypename},snackbar:!1,color:"",text:"",loading:!1}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{countrylist:function(){return["Zimbabwe","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia"]},computeList:function(){var e=[];return"Matabeleland South"==this.form.cnmy_province?e=["Beitbridge","Bulilima","Gwanda","Insiza","Mangwe","Matobo","Umzingwane"]:"Bulawayo"==this.form.cnmy_province?e=["Bulawayo"]:"Matebeleland North"==this.form.cnmy_province?e=["Binga","Bubi","Hwange","Lupane","Nkayi","Tsholotsho","Umguza","Victoria Falls"]:"Mashonaland Central"==this.form.cnmy_province?e=["Bindura","Guruve","Mazowe","Mbire","Mount Darwin","Muzarabani"]:"Mashonaland West"==this.form.cnmy_province?e=["Chegutu","Chinhoyi","Hurungwe","Kariba","Makonde","Mhondoro-Ngezi","Sanyati","Zvimba"]:"Mashonaland East"==this.form.cnmy_province?e=["Chikomba","Goromonzi","Marondera","Mudzi","Murehwa","Mutoko","Seke","Uzumba-Maramba-Pfungwe"]:"Masvingo"==this.form.cnmy_province?e=["Bikita","Chiredzi","Chivi","Gutu","Masvingo","Mwenezi","Zaka"]:"Midlands"==this.form.cnmy_province?e=["Chirumhanzu","Gokwe North","Gokwe South","Gweru","Kwekwe","Mberengwa","Shurugwi","Zvishavane","Rusape","Buhera","Chipinge Urban","Chipinge Rural","Makoni","Mutasa","Mutare"]:"Manicaland"==this.form.cnmy_province?e=["Buhera","Chimanimani","Chipinge","Makoni","Mutare","Mutasa","Nyanga"]:"Harare"==this.form.cnmy_province&&(e=["Harare","Chitungwiza","Epworth","Harare Urban","Harare Rural"]),e}},methods:{fileChange:function(){this.form.cnmy_logo=this.$refs.uploadclogo.files[0]},submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){e.valid=!0,e.overlay=!0;try{(n=new FormData).append("cnmy_name",e.form.cnmy_name),n.append("file",e.form.file),n.append("cnmy_address",e.form.cnmy_address),n.append("cnmy_country",e.form.cnmy_country),n.append("cnmy_city",e.form.cnmy_city),n.append("cnmy_province",e.form.cnmy_province),n.append("cnmy_district",e.form.cnmy_district),n.append("cnmy_website",e.form.cnmy_website),n.append("cnmy_facebookurl",e.form.cnmy_facebookurl),n.append("cnmy_twitter",e.form.cnmy_twitter),n.append("cnmy_whatsappurl",e.form.cnmy_whatsappurl),n.append("cnmy_instagram",e.form.cnmy_instagram),n.append("cnmy_youtube",e.form.cnmy_youtube),n.append("cnmy_linkedIn",e.form.cnmy_linkedIn),n.append("skypename",e.form.skypename),e.$axios.patch("/api/admin/sponsors/"+e.sponsor.id,n).then((function(t){e.$swal("success",t.data.message,"success"),e.$store.dispatch("sponsors/getCompanies"),e.$refs.form.reset(),e.addModel=!1})).catch((function(t){e.overlay=!1,e.$swal("error",t.response.data.message,"error")}))}catch(t){e.overlay=!1,e.$swal("error",t.response.data.message,"error")}}case 1:case"end":return t.stop()}}),t)})))()}}}),l=n(69),c=n(74),m=n.n(c),d=n(229),f=n(206),h=n(100),v=n(757),y=n(634),_=n(646),w=n(630),x=n(207),k=n(758),S=n(767),M=n(633),C=n(617),z=n(635),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(t){e.addModel=!0}}},[n("v-icon",{staticClass:"pl-3 mb-2"},[e._v("mdi-pencil")])],1),e._v(" "),n("v-dialog",{attrs:{width:"1200"},model:{value:e.addModel,callback:function(t){e.addModel=t},expression:"addModel"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card",[n("v-card-title",[e._v("\n          Edit Sponsor \n          "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.addModel=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Company Name",outlined:""},model:{value:e.form.cnmy_name,callback:function(t){e.$set(e.form,"cnmy_name",t)},expression:"form.cnmy_name"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-file-input",{attrs:{accept:".jpg,.png,.jpeg",label:"Upload Logo"},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Address",outlined:""},model:{value:e.form.cnmy_address,callback:function(t){e.$set(e.form,"cnmy_address",t)},expression:"form.cnmy_address"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-select",{attrs:{label:"Select Country",outlined:"",items:e.countrylist,"item-text":"name","item-value":"id"},model:{value:e.form.cnmy_country,callback:function(t){e.$set(e.form,"cnmy_country",t)},expression:"form.cnmy_country"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"City",outlined:""},model:{value:e.form.cnmy_city,callback:function(t){e.$set(e.form,"cnmy_city",t)},expression:"form.cnmy_city"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Website Url",outlined:""},model:{value:e.form.cnmy_website,callback:function(t){e.$set(e.form,"cnmy_website",t)},expression:"form.cnmy_website"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-select",{attrs:{label:"Select Province",outlined:"",items:e.provinces,"item-text":"name","item-value":"id"},model:{value:e.form.cnmy_province,callback:function(t){e.$set(e.form,"cnmy_province",t)},expression:"form.cnmy_province"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-select",{attrs:{items:e.computeList,label:"District",outlined:""},model:{value:e.form.cnmy_district,callback:function(t){e.$set(e.form,"cnmy_district",t)},expression:"form.cnmy_district"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Company Description [optional]",outlined:""},model:{value:e.form.cnmy_bio_info,callback:function(t){e.$set(e.form,"cnmy_bio_info",t)},expression:"form.cnmy_bio_info"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Facebook Url [optional]",outlined:""},model:{value:e.form.cnmy_facebookurl,callback:function(t){e.$set(e.form,"cnmy_facebookurl",t)},expression:"form.cnmy_facebookurl"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Twitter  [optional]",outlined:""},model:{value:e.form.cnmy_twitter,callback:function(t){e.$set(e.form,"cnmy_twitter",t)},expression:"form.cnmy_twitter"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Whatsapp  [optional]",outlined:""},model:{value:e.form.cnmy_whatsappurl,callback:function(t){e.$set(e.form,"cnmy_whatsappurl",t)},expression:"form.cnmy_whatsappurl"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Instagram  [optional]",outlined:""},model:{value:e.form.cnmy_instagram,callback:function(t){e.$set(e.form,"cnmy_instagram",t)},expression:"form.cnmy_instagram"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Youtube  [optional]",outlined:""},model:{value:e.form.cnmy_youtube,callback:function(t){e.$set(e.form,"cnmy_youtube",t)},expression:"form.cnmy_youtube"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"LinkedIn  [optional]",outlined:""},model:{value:e.form.cnmy_linkedIn,callback:function(t){e.$set(e.form,"cnmy_linkedIn",t)},expression:"form.cnmy_linkedIn"}})],1),e._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-text-field",{attrs:{label:"Skype Name  [optional]",outlined:""},model:{value:e.form.skypename,callback:function(t){e.$set(e.form,"skypename",t)},expression:"form.skypename"}})],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"error",on:{click:function(t){e.addPermModel=!1}}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"success",attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1),e._v(" "),n("v-snackbar",{attrs:{absolute:"",color:e.color,right:"",top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text))])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:d.a,VCard:f.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:v.a,VDialog:y.a,VFileInput:_.a,VForm:w.a,VIcon:x.a,VRow:k.a,VSelect:S.a,VSnackbar:M.a,VSpacer:C.a,VTextField:z.a})}}]);