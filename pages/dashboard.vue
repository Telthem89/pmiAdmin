<template>
  <v-container>
    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="customers">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-account-cog</v-icon></v-btn
            ><b class="ml-5 white--text"
              >{{ this.$store.state.customers.total }} Customers</b
            ></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="bookings">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-home</v-icon></v-btn
            >
            <b class="ml-5 white--text">0 Event Bookings</b>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="speakers">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-account-tie-voice</v-icon></v-btn
            >
            <b class="ml-5 white--text"
              >{{ this.$store.state.speakers.total }} Speakers</b
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="error" router
          to="videos">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-youtube</v-icon></v-btn
            ><b class="ml-5 white--text"
              >{{ this.$store.state.videos.total }} Videos</b
            ></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="chapters">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-animation-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text"
              >{{ this.$store.state.chapters.total }} Chapters</b
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="conferences">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-calendar</v-icon></v-btn
            >
            <b class="ml-5 white--text"
              >{{ this.$store.state.conferences.total }} Events</b
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="groups">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-home-group</v-icon></v-btn
            ><b class="ml-5 white--text"
              >{{ this.$store.state.groups.total }} Channels</b
            ></v-card-text
          >
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="hotelreservation">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-bank-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text"
              >{{ this.$store.state.hotels.total }} Hotels</b
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4">
        <v-card class="p-6" color="purple" router
          to="reservations">
          <v-card-text
            ><v-btn rounded fasb class="p-5"
              ><v-icon size="34">mdi-bank-outline</v-icon></v-btn
            >
            <b class="ml-5 white--text"
              >{{ this.$store.state.bookings.totalBookingReservation }} Hotel
              Bookings</b
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-22">
      <v-col lg="12" md="12">
        <h2><v-icon size="34">mdi-calendar</v-icon> ALL EVENTS</h2>
        <hr />
        <br />
        <v-row class="mt-1">
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat color="white">
                <ConferencesAdd class="mr-4" />

                <v-btn outlined class="mr-4" @click="setToday"> Today </v-btn>
                <v-btn fab text small @click="prev">
                  <v-icon small>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab text small @click="next">
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title>{{ title }}</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-menu bottom right>
                  <template v-slot:activator="{ on }">
                    <v-btn outlined v-on="on">
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                      <v-list-item-title>4 days</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :event-margin-bottom="3"
                :now="today"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="setDialogDate"
                @change="updateRange"
              ></v-calendar>
              <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                
                offset-x
              >
                <v-card color="grey lighten-4" :width="350" flat>
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-toolbar-title
                      v-html="selectedEvent.name"
                    ></v-toolbar-title>
                    <div class="flex-grow-1"></div>
                  </v-toolbar>

                  <v-card-text>
                    <form v-if="currentlyEditing !== selectedEvent.id">
                      {{ selectedEvent.details }}
                    </form>
                    <form v-else>
                      <textarea-autosize
                        v-model="selectedEvent.details"
                        type="text"
                        style="width: 100%"
                        :min-height="100"
                        placeholder="add note"
                      >
                      </textarea-autosize>
                    </form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="secondary" @click="selectedOpen = false">
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {  format,formatDistanceToNow  } from 'date-fns/'
import moment from 'moment'
export default {
  layout: "user",
  components: {},
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      focus: new Date().toISOString().substr(0, 10),
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days",
      },
      eventname: null,
      descriptionshort: null,
      opendate: null,
      closedate: null,
      eventcolor: "#1976D2", // default event color
      currentlyEditing: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      dialog: false,
      dialogDate: false,
    };
  },

  async fetch() {
    await this.$store.dispatch("customers/getTotalCustomers");
    await this.$store.dispatch("speakers/getSpeakers");
    await this.$store.dispatch("videos/getTotalVideos");
    await this.$store.dispatch("chapters/getTotalChapters");
    await this.$store.dispatch("hotels/getTotalReservations");
    await this.$store.dispatch("groups/getTotalConGroups");
    await this.$store.dispatch("conferences/getTotalConferences");
    await this.$store.dispatch("bookings/getTotalHotelBooking");
    await this.$store.dispatch("conferences/getConferences");
  },
   mounted () {
   this.getEvents()
  },
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;
      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;
      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
 
  methods: {
    async getEvents() {
      const data = this.$store.state.conferences.list;
      let array = []
       data.forEach(element => {
            const el = {eventname:element.eventname,opendate:format(moment(element.opendate).format('yyyy-MM-dd'),'yyyy-MM-dd'),closedate:format(moment(element.closedate).format('yyyy-MM-dd hh:mm'),'yyyy-MM-dd')} 
           console.log(el)
           array.push(el)
       });
       this.events = array;
    },
    setDialogDate({ date }) {
      this.dialogDate = true;
      this.focus = date;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },

    async deleteEvent(ev) {
      // await db.collection("calEvent").doc(ev).delete()
      // this.selectedOpen = false,
      // this.getEvents()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
  },
};
</script>