<template>
  <v-container>
    <v-row class="ml-12" dense>
      <v-col cols="12">
        <v-btn icon large @click="$router.push({name: 'cnc'})">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">
                CNC
                <v-chip
                  class="ma-2"
                  color="green"
                >online
                </v-chip>
              </div>
              <v-list-item-title class="text-h5 mb-1">
                台中精機
              </v-list-item-title>
              <v-list-item-subtitle>Vcenter-P76</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="100"
            >
              <v-img
                :src="require('@/assets/vcenter-p76.png')"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="ml-12" dense>
      <v-col>
        <v-card elevation="2" outlined>
          <v-row
            class="pa-4"
            justify="space-between"
          >
            <v-col cols="5">
              <v-list
                dense
                nav
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.name"
                  link
                  @click="onSelect(item.key)"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col
              class="d-flex"
            >
              <v-scroll-y-transition mode="out-in">
                <v-card v-if="active === 'specification'" class="mx-auto" flat>
                  <v-card-text>
                    <h3 class="text-h5 mb-2">
                      機台規格
                    </h3>
                  </v-card-text>
                  <v-divider></v-divider>
                  
                  <v-list
                    three-line
                    subheader
                  >
                    <v-row class="text-left">
                      <v-col
                        v-for="item in functions.specification"
                        :key="item.name"
                        cols="6"
                      >
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-list>
                </v-card>
                <v-card v-if="active === 'info'" class="mx-auto" flat>
                  <v-card-text>
                    <h3 class="text-h5 mb-2">
                      主要資訊
                    </h3>
                  </v-card-text>
                  <v-divider></v-divider>
                  
                  <v-list
                    three-line
                    subheader
                  >
                    <v-row class="text-left">
                      <v-col
                        v-for="item in functions.info"
                        :key="item.name"
                        cols="6"
                      >
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-list>
                </v-card>
                <v-card v-if="active === 'files'" class="mx-auto" flat>
                  <v-card-text>
                    <h3 class="text-h5 mb-2">
                      檔案
                    </h3>
                  </v-card-text>
                  <v-divider></v-divider>
                  
                  <v-list
                    three-line
                    subheader
                  >
                    <v-row class="text-left">
                      <v-col
                        v-for="item in functions.files"
                        :key="item.name"
                        cols="6"
                      >
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-list>
                </v-card>
              </v-scroll-y-transition>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CNCDetailsVictor",
  data: () => ({
    active: "info",
    functions: {
      specification: [
        {
          name: "X/Y/Z軸快速進給",
          value: "48/48/32 m/min",
        },
        {
          name: "X/Y/Z軸行程",
          value: "760/500/510mm",
        },
        {
          name: "主軸鼻端至工作臺距離",
          value: "120 ~ 630mm",
        },
        {
          name: "工作臺尺寸 & 荷重",
          value: "840 X 500mm / 500kg",
        },
        {
          name: "主軸轉速 & 主軸錐度",
          value: "12000rpm / BBT-40",
        },
        {
          name: "刀倉數量",
          value: "30",
        },
        {
          name: "刀具荷重 & 刀具長度",
          value: "7kg / 300mm",
        },
        {
          name: "外觀尺寸 (長X寬X高)",
          value: "2818 X 2719 X 2731mm",
        },
      ],
      info: [
        {
          name: "主軸轉速",
          value: "",
        },
        {
          name: "進給",
          value: "",
        },
        {
          name: "絕對座標",
          value: "",
        },
        {
          name: "機械座標",
          value: "",
        },
        {
          name: "相對座標",
          value: "",
        },
        {
          name: "剩餘座標",
          value: "",
        },
        {
          name: "工件座標偏移",
          value: "",
        },
      ],
      files: [
        {
          name: "smc.NC",
          value: "/md/smc.NC",
        },
        {
          name: "test.NC",
          value: "/md/test.NC",
        }
      ]
    }
  }),
  computed: {
    items () {
      return [
        {
          key: "specification",
          name: "機台規格",
          icon: "mdi-details",
        },
        {
          key: "info",
          name: "主要資訊",
          icon: "mdi-information-outline",
        },
        {
          key: "files",
          name: "檔案",
          icon: "mdi-file-cog-outline",
        },
      ];
    },
  },
  methods: {
    onSelect (value) {
      this.active = value
    }
  }
};
</script>
