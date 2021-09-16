<template>
  <div class="form-wrapper">
    <form
        @submit="postData"
    >
      <div class="data-inputs">
        <input
          id="emailFormNewsletter"
          v-model="inputValues.email"
          type="email"
          placeholder="e-mail"
          class="email"
          maxlength="50"
          @change="valueChanged"
          required
        >
        <input
          id="nameFormNewsletter"
          v-model="inputValues.name"
          type="text"
          placeholder="imie i nazwisko"
          class="name"
          maxlength="60"
          @change="valueChanged"
          required
        >
      </div>
      <input
        id="submitNewsletter"
        type="submit"
        class="submit-button"
        content="Wyślij"
        :value="sumbitValue"
      >
      <p class="errorInfo">{{ errorValue }}</p>
    </form>
  </div>
</template>

<script>
const API = 'https://system-bo.vercel.app/';

export default {
  name: 'InitialForm',
  data() {
    return {
      inputValues: {
        email: '',
        name: '',
      },
      sumbitValue: 'Dołącz!',
      errorValue: '',
    };
  },
  mounted() {
    if (this.$cookies.isKey('email')) {
      this.inputValues.email = this.$cookies.get('email');
      this.sumbitValue = 'Dokończ';
    }
    if (this.$cookies.isKey('name')) {
      this.inputValues.name = this.$cookies.get('name');
    }
  },
  methods: {
    async postData(e) {
      e.preventDefault();
      await this.axios.post(API, this.inputValues)
        .then(() => {
          this.$store.state.isInDatabase = true;
          this.$router.push('/form');
        })
        .catch((error) => {
          this.errorValue = error.message;
        });
    },
    valueChanged() {
      this.sumbitValue = 'Wyślij';
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper{
    width: 80vw;
    background-color: white;
    //box-shadow: 0px 4px 25px 6px #000000;
    border-radius: 130px;
    margin: 0 auto;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include tablet{
      border-radius: 110px;
    }
    @include mobile{
      border-radius: 80px;
    }
    .data-inputs{
        width: 90vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        @include mobile{
          flex-direction: column;
        }
        @include tablet{
          flex-direction: column;
        }
        input{
            width: 30%;
            border: none;
            border-bottom: 2px solid $bg-black;
            text-align: center;
            color: $bg-black;
            font-weight: 500;
            padding: 5px 0;
            font-size: 17px;
            margin: 20px 0;
            transition: all ease-in 0.5s;
            &:focus{
              outline: none;
              border-bottom: 2px solid $red;
            }
            &::placeholder{
              color: #9f9f9f;
            }
            @include mobile{
              width: 70%;
            }
            @include tablet{
              width: 60%;
            }
        }
    }
    .submit-button{
      display: flex;
      align-content: center;
      justify-content: center;
      margin: 20px auto;
      border: none;
      background-color: $red;
      width: 170px;
      height: 45px;
      border-radius: 70px;
      color: white;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 17px;
      cursor: pointer;
      transition: all 0.3s ease-in;
      &:hover{
        background-color: $red-darker;
      }
      @include mobile{
        cursor: auto;
      }
      @include tablet{
        cursor: auto;
      }
    }
}
.errorInfo {
  font-size: 0.7rem;
  color: $red;
  width: 100%;
  text-align: center;
  @include mobile {
    font-size: 0.5rem;
  }
}
</style>
