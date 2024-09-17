<template>
  <v-app>
    <TopMenu/>
    <v-divider/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

// <template>
//   <div id="app">
//     <nav>
//       <router-link to="/">Home</router-link> |
//       <router-link to="/about">About</router-link>
//     </nav>
//     <router-view/>
//   </div>
// </template>




// import PersonalData from './components/PersonalData';
import TopMenu from './components/TopMenu.vue';

export default {
  name: 'App',

  components: {
    // PersonalData,
    TopMenu,
  },

  data: () => ({
    //
  }),
};
</script>