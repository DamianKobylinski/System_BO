<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <LoadingScreen v-if="isLoading" />
        <component v-else :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';

export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isLoading = false;
      }
    };
  },
  components: {
    LoadingScreen,
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

body {
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
}
</style>
