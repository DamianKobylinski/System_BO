<template>
  <div class="thankyou-wrapper">
    <h1><span style="color: #D92818">Dziękujemy</span> za zainteresowanie</h1>
    <p>Skontatkujemy się z państwem drogą mailową, w razie nawiązania kontaktu.</p>
    <button class="submit-button" v-on:click="redirectToNewsletterView()">Przejdź do strony głównej</button>
  </div>
</template>

<script>

export default {
  name: 'ThankYou',
  methods: {
    async redirectToNewsletterView() {
      this.$store.state.isFormSent = false;
      await this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.thankyou-wrapper {
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  & h1 {
    margin: 10px 0;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    @include mobile {
      font-size: 30px;
    }
  }
  & p {
    margin: 20px 10px;
    text-align: center;
    font-size: 20px;
    @include mobile {
      font-size: 15px;
    }
  }
}
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 20px auto;
  width: 190px;
  height: 70px;
  border: none;
  background-color: $red;
  border-radius: 24px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.35);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    @include tablet {
      cursor: auto;
    }
    @include mobile {
      cursor: auto;
    }
  }
}
</style>
