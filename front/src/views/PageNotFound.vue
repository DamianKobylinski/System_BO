<template>
    <div class="not-found-wrapper">
        <h1>4<span>0</span>4</h1>
        <h2>Uups</h2>
        <p>Wygląda na to, że strona której szukasz nie istnieje.</p>
        <img
         class="logo"
         src="@/assets/img/logo.svg"
         alt="Bo logo"
        >
    </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style lang="scss" scoped>
.not-found-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: $bg-black;
    background-color: #fff;
    flex-direction: column;
    font-weight: 700;
    img {
        margin-top: 20px;
        width: 50px;
        height: 50px;
    }
    h1 {
        color: $red;
        font-size: 9rem;
        span {
            color: $bg-black;
        }
    }
    h2 {
        font-size: 3rem;
        color: $red;
    }
    p {
        font-size: 1rem;
        text-align: center;
        width: 50%;
        margin-top: 20px;
    }
}
</style>
