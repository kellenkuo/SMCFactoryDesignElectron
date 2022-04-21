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
          CNC 3-AXIS
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-img
      contain
      height="200"
      :src="require('@/assets/vcenter-p76.png')"
    ></v-img>

    <v-card-title>FOCUS SEIKI</v-card-title>

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
          192.168.10.13
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        型號 • VMC 860
      </div>

      <div>Vertical Machining Center</div>
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
  name: "CNCIntroFocasiki",
  props: {
    
  },
  data: () => ({
    isLoading: false,
    isOnline: false,
    onlineDurationSeconds: 10,
    data: null,
    timer: null,
  }),
  methods: {
    get() {
      axios.post('http://smccycu.cloud:30030/cnc-focaseiki/_search',{
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
