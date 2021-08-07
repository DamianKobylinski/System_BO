<template>
    <div id="admin-panel-wrapper">
      <main>
        <div id="logoDiv">
          <img
            class="logo"
            src="@/assets/img/logo.svg"
            alt=""
          >
          <p>Admin<span>Panel</span></p>
        </div>
        <ul>
          <li>Newsletter</li>
        </ul>
        <p>Log out</p>
      </main>
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
          >
          <input
            id="emailCheck"
            v-model="adminPanelData.email"
            type="text"
            name="emailCheck"
            class="emailCheck"
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
export default {
  name: 'AdminPanel',
  data() {
    return {
      adminPanelData: {
        username: '',
        email: '',
      },
    };
  },
};
</script>
