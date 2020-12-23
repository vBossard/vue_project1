<template>
  <div id="app">
    <v-app>
  <v-navigation-drawer
        app
        permanent
        expand-on-hover
        clipped
        floating
        hide-overlay
      >
        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <router-link tag="span" to="/">
        <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </router-link>
          <router-link tag="span" to="/products">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item>
          </router-link>
          <router-link tag="span" to="/users">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-face</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Social</v-list-item-title>
          </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

  <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      app
      clipped-left
    >
    
      <v-toolbar-title>Vuex and Axios</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
