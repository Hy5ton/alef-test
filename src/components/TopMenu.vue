<template>
  <ul class="menu">
    <img src='/icons/logo.svg' />
    <div class="menu-container">
      <div class="menu-button">
        <div @click="someMeth('/form')">Форма</div>
        <div @click="someMeth('/preview')">Превью</div>
      </div>
    </div>
  </ul>
</template>

<script>

export default {
  name: 'TopMenu',

  methods: {
    someMeth(path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  height: 10vh;
  position: relative;
}

.menu img {
  margin-right: 24px;
  margin-left: 71px;
  position: absolute;
  left: 0;
}

.menu-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.menu-button {
  display: flex;
  gap: 24px;
}
</style>