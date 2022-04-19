<template>
  <div>
    <v-btn icon depressed color="primary" @click="addPermModel = true"
      > <v-icon>mdi-pencil</v-icon></v-btn
    >

    <v-dialog v-model="addPermModel" width="400">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Update Conference Group
            <v-spacer />
            <v-btn icon @click="addPermModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Channel Name"
              outlined
              v-model="form.cfgr_name"
              :rules="cfgr_nameRule"
            />

            <v-file-input
              accept=".png,.jpeg,.jpg"
              label="Upload Feature Image"
              v-model="form.file"
              :rules="fileRule"
            ></v-file-input>


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
props:['group'],
  data() {
    return {
      addPermModel: false,
      valid: false,
      form: {
        cfgr_name: this.group.cfgr_name,
      },
         cfgr_nameRule:[v=>!!v || 'required'],
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
            const formdata = new FormData()
            formdata.append('cfgr_name',this.form.cfgr_name)
          await this.$axios.patch("api/admin/confgroups/" + this.group.id, formdata).then((res) => {
            this.loading = false;
            this.color = "success";
            this.snackbar = true;
            this.text = res.data.message;
            this.$store.dispatch("groups/getConGroups");
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