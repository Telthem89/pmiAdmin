<template>
  <div>
    <v-btn depressed color="primary" @click="addPermModel = true"
      >Upload chapter<v-icon>mdi-file</v-icon></v-btn
    >
    <v-dialog v-model="addPermModel" width="850">
      <v-form ref="form" lazy-validation v-model="valid">
        <v-card>
          <v-card-title>Upload Presentations Powerpoint</v-card-title>
          <v-card-text>
            <v-alert outlined type="error" prominent border="left">
              Please you are required to upload file with <b>.pptx</b> extention
            </v-alert>
            <v-row>
              <v-col>
                <v-text-field
                  label="Document name"
                  outlined
                  v-model="form.docname"
                  :rules="docnameRule"
                />
              </v-col>
              <v-col>
                <v-text-field
                  label="Short description"
                  outlined
                  v-model="form.doc_desc"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-file-input
                  accept=".pptx,.docx,.pdf,.cvs,.xlx"
                  label="Upload Presentation document"
                  v-model="file"
                  :rules="fileRule"
                ></v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  :items="customers"
                  label="Select Speaker"
                  outlined
                  v-model="form.speakerId"
                  item-value="id"
                  item-text="name"
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
    <v-snackbar :color="color" right top v-model="snackbar">{{
      text
    }}</v-snackbar>
  </div>
</template>

<script>
export default {
  layout: "user",
  async fetch() {},
  data() {
    return {
      addPermModel: false,
      file: null,
      valid: false,
      loading: false,
      snackbar: false,
      color: "",
      text: "",
      form: {
        docname: "",
        doc_desc: "",
        speakerId:""
      },
      fileRule: [(v) => !!v || "Powerpoint document required"],
      docnameRule: [(v) => !!v || " Document name required"],
    };
  },
  computed: {},
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.valid = true;
        const formdata = new FormData();
        formdata.append("docname", this.form.docname);
        formdata.append("doc_desc", this.form.doc_desc);
        formdata.append("file", this.file);
        formdata.append("speakerId", this.form.speakerId);
        

        await this.$axios
          .post("api/admin/presentations", formdata)
          .then((res) => {
            this.$swal(res.data.status, res.data.message, res.data.status);
            this.$store.dispatch("chapters/getChapters");
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