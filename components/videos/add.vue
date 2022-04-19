<template>
  <div>
    <v-btn depressed color="primary" @click="addPermModel = true"
      >Add video <v-icon>mdi-video-wireless-outline</v-icon></v-btn
    >

    <v-dialog v-model="addPermModel" width="400">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Add Video
            <v-spacer />
            <v-btn icon @click="addPermModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Video Title"
              outlined
              v-model="form.vx_name"
              :rules="vx_nameRule"
            />

            <v-text-field
              label="Video url"
              outlined
              v-model="form.vx_videourl"
              :rules="vx_videourlRule"
            />
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
  props: ["id"],
  data() {
    return {
      addPermModel: false,
      valid: false,
      form: {
        vx_name:'',
        vx_videourl:'',
      },
      vx_nameRule: [(v) => !!v || "required"],
       vx_videourlRule: [(v) => !!v || "required"],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.loading = true;
        try {
          await this.$axios
            .post("api/admin/videos", this.form)
            .then((res) => {
              this.loading = false;
              this.color = "success";
              this.snackbar = true;
              this.text = res.data.message;
              this.$store.dispatch("videos/getVideos");
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