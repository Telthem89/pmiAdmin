<template>
  <div>
    <v-btn icon depressed color="primary" @click="addPermModel = true"
      ><v-icon>mdi-pencil</v-icon></v-btn
    >

    <v-dialog v-model="addPermModel" width="1200">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Update Event
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
                  :rules="eventnameRule"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Short Description"
                  outlined
                  v-model="form.descriptionshort"
                  :rules="descriptionshortRule"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Learning Outcome"
                  outlined
                  v-model="form.learningoutcome"
                  :rules="learningoutcomeRule"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Opening Date"
                  outlined
                  v-model="form.opendate"
                  :rules="opendateRule"
                  type="date"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Closing Date"
                  outlined
                  v-model="form.closedate"
                  :rules="closedateRule"
                  type="date"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Fee"
                  outlined
                  v-model="form.individual_Price"
                  :rules="individual_PriceRule"
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
                  :rules="fileRule"
                ></v-file-input>
              </v-col>
            </v-row>

<!-- /./time -->
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
props:['event'],
  data() {
    return {
      addPermModel: false,
      valid: false,

      form: {
        eventname: this.event.eventname,
        descriptionshort: this.event.descriptionshort,
        learningoutcome: this.event.learningoutcome,
        opendate: this.event.opendate,
        closedate: this.event.closedate,
        individual_Price: this.event.individual_Price,
        objectiveOne: this.event.objectiveOne,
        objectiveTwo: this.event.objectiveTwo,
        objectiveThree: this.event.objectiveThree,
        objectiveFour: this.event.objectiveFour,
        objectiveSix: this.event.objectiveSix,
        objectiveSeven: this.event.objectiveSeven,
        location: this.event.location,
        webinarid: this.event.webinarid,
        webinarurl: this.event.webinarurl,
        opentime:this.event.opentime,
        closetime:this.event.closetime,
        speakerId:this.event.speakerId
      },
      eventnameRule: [(v) => !!v || "required"],
      descriptionshortRule: [(v) => !!v || "required"],
      learningoutcomeRule: [(v) => !!v || "required"],
      opendateRule: [(v) => !!v || "required"],
      closedateRule: [(v) => !!v || "required"],
      individual_PriceRule: [(v) => !!v || "required"],
      objectiveOne: [(v) => !!v || "required"],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  async fetch() {
    this.overlay = true;
    this.$store.dispatch("speakers/getSpeakers");
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

          await this.$axios.patch("api/admin/events/"+ this.event.id, formdata).then((res) => {
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