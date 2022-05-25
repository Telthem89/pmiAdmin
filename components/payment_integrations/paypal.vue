<template>
  <div>
      <v-btn depressed color="blue" @click="addPermModel=true" class="mr-3 white--text">Paypal</v-btn>
   
      <v-dialog v-model="addPermModel" width="500">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Add Paypal 
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
           

                  <v-text-field
                            label="PAYPAL USERNAME"
                            outlined
                            v-model="form.PAYPAL_LIVE_API_USERNAME"
                            :rules="apiusernameRule"
                        />

                        <v-text-field
                            label="PAYPAL PASSWORD"
                            outlined
                            v-model="form.PAYPAL_LIVE_API_PASSWORD"
                            :rules="apipasswordRule"
                        />

                         <v-text-field
                            label="PAYPAL SECRET KEY"
                            outlined
                            v-model="form.PAYPAL_LIVE_API_SECRET"
                            :rules="apisecretRule"
                        />

                         <v-text-field
                            label="Gateway Name"
                            outlined
                            readonly
                            v-model="form.payment_gateway"
                        />
                      
                          
           </v-card-text>
           <v-card-actions>
               <v-btn rounded class="error" @click="addPermModel=false">Cancel</v-btn>
               <v-spacer/>
               <v-btn rounded class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
           </v-card-actions>
       </v-card>
           </v-form>
      </v-dialog>
       <v-snackbar
     
      :color="color"
      right
      top
      v-model="snackbar"
    >{{text}}</v-snackbar>
  </div>
</template>

<script>
export default {
    props:['id'],
 data(){
     return{
         addPermModel:false,
         valid:false,
         form:{
              PAYPAL_LIVE_API_USERNAME:'',
              PAYPAL_LIVE_API_PASSWORD:'',
              PAYPAL_LIVE_API_SECRET:'',
              payment_gateway:'PAYPAL', 
         },
         apiusernameRule:[v=>!!v || 'Paypal username is required'],
         apipasswordRule:[v=>!!v || 'Paypal password is required'],
         apisecretRule:[v=>!!v || 'Paypal Secret Key is required'],
         snackbar:false,
         color:'',
         text:'',
         loading:false
     }
 },methods:{
     async submit(){
       if(this.$refs.form.validate())
       {
          this.valid = true
          this.loading=true
             try {
                 await this.$axios.post('api/admin/paymentgateways',this.form).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                         this.$store.dispatch('paygatway/getPaymentGateways')
                        this.$refs.form.reset()
                        this.addPermModel= false

                 })
             }catch (err) {
                 this.loading = false
                 this.color="error"
                this.snackbar=true
                this.text=err.response.data.message
            }
       }
     }
 }
}
</script>

<style>

</style>