<template>
    <div class="idea-wrapper">
        <div class="icon-wrapper">
            <fa class="idea-icon" :icon="icon" />
        </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
  name: 'Idea',
  props: {
    icon: {
      type: String,
      default: 'user',
    },
    message: {
      type: String,
      default: 'Nie udało się wczytać opisu :(',
    },
  },
};
</script>

<style lang="scss" scoped>
.idea-wrapper {
    margin-bottom: 20px;
    margin-left: 3%;
    margin-right: 3%;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    text-align: left;
    @include tablet {
      margin-bottom: 50px;
    }
    @include mobile {
      margin-bottom: 70px;
    }
    .icon-wrapper {
      position: relative;
      padding: 40px 50px;
      .idea-icon {
        color: white;
        font-size: 40px;
        @include mobile {
          font-size: 38px;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 3px;
        height: 100%;
        background: $red;
        right: 0;
        top: 0;
        position: absolute;
      }
    }
    p {
      width: 45%;
      color: white;
      padding: 0 30px;
      font-size: 1rem;
      @include tablet {
        width: 80%;
        font-size: .9rem;
      }
      @include mobile {
        font-size: .8rem;
        width: 100%;
      }
    }
  }
  .idea-wrapper:nth-child(2) {
    flex-direction: row-reverse;
    justify-content: right;
    text-align: right;
    .icon-wrapper {
      &::after {
        left: 0;
      }
    }
  }
</style>
