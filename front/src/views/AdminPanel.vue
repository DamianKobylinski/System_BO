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
        <p v-on:click="logoutFromAdmin">Log out</p>
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
      <div id="adminTableView">
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Date</th>
            <th>Dlaczego chcesz przystąpić do naszego projektu?</th>
            <th>Jakie są twoje umiejętności i możliwości?</th>
            <th>Jakie pomysły chciałbyś zrealizować dołączając do naszego zespołu?</th>
            <th>Dlaczego powinniśmy wybrać właśnie ciebie?</th>
            <th>Czy potrafisz programować? Jeżeli tak, to w jakim/jakich językach?</th>
            <th>Czy potrafisz administrować bazami danych? Czy posiadasz w tej kwestii doświadczenie?</th>
            <th>Jeśli temat kryptowalut nie jest Ci obcy, opowiedz nam proszę w jakich obszarach działasz.</th>
          </tr>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.engage_date }}</td>
            <td>{{ user.dlaczego_chcesz_przystapic_do_naszego_projektu }}</td>
            <td>{{ user.jakie_sa_twoje_umiejetnosci_i_mozliwosci }}</td>
            <td>{{ user.jakie_pomysly_chcialbys_zrealizowac }}</td>
            <td>{{ user.dlaczego_powinnismy_wybrac_wlasnie_ciebie }}</td>
            <td>{{ user.czy_potrafisz_programowac }}</td>
            <td>{{ user.czy_potrafisz_administrowac_bazami_danych }}</td>
            <td>{{ user.temat_kryptowalut }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>

import axios from 'axios';

const API = 'https://www.botakmam.pl/admin-panel';

export default {
  name: 'AdminPanel',
  data() {
    return {
      adminPanelData: {
        username: '',
        email: '',
        isCheck: false,
      },
      users: [],
    };
  },
  methods: {
    async takePeopleFromNewsletter() {
      this.adminPanelData.isCheck = false;
      await axios
        .post(API, this.adminPanelData)
        .then((result) => {
          this.users = result.data.users;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async checkForSubmit() {
      this.adminPanelData.isCheck = true;
      await axios
        .post(API, this.adminPanelData)
        .then((result) => {
          this.users = result.data.users;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async logoutFromAdmin() {
      this.$store.state.isAdminSuccessLogin = false;
      await this.$router.push('/admin-login');
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

table {
  table-layout: fixed;
  width: 300%;
  border: 5px solid $bg-black;
  border-collapse: collapse;
}

tr {
  text-align: center;
  flex: 0 0 auto;

  & th, td {
    border: 5px solid $bg-black;
    padding: 15px 10px;
  }
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
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 20px;
    flex-direction: column;
    height: 80vh;
    overflow-y: auto;
  }

}

</style>
