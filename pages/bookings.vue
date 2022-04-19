<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="d-flex">
            <v-btn text to="dashboard">Dashboard</v-btn>
            <v-btn text disabled>Bookings</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col>
        <v-card>
          <v-card-title>
            Bookings
            <v-spacer />
           
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col lg="8" md="8">
                         <downloadexcel :data="dataToexported"><v-btn  depressed class="error">Export Excel file</v-btn></downloadexcel>
                       
                    </v-col>
             <v-col lg="4" md="4">
                <v-text-field
                outlined
                v-model="search"
                label="Search Ticket"
              />
             </v-col>
           </v-row>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">Ticket Number</th>
                    <th class="text-left">Client Name</th>
                    <th class="text-left">Conference Name</th>
                    <th class="text-left">Status</th>

                    <th class="text-left">Date Registered</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="bookings.length > 0">
                    <tr v-for="(per, i) in bookings" :key="i">
                      <td>{{ i+1 }}</td>
                      <td>{{ per.ticketnumber }}</td>
                      <td>
                        {{ per.user ? per.user.name : " " }}
                        {{ per.user ? per.user.surname : " " }}
                      </td>
                      <td>
                        {{
                          per.conferenceevent
                            ? per.conferenceevent.eventname
                            : ""
                        }}
                        
                      </td>
                      <template v-if="per.isPaid == '1'">
                        <td class="green--text"><b>Paid</b></td>
                      </template>
                      <template v-else>
                        <td class="red--text"><b>Not Paid</b></td>
                      </template>
                      <td>{{ per.created_at | formatDate }}</td>
                      <td class="d-flex justify-end mt-1 mb-2 pb-2">
                        <template v-if="per.isPaid == '1'">
                          <v-btn color="green" depressed class="white--text"
                            >Paid</v-btn
                          >
                        </template>
                        <template v-else>
                          <!-- <PaymentAdd :order="per"/> -->
                        </template>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="4" class="text-center red--text">
                        No Conference booked yet
                      </td>
                    </tr>
                  </template>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import JsonExcel from "vue-json-excel";
import { mapGetters } from "vuex";
export default {
  layout: "user",
  components: {
    downloadexcel: JsonExcel,
  },
  data() {
    return {
      overlay: false,
      isPaid: true,
      search: "",
    };
  },

  async fetch() {
    this.overlay = true;
    this.$store.dispatch("bookings/getConferenceBooking");
    this.overlay = false;
  },
  computed: {
    bookings() {
      let array = []
      const data = this.$store.state.bookings.list;
      if (this.search) {
        return data.filter(
          (dt) => !dt.ticketnumber.indexOf(this.search.toUpperCase())
        );
      }
      return data;
    },

    dataToexported(){
       let array = []
        const data = this.$store.state.bookings.list;

        data.forEach(element => {
            const el = {id:element.id,ticketnumber:element.ticketnumber,clientName:element.user?element.user.name:"",clientsurname:element.user?element.user.surname:"",event:element.conferenceevent?element.conferenceevent.eventname:"",DateBook:element.created_at,status:element.isPaid =="1"?"Paid":"Pending"} 
           array.push(el)
       });

       return array
    }
  },
  methods: {},
};
</script>

<style>
</style>