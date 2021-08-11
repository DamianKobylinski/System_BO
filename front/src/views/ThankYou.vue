<template>
  <div class="thankyou-wrapper">
    <main>
      <h1><span style="color: #D92818">Dziękujemy</span> za <br>zainteresowanie</h1>
      <p>Skontatkujemy się z państwem drogą mailową, w razie nawiązania kontaktu.</p>
      <button class="submit-button" v-on:click="redirectToNewsletterView()">Przejdź do strony głównej</button>
    </main>
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
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  & main
  {
    border-radius: 44px;
    background-color: #fff;
    width: 50%;
    & h1 {
      margin: 30px 0;
      text-align: center;
      font-size: 64px;
      font-weight: bold;
      font-style: italic;
    }
    & p {
      margin: 30px 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      font-style: italic;
    }
  }
}
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 50px auto;
  width: 190px;
  height: 70px;
  border: none;
  background-color: $red;
  border-radius: 24px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.35);
  font-size: 1.2rem;
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
