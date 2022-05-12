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
                <v-text-field
                  label="Short Description"
                  outlined
                  v-model="form.descriptionshort"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Learning Outcome"
                  outlined
                  v-model="form.learningoutcome"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Opening Date"
                  outlined
                  v-model="form.opendate"
                  type="date"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Closing Date"
                  outlined
                  type="date"
                  v-model="form.closedate"
                  
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Fee"
                  outlined
                  v-model="form.individual_Price"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="objective One"
                  outlined
                  v-model="form.objectiveOne"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="objective Two [Optional]"
                  outlined
                  v-model="form.objectiveTwo"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="objective Three [Optional]"
                  outlined
                  v-model="form.objectiveThree"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="objective Four [Optional]"
                  outlined
                  v-model="form.objectiveFour"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="objective Five [Optional]"
                  outlined
                  v-model="form.objectiveSix"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="objective Six [Optional]"
                  outlined
                  v-model="form.objectiveSeven"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Location"
                  outlined
                  v-model="form.location"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="webinarid"
                  outlined
                  v-model="form.webinarid"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="webinarurl"
                  outlined
                  v-model="form.webinarurl"
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
                  label="Conference Start Time"
                  outlined
                  type="time"
                  v-model="form.opentime"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Conference closing Time"
                  outlined
                  type="time"
                  v-model="form.closetime"
                />
              </v-col>
            </v-row>
             <v-row>
              <v-col md="6">
                 <v-select
                  :items="speakers"
                  label="Select Speaker"
                  outlined
                  v-model="form.speakerId"
                  item-value="id"
                   item-text="name"
                />
              </v-col>
              <v-col md="6">
                <v-text-field v-model="form.eventcolor" outlined  type="color" label="color (click to open color menu)" />
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
        descriptionshort: "",
        learningoutcome: "",
        opendate: "",
        closedate: "",
        individual_Price: "",
        objectiveOne: "",
        objectiveTwo: "",
        objectiveThree: "",
        objectiveFour: "",
        objectiveSix: "",
        objectiveSeven: "",
        location: "",
        webinarid: "",
        webinarurl: "",
        opentime:"",
        closetime:"",
        speakerId:'',
        file:null,
        eventcolor: '#1976D2',
        // color: '#1976D2',
      },
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {
    this.overlay = true;
    await this.$store.dispatch("speakers/getAllSpeakers");
    this.overlay = false;
  },
  computed: {
    speakers(){
      return this.$store.state.speakers.speakers
    }
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.loading = true;
        try {
          const formdata = new FormData();
          formdata.append("eventname", this.form.eventname);
          formdata.append("descriptionshort", this.form.descriptionshort);
          formdata.append("file", this.form.file);
          formdata.append("learningoutcome", this.form.learningoutcome);
          formdata.append("opendate", this.form.opendate);
          formdata.append("closedate", this.form.closedate);
          formdata.append("individual_Price", this.form.individual_Price);
          formdata.append("objectiveOne", this.form.objectiveOne);
          formdata.append("objectiveTwo", this.form.objectiveTwo);
          formdata.append("objectiveThree", this.form.objectiveThree);
          formdata.append("objectiveFour", this.form.objectiveFour);
          formdata.append("objectiveSix", this.form.objectiveSix);
          formdata.append("objectiveSeven", this.form.objectiveSeven);
          formdata.append("location", this.form.location);
          formdata.append("webinarid", this.form.webinarid);
          formdata.append("webinarurl", this.form.webinarurl);
          formdata.append("opentime", this.form.opentime);
          formdata.append("closetime", this.form.closetime);
          formdata.append("speakerId", this.form.speakerId);
          formdata.append("color", this.form.color);

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