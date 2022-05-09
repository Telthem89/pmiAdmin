<template>
  <div>
    <v-btn depressed color="primary" @click="addPermModel = true"
      >Upload Csv <v-icon>mdi-upload</v-icon></v-btn
    >
    <v-dialog v-model="addPermModel" width="450">
      <v-form ref="form" lazy-validation v-model="valid">
        <v-card>
          <v-card-title>Upload Customers csv </v-card-title>
          <v-card-text>
            <v-alert outlined type="error" prominent border="left">
              Please you are required to upload Excel with
              <b>.csv</b> extention
            </v-alert>
            <v-row>
              <v-col>
                <v-text-field
                  label="File Title"
                  outlined
                  v-model="form.title"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-file-input
                  accept=".csv"
                  label="Upload Excel Document"
                  v-model="file"
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
  name: "ImportUsers",
  async fetch() {
    addPermModel: false;
  },
  data() {
    return {
      addPermModel: false,
      valid: false,
      loading: false,
      snackbar: false,
      color: "",
      text: "",
      file: null,
      form:{
        title:''
      },
    };
  },
  computed: {},
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.valid = true;
        try {
        const formdata = new FormData();
        formdata.append("title", this.form.title);
        formdata.append("file", this.file);

        await this.$axios
          .post("api/admin/csvupload", formdata)
          .then((res) => {
              this.color="success"
             this.snackbar=true
            this.text=res.data.message
             this.$store.dispatch('csvdata/getCustomercsv') 
             // this.$router.push('dashboard')
             this.$refs.form.reset();
            this.loading = false;
          })
        }catch(error){
            this.loading = false;
             this.$swal(error.message);
            // this.text=res.data.message
        }
      }
    },
  },
};
</script>

<style>
</style>