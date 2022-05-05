<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Chapters</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Chapters
                    <v-spacer/>
                    <ResourcesAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Presentation Name..."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        
                        <th class="text-left">
                          #
                        </th>
                         <th class="text-left">
                          Document Number 
                        </th>
                        <th class="text-left">
                          Author
                        </th>

                         <th class="text-left">
                          Document Name
                        </th>

                        
                        <th class="text-left">
                          Date 
                        </th>

                       
                       
                        
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="presentations.length>0">
                        <tr
                        v-for="(per, i) in presentations"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.docnumber }}</td>
                        <td>{{ per.speaker ? per.speaker.name:" " }} {{ per.speaker ? per.speaker.surname:" " }}</td>
                        <td>{{ per.docname  }}</td>
                        <td>{{ per.created_at | formatDate}}</td>

                        <td class="d-flex justify-end">
                            <ResourcesDelete :dpresentation="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No documents  yet</td>
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
     this.$store.dispatch('chapters/getChapters')  
   this.overlay = false
},computed:{
   presentations(){
     const data =  this.$store.state.chapters.list
        if(this.search){
            return data.filter(dt=>(!dt.docname.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{}
}
</script>

<style>

</style>