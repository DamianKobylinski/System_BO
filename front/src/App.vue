<template>
  <router-view/>
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
</style>
