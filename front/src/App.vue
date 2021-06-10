<template>
  <div id="app">
    <!-- Landing Page Section -->
    <section id="landing">
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
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
}
/* App */
#app {
  #landing{
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
  h1{
        color:white;
        font-size: 100px;
        margin-left: 5%;
        top: 300px;
        font-weight: 700;
        margin-bottom: 20px;
        span {
            color: $red;
        }
        @include tablet{
            font-size: 70px;
            transform: translateY(-50px);
            margin-bottom: 30px;
        }
        @include mobile{
            font-size: 50px;
            transform: translateY(-50px);
        }
    }
    h2{
        color:white;
        font-style: italic;
        font-weight: 400;
        font-size: 50px;
        margin-left: 5%;
        margin-top: 3px;
        @include tablet{
            font-size: 35px;
            transform: translateY(-50px);
        }
        @include mobile{
            font-size: 25px;
            transform: translateY(-50px);
        }
    }
    .logo{
        width: 200px;
        height: 200px;
        z-index: 1;
        margin-left: 5%;
        margin-bottom: 20px;
        transform: translateX(-30px);
        @include tablet{
            width: 100px;
            height: 100px;
            transform: translateX(-10px);
            margin-bottom: 70px;
        }
    }
    .woman{
        width: 35vw;
        height: auto;
        position: absolute;
        bottom: -20px;
        right: 0;
        object-fit: cover;
        @include large-tablet{
            display: none;
        }
    }
}
</style>
