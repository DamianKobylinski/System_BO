<template>
  <div id="app">
    <!-- Landing Page Section -->
    <section id="landing-page">
      <img
        class="logo"
        src="@/assets/img/logo.svg"
        alt=""
      >
      <h1><span>Bo</span>takmam</h1>
      <h2>Kooperacja</h2>
      <h2>Perspektywa</h2>
      <h2>Gratyfikacja</h2>
      <img
        class="woman"
        src="@/assets/img/woman.svg"
        alt=""
      >
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
/* Initial styles */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
/* App */
#app {
  #landing-page{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    &::before{
        background: $bg-black;
        overflow: hidden;
        content: "";
        position: absolute;
        background-image: url(./assets/img/red-background.svg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        z-index: -1;
        transform: scale(1.1);
    }
  }
}
</style>
