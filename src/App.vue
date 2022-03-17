<template>
  <v-app>
    
    <v-navigation-drawer
      absolute
      permanent
      expand-on-hover
    >
      <v-list
        nav
        dense
      >
        <v-list-item link to="cnc">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>CNC</v-list-item-title>
        </v-list-item>
        <v-list-item link to="edm">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>放電</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/wedm">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>線切割</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
