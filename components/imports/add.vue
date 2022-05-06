<template>
  <div>
    <v-btn depressed color="primary" @click="addPermModel = true"
      >Import Customers <v-icon class="pl-3 mb-2">mdi-excel</v-icon></v-btn
    >
    <v-dialog v-model="addPermModel" width="450">
      <v-form ref="form" lazy-validation v-model="valid">
        <v-card>
          <v-card-title>Upload Excel </v-card-title>
          <v-card-text>
            <v-alert outlined type="error" prominent border="left">
              Please you are required to upload Excel with <b>.xlsx</b> extention
            </v-alert>
            

            <v-row>
              <v-col>
                <v-file-input
                  accept=".xlsx,.cvs"
                  label="Upload Excel Document"
                  v-model="file"
                  :rules="fileRule"
                ></v-file-input>
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
    <v-snackbar :color="color" right top v-model="snackbar">{{
      text
    }}</v-snackbar>
  </div>
</template>

<script>
export default {
  layout: "user",
  name:"ImportUsers",
  async fetch() {},
  data() {
    return {
      addPermModel: false,
      valid: false,
      loading: false,
      snackbar: false,
      color: "",
      text: "",
      file: null,
      fileRule: [(v) => !!v || "Upload Excel document required"],
    };
  },
  computed: {},
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.valid = true;
        const formdata = new FormData();
        formdata.append("file", this.file);
        

        await this.$axios
          .post("api/admin/customers/importUser", formdata)
          .then((res) => {
            this.$swal(res.data.status, res.data.message, res.data.status);
            this.$store.dispatch("customers/getCustomers");
            addPermModel = false;
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            this.$swal("error", error.response.data.message, "error");
          });
      }
    },
  },
};
</script>

<style>
</style>