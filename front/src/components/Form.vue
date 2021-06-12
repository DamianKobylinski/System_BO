<template>
  <div class="form-wrapper">
    <form>
      <div class="data-inputs">
        <input
          type="text"
          placeholder="e-mail"
          class="email"
        >
        <input
          type="text"
          placeholder="imie i nazwisko"
          class="name"
        >
      </div>
      <input type="submit">
    </form>
  </div>
</template>

<script>

export default {
  name: 'Form',
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
            border-bottom: 2px solid #000;
            text-align: center;
            color: #000;
            font-weight: 500;
            padding: 5px 0;
            font-size: 15px;
            margin: 20px 0;
            &:focus{
              outline: none;
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
}
</style>
