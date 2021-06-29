<template>
  <div class="form-wrapper">
    <form
      method="POST"
      @submit="postData"
    >
      <div class="data-inputs">
        <input
          v-model="inputValues.email"
          type="text"
          placeholder="e-mail"
          class="email"
        >
        <input
          v-model="inputValues.name"
          type="text"
          placeholder="imie i nazwisko"
          class="name"
        >
      </div>
      <button
        type="submit"
        class="submit-button"
      >
        <div v-show="!isLoading">Wyślij</div>
        <i
          v-show="isLoading"
          class="lds-dual-ring"
        />
      </button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const API = 'localhost:2000/';

export default {
  name: 'Form',
  data() {
    return {
      inputValues: {
        email: '',
        name: '',
      },
      isLoading: false,
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();
      this.isLoading = true;
      // console.log(this.inputValues);
      this.axios.post(API, this.inputValues)
        .then((result) => {
          console.log(result);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
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
    height: 340px;
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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
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
    .lds-dual-ring {
        display: inline-block;
      }
      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.5s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
}
</style>
