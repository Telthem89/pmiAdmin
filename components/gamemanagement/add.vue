<template>
  <div>
      <v-btn  color="primary" @click="addPermModel=true">Add Game<v-icon>mdi-microsoft-xbox-controller</v-icon></v-btn>
   
      <v-dialog v-model="addPermModel" width="500">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Add Game
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
                     <v-text-field
                            label="Game Name"
                            outlined
                            v-model="form.gfx_name"
                            :rules="gfx_nameRule"
                        />
 
                         <v-file-input
                        accept=".png,.jpeg,.jpg"
                        label="Upload Feature Image"
                        v-model="form.file"
                        :rules="fileRule"
                    ></v-file-input>
                      
                          
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
 data(){
     return{
         addPermModel:false,
         valid:false,
         form:{
              gfx_name:'',
              file:null
         },
         gfx_nameRule:[v=>!!v || 'required'],
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
                 formdata.append('gfx_name',this.form.gfx_name)
                 formdata.append("file", this.form.file);
                 await this.$axios.post('api/admin/gamefications',formdata).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                         this.$store.dispatch('games/getGames')
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