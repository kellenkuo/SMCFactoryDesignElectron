<template>
  <v-container>
    <v-row class="ml-11">
      <v-col cols="12">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                OVERLINE
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-container
      id="scroll-target"
      style="max-height: 425px"
      class="overflow-y-auto pl-0"
    >
      <v-row class="ml-11" v-scroll:#scroll-target="onScroll">
        <v-col cols="4">
          <CNCCard
            :detailRouterName="'details-cnc-delta'"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CNCCard from "@/components/CNCCard.vue";

export default {
  name: "CNC",
  components: {
    CNCCard
  },
  data: () => ({
    offsetTop: 0,
  }),
  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
  }
};
</script>
