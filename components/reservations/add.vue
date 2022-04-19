<template>
  <div>
    <v-btn color="primary" @click="addPermModel = true"
      >Book hotel<v-icon>mdi-domain</v-icon></v-btn
    >

    <v-dialog v-model="addPermModel" width="600">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            Book Hotel
            <v-spacer />
            <v-btn icon @click="addPermModel = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col md="6">
                <!-- <v-select
                  label="Select Hotel"
                  outlined
                  v-model="form.reservationId"
                  :items="gethotels"
                  item-value="id"
                  item-text="name"
                /> -->
                <div class="form-group">
                    <select class="form-control" v-for="(per, i) in gethotels" :key="i" v-model="form.reservationId" >
                      <option value="">Select Hotel</option>
                      <option :value="per.id">{{ per.htx_name}}</option>
                    </select>
                </div>
                
              </v-col>
              <v-col md="6">
                <v-select
                  :items="customers"
                  label="Select Customer"
                  outlined
                  v-model="form.userId"
                  item-value="id"
                  item-text="name"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Number of Days"
                  outlined
                  type="number"
                  v-model="form.numberofdays"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Number of Night"
                  outlined
                  v-model="form.numberofnights"
                  @change="calculateTotalDays"
                  type="number"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Number of Male"
                  outlined
                  type="number"
                  v-model="form.numberofmale"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Number of Female"
                  outlined
                  v-model="form.numberoffemale"
                  @change="calculateTotalPeople"
                  type="number"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6">
                <v-text-field
                  label="Total Number of People"
                  outlined
                  disabled
                  v-model="form.numberofppeople"
                />
              </v-col>
              <v-col md="6">
                <v-text-field
                  label="Total of Booking days"
                  outlined
                  disabled
                  v-model="form.totalbookingnumberofdays"
                  type="number"
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
  async fetch() {
    this.overlay = true;
    this.$store.dispatch("hotels/getReservations");
     this.$store.dispatch("customers/getCustomers");
  },
  data() {
    return {
      addPermModel: false,
      valid: false,
      form: {
        userId: "",
        numberofdays: "",
        numberofnights: "",
        numberofppeople: "",
        numberofmale: "",
        numberoffemale: "",
        reservationId: "",
        totalbookingnumberofdays: "",
      },
      htx_nameRule: [(v) => !!v || "required"],
      htx_hotelcityRule: [(v) => !!v || " required"],
      fileRule: [(v) => !!v || "Upload image required"],
      snackbar: false,
      color: "",
      text: "",
      loading: false,
    };
  },

  computed: {
    gethotels() {
      let array = []
       const data = this.$store.state.hotels.hotels;

        data.forEach(element => {
            const el = {id:element.id,htx_name:element.htx_name,htx_number:element.htx_number} 
           array.push(el)
       });

       return array
    },

    customers() {
      return this.$store.state.customers.customers;
    },
  },
  methods: {
    calculateTotalDays() {
      this.form.totalbookingnumberofdays =
        Number(this.form.numberofdays) + Number(this.form.numberofnights);
    },
    calculateTotalPeople() {
      this.form.numberofppeople =
        Number(this.form.numberofmale) + Number(this.form.numberoffemale);
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.loading = true;
        try {
          // const formdata = new FormData();
          // formdata.append("userId", this.form.userId);
          // formdata.append("numberofdays", this.form.numberofdays);
          // formdata.append("numberofnights", this.form.numberofnights);
          // formdata.append("numberofppeople", this.form.numberofppeople);
          // formdata.append("numberofmale", this.form.numberofmale);
          // formdata.append("numberoffemale", this.form.numberoffemale);
          // formdata.append("reservationId", this.form.reservationId);
          // formdata.append("totalbookingnumberofdays", this.form.totalbookingnumberofdays);

          await this.$axios
            .post("api/admin/bookhotel", this.form)
            .then((res) => {
              this.loading = false;
              this.color = "success";
              this.snackbar = true;
              this.text = res.data.message;
              this.$store.dispatch("bookings/getHotelBooking");
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
.telthem {
  width: 10% !important;
  background-color: red;
}
</style>