<template>
  <div class="form-wrapper">
    <div
      class="question-wrapper"
      v-for="question in mainQuestions"
      :key="question.id">
      <div class="header-wrapper">
        <div class="circle"></div>
        <h1>Pytanie <span>{{ question.id }}</span></h1>
      </div>
      <p>{{ question.questionValue }}</p>
      <textarea
        type="text"
        class="answer-input"
        v-model="answers[question.name]"
        @input="resize($event)"
      />
    </div>
    <p class="additional-questions-text">Pytania dodatkowe</p>
    <button
      class="additional-question"
      @click="toggleAdditionalQuestions()"
    >
      <fa
        icon="chevron-down"
        class="icon"
        :class="showAdditionalQuestions ? 'active' : ''"
      />
    </button>
    <div
      class="question-wrapper"
      v-show="showAdditionalQuestions"
      v-for="question in additionalQuestions"
      :key="question.id">
      <div class="header-wrapper">
        <div class="circle"></div>
        <h1>Pytanie <span>{{ question.id }}</span></h1>
      </div>
      <p>{{ question.questionValue }}</p>
      <textarea
        type="text"
        class="answer-input"
        v-model="answers[question.name]"
        @input="resize($event)"
      />
    </div>
    <div id="RODOSection">
      <input
        type="checkbox"
        id="checkRODO"
        name="checkRODO"
        value="rodo"
        v-model="rodoCheck"
        required
      />
      <p>
        Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w rozumieniu
        ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną (Dz.U.2017.1219 t.j.) <span
        style="color: red;">*</span>
      </p>
    </div>
      <p id="warningSection"> {{ messageToAcceptGuildlines }} </p>
    <form
      @submit="submitForm"
    >
      <input
        type="submit"
        class="submit-button"
        value="Gotowe"
      />
    </form>
  </div>
</template>

<script>
const API = 'https://system-bo.vercel.app/form';

export default {
  name: 'Form',
  data() {
    return {
      messageToAcceptGuildlines: '',
      rodoCheck: [],
      mainQuestions: [
        {
          id: 1,
          name: 'whyJoin',
          questionValue: 'Dlaczego chcesz przystąpić do naszego projektu?',
        },
        {
          id: 2,
          name: 'skills',
          questionValue: 'Jakie są twoje umiejętności i możliwości?',
        },
        {
          id: 3,
          name: 'ideas',
          questionValue: 'Jakie pomysły chciałbyś zrealizować dołączając do naszego zespołu?',
        },
        {
          id: 4,
          name: 'whyYou',
          questionValue: 'Dlaczego powinniśmy wybrać właśnie ciebie?',
        },
      ],
      additionalQuestions: [
        {
          id: 5,
          name: 'programmingSkills',
          questionValue: 'Czy potrafisz programować? Jeżeli tak, to w jakim/jakich językach?',
        },
        {
          id: 6,
          name: 'databasesSkills',
          questionValue: 'Czy potrafisz administrować bazami danych? Czy posiadasz w tej kwestii doświadczenie?',
        },
        {
          id: 7,
          name: 'cryptoKnowledge',
          questionValue: 'Jeśli temat kryptowalut nie jest Ci obcy, opowiedz nam proszę w jakich obszarach działasz.',
        },
      ],
      showAdditionalQuestions: false,
      answers: {
        whyJoin: '',
        skills: '',
        ideas: '',
        whyYou: '',
        programmingSkills: '',
        databasesSkills: '',
        cryptoKnowledge: '',
      },
    };
  },
  methods: {
    resize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    toggleAdditionalQuestions() {
      this.showAdditionalQuestions = !this.showAdditionalQuestions;
      // console.log(this.rodoCheck);
    },
    async submitForm() {
      if (this.rodoCheck.length <= 0) {
        this.messageToAcceptGuildlines = 'Musisz zaakceptować regulamin RODO.';
      } else {
        this.messageToAcceptGuildlines = '';
        await this.axios.post(API, this.answers)
          .then(() => {
            this.$store.state.isFormSent = true;
            this.$router.push('/thankyou');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
  transition: 0.5s ease all;
  @include tablet {
    width: 95%;
    border-radius: 90px;
  }

  .question-wrapper {
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 50px 10vw;

    .header-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 40px;

      .circle {
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: $red;
        z-index: -1;
        left: -15px;
        @include mobile {
          width: 50px;
          height: 50px;
        }
      }

      h1 {
        font-weight: 600;
        font-size: 28px;
        @include mobile {
          font-size: 20px;
        }

        span {
          color: $red;
        }
      }
    }

    p {
      font-weight: 400;
      font-size: 1.2rem;
      position: relative;
      margin-bottom: 50px;
      color: $bg-black;
      @include tablet {
        font-size: 1rem;
      }
      @include mobile {
        font-size: 0.9rem;
      }

      &::before {
        content: "";
        height: 120%;
        width: 5px;
        background-color: $red;
        position: absolute;
        left: -15px;
      }
    }

    .answer-input {
      border-radius: 15px;
      min-height: 90px;
      padding: 15px;
      box-sizing: border-box;
      border: 2px solid #838383;
      font-size: 1rem;
      resize: none;
      overflow: hidden;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  .additional-questions-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 15px 0;
    position: relative;
    font-size: 20px;
    font-weight: 500;

    &::after {
      content: "";
      top: 0;
      width: 5vw;
      height: 2px;
      background-color: $bg-black;
      position: absolute;
    }
  }

  .additional-question {
    margin: 0 auto;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: .4s all ease;

    .icon {
      font-size: 30px;
      transition: .4s all ease;
    }

    .active {
      transform: rotate(180deg);
    }

    &:hover {
      cursor: pointer;
      background-color: $red;
      color: white;
      border-color: white;
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
      @include mobile {
        cursor: auto;
      }
      @include tablet {
        cursor: auto;
      }
    }
  }

  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 50px auto;
    width: 160px;
    height: 60px;
    border: none;
    background-color: $red;
    border-radius: 24px;
    box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.35);
    font-size: 1.1rem;
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
}

#RODOSection {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 50px auto;
  font-size: 0.8rem;
  width: 80%;

  & input {
    margin-right: 30px;
  }
}
#warningSection {
  text-align: center;
  color: $red;
}
</style>
