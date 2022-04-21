<template>
  <v-container>
    <v-row dense class="ml-11">
      <v-col cols="12">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                Dashboard
              </div>
              <v-list-item-title class="text-h5 mb-1">
                總機台數 <strong>10</strong>
              </v-list-item-title>
              <v-alert
                dense
                text
                type="success"
                class="mt-2 mb-0"
              >
                在線機台數量 <strong>{{ onlineCount }}</strong> / 10
              </v-alert>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-container
      style="max-height: 80%"
      class="overflow-y-auto pl-0 pr-0"
    >
      <v-row dense class="ml-11">
        <v-col cols="4">
          <CNCIntroYipc />
        </v-col>
        <v-col cols="4">
          <CNCIntroVictor />
        </v-col>
        <v-col cols="4">
          <CNCIntroFocasiki />
        </v-col>
        <v-col cols="4">
          <CNCIntroHartford />
        </v-col>

        <v-col cols="4">
          <EDMIntroChmer />
        </v-col>
        <v-col cols="4">
          <EDMIntroExcetek />
        </v-col>
        <v-col cols="4">
          <EDMIntroOscaredm />
        </v-col>
        <v-col cols="4">
          <EDMIntroOctece />
        </v-col>

        <v-col cols="4">
          <WEDMIntroAccuteX30 />
        </v-col>
        <v-col cols="4">
          <WEDMIntroAccuteX31 />
        </v-col>
        <v-col cols="4">
          <WEDMIntroAccuteX32 />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CNCIntroYipc from "@/components/machines/cnc/yipc/Intro.vue";
import CNCIntroVictor from "@/components/machines/cnc/victor/Intro.vue";
import CNCIntroFocasiki from "@/components/machines/cnc/focasiki/Intro.vue";
import CNCIntroHartford from "@/components/machines/cnc/hartford/Intro.vue";

import EDMIntroChmer from "@/components/machines/edm/chmer/Intro.vue";
import EDMIntroExcetek from "@/components/machines/edm/excetek/Intro.vue";
import EDMIntroOscaredm from "@/components/machines/edm/oscaredm/Intro.vue";
import EDMIntroOctece from "@/components/machines/edm/octece/Intro.vue";

import WEDMIntroAccuteX30 from "@/components/machines/wedm/accuteX30/Intro.vue";
import WEDMIntroAccuteX31 from "@/components/machines/wedm/accuteX31/Intro.vue";
import WEDMIntroAccuteX32 from "@/components/machines/wedm/accuteX32/Intro.vue";

export default {
  name: "Home",
  components: {
    CNCIntroYipc,
    CNCIntroVictor,
    CNCIntroFocasiki,
    CNCIntroHartford,
    EDMIntroChmer,
    EDMIntroExcetek,
    EDMIntroOscaredm,
    EDMIntroOctece,
    WEDMIntroAccuteX30,
    WEDMIntroAccuteX31,
    WEDMIntroAccuteX32,
  },
  data: () => ({
    onlineYipc: 0,
    onlineVictor: 0,
    onlineFocasiki: 0,
    onlineHartford: 0,
    onlineChmer: 0,
    onlineExcetek: 0,
    onlineOscaredm: 0,
    onlineOctece: 0,
    onlineAccuteX30: 0,
    onlineAccuteX31: 0,
    onlineAccuteX32: 0,
  }),
  computed: {
    onlineCount() {
      let count = this.onlineYipc
        + this.onlineVictor
        + this.onlineFocasiki
        + this.onlineHartford
        + this.onlineChmer
        + this.onlineExcetek
        + this.onlineOscaredm
        + this.onlineOctece
        + this.onlineAccuteX30
        + this.onlineAccuteX31
        + this.onlineAccuteX32;
      return count;
    }
  },
  methods: {
    
  }
};
</script>
