<template>
  <div>
      <v-btn depressed color="primary" @click="addPermModel=true">Add Fees Tier</v-btn>
   
      <v-dialog v-model="addPermModel" width="500">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Add Fees Tier
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
                  <v-text-field
                            label="Tier Name"
                            outlined
                            v-model="form.tier_title"
                            :rules="tier_titleRule"
                        />

                    <v-text-field
                            label="Start From"
                            outlined
                            type="Date"
                            v-model="form.fromdate"
                            :rules="fromdateRule"
                        />
                    <v-text-field
                            label="End Date"
                            outlined
                            type="Date"
                            v-model="form.todate"
                            :rules="todateRule"
                        />
                    <v-text-field
                            label="Name"
                            outlined
                            v-model="form.amount"
                            :rules="amountRule"
                        />
                      
                          
           </v-card-text>
           <v-card-actions>
               <v-btn class="error" @click="addPermModel=false">Cancel</v-btn>
               <v-spacer/>
               <v-btn class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
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
              tier_title:'',
              fromdate:'',
              todate:'',
              amount:'',
         },
         tier_titleRule:[v=>!!v || 'Tier name is required'],
         fromdateRule:[v=>!!v || 'Date is required'],
         todateRule:[v=>!!v || 'To date is required'],
         amountRule:[v=>!!v || 'Amount is required'],
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
                 await this.$axios.post('api/admin/registrationfee',this.form).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                         this.$store.dispatch('registration/getRegistrationfeess')
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