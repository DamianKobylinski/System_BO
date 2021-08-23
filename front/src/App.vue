<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
</router-view>
</template>

<script>
export default {
  mounted() {
    if (this.$cookies.isKey('email')) {
      if (this.$cookies.isKey('name')) {
        this.$store.state.isInDatabase = true;
      }
    }
  },
  updated() {
    if (this.$cookies.isKey('email')) {
      if (this.$cookies.isKey('name')) {
        this.$store.state.isInDatabase = true;
      } else {
        this.$store.state.isInDatabase = false;
      }
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
