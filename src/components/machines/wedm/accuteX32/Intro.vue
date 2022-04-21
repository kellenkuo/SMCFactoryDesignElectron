<template>
  <v-card
    :loading="isLoading"
    class="mx-auto"
  >
    <template slot="progress">
      <v-progress-linear
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-list-item>
      <v-list-item-content>
        <div class="text-overline">
          WEDM
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-img
      contain
      height="200"
      :src="require('@/assets/accutex-al-600sa.png')"
    ></v-img>

    <v-card-title>徠通科技</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="green--text" v-if="isOnline">
          ONLINE
        </div>
        <div class="red--text" v-else>
          OFFLINE
        </div>
        <div class="grey--text ms-4">
          192.168.10.32
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        型號 • AL 600SA
      </div>

      <div>線切割放電加工機</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        text
        disabled
      >
        操作
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "WEDMIntroAccuteX32",
  props: {
    
  },
  data: () => ({
    isLoading: false,
    isOnline: false,
    onlineDurationSeconds: 10,
    data: null,
    timer: null,
  }),
  watch: {
    data: function(val) {
      let timestampMachine = Date.parse(val.timestamp);
      let timestampUTC = Date.now();
      let durationSeconds = Math.floor((timestampUTC - timestampMachine) / 1000);
      if (durationSeconds - 28800 < this.onlineDurationSeconds)
        this.isOnline = true;
      else
        this.isOnline = false;
    }
  },
  methods: {
    get() {
      axios.post('http://smccycu.cloud:30032/wedm-accutex-32/_search',{
        sort: [
          { timestamp: "desc" }
        ],
        size: 1
      })
      .then((res) => {
        this.data = res.data.hits.hits[0]._source;
      })
      .catch((error) => { console.error(error) })
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.get();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.timer);
  }
};
</script>
