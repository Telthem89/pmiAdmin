<template>
  <div>
        <v-btn depressed color="purple" class="white--text" dark @click="fetch()">Sessions <v-icon>mdi-vector-polyline</v-icon></v-btn>
        <v-dialog v-model="showModel" width="1000">
            <v-card>
                <v-card-title>
                    Conference Sessions
                    <v-spacer/>
                    <div class="d-flex">
                        <SessionsAdd  :eventdata="event"/>
                        <v-btn icon depressed color="error" @click="showModel=false"><v-icon>mdi-close</v-icon></v-btn>
                    </div>
                </v-card-title>
                <v-card-text>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Activity
                        </th>
                        <th class="text-left">
                            Date
                        </th>

                        <th class="text-left">
                            Start
                        </th>

                         <th class="text-left">
                            Start
                        </th>
                        
                        <th class="text-left">
                            Speaker
                        </th>
                        
                          <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="conferencesessions.length>0">
                        <tr
                        v-for="per in conferencesessions"
                        :key="per.id"
                        >
                        <td>{{ per.session_name }}</td>
                        <td>{{ per.eventsession_date | formatDate}}</td>
                        <td>{{ per.fromTime }}</td>
                        <td>{{ per.toTime }}</td>
                        <td>{{ per.speaker ? per.speaker.name : " " }}  {{ per.speaker ? per.speaker.surname : " " }}</td>
                        <td>
                        <SessionsEdit :eventdata="per" /> </td>
                      </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No Sessions yet</td>
                            </tr>
                        </template>
                    </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>
            </v-card>
        </v-dialog>
  </div>
</template>

<script>
export default {
    props:['event'],
 data(){
     return{
         showModel:false,
     }
 },
 methods:{
 async fetch(){
    this.showModel = true
    await this.$store.dispatch('conferences/getConferencesessions',this.event.id)    
    // this.showModel = false
    
 }},
 computed:{
     conferencesessions(){
      return this.$store.state.conferences.conferencesessions
     }
 },

}
</script>

<style>

</style>