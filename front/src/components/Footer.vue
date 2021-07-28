<template>
  <div class="footer-wrapper">
    <div class="logo-div">
      <img
        src="../assets/img/logo.svg"
        alt="logo"
        class="footer-logo"
      >
    </div>
    <div class="social-div">
      <a href="#">
        <img
          src="../assets/img/instagram.svg"
          alt="insagram"
        >
      </a>
      <a href="#">
        <img
          src="../assets/img/facebook.svg"
          alt="facebook"
        >
      </a>
      <a href="#">
        <img
          src="../assets/img/youtube.svg"
          alt="youtube"
        >
      </a>
    </div>
    <div class="copyrights">
      <p>Polityka prywatności</p>
      <p>&#169; 2021&nbsp;botakmam.pl. All&nbsp;rights&nbsp;reserved</p>
    </div>
          <div class="triangle-parent">
      <div class="triangle" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    background: $bg-black;
    width: 100vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .footer-logo {
      width: 87px;
      height: 127px
    }
    p {
      color: #fff;
      text-align: center;
    }
    .copyrights {
      margin-top: 50px;
      z-index: 1;
      padding: 0 10px 10px 10px;
      margin: 30px 10px 0 0;
     }
    .social-div {
      width: 75%;
      height: 50px;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      z-index: 1;
       a {
        z-index: 1;
        width: 50px;
        height: 100%;
        margin: 0 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @include tablet {
            margin: 0 25px;
          }
          @include large-tablet {
            margin: 0 50px;
          }
          @include mobile {
            margin: 0 15px;
          }
        img {
          height: 50px;
          width: 50px;
        }
      }
  }
      .triangle-parent{
        z-index: 0;
        width: 100%;
        .triangle {
        width: 0;
        height: 0;
        border-bottom: 1000px solid $red;
        border-left: 1000px solid transparent;
        position: relative;
        float: right;
        bottom: 150px;
        @include large-tablet {
          bottom: 100px;
          }
       @include tablet {
          bottom: 75px;
          }
       @include mobile {
          bottom: 50px;
          }
        }
      }
  }
</style>
