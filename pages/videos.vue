<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>  Conference Videos</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                  Conference Videos
                    <v-spacer/>
                    <VideosAdd />
                 </v-card-title>
                <v-card-text>
                   <v-row class="mt-4">
                     <v-col>
                        <v-text-field outlined  v-model="search" width="100" label="Search Video.."/>         
                     </v-col>
                   </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th class="text-left">
                          Video Code
                        </th>
                        <th class="text-left">
                        Video
                        </th>
                        

                         <th class="text-left">
                      
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="videos.length>0">
                        <tr
                        v-for="(per, i)  in videos"
                        :key="i"
                        >
                        {{i+1}}
                        <td>{{ per.vx_number }}</td>
                        <td><a :href="per.vx_videourl">{{ per.vx_name  }}</a></td>
                        <td class="d-flex justify-end">
                            <VideosEdit :video="per"/>
                            <VideosDelete :video="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No Video  yet</td>
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
     this.$store.dispatch('videos/getVideos')  
   this.overlay = false
},computed:{
   videos(){
     const data =  this.$store.state.videos.videos
        if(this.search){
            return data.filter(dt=>(!dt.vx_name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{

}
}
</script>

<style>

</style>