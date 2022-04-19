<template>
  <v-container>
    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-account-cog</v-icon></v-btn
            ><b class="ml-5 white--text">{{this.$store.state.customers.total}} Customers</b></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-wallet</v-icon></v-btn
            >
            <b class="ml-5 white--text">ZWL${{this.$store.state.payments.total}}</b>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-account-tie-voice</v-icon></v-btn
            >
            <b class="ml-5 white--text">{{this.$store.state.speakers.total}} Speakers</b>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-youtube</v-icon></v-btn
            ><b class="ml-5 white--text">{{this.$store.state.videos.total}} Videos</b></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-animation-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text">{{this.$store.state.chapters.total}} Chapters</b>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-calendar</v-icon></v-btn
            >
            <b class="ml-5 white--text">{{this.$store.state.conferences.total}}  Events</b>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-home-group</v-icon></v-btn
            ><b class="ml-5 white--text">{{this.$store.state.groups.total}} Channels</b></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-bank-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text">{{this.$store.state.hotels.total}} Hotels</b>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-bank-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text">{{this.$store.state.bookings.totalBookingReservation}} Hotel Bookings</b>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-22">
      <v-col lg="12" md="12">
        <h2><v-icon size="34">mdi-calendar</v-icon> ALL EVENTS</h2>
        <hr />
        <br />
        <!-- <v-calendar></v-calendar> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  layout: "user",
  components:{},
  data() {
    return {};
  },

  async fetch() {
    this.$store.dispatch("customers/getTotalCustomers");
    this.$store.dispatch("speakers/getSpeakers");
    this.$store.dispatch("videos/getTotalVideos");
    this.$store.dispatch("chapters/getTotalChapters");
    this.$store.dispatch("hotels/getTotalReservations");
    this.$store.dispatch("groups/getTotalConGroups");
    this.$store.dispatch("conferences/getTotalConferences");
    this.$store.dispatch("bookings/getTotalHotelBooking");
    this.$store.dispatch("payments/getTotalPayments");
  },
  computed: {},
};
</script>