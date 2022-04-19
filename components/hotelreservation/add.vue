<template>
  <div>
      <v-btn  color="primary" @click="addPermModel=true">Add Hotel<v-icon>mdi-domain</v-icon></v-btn>
   
      <v-dialog v-model="addPermModel" width="300">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Add Hotel
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
                     <v-text-field
                            label="Hotel Name"
                            outlined
                            v-model="form.htx_name"
                            :rules="htx_nameRule"
                        />
                       
                           <v-text-field
                            label="Hotel Location"
                            outlined
                            v-model="form.htx_hotelcity"
                            :rules="htx_hotelcityRule"
                        />

                         <v-file-input
                        accept=".png,.jpeg,.jpg"
                        label="Upload Feature Image"
                        v-model="form.file"
                        :rules="fileRule"
                    ></v-file-input>
                      
                          
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
 data(){
     return{
         addPermModel:false,
         valid:false,
         form:{
              htx_name:'',
              htx_hotelcity:'',
              file:null
         },
         htx_nameRule:[v=>!!v || 'required'],
         htx_hotelcityRule:[v=>!!v || ' required'],
         fileRule:[v=>!!v || 'Upload image required'],
         snackbar:false,
         color:'',
         text:'',
         loading:false,
     }
 },
async fetch(){
    this.overlay=true
   this.overlay = false
},computed:{
    currencylist(){
        return this.$store.state.currency.currency
    }
} ,methods:{
     async submit(){
       if(this.$refs.form.validate())
       {
          this.valid = true
          this.loading=true
             try {
                 const formdata = new FormData()
                 formdata.append('htx_name',this.form.htx_name)
                 formdata.append('htx_hotelcity',this.form.htx_hotelcity)
                 formdata.append("file", this.form.file);
                 await this.$axios.post('api/admin/hotelreservation',formdata).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                         this.$store.dispatch('hotels/getReservations')
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