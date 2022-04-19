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
                  label="Username"
                  outlined
                  v-model="form.username"
                  :rules="usernameRule"
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
                  :items="computeList"
                  label="District"
                  outlined
                  v-model="form.district"
                  :rules="districtRule"
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

            <v-row>
              <v-col md="6">
                <v-text-field label="City" outlined v-model="form.city" />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Company Name"
                  outlined
                  v-model="form.company_name"
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
      addModel: false,
      valid: false,
      show1: false,
      show2: false,
      form: {
        name: "",
        surname: "",
        email: "",
        gender: "",
        phone: "",
        province: "",
        district: "",
        password: "",
        password_confirmation: "",
        company_name: "",
        city:''
      },
      passwordrules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      usernameRule: [(v) => !!v || "Required"],
      emailRule: [(v) => !!v || "Required"],
      districtRule: [(v) => !!v || "Required"],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {},
  computed: {
    computeList() {
      var list = [];
      if (this.form.province == "Matabeleland South") {
        list = [
          "Beitbridge",
          "Bulilima",
          "Gwanda",
          "Insiza",
          "Mangwe",
          "Matobo",
          "Umzingwane",
        ];
      } else if (this.form.province == "Bulawayo") {
        list = ["Bulawayo"];
      } else if (this.form.province == "Matebeleland North") {
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
      } else if (this.form.province == "Mashonaland Central") {
        list = [
          "Bindura",
          "Guruve",
          "Mazowe",
          "Mbire",
          "Mount Darwin",
          "Muzarabani",
        ];
      } else if (this.form.province == "Mashonaland West") {
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
      } else if (this.form.province == "Mashonaland East") {
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
      } else if (this.form.province == "Masvingo") {
        list = [
          "Bikita",
          "Chiredzi",
          "Chivi",
          "Gutu",
          "Masvingo",
          "Mwenezi",
          "Zaka",
        ];
      } else if (this.form.province == "Midlands") {
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
      } else if (this.form.province == "Manicaland") {
        list = [
          "Buhera",
          "Chimanimani",
          "Chipinge",
          "Makoni",
          "Mutare",
          "Mutasa",
          "Nyanga",
        ];
      } else if (this.form.province == "Harare") {
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