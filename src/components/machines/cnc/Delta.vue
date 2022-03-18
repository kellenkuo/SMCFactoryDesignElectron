<template>
  <v-container>
    <v-row class="ml-11" dense>
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
              <div class="text-overline mb-4">
                Welcome to Delta CNC Details
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

    <v-row class="ml-11" dense>
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
              class="d-flex text-center"
            >
              <v-scroll-y-transition mode="out-in">
                <v-card v-if="active === 'info'" class="mx-auto" flat>
                  <v-card-text>
                    <h3 class="text-h5 mb-2">
                      機台功能
                    </h3>
                  </v-card-text>
                  <v-divider></v-divider>
                  
                  <v-list
                    three-line
                    subheader
                  >
                    <v-row class="text-left">
                      <v-col cols="4">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Content filtering</v-list-item-title>
                            <v-list-item-subtitle>content info</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                      <v-col cols="4">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle>password info</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                      <v-col cols="4">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle>password info</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                      <v-col cols="4">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle>password info</v-list-item-subtitle>
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
  name: "Delta",
  data: () => ({
    active: "info",
  }),
  computed: {
    items () {
      return [
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
