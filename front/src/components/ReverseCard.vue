<template>
    <div class="reverse-card-wrapper">
        <div class="front">
            <fa class="icon" icon="user" />
            <p>Minimum formalności</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ReverseCard.vue',
};
</script>

<style lang="scss" scoped>
.reverse-card-wrapper {
    width: 250px;
    height: 350px;
    background-color: #252525;
    box-shadow: 0px 6px 8px 5px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    @media screen and (max-width: 776px) {
      width: 70vw;
      height: 300px;
    }
    .front {
        .icon {
            font-size: 50px;
            margin-bottom: 30px;
            @include tablet {
                margin-bottom: 15px;
            }
        }
        p {
            font-weight: 500;
            font-size: 2rem;
            padding: 0 10px;
        }
    }
}
</style>
