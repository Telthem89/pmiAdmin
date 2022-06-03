<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Gamifications</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Gamifications
                    <v-spacer/>
                    <GamemanagementAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Search Game Name..."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th class="text-left">
                          Game Number 
                        </th>
                        <th class="text-left">
                          Game Name
                        </th>

                        
                        
                       
                       
                        
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="games.length>0">
                        <tr
                        v-for="(per, i) in games"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.gfx_number }}</td>
                        <td>{{ per.gfx_name  }}</td>
                         <td class="d-flex justify-end pb-6 mt-4">
                            <GamemanagementEdit :game="per" />
                            <GamemanagementDelete :game="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No Games  yet</td>
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
     this.$store.dispatch('games/getGames')  
   this.overlay = false
},computed:{
   baseurl(){
     return this.$axios.defaults.baseURL+"/"
  },
   games(){
     const data =  this.$store.state.games.games
        if(this.search){
            return data.filter(dt=>(!dt.gfx_name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{
 
}
}
</script>

<style>

</style>