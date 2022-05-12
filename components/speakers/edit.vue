<template>
  <div>
    <v-btn icon color="primary" @click="addModel = true"
      ><v-icon class="pl-3 mb-2">mdi-pencil</v-icon></v-btn
    >

    <v-dialog v-model="addModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Update Speaker
            <v-spacer />
            <v-btn icon @click="addModel=false"
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
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Surname"
                  outlined
                  v-model="form.surname"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Pmi Number"
                  outlined
                  v-model="form.membershipNumber"
                />
              </v-col>
              <v-col md="6">
                <v-file-input
                  accept=".png,.jpeg,.jpg"
                  label="Upload Speaker profile picture"
                  v-model="file"
                ></v-file-input>

                <!-- <input type="file" v-model="file" /> -->
              </v-col>
            </v-row>

            <v-row>
              
              <v-col lg="12" md="6">
                <v-text-field
                  label="Email"
                  type="email"
                  outlined
                  v-model="form.email"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-select
                  label="Select Gender"
                  outlined
                  v-model="form.gender"
                  :items="items"
                  item-text="name"
                  item-value="id"
                />
              </v-col> 
              <v-col md="6">
                <v-textarea
                  label="Speaker Description"
                  outlined
                  rows="4"
                  v-model="form.bio_info"
                />
              </v-col> 
            </v-row>


            <!-- social media -->

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Facebook Url"
                  outlined
                  v-model="form.facebookurl"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Twitter url"
                  outlined
                  v-model="form.twitter"
                />
              </v-col>
            </v-row>



            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Whatsapp Number"
                  outlined
                  v-model="form.whatsappurl"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Instagram Url"
                  outlined
                  v-model="form.instagram"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Digg Url"
                  outlined
                  v-model="form.diggurl"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="LinkedIn Url"
                  outlined
                  v-model="form.linkedIn"
                />
              </v-col>
            </v-row>


            <v-row>
              <v-col>
                <v-text-field
                  label="Skype Username"
                  outlined
                  v-model="form.skypename"
                />
              </v-col>
              
            </v-row>





            <!-- end -->

          

            <v-row>
              <v-col md="6">
                <v-text-field
                  v-model="form.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
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
                >
                </v-text-field>
              </v-col>
            </v-row>

            
          </v-card-text>
          <v-card-actions>
            <v-btn class="error" @click="addModel=false">Cancel</v-btn>
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
  props:['speaker'],
  data() {
    return {
      items: ["Male", "Female"],
     
      addModel: false,
      valid: false,
      show1: false,
      show2: false,
      file:null,
      form: {
        name: this.speaker.name,
        surname: this.speaker.surname,
        email: this.speaker.email,
        gender: this.speaker.gender,
        bio_info: this.speaker.bio_info,
        membershipNumber: this.speaker.membershipNumber,
        facebookurl: this.speaker.facebookurl,
        twitter: this.speaker.twitter,
        whatsappurl: this.speaker.whatsappurl,
        instagram: this.speaker.instagram,
        diggurl: this.speaker.diggurl,
        linkedIn: this.speaker.linkedIn,
        skypename: this.speaker.skypename,
        password: '',
      },
      passwordrules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {},
  computed: {
   
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.overlay = true;
        this.loading=true
        try {


          // const formdata = new FormData();
          // formdata.append("name", this.form.name);
          // formdata.append("surname", this.form.surname);
          // formdata.append("email", this.form.email);
          // formdata.append("gender", this.form.gender);
          // formdata.append("bio_info", this.form.bio_info);
          // formdata.append("membershipNumber", this.form.membershipNumber);
          // formdata.append("facebookurl", this.form.facebookurl);
          // formdata.append("twitter", this.form.twitter);
          // formdata.append("whatsappurl", this.form.whatsappurl);
          // formdata.append("instagram", this.form.instagram);
          // formdata.append("diggurl", this.form.diggurl);
          // formdata.append("linkedIn", this.form.linkedIn);
          // formdata.append("skypename", this.form.skypename);
          // formdata.append("file", this.file);
          // formdata.append("password", this.form.password);
          this.$axios
            .patch("/api/admin/speakers/"+this.speaker.id, this.form)
            .then((res) => {
                this.loading = false
              this.$swal("success", res.data.message, "success");
              this.$store.dispatch("speakers/getAllSpeakers");
              this.$refs.form.reset()
              this.addModel= false
            })
            .catch((err) => {
            this.loading = false
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