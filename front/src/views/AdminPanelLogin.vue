<template>
  <div id="admin-panel-login-wrapper">
    <div class="triangle triangle-top"></div>
    <div class="login-wrapper">
      <img
        class="logo"
        src="@/assets/img/logo.svg"
        alt=""
      >
      <form
        @submit.prevent="handleFormSubmit"
      >
        <input
          id="adminPanelLogin"
          v-model="adminPanelLoginValues.login"
          type="text"
          class="login"
          name="login"
          placeholder="login"
        >
        <input
          id="adminPanelPassword"
          v-model="adminPanelLoginValues.password"
          type="password"
          name="password"
          class="password"
          placeholder="password"
        >
        <input
          id="adminPanelSubmit"
          type="submit"
          class="submit"
          value="Log in"
        >
      </form>
    </div>
    <div class="triangle triangle-bottom"></div>
  </div>
</template>

<script>
import axios from 'axios';

const API = 'https://www.botakmam.pl/admin-login';

export default {
  name: 'AdminPanelLogin',
  data() {
    return {
      adminPanelLoginValues: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    async handleFormSubmit() {
      await axios
        .post(API, this.adminPanelLoginValues)
        .then((result) => {
          if (result.data.success === true) {
            this.$store.state.isAdminSuccessLogin = true;
            this.$router.push('/admin-panel');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#admin-panel-login-wrapper {
  height: 100%;
}

.triangle {
  width: 0;
  height: 0;
}

.triangle-top {
  border-top: 100px solid $red;
  border-right: 100px solid transparent;
  position: absolute;
  left: 0;
  top: 0;
}

.triangle-bottom {
  border-bottom: 100px solid $red;
  border-left: 100px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;

  .logo {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
    @include mobile {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-height: 380px) {
      width: 100px;
      height: 100px;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input[type=text], input[type=password] {
      margin-top: 30px;
      border: none;
      border-bottom: 2px solid $bg-black;
      text-align: center;
      color: $bg-black;
      font-weight: 500;
      padding: 5px 0;
      font-size: 15px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #9f9f9f;
      }
    }

    input[type=submit] {
      border: none;
      background-color: $red;
      color: white;
      font-weight: 700;
      font-size: 17px;
      cursor: pointer;
      border-radius: 15px;
      width: 170px;
      height: 40px;
      margin-top: 20px;
    }
  }
}
</style>
