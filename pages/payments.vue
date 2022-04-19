<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="d-flex">
            <v-btn text to="dashboard">Dashboard</v-btn>
            <v-btn text disabled>Payment</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col>
        <v-card>
          <v-card-title>
            Payment logs
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col lg="8" md="8">
                <downloadexcel :data="payments"
                  ><v-btn depressed class="error"
                    >Export Excel file</v-btn
                  ></downloadexcel
                >
              </v-col>
              <v-col lg="4" md="4">
                <v-text-field
                  outlined
                  v-model="search"
                  label="Search Payment Code"
                />
              </v-col>
            </v-row>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>#</th>
                    <th class="text-left">TransactionTXN</th>
                    <th class="text-left">Client Name</th>
                    <th class="text-left">Conference Name</th>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Mode</th>

                    <th class="text-left">Status</th>

                    <th class="text-left">Date Paid</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="payments.length > 0">
                    <tr v-for="(per, i) in payments" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ per.payment_code }}</td>
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
                      <td>{{ per.amount_paid }}</td>
                      <td>{{ per.paymentmethod }}</td>
                      <template v-if="per.status == 'PAID'">
                        <td class="green--text">
                          <b>{{ per.status }}</b>
                        </td>
                      </template>
                      <template v-else>
                        <td class="red--text">
                          <b>{{ per.status }}</b>
                        </td>
                      </template>
                      <td>{{ per.created_at | formatDate }}</td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="6" class="text-center red--text">
                        No Payments history yet
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
    this.$store.dispatch("payments/getPayments");
    this.overlay = false;
  },
  computed: {
    payments() {
      const data = this.$store.state.payments.payments;

      if (this.search) {
        return data.filter(
          (dt) => !dt.payment_code.indexOf(this.search.toUpperCase())
        );
      }
      return data;
    },
  },
  methods: {},
};
</script>

<style>
</style>