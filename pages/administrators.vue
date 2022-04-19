<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="d-flex">
            <v-btn text to="dashboard">Dashboard</v-btn>
            <v-btn text disabled>System Administrators</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <v-card>
          <v-card-title>
            System Administrators
            <v-spacer />
            <AdministratorAdd />
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col md="9"></v-col>
              <v-col md="3">
                <v-text-field
                  outlined
                  v-model="search"
                  label="Search Ticket"
                />
              </v-col>
            </v-row>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>#</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Username</th>
                    <th class="text-left">Status</th>
                    <th class="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(admin, i) in administrators" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ admin.name }} {{ admin.surname }}</td>
                    <td>{{ admin.username }}</td>
                    <td>{{ admin.status }}</td>
                    <td class="d-flex justify-end pt-2 pb-2">
                      <AdministratorEdit :administrator="admin" />
                      <AdministratorReset :administrator="admin" />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  layout: "user",
  data() {
    return {
      overlay: false,
      search: "",
    };
  },
  async fetch() {
    this.overlay = true;
    await this.$store.dispatch("administrators/getAdministrators");
    this.overlay = false;
  },
  computed: {
    administrators() {
      
       const data =  this.$store.state.administrators.administrators;

      if (this.search) {
        return data.filter(
          (dt) => !dt.username.indexOf(this.search.toUpperCase())
        );
      }
      return data;
    },

    
  },
};
</script>

<style>
</style>