<template>
    <div class="reverse-card-wrapper">
        <div class="card">
            <div class="front">
                <div class="front-content">
                    <fa class="icon" :icon="iconName" />
                    <p>{{ frontHeaderContent }}</p>
                </div>
            </div>
            <div class="back">
                <div class="back-content">
                    <p>{{ textContent }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ReverseCard.vue',
  props: {
    iconName: {
      type: String,
      default: 'user',
    },
    frontHeaderContent: {
      type: String,
      default: 'Header Text',
    },
    textContent: {
      type: String,
      default: 'There should be text',
    },
  },
};
</script>

<style lang="scss" scoped>
.reverse-card-wrapper {
    width: 180px;
    height: 230px;
    background-color: #252525;
    box-shadow: 0px 6px 8px 5px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    color: white;
    position: relative;
    @media screen and (max-width: 500px) {
      width: 60vw;
      height: 150px;
    }
    .card:hover {
        transform: rotateY(180deg);
    }
    .card {
        transition: all 0.5s ease;
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        background-color: #252525;
        border-radius: 30px;
        .front {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-color: #252525;
            border-radius: 30px;
            .front-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .icon {
                    font-size: 40px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
        .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-color: #252525;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            transform: rotateY(180deg);
            p {
                font-weight: 400;
                padding: 12px;
            }
        }
    }
}
</style>
