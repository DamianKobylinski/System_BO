<template>
  <div class="footer-wrapper">
    <div class="social-div">
      <a href="https://www.instagram.com/botakmam.pl/" target="_blank">
        <img
          src="../assets/img/instagram.svg"
          alt="instagram"
        >
      </a>
      <a href="https://www.facebook.com/pages/category/Community/Botakmampl-104320105144827/" target="_blank">
        <img
          src="../assets/img/facebook.svg"
          alt="facebook"
        >
      </a>
      <a href="https://www.youtube.com/channel/UCm2N2HDcxnbqwjG96Fr93Ig" target="_blank">
        <img
          src="../assets/img/youtube.svg"
          alt="youtube"
        >
      </a>
      <a href="https://www.tiktok.com/@botakmam" target="_blank">
        <img
          src="../assets/img/tik-tok.svg"
          alt="tiktok"
        >
      </a>
    </div>
    <img
      src="../assets/img/logo.svg"
      alt="logo"
      class="footer-logo"
    >
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
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 20px 0;
    position: relative;
    .footer-logo {
      width: 37px;
      height: 47px;
      padding: 5px;

    }
    p {
      color: #fff;
      text-align: center;
      font-weight: 200;
    }
    .copyrights {
      z-index: 1;
      padding: 0 5px;
     }
    .social-div {
      width: 75%;
      height: 25px;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      z-index: 1;
      margin-bottom: 20px;
       a {
        z-index: 1;
        height: 100%;
        margin: 20px 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        @include tablet {
            margin: 0 15px;
          }
          @include mobile {
            margin: 0 15px;
          }
        img {
          margin-top: 20px;
          height: 25px;
          width: 25px;
        }
      }
  }
      .triangle-parent{
        z-index: 0;
        width: 100%;
        position: absolute;
        .triangle {
          width: 0;
          height: 0;
          border-bottom: 1000px solid $red;
          border-left: 1000px solid transparent;
          position: relative;
          float: right;
          transform: translateY(100px);
        }
      }
  }
</style>
