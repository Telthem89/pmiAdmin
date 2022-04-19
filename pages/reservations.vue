<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Hotel Booking</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                  Hotel Booking
                    <v-spacer/>
                    <ReservationsAdd/>
                </v-card-title>
                <v-card-text>
                  

             <v-row>
              <v-col lg="8" md="8">
                <downloadexcel :data="bookinghotel"
                  ><v-btn depressed class="error"
                    >Export Excel file</v-btn
                  ></downloadexcel
                >
              </v-col>
              <v-col lg="4" md="4">
                <v-text-field
                  outlined
                  v-model="search"
                  label="Search Booking Ticket Code"
                />
              </v-col>
            </v-row>




                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                          <th>#</th>
                        <th class="text-left">
                          Ticket
                        </th>
                        <th class="text-left">
                          Client Name 
                        </th>
                        <th class="text-left">
                          Hotel
                        </th>
                        
                        
                         <th class="text-left">
                          Male
                        </th>
                         <th class="text-left">
                          Female
                        </th>
                        <th class="text-left">
                          Total pple
                        </th>
                        <th class="text-left">
                          Days
                        </th>
                        <th class="text-left">
                          Nights
                        </th>

                        <th class="text-left">
                          Total of Days
                        </th>
                        <th class="text-left">
                          Date Created
                        </th>

                      
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="bookinghotel.length>0">
                        <tr
                        v-for="(per, i) in bookinghotel"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.bkx_number }}</td>
                         <td>{{ per.user ? per.user.name:" " }}   {{ per.user ? per.user.surname:" " }} </td>
                        <td>{{ per.reservation ? per.reservation.htx_name:"" }} </td>
                         <td class="text-center">{{ per.numberofmale }}</td>
                        <td class="text-center">{{ per.numberoffemale }}</td>
                        <td class="text-center">{{ per.numberofppeople }}</td>
                        <td class="text-center">{{ per.numberofnights}}</td>
                        <td class="text-center">{{ per.numberofnights}}</td>
                        <td class="text-center">{{ per.totalbookingnumberofdays}}</td>
                         <td>{{ per.created_at | formatDate}}</td>

                          <td class="d-flex justify-end">
                            <ReservationsEdit :hotelBook="per"/>
                            <ReservationsDelete :hotelBook="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="9" class="text-center red--text">No booking yet</td>
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
    this.$store.dispatch('bookings/getHotelBooking')  
   this.overlay = false
},computed:{
  
   bookinghotel(){
     const data =  this.$store.state.bookings.hotelbooks

        if(this.search){
            return data.filter(dt=>(!dt.bkx_number.indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{
    
}
}
</script>

<style>

</style>