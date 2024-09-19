<template>
  <v-container>
    <div class="personal-data">
      <div class="label" style="margin-top: 20px;">Персональные данные</div>
      <v-text-field v-model="generalInformation.name" outlined label='Имя' class="user" style="margin-top: 20px;" />
      <v-text-field v-model="generalInformation.age" outlined label='Возраст' class="user" />
      <div style="display: flex;">
        <div v-if="childrenList.length" class="label">Дети (макс. 5)</div>
        <v-btn v-if="childrenList.length !== 5" @click="addChildren" rounded large outlined class="children-button" >
          <v-icon dark left> mdi-plus </v-icon>
          Добавить ребенка
        </v-btn>
      </div>
      <div v-for="(children, index) in childrenList" :key="children.id" style="margin-top: 10px;">
        <div class="child-list">
          <v-text-field v-model="childrenList[index].name " outlined hide-details label='Имя' style="margin-right: 18px;" />
          <v-text-field v-model="childrenList[index].age" outlined hide-details label='Возраст' style="margin-right: 18px;" />
          <v-btn @click="deleteChildren(index)" rounded size="large" text style="margin-top: 10px;" class="children-button">
            Удалить
          </v-btn>
        </div>
      </div>
      <v-btn v-if="childrenList.length" @click="saveGeneralInformation" depressed dark rounded large style="margin-top: 1vh; background-color: rgba(1, 167, 253, 1); font-weight: 400; font-size: 14px;">
        Сохранить
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FillableForm',

  data() {
    return {
      childrenList: [],
      generalInformation: {},
    }
  },

  mounted() {
    this.generalInformation = {
      name: this.userData.name,
      age: this.userData.age,
    }

    if(this.userData.childrens) this.childrenList = this.userData.childrens.value
  },

  computed: {
    ...mapState('user', ['userData']),
  },

  methods: {
    ...mapMutations('user', ['setUserData']),

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
      this.generalInformation = { ...this.generalInformation, childrens: { value: [ ...this.childrenList ]}};
      this.setUserData(this.generalInformation)
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 600;
}

.user {
  height: 13%;
}

.personal-data {
  margin-top: 30px;
  width: 50vw;
  margin: 0 auto;
}

.child-list {
  display: flex;
}

.children-button {
  color: rgba(1, 167, 253, 1); 
  border-width: 2px; 
  margin-left: auto; 
  font-weight: 400; 
  font-size: 14px;
}
</style>