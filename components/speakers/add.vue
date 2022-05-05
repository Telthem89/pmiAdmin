<template>
  <div>
    <v-btn color="primary" @click="addModel = true"
      >Add Speaker <v-icon class="pl-3 mb-2">mdi-account-cog</v-icon></v-btn
    >

    <v-dialog v-model="addModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Add Speaker
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
                  label="Username"
                  outlined
                  v-model="form.username"
                />
              </v-col>
              <v-col md="6">
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
                <v-text-field
                  label="Physical Addree"
                  outlined
                  v-model="form.address"
                />
              </v-col>
            </v-row>

          

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
     
      addModel: false,
      valid: false,
      show1: false,
      show2: false,
      form: {
        name: "",
        surname: "",
        email: "",
        gender: "",
        address: "",

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
          this.$axios
            .post("/api/admin/speakers", this.form)
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