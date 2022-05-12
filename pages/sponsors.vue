<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Companies</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Sponsors 
                    <v-spacer/>
                    <SponsorsAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Search Company Name ..."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th class="text-left">
                          Company Number 
                        </th>
                        <th class="text-left">
                          Company logo 
                        </th>
                        <th class="text-left">
                          Comapany
                        </th>

                        
                        <th class="text-left">
                          Address 
                        </th>

                        <th class="text-left">
                          Website Link
                        </th>
                       
                        
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="companies.length>0">
                        <tr
                        v-for="(per, i) in companies"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.cnmy_number }}</td>
                        <td><img :src="baseurl+per.cnmy_logo" width="90px"/> </td>
                        <td>{{ per.cnmy_name  }}</td>
                        <td>{{ per.cnmy_address  }}</td>
                        <td>{{ per.cnmy_website}}</td>

                        <td class="d-flex justify-end">
                            <SponsorsEdit :sponsor="per"/>
                            <SponsorsDelete :sponsor="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No Sponsors  yet</td>
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
    this.$store.dispatch('sponsors/getCompanies')  
   this.overlay = false
},computed:{
  baseurl(){
     return this.$axios.defaults.baseURL+"/"
  },
   companies(){
     const data =  this.$store.state.sponsors.companies
        if(this.search){
            return data.filter(dt=>(!dt.cnmy_name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{
    
}
}
</script>

<style>

</style>