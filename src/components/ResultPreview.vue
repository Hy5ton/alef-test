<template>
  <v-container>
    <div class="personal-data">
      <div class="label mt-5">Персональные данные</div>
      <div v-if="userData.name" class="user-name mt-5">{{userData.name}}, {{userData.age}}</div>
      <div class="label mt-15">Дети</div>
      <div v-for="children in userData.childrens?.value" :key="children.id" class="mt-5">
        <v-btn v-if="children.name" large class="user-name">{{children.name}}, {{children.age}}</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ResultPreview',

  computed: {
    ...mapState('user', ['userData']),
  },
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 500;
}

.personal-data {
  margin-top: 30px;
  width: 50%;
  margin: 0 auto;
}

.user-name {
  font-weight: 700;
  font-size: 16px;
}
</style>