<template>
	<v-container>
    <v-row>
      <v-col>
        <v-card color="purple">
          <v-card-text class="d-flex" >
            <v-btn text to="dashboard" class="white--text">Dashboard</v-btn>
            <v-btn text disabled class="white--text">Payment Gateways</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col>
        <v-card>
          <v-card-title>
            Payment Gateway Entry
            <v-spacer />
           <Payment_integrationsPaynow />
           <Payment_integrationsPesepay />
            <Payment_integrationsPaypal />
            <Payment_integrationsStripe />
          </v-card-title>
          </v-card>
          </v-col>
    </v-row>


<v-row class="mt-5">

   <template  v-if="allgateways.length>0">
         <div v-for="(item,i) in allgateways" :key="i">
           <v-col cols="12" sm="12" class="mb-2">
            <v-hover v-slot="{ hover }" open-delay="200">








              <template v-if="item.payment_gateway=='PAYNOW'">
                <v-card color="primary darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="6" sm="12">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                         <b class="white--text">PAYNOW </b>
                      </div>
                      <v-list-item-title class="mb-1 white--text">
                        <b>ID: </b> {{ item.PAYNOW_INTEGRATION_ID }} <br>
                        <b>KEY:</b> {{ item.PAYNOW_INTEGRATION_KEY }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                
              </v-row>
            </v-card>
              </template>




               <template v-else-if="item.payment_gateway=='PESEPAY'">
                <v-card color="purple darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="6" sm="12">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                         <b class="white--text">PESEPAY </b>
                      </div>
                      <v-list-item-title class="mb-1 white--text">
                        <b>APID: </b> {{ item.PESE_INTEGRATION_KEY }} <br>
                        <b>KEY:</b> {{ item.PESE_ENCRYPTION_KEY }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                
              </v-row>
            </v-card>
              </template>
  <template v-else-if="item.payment_gateway=='PAYPAL'">
                <v-card color="blue darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="6" sm="12">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                         <b class="white--text">PAYPAL </b>
                      </div>
                      <v-list-item-title class="mb-1 white--text">
                       <b>USERNAME: </b> {{ item.PAYPAL_LIVE_API_USERNAME }} <br>
                        <b>SECRET:</b> {{ item.PAYPAL_LIVE_API_SECRET }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                 
              </v-row>
            </v-card>
              </template>




 <template v-else-if="item.payment_gateway=='STRIPE'">
                <v-card color="green darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="6" sm="12">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                         <b class="white--text">STRIPE </b>
                      </div>
                      <v-list-item-title class="mb-1 white--text">
                        <b>STRIPE KEY: </b> {{ item.STRIPE_KEY }} <br>
                        <b>STRIPE SECRET:</b> {{ item.STRIPE_SECRET }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                 
              </v-row>
            </v-card>
              </template>










            </v-hover>
          </v-col>
         </div>
        </template>
        <template div v-else>
           <v-col cols="12" sm="12">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="grey darken-1" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                         <b class="white--text">NO DATA </b>
                      </div>
                      <v-list-item-title class="mb-1 red--text">
                        <b> No Payment Gateways yet </b>   
                      </v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
       </template>


        </v-row>













</v-container>
</template>
<script>
import Payment_integrationsPaynow from '../components/payment_integrations/paynow.vue'
import Payment_integrationsPesepay from '../components/payment_integrations/pesepay.vue'
import Payment_integrationsPaypal from '../components/payment_integrations/paypal.vue'
import Payment_integrationsStripe from '../components/payment_integrations/stripe.vue'
export default {
  components: {
        Payment_integrationsPaynow,
        Payment_integrationsPesepay,
        Payment_integrationsPaypal,
        Payment_integrationsStripe
     },
  layout: "user",

   async fetch() {
    this.overlay = true;
    this.$store.dispatch("paygatway/getPaymentGateways");
    this.overlay = false;
  },

   computed: {
    allgateways() {
      return this.$store.state.paygatway.allgateways;
    },
  },
}
</script>