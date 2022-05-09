<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Customers</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Customers Csv
                    <v-spacer/>
                    <ImportsInadd />
                </v-card-title>
                <v-card-text>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-left">Icon</th>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                           Date Uploaded
                        </th>
                        
                        <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="currencylist.length>0">
                        <tr
                        v-for="(per, i) in currencylist"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td><v-icon>mdi-microsoft-excel</v-icon></td>
                        <td>{{ per.title }}</td>
                        <td>{{ per.created_at | formatDate }}</td>
                        <!-- <td>{{ per.status }}</td> -->
                        <td class="d-flex justify-end pt-2 pb-2">
                            <ImportsView :csvd="per" />
                           <ImportsDelete :csvd="per" />
                     
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="pa-3 text-center red--text">No excels  Found</td>
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
// import ImportsAdd from '~/components/imports/add'
export default {
layout:'user',
components:{
    // ImportsAdd
},
data(){
    return{
        overlay:false
    }
},
async fetch(){
    this.overlay=true
   await this.$store.dispatch('csvdata/getCustomercsv') 
   this.overlay = false
},computed:{
    currencylist(){
        return this.$store.state.csvdata.customercsvs
    }
}
}
</script>

<style>

</style>