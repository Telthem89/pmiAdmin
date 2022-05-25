<template>
  <div>
     <v-btn icon depressed color="primary" @click="addPermModel=true"><v-icon>mdi-pencil</v-icon></v-btn>
   
      <v-dialog v-model="addPermModel" width="500">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Update Session
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>




                  <v-text-field
                            label="Session Name"
                            outlined
                            v-model="form.session_name"
                            :rules="session_nameRule"
                        />

                    <v-text-field
                            label="Date"
                            outlined
                            type="Date"
                            v-model="form.eventsession_date"
                            :rules="eventsession_dateRule"
                        />
                     <v-select
                            label="Assign Speaker"
                            outlined
                            :items="speakers"
                            item-text="name"
                            item-value="id"
                            v-model="form.speakerId"
                            :rules="speakerIdRule"
                        />
                    <input type="hidden"  v-model="form.conferenceeventId">
     
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
    props:['eventdata'],
 data(){
     return{
         addPermModel:false,
         valid:false,
         form:{
              session_name:this.eventdata.session_name,
              eventsession_date:this.eventdata.eventsession_date,
              speakerId:this.eventdata.speakerId,
              conferenceeventId:this.eventdata.conferenceeventId,
         },
         session_nameRule:[v=>!!v || 'Session name is required'],
         eventsession_dateRule:[v=>!!v || 'Session Date is required'],
         speakerIdRule:[v=>!!v || 'Please Assign Speaker'],
         snackbar:false,
         color:'',
         text:'',
         loading:false
     }
 },
 async fetch(){
    this.overlay=true
    await this.$store.dispatch('speakers/getAllSpeakers')  
   this.overlay = false
},
computed:{
    speakers(){
        return this.$store.state.speakers.speakers
    }
},

 methods:{
     async submit(){
       if(this.$refs.form.validate())
       {
          this.valid = true
          this.loading=true
             try {
                 await this.$axios.patch('api/admin/eventsessions/'+this.eventdata.id,this.form).then((res)=>{
                        this.loading = false
                        this.color="success"
                        this.snackbar=true
                        this.text=res.data.message
                        this.$store.dispatch('conferences/getConferencesessions',this.eventdata.conferenceeventId)
                         // this.$store.dispatch('conferences/getConferencesessions')

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