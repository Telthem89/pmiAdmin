<template>
  <div>
    <v-btn color="primary" @click="addModel = true"
      >Add Sponsor <v-icon class="pl-3 mb-2">mdi-home</v-icon></v-btn
    >

    <v-dialog v-model="addModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Add Sponsor
            <v-spacer />
            <v-btn icon @click="addModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Company Name"
                  outlined
                  v-model="form.cnmy_name"
                />
              </v-col>
              <v-col md="6">
                <v-file-input
                    accept=".jpg,.png,.jpeg"
                    label="Upload Logo"
                    v-model="form.file"
                ></v-file-input>
               </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Address"
                  outlined
                  v-model="form.cnmy_address"
                />
              </v-col>
              <v-col md="6">
                <v-select
                  label="Select Country"
                  outlined
                  v-model="form.cnmy_country"
                  :items="countrylist"
                  item-text="name"
                  item-value="id"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                 <v-text-field
                  label="City"
                  outlined
                  v-model="form.cnmy_city"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Website Url"
                  outlined
                  v-model="form.cnmy_website"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-select
                  label="Select Province"
                  outlined
                  v-model="form.cnmy_province"
                  :items="provinces"
                  item-text="name"
                  item-value="id"
                />
              </v-col>
              <v-col md="6">
                <v-select
                  :items="computeList"
                  label="District"
                  outlined
                  v-model="form.cnmy_district"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Company Description [optional]"
                  outlined
                  v-model="form.cnmy_bio_info"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Facebook Url [optional]"
                  outlined
                  v-model="form.cnmy_facebookurl"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Twitter  [optional]"
                  outlined
                  v-model="form.cnmy_twitter"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Whatsapp  [optional]"
                  outlined
                  v-model="form.cnmy_whatsappurl"
                />
              </v-col>
            </v-row>


           <v-row>
              <v-col md="6">
                <v-text-field
                  label="Instagram  [optional]"
                  outlined
                  v-model="form.cnmy_instagram"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Youtube  [optional]"
                  outlined
                  v-model="form.cnmy_youtube"
                />
              </v-col>
            </v-row>


            <v-row>
              <v-col md="6">
                <v-text-field
                  label="LinkedIn  [optional]"
                  outlined
                  v-model="form.cnmy_linkedIn"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Skype Name  [optional]"
                  outlined
                  v-model="form.skypename"
                />
              </v-col>
            </v-row>



          </v-card-text>
          <v-card-actions>
            <v-btn class="error" @click="addPermModel = false">Cancel</v-btn>
            <v-spacer />
            <v-btn
              class="success"
              @click="submit"
              :loading="loading"
              :disabled="loading"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-snackbar absolute :color="color" right top v-model="snackbar">{{
      text
    }}</v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
     provinces: [
        "Harare",
        "Bulawayo",
        "Masvingo",
        "Midlands",
        "Manicaland",
        "Mashonaland East",
        "Mashonaland West",
        "Mashonaland Central",
        "Matebeleland North",
        "Matebeleland South",
      ],
      addModel: false,
      valid: false,
      form: {
        cnmy_name:'',
        file:null,
        cnmy_address:'',
        cnmy_country:'',
        cnmy_city:'',
        cnmy_province:'',
        cnmy_district:'',
        cnmy_website:'',
        cnmy_bio_info:'',
        cnmy_facebookurl:'',
        cnmy_twitter:'',
        cnmy_whatsappurl:'',
        cnmy_instagram:'',
        cnmy_youtube:'',
        cnmy_linkedIn:'',
        skypename:'',
      },

        cnmy_nameRule: [(v) => !!v || "Required"],
        cnmy_addressRule: [(v) => !!v || "Required"],
        cnmy_countryRule: [(v) => !!v || "Required"],
        cnmy_cityRule: [(v) => !!v || "Required"],
        cnmy_websiteRule: [(v) => !!v || "Required"],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {},
  computed: {
     countrylist(){
       return  ['Zimbabwe','Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia']
 
     },

      computeList() {
      var list = [];
      if (this.form.cnmy_province == "Matabeleland South") {
        list = [
          "Beitbridge",
          "Bulilima",
          "Gwanda",
          "Insiza",
          "Mangwe",
          "Matobo",
          "Umzingwane",
        ];
      } else if (this.form.cnmy_province == "Bulawayo") {
        list = ["Bulawayo"];
      } else if (this.form.cnmy_province == "Matebeleland North") {
        list = [
          "Binga",
          "Bubi",
          "Hwange",
          "Lupane",
          "Nkayi",
          "Tsholotsho",
          "Umguza",
          "Victoria Falls",
        ];
      } else if (this.form.cnmy_province == "Mashonaland Central") {
        list = [
          "Bindura",
          "Guruve",
          "Mazowe",
          "Mbire",
          "Mount Darwin",
          "Muzarabani",
        ];
      } else if (this.form.cnmy_province == "Mashonaland West") {
        list = [
          "Chegutu",
          "Chinhoyi",
          "Hurungwe",
          "Kariba",
          "Makonde",
          "Mhondoro-Ngezi",
          "Sanyati",
          "Zvimba",
        ];
      } else if (this.form.cnmy_province == "Mashonaland East") {
        list = [
          "Chikomba",
          "Goromonzi",
          "Marondera",
          "Mudzi",
          "Murehwa",
          "Mutoko",
          "Seke",
          "Uzumba-Maramba-Pfungwe",
        ];
      } else if (this.form.cnmy_province == "Masvingo") {
        list = [
          "Bikita",
          "Chiredzi",
          "Chivi",
          "Gutu",
          "Masvingo",
          "Mwenezi",
          "Zaka",
        ];
      } else if (this.form.cnmy_province == "Midlands") {
        list = [
          "Chirumhanzu",
          "Gokwe North",
          "Gokwe South",
          "Gweru",
          "Kwekwe",
          "Mberengwa",
          "Shurugwi",
          "Zvishavane",
          "Rusape",
          "Buhera",
          "Chipinge Urban",
          "Chipinge Rural",
          "Makoni",
          "Mutasa",
          "Mutare",
        ];
      } else if (this.form.cnmy_province == "Manicaland") {
        list = [
          "Buhera",
          "Chimanimani",
          "Chipinge",
          "Makoni",
          "Mutare",
          "Mutasa",
          "Nyanga",
        ];
      } else if (this.form.cnmy_province == "Harare") {
        list = [
          "Harare",
          "Chitungwiza",
          "Epworth",
          "Harare Urban",
          "Harare Rural",
        ];
      }

      return list;
    },
  },
  methods: {
    fileChange() {
      this.form.cnmy_logo = this.$refs.uploadclogo.files[0];

    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.overlay = true;
        try {

            const formdata = new FormData()
            formdata.append('cnmy_name',this.form.cnmy_name)
            formdata.append('file',this.form.file)
            formdata.append('cnmy_address',this.form.cnmy_address)
            formdata.append('cnmy_country',this.form.cnmy_country)
            formdata.append('cnmy_city',this.form.cnmy_city)
            formdata.append('cnmy_province',this.form.cnmy_province)
            formdata.append('cnmy_district',this.form.cnmy_district)
            formdata.append('cnmy_website',this.form.cnmy_website)


            formdata.append('cnmy_facebookurl',this.form.cnmy_facebookurl)
            formdata.append('cnmy_twitter',this.form.cnmy_twitter)
            formdata.append('cnmy_whatsappurl',this.form.cnmy_whatsappurl)
            formdata.append('cnmy_instagram',this.form.cnmy_instagram)
            formdata.append('cnmy_youtube',this.form.cnmy_youtube)
            formdata.append('cnmy_linkedIn',this.form.cnmy_linkedIn)
            formdata.append('skypename',this.form.skypename)



          this.$axios
            .post("/api/admin/sponsors", formdata)
            .then((res) => {
              this.$swal("success", res.data.message, "success");
              this.$store.dispatch("sponsors/getCompanies");
              this.$refs.form.reset()
              this.addModel= false
            })
            .catch((err) => {
              this.overlay = false;
              this.$swal("error", err.response.data.message, "error");
            });
        } catch (err) {
          this.overlay = false;
          this.$swal("error", err.response.data.message, "error");
        }
      }
    },
  },
};
</script>

<style>
</style>