<template>
  <div class="form-wrapper">
    <form
        @submit="postData"
    >
      <div class="data-inputs">
        <input
          id="emailFormNewsletter"
          v-model="inputValues.email"
          type="text"
          placeholder="e-mail"
          class="email"
          maxlength="50"
        >
        <input
          id="nameFormNewsletter"
          v-model="inputValues.name"
          type="text"
          placeholder="imie i nazwisko"
          class="name"
          maxlength="60"
        >
      </div>
      <input
        id="submitNewsletter"
        type="submit"
        class="submit-button"
        content="Wyślij"
        value="Wyślij"
      >
    </form>
  </div>
</template>

<script>
const API = 'http://localhost:2000';

export default {
  name: 'Form',
  data() {
    return {
      inputValues: {
        email: '',
        name: '',
      },
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();
      this.axios.post(API, this.inputValues)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error + this.inputValues.email + this.inputValues.name);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper{
    width: 90vw;
    background-color: white;
    box-shadow: 0px 4px 25px 6px #000000;
    border-radius: 130px;
    margin: 0 auto;
    height: 300px;
    transform: translateY(-100px);
    display: flex;
    align-items: center;
    justify-content: center;
    @include tablet{
      border-radius: 110px;
    }
    @include mobile{
      border-radius: 80px;
    }
    @media screen and (max-height: 360px) {
      transform: translateY(-50px);
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
      margin: 0 auto;
      margin-top: 38px;
      border: none;
      background-color: $red;
      width: 170px;
      height: 45px;
      border-radius: 70px;
      color: white;
      font-weight: 700;
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
</style>
