<template>
  <v-container>
    <div class="personal-data">
      <div class="label">Персональные данные</div>
      <v-text-field v-model="generalInformation.name" label='Имя' class="user" style="margin-top: 3vh;" outlined />
      <v-text-field v-model="generalInformation.age" label='Возраст' class="user" outlined />
      <div style="display: flex;">
        <div v-if="childrenList.length" class="label">Дети (макс. 5)</div>
        <v-btn v-if="childrenList.length !== 5" @click="addChildren" rounded large outlined style="color: rgba(1, 167, 253, 1); border-width: 2px;" class="add-children"  >
          <v-icon dark left> mdi-plus </v-icon>
          Добавить ребенка
        </v-btn>
      </div>
      <div v-for="(children, index) in childrenList" :key="children.id" style="margin-top: 3vh;" class="child-list">
        <v-text-field v-model="childrenList[index].name " outlined label='Имя' />
        <v-text-field v-model="childrenList[index].age" outlined label='Возраст' />
        <v-btn @click="deleteChildren(index)" rounded size="large" text style="margin-top: 1vh; color: rgba(1, 167, 253, 1);" class="add-children">
          Удалить
        </v-btn>
      </div>
      <v-btn v-if="childrenList.length" @click="saveGeneralInformation" depressed dark rounded large style="margin-top: 1vh; background-color: rgba(1, 167, 253, 1)">
        Сохранить
      </v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'PersonalData',

  data() {
    return {
      childrenList: [],
      generalInformation: {},
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
      this.childrenList.splice(index, 1)
    },

    saveGeneralInformation() {
      this.generalInformation = { ...this.generalInformation, childrens: { value: this.childrenList } };
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
  margin: 0 auto;
}

.add-children {
  margin-left: auto;
}

.child-list {
  display: flex;
  gap: 5%;
}
</style>