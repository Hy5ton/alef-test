<template>
  <v-app>
    <TopMenu/>
    <v-divider/>
    <v-main>
      <router-view/>
    </v-main>
    <BottomMenu/>
  </v-app>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
import BottomMenu from './components/BottomMenu.vue';

export default {
  name: 'App',

  components: {
    TopMenu,
    BottomMenu
  },
};
</script>

<style scooped>
html, body {
  overflow: hidden;
}
</style>