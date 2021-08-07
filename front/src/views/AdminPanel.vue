<template>
  <div id="admin-panel-wrapper">
    <menu>
      <div id="logoDiv">
        <img
          class="logo"
          src="@/assets/img/logo.svg"
          alt=""
        >
        <p>Admin<span class="redTextColor">Panel</span></p>
      </div>
      <ul>
        <li v-on:click="takePeopleFromNewsletter">Newsletter</li>
      </ul>
      <div id="logout">
        <p>Log out</p>
      </div>
    </menu>
    <section>
      <form
        @submit.prevent="checkForSubmit"
      >
        <input
          id="usernameCheck"
          v-model="adminPanelData.username"
          type="text"
          class="usernameCheck"
          name="usernameCheck"
          placeholder="Username"
        >
        <input
          id="emailCheck"
          v-model="adminPanelData.email"
          type="text"
          name="emailCheck"
          class="emailCheck"
          placeholder="Email"
        >
        <input
          id="submitCheck"
          type="submit"
          class="submit"
          value="Search"
        >
      </form>
      <div id="adminTableView"></div>
    </section>
  </div>
</template>

<script>

import axios from 'axios';

const API = 'http://localhost:2000/admin-panel';

export default {
  name: 'AdminPanel',
  data() {
    return {
      adminPanelData: {
        username: '',
        email: '',
      },
      users: [],
    };
  },
  methods: {
    async takePeopleFromNewsletter() {
      await axios
        .post(API)
        .then((result) => {
          console.log(result.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

#admin-panel-wrapper {
  display: flex;
  flex-direction: row;
}

.redTextColor {
  color: $red;
}

menu {
  height: 100vh;
  background-color: $grey-admin;

  & #logoDiv {
    display: flex;
    flex-direction: row;
    width: 275px;

    & .logo {
      width: 100px;
    }

    & p {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
    }
  }

  & ul {
    margin-top: 100px;
    text-align: center;

    & li {
      cursor: pointer;
    }
    & li:hover {
      color: #fff;
    }
  }

  & #logout {
    position: absolute;
    bottom: 0;
    width: 275px;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
  }
}

section {
  width: 100%;

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    & input {
      width: 400px;
      margin: 10px;
      padding: 5px;
      text-align: center;
      border-radius: 1em;
      border-color: $red;
      outline: none;
    }

    & input[type=submit] {
      width: 150px;
      padding: 15px 5px;
      border: none;
      border-radius: 1em;
      background-color: $red;
      color: #fff;
      font-size: 18px;
      font-style: italic;
      letter-spacing: 3px;
    }
  }
  & #adminTableView {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
}

</style>
