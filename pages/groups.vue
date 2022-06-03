<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Conference Groups</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                  Conference Groups
                    <v-spacer/>
                    <GroupsAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Search Group Name..."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th class="text-left">
                          Channel Number 
                        </th>
                        

                        <th class="text-left">
                          Channel Name
                        </th>

                        
                        
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="groups.length>0">
                        <tr
                        v-for="(per, i) in groups"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.cfgr_number }}</td>
                        <td>{{ per.cfgr_name  }}</td>
                        <td class="d-flex justify-end pb-8 mt-7">
                            <GroupsEdit :group="per"/>
                            <GroupsDelete :group="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No group  yet</td>
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
     this.$store.dispatch('groups/getConGroups')  
   this.overlay = false
},computed:{
   baseurl(){
     return this.$axios.defaults.baseURL+"/"
  },
   groups(){
     const data =  this.$store.state.groups.list
        if(this.search){
            return data.filter(dt=>(!dt.cfgr_name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{

}
}
</script>

<style>

</style>