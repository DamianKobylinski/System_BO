<template>
    <div class="short-answer-wrapper">
      <fa class="icon" :icon="iconName" />
      <h1>{{ headerContent }}</h1>
      <p>{{ textContent }}</p>
    </div>
</template>

<script>
export default {
  name: 'ShortAnswer',
  props: {
    iconName: {
      type: String,
      default: 'user',
    },
    headerContent: {
      type: String,
      default: 'Header',
    },
    textContent: {
      type: String,
      default: 'Text',
    },
  },
};
</script>

<style lang="scss" scoped>
.short-answer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color:#000;
  margin-top: 110px;
  .icon {
    color: $red;
    font-size: 28px;
  }
  h1 {
    font-size: 28px;
    margin-top: 30px;
    font-weight: 600;
    padding: 0 10px;
    @include mobile {
      font-size: 1.4rem;
    }
  }
  p {
    font-size: 1rem;
    margin-top: 25px;
    width: 50%;
    font-weight: 400;
    @include tablet {
      width: 85%;
    }
    @include mobile {
      width: 90%;
      font-size: 0.8rem;
    }
  }
}
</style>
