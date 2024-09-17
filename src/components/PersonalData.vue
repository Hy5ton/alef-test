<template>
  <v-container>
    <div class="personal-data">
      <div class="label">Персональные данные</div>
      <text-field label='Имя' class="user" style="margin-top: 3vh;" />
      <text-field label='Возраст' class="user" />
      <v-btn></v-btn>
    </div>
  </v-container>
</template>

<script>
import TextField from './TextField.vue'

export default {
  name: 'PersonalData',

  components: { 
    TextField 
  }
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 500;
}

.user {
  width: 50%;
  height: 13%;
}

.personal-data {
  margin-top: 4vh;
}
</style>