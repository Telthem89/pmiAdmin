<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="d-flex">
            <v-btn text to="dashboard">Dashboard</v-btn>
            <v-btn text disabled>Customers</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col>
        <v-card>
          <v-card-title>
            Customers
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col lg="8" md="8">
                <v-row>
                  <v-col md="8">
                    <downloadexcel :data="customerToexported"
                  ><v-btn depressed class="error"
                    >Export Excel file</v-btn
                  ></downloadexcel
                ></v-col>
                <v-col md="4">
                  <v-btn  depressed color="green"  class=" mr-12"><a style="color:white;text-decoration:none" class="white--text" href="/customers.xlsx">Download Excel<v-icon>mdi-microsoft-excel</v-icon></a></v-btn>
                  
                </v-col>
                </v-row>
              </v-col>
              <v-col lg="4" md="4"
                ><v-text-field
                  outlined
                  v-model="search"
                  width="80"
                  label="Search Customer..."
              /></v-col>
            </v-row>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Number</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Surname</th>
                    <th class="text-left">Phone</th>
                    <th class="text-left">Gender</th>
                    <th class="text-left">Job Title</th>
                    <th class="text-left">Sector</th>
                    <th class="text-left">Company</th>
                    <th class="text-left">Province</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="customers.length > 0">
                    <tr v-for="(per, i) in customers" :key="i">
                      <td>{{ per.pmi_number == null ? "NON-MEMBER" : per.pmi_number }}</td>
                      <td>{{ per.name }}</td>
                      <td>{{ per.surname }}</td>
                      <td>{{ per.phone == null ? "UNKNOWN" : per.phone }}</td>
                      <td>{{ per.gender }}</td>
                      <td>{{ per.job_title == null ? "UNKNOWN" : per.job_title }}</td>
                      <td>{{ per.industrial_sector == null ? "NOT SPECIFIED" : per.industrial_sector }}</td>
                      <td>
                        {{
                          per.company_name == null ? "UNKNOWN" : per.company_name
                        }}
                      </td>
                      <td>{{ per.province }}</td>
                      <td class="d-flex justify-end pt-2 pb-2">
                        <CustomersEdit :cust="per" />
                        <CustomersDelete :cust="per" />
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="9" class="text-center red--text">
                        No Customers yet
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
    this.$store.dispatch("customers/getCustomers");
    this.overlay = false;
  },
  computed: {
    customers() {
      const data = this.$store.state.customers.customers;
      if (this.search) {
        return data.filter(
          (dt) => !dt.name.toUpperCase().indexOf(this.search.toUpperCase())
        );
      }
      return data;
    },
    customerToexported(){
       let array = []
       const data = this.$store.state.customers.customers;

        data.forEach(element => {
            const el = {id:element.id,pminumber:element.pmi_number,name:element.name,surname:element.surname,phone:element.phone,email:element.email,address:element.address,jobtitle:element.job_title,industrialsector:element.industrial_sector,company:element.company_name,provice:element.province,district:element.district,city:element.city,gender:element.gender} 

           
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