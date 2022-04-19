<template>
  <div>
      <v-btn icon depressed color="error" @click="addPermModel=true"><v-icon>mdi-trash-can</v-icon></v-btn>
   
      <v-dialog v-model="addPermModel" width="300">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Delete Customer <v-icon>mdi-warning</v-icon>
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text class="text-center">
                <v-alert
                        outlined
                        type="error"
                        prominent
                        border="left"
                        >
                        You are about to delete  <b>{{group.cfgr_name}}</b>
                       </v-alert>
                
                
           </v-card-text>
           <v-card-actions>
               <v-btn  class="error" @click="addPermModel=false">Cancel</v-btn>
               <v-spacer/>
               <v-btn  class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
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
    props:['group'],
 data(){
     return{
         addPermModel:false,
         valid:false,
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
                 await this.$axios.delete('api/admin/confgroups/'+this.group.id).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                        this.$store.dispatch("groups/getConGroups");
                        this.$refs.form.reset()
                        this.addPermModel = false

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