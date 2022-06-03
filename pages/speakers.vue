<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Members</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Speakers
                    <v-spacer/>
                    <SpeakersAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Speaker Name..."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                        #
                        </th>

                       <!--   <th class="text-left">
                            Picture
                         </th>

                        <th class="text-left">
                        Member ID
                        </th> -->

                        <th class="text-left">
                        Name
                        </th>

                        <th class="text-left">
                        Surname
                        </th>

                        

                         <th class="text-left">
                        Gender
                        </th>
                        <th class="text-left">
                        Date Created
                        </th>

                         <th class="text-left">
                            Edit
                        </th>
                        <th class="text-left">
                            Delete
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="speakers.length>0">
                        <tr
                        v-for="(per, i) in speakers"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.name }}</td>
                        <td> {{ per.surname }}</td>
                        <td>{{ per.gender}}</td>
                        <td>{{ per.created_at | formatDate}}</td>

                        <td >
                         <SpeakersEdit :speaker="per"/></td>
                         <td >
                         <SpeakersDelete :speaker="per"/>
                        </td>

                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="8" class="text-center red--text">No Members  yet</td>
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
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </v-container>
</template>

<script>
import JsonExcel from "vue-json-excel";
import { mapGetters } from 'vuex'
export default {
layout:'user',
components:{
downloadexcel:JsonExcel
},
data(){
    return{
        overlay:false,
        isPaid:true,
        search:''
    }
},

async fetch(){
    this.overlay=true
    await this.$store.dispatch('speakers/getAllSpeakers')  
   this.overlay = false
},computed:{
   speakers(){
     const data =  this.$store.state.speakers.speakers
        if(this.search){
            return data.filter(dt=>(!dt.name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     },

     baseurl(){
     return this.$axios.defaults.baseURL+"/"
  },


},methods:{

}
}
</script>

<style>

</style>