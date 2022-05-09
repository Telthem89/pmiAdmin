<template>
  <div>
    <v-btn depressed color="success" @click="addPermModel = true">Import</v-btn>

    <v-dialog v-model="addPermModel" width="230">
      <v-form ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Import Customers
            <v-spacer />
          </v-card-title>
          <v-layout justify-center>
            <v-card-text>
              <v-row class="justify-center">
                <v-col md="8">
                  <!-- <input type="hidden" v-model="form.fullpath" /> -->
                  <b color="green">
                    <v-icon size="180" color="green">mdi-cloud-upload</v-icon>
                  </b>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-card-text>
          </v-layout>

          <v-card-actions>
            <v-btn class="error" @click="addPermModel = false">Cancel</v-btn>
            <v-spacer />
            <v-btn class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
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
import * as d3 from "d3";
export default {
  props: ["csvd"],
  data() {
    return {
      addPermModel: false,
      snackbar: false, 
      color: "",
      text: "",
      baseurl:this.$axios.defaults.baseURL + "/",
      loading: false,
      progress: 0,
    };
  },

  methods: {
    async submit() {

      await d3.csv(this.baseurl+this.csvd.fullpath).then((data) => {
        // this.progress = Math.round((100 * data.loaded) / data.total);
        // console.log(this.progress );
        try {
          
         const customerscsvInfo=[]
           for(var i=0;i<data.length;i++){
          const cust = data[i];
          console.log(cust)
          const  mydata ={
              "name":cust.name,
              "surname":cust.surname,
              "phone":cust.phone,
              "email":cust.email,
              "gender":cust.gender,
              "company_name":cust.company_name,
              "address":cust.address,
              "city":cust.city,
              "province":cust.province,
              "pmi_number":cust.pmi_number,
              "industrial_sector":cust.industrial_sector,
              "job_title":cust.job_title,
               "roleId":Number(cust.roleId),
               "password":"$2b$10$Wz7gA3F5vxQX3n6rIvrRUOuNsH6b3OjDKbdzvks7ThKs0/JoROyaC"
              }
                customerscsvInfo.push(mydata)
              }

       this.$axios.post("api/admin/customers/importUser", customerscsvInfo).then((res) => {
            this.loading = false;
            this.color = "success";
            this.snackbar = true;
            this.text = res.data.message;
            this.$axios.patch("api/admin/csvupload/"+this.csvd.id)
            this.$router.push('customers');
            this.addPermModel = false;
          });
        } catch (err) {
          this.loading = false;
          this.color = "error";
          this.snackbar = true;
          this.text = err.response.data.message;
        }




      });
    },
  },
  computed: {
    // baseurl() {
    //   return this.$axios.defaults.baseURL + "/";
    // },
  },
};
</script>