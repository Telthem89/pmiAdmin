<template>
  <div>
    <v-btn color="primary" @click="addModel = true"
      >Add Customer <v-icon class="pl-3 mb-2">mdi-account-cog</v-icon></v-btn
    >

    <v-dialog v-model="addModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Add Customer
            <v-spacer />
            <v-btn icon @click="addModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-row>
                        <v-col md="6">
                          <v-text-field
                            label="First Name"
                            outlined
                            v-model="form.name"
                            :rules="fnameRule"
                        />
                        </v-col>
                        <v-col md="6">
                          <v-text-field
                            label="Surname"
                            outlined
                            v-model="form.surname"
                            :rules="surnameRule"
                        />
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col md="6">
                          <v-text-field
                            label="PMI Number"
                            outlined
                            v-model="form.pmi_number"
                        />
                        </v-col>
                        <v-col md="6">
                          <v-text-field
                            label="Email"
                            type="email"
                            outlined
                            v-model="form.email"
                            :rules="emailRule"
                        />
                        </v-col>
                      </v-row>


                      <v-row>
                        <v-col md="6">
                          <v-select
                            label="Select Gender"
                            outlined
                            v-model="form.gender"
                            :rules="genderRule"
                            :items="items"
                            item-text="name"
                            item-value="id"
                        />
                        </v-col>
                        <v-col md="6">
                          <v-text-field
                            label="Phone Number"
                            outlined
                            v-model="form.phone"
                            :rules="phoneNumberRule"
                        />
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col md="6">
                          <v-text-field
                            label="Job Title"
                            outlined
                            v-model="form.job_title"
                            :rules="job_titleRule"
                        />
                        </v-col>
                        <v-col md="6">
                         <v-text-field
                            label="Physical Address"
                            outlined
                            v-model="form.address"
                        />
                        </v-col>
                      </v-row>

                       <v-row>
                        <v-col md="6">
                          <v-select
                            label="Select Province"
                            outlined
                            v-model="form.province"
                            :rules="provinceRule"
                            :items="provinces"
                            item-text="name"
                            item-value="id"
                        />
                        </v-col>
                        <v-col md="6">
                          <v-select
                            :items="industrial_sectors"
                            label="Industry Sector"
                            outlined
                            v-model="form.industrial_sector"
                            :rules="industrial_sectorRule"
                        />
                        </v-col>
                      </v-row>

                      <v-row>
                      <v-col md="6">
                         <v-text-field
                            v-model="form.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[passwordrules.required, passwordrules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            outlined
                            @click:append="show1 = !show1"
                        />
                      </v-col>
                      <v-col cols="12" sm="6">
                          <v-text-field
                              v-model="form.password_confirmation"
                              outlined
                              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show2 ? 'text' : 'password'"
                              label="ConfirmPassword"
                              hint="At least 8 characters"
                              counter
                              @click:append="show2 = !show2"
                              :rules="confirmpasswordRule"
                          >
                          </v-text-field>
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
      items: ["Male", "Female"],
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
      industrial_sectors: [
          'Administrative Services',
          'Advertising',
          'Aerospace',
          'Agriculture',
          'Airlines',
          'Amusement & Recreation',
          'Banking',
          'Business Services',
          'Chemicals',
          'Construction',
          'Consumer Discretionary',
          'Consumer Services',
          'Consumer Staples',
          'Creative Industries (e.g. Music)',
          'Cultural Industries',
          'Education',
          'Energy',
          'Entertainment',
          'Network and Communication',
          'Mining Sector',
          'Education',
          'ICT and Telecoms',
          'Energy',
          'Engineering',
          'Health and Safety',
          'Manufacturing and Processing',
          'Quality and business improvement',
          'Risk',
          'Security',
          'Transport and Logistics',
          'Waste and recycling',
          'Welding',
          'Data protection',
          'Automotive',
          'Banking and finance services',
          'Biometrics',
          'CSR and governance',
          'Environmental management and sustainability',
          'Healthcare',
          'Import export',
          'Innovation and design',
          'Internet of things',
          'Measurement and metrology',
          'Medical devices',
          'Fire',
          'Fire',
          'Graphics Technology',
          ],
      addModel: false,
      valid: false,
      show1: false,
      show2: false,
      form: {
        name:'',
        surname:'',
        email:'',
        gender:'',
        phone:'',
        pmi_number:'',
        job_title:'',
        address:'',
        province:'',
        industrial_sector:'',
        password:'',
        password_confirmation:'',
      },
     passwordrules:[
                          v=>!!v || 'Password is required',
                          v => (v && v.length >= 8) || 'Password must be greater than 8 characters'         
                     ],
        confirmpasswordRule:[
                             v=>!!v || 'Password is required',
                          v => (v && v.length >= 8) || 'Password must be greater than 10 characters',
                        v => (v && v.length == this.form.password.length) || 'Passwords must match', 
        ],


        provinceRule:[v=>!!v || 'Province is Required'],
        emailRule:[v=>!!v || 'Required'],
        job_titleRule:[v=>!!v || 'Required'],
        industrial_sectorRule:[v=>!!v || 'Industry Sector Required'],
        fnameRule:[v=>!!v || 'First Name is Required'],
        surnameRule:[v=>!!v || 'Surname is Required'],
        emailRule:[v=>!!v || 'E-mail is Required'],
        genderRule:[v=>!!v || 'Gender is Required'],
        phoneNumberRule:[v=>!!v || 'Phone is Required'],
        job_titleRule:[v=>!!v || 'Job Title is Required'],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {},
  computed: {
    computeList() {
      // var list = [];
      // if (this.form.province == "Matabeleland South") {
      //   list = [
      //     "Beitbridge",
      //     "Bulilima",
      //     "Gwanda",
      //     "Insiza",
      //     "Mangwe",
      //     "Matobo",
      //     "Umzingwane",
      //   ];
      // } else if (this.form.province == "Bulawayo") {
      //   list = ["Bulawayo"];
      // } else if (this.form.province == "Matebeleland North") {
      //   list = [
      //     "Binga",
      //     "Bubi",
      //     "Hwange",
      //     "Lupane",
      //     "Nkayi",
      //     "Tsholotsho",
      //     "Umguza",
      //     "Victoria Falls",
      //   ];
      // } else if (this.form.province == "Mashonaland Central") {
      //   list = [
      //     "Bindura",
      //     "Guruve",
      //     "Mazowe",
      //     "Mbire",
      //     "Mount Darwin",
      //     "Muzarabani",
      //   ];
      // } else if (this.form.province == "Mashonaland West") {
      //   list = [
      //     "Chegutu",
      //     "Chinhoyi",
      //     "Hurungwe",
      //     "Kariba",
      //     "Makonde",
      //     "Mhondoro-Ngezi",
      //     "Sanyati",
      //     "Zvimba",
      //   ];
      // } else if (this.form.province == "Mashonaland East") {
      //   list = [
      //     "Chikomba",
      //     "Goromonzi",
      //     "Marondera",
      //     "Mudzi",
      //     "Murehwa",
      //     "Mutoko",
      //     "Seke",
      //     "Uzumba-Maramba-Pfungwe",
      //   ];
      // } else if (this.form.province == "Masvingo") {
      //   list = [
      //     "Bikita",
      //     "Chiredzi",
      //     "Chivi",
      //     "Gutu",
      //     "Masvingo",
      //     "Mwenezi",
      //     "Zaka",
      //   ];
      // } else if (this.form.province == "Midlands") {
      //   list = [
      //     "Chirumhanzu",
      //     "Gokwe North",
      //     "Gokwe South",
      //     "Gweru",
      //     "Kwekwe",
      //     "Mberengwa",
      //     "Shurugwi",
      //     "Zvishavane",
      //     "Rusape",
      //     "Buhera",
      //     "Chipinge Urban",
      //     "Chipinge Rural",
      //     "Makoni",
      //     "Mutasa",
      //     "Mutare",
      //   ];
      // } else if (this.form.province == "Manicaland") {
      //   list = [
      //     "Buhera",
      //     "Chimanimani",
      //     "Chipinge",
      //     "Makoni",
      //     "Mutare",
      //     "Mutasa",
      //     "Nyanga",
      //   ];
      // } else if (this.form.province == "Harare") {
      //   list = [
      //     "Harare",
      //     "Chitungwiza",
      //     "Epworth",
      //     "Harare Urban",
      //     "Harare Rural",
      //   ];
      // }

      // return list;
    },
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.overlay = true;
        try {
          this.$axios
            .post("/api/auth/register", this.form)
            .then((res) => {
              this.$swal("success", res.data.message, "success");
              this.$store.dispatch("customers/getCustomers");
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