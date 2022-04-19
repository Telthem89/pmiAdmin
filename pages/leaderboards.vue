<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Leaderboard</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   <b class="purple--text">This Week Winners</b>
                    <v-spacer/>
                    <v-btn color="purple"><v-icon class="white--text">mdi-trophy</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                         <th>#</th>
                        <th class="text-left">
                            Name
                        </th>
                         <th class="text-left">
                            Game
                        </th>
                         <th class="text-left">
                            Score
                        </th>
                        <th class="text-left">
                            Position
                        </th>
                        <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <template v-if="currencylist.length>0">
                        <tr
                        v-for="(per, i) in currencylist"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ per.name }}</td>
                        <td class="d-flex justify-end pt-2 pb-2">
                            <CurrencyEdit :currency="per"/>
                            <CurrencyDelete :currency="per"/>
                     
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="2" class="pa-3 text-center red--text">No Currency  Found</td>
                            </tr>
                        </template> -->
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
    this.overlay=false
},computed:{
    
}
}
</script>

<style>

</style>