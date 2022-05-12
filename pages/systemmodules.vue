<template>
  <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>System Modules</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
       <v-row class="mt-5">
          <v-col>
              <v-card>
                  <v-card-title>
                      System Modules
                      <v-spacer/>
                       <SystemmodulesAdd/>
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
                            Icon
                        </th>
                          <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, i) in modules"
                        :key="i"
                        >
                        <td>{{ i+1 }}</td>
                        <td>{{ item.name }}</td>
                        <td><v-icon v-text="item.icon"/></td>
                        <td class="d-flex justify-end">
                          <SystemmodulesEdit :module="item"/>
                           <SystemmodulesDelete :module="item"/>
                           <SubmodulesView :itm="item"/>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                  </v-card-text>
              </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
 layout:'user',
 async fetch(){
        this.$store.dispatch('systemmodules/getModules')
  },
 computed:{
     modules(){
           return this.$store.state.systemmodules.modules
     }
 }
}
</script>

<style>

</style>