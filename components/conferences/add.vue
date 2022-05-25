<template>
  <div>
    <v-btn depressed color="primary" @click="addPermModel = true"
      >Add Event<v-icon>mdi-calendar</v-icon></v-btn
    >

    <v-dialog v-model="addPermModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Add Event
            <v-spacer />
            <v-btn icon @click="addPermModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Event Name"
                  outlined
                  v-model="form.eventname"
                />
              </v-col>
              <v-col md="6">
                <v-file-input
                  accept=".png,.jpeg,.jpg"
                  label="Upload Feature Image"
                  v-model="form.file"
                ></v-file-input>
              </v-col>
            </v-row>

            <v-row>
              
              <v-col md="6">
                <v-text-field
                  label="Opening Date"
                  outlined
                  v-model="form.opendate"
                  type="date"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Closing Date"
                  outlined
                  type="date"
                  v-model="form.closedate"
                  
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      addPermModel: false,
      valid: false,
      loading:false,
      form: {
       eventname: "",
        opendate: "",
        closedate: "", 
        file:null,
      },
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {
    this.overlay = true;
    this.overlay = false;
  },
  computed: {},

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.loading = true;
        try {
          const formdata = new FormData();
          formdata.append("eventname", this.form.eventname);
          formdata.append("file", this.form.file);
          formdata.append("opendate", this.form.opendate);
          formdata.append("closedate", this.form.closedate);

          await this.$axios.post("api/admin/events", formdata).then((res) => {
            this.loading = false;
            this.color = "success";
            this.snackbar = true;
            this.text = res.data.message;
            this.$store.dispatch("conferences/getConferences");
            this.$refs.form.reset();
            this.addPermModel = false;
          });
        } catch (err) {
          this.loading = false;
          this.color = "error";
          this.snackbar = true;
          this.text = err.response.data.message;
        }
      }
    },
  },
};
</script>

<style>
</style>