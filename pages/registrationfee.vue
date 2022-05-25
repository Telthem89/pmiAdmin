<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Registration Tier</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Registration Tier
                    <v-spacer/>
                    <FeesAdd/>
                </v-card-title>
                <v-card-text>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th>Tier Name</th>
                        <th class="text-left">
                            From
                        </th>
                        <th class="text-left">
                            To
                        </th>
                        <th class="text-left">
                            Amount
                        </th>
                        <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="registrationfee.length>0">
                        <tr
                        v-for="(per, i) in registrationfee"
                        :key="i"
                        >
                        
                        <td >{{ per.tier_title }}</td>
                        <td>{{ per.fromdate | formatDate }}</td>
                        <td>{{ per.todate | formatDate }}</td>
                        <td>{{ per.amount }}</td>
                        <td class="pt-2 pb-2">
                            <FeesEdit :fees="per"/>
                     
                        </td>
                        <tdclass=" pt-2 pb-2">
                            <FeesDelete :fees="per"/>
                     
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="pa-3 text-center red--text">No fees tier Found</td>
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
export default {
layout:'user',
data(){
    return{
        overlay:false
    }
},
async fetch(){
    this.overlay=true
   await this.$store.dispatch('registration/getRegistrationfeess') 
   this.overlay = false
},computed:{
    registrationfee(){
        return this.$store.state.registration.registrationfee
    }
}
}
</script>

<style>

</style>