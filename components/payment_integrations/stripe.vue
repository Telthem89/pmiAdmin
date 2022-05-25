<template>
  <div>
      <v-btn depressed color="green" @click="addPermModel=true" class="mr-3 white--text" >Stripe</v-btn>
   
      <v-dialog v-model="addPermModel" width="500">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Add STRIPE 
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
           

                  <v-text-field
                            label="STRIPE KEY"
                            outlined
                            v-model="form.STRIPE_KEY"
                            :rules="stripeKeyRule"
                        />

                        <v-text-field
                            label="STRIPE SECRET KEY"
                            outlined
                            v-model="form.STRIPE_SECRET"
                            :rules="stripesecretRule"
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
              STRIPE_KEY:'',
              STRIPE_SECRET:'',
              payment_gateway:'STRIPE', 
         },
         stripeKeyRule:[v=>!!v || 'Stripe Key is required'],
         stripesecretRule:[v=>!!v || 'Stripe Secret Key is required'],
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