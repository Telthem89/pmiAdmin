<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Hotel Reservation</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Hotel Reservation List
                    <v-spacer/>
                   <HotelreservationAdd/>
                </v-card-title>
                <v-card-text>
                  <v-row class="mt-4"> 
                    <v-col>
                      <v-text-field outlined  v-model="search" width="100" label="Search Booking Number..."/>
                    </v-col>
                  </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                          <th>#</th>
                        <th class="text-left">
                          Hotel Number
                        </th>

                        <th class="text-left">
                          Hotel Photo
                        </th>
                        
                        <th class="text-left">
                          Hotel Name
                        </th>
                        <th class="text-left">
                           Hotel Location
                        </th>
                        
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="hotels.length>0">
                        <tr
                        v-for="(per, i) in hotels"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.htx_number }}</td>
                        <td><img :src="baseurl+per.htx_hotelimg_url" class="mt-3" width="90px"/> </td>
                        <td>{{ per.htx_name  }}</td>
                         <td>{{ per.htx_hotelcity }}</td>
                         <td class="d-flex justify-end pb-8 mt-9">
                            <HotelreservationEdit :reservation="per"/>
                            <HotelreservationDelete :reservation="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No Hotel  yet</td>
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
        search:""
    }
},

async fetch(){
    this.overlay=true
     this.$store.dispatch('hotels/getReservations')  
   this.overlay = false
},computed:{
  baseurl(){
     return this.$axios.defaults.baseURL+"/"
  },
   hotels(){
     const data =  this.$store.state.hotels.hotels
       console.log(data)
        if(this.search){
            return data.filter(dt=>(!dt.htx_name.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{
    
}
}
</script>

<style>

</style>