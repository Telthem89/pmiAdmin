<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card
        flat
        tile
        width="100%"
        class="indigo lighten-1 white--text text-center"
      >
        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong> PMIZIMBABWE CHAPTER</strong> |
          <a
            class="white--text telthemweb"
            href="https://www.sagehilltechnologies.com"
            >Developed by Sagehill Business Solutions</a
          ><br />
          <b class="white--text text-center"
            >{{ new Date().getFullYear() }} | All Copyrights reserved
          </b>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
/* March 2022 
developed by Innocent Tauzeni and Brendon Songore fullstack developers -Sagehill Business Solutions  */
.telthemweb a {
  text-decoration: none !important;
}
</style>
