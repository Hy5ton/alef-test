<template>
  <v-container>
    <div class="personal-data">
      <div class="label">Персональные данные</div>
      <text-field label='Имя' class="user" style="margin-top: 3vh;" />
      <text-field label='Возраст' class="user" />
      <div style="display: flex;">
        <div class="label">Дети (макс. 5)</div>
        <v-btn v-if="childrenList.length !== 5" @click="addChildren" rounded size="large" outlined style="color: rgba(1, 167, 253, 1);" class="add-children">
          <v-icon dark left> mdi-plus </v-icon>
          Добавить ребенка
        </v-btn>
      </div>
      <div v-for="(children, index) in childrenList" :key="children.id" style="margin-top: 3vh;" class="child-list">
        <text-field v-model="childrenList[index].name" label='Имя' />
        <text-field v-model="childrenList[index].age" label='Возраст' />
        <v-btn @click="deleteChildren(index)" rounded size="large" text style="margin-top: 1vh; color: rgba(1, 167, 253, 1);" class="add-children">
          Удалить
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import TextField from './TextField.vue'

export default {
  name: 'PersonalData',

  components: { 
    TextField 
  },

  data() {
    return {
      childrenList: [],
    }
  },

  methods: {
    addChildren() {
      this.childrenList.push({
        name: null,
        age: null,
      })
    },

    deleteChildren(index) {
      console.log(this.childrenList)
      console.log(index)
      this.childrenList.splice(index + 1, 1)
      console.log(this.childrenList)
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 500;
}

.user {
  height: 13%;
}

.personal-data {
  margin-top: 4vh;
  width: 50vw;
}

.add-children {
  margin-left: auto;
}

.child-list {
  display: flex;
  gap: 5%;
}
</style>