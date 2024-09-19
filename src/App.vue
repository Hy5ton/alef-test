<template>
  <v-app class="custom-font">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
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

<style scoped>
.custom-font {
  font-family: 'Montserrat', sans-serif;
}
</style>