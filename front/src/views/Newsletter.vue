<template>
  <div id="newsletter-wrapper">
    <!-- Landing Page Section -->
    <section id="landing">
      <img
        class="logo"
        src="@/assets/img/logo.svg"
        alt=""
      >
      <h1><span>Bo</span>takmam</h1>
      <h2>Kooperacja</h2>
      <h2>Perspektywa</h2>
      <h2>Gratyfikacja</h2>
      <img
        class="woman"
        src="@/assets/img/woman.png"
        alt=""
      >
    </section>
    <!-- About Us Section -->
    <section id="about-us">
      <h3>
        Botakmam to grupa osób współdziałających ze sobą przy organizacji i realizacji
        wieloletniego projektu dla przedsiębiorców i osób indywidualnych
      </h3>
      <div class="main-title">
        <h1>Tworzymy <span>nowe</span> możliwości!</h1>
        <div class="circle"/>
      </div>
      <ol>
        <li>
          Zamknięta grupa osób/firm wdrażająca wieloletni PROJEKT*,
          gdzie Wszyscy działają na zasadzie wspólnego zaufania i porozumienia.
        </li>
        <li>
          W ramach grupy, każdy z współuczestników realizuje i odpowiada za przypisaną
          mu część w projekcie. Każdy może zgłaszać nowe, świeże pomysły,
          mając w ten sposób wpływ na szybszą i lepszą realizację
          projektu i rozwój całego projektu Botakmam.pl
        </li>
        <li>
          Współpraca odbywa się w ramach B2B. Wynagrodzenie za wkład pracy realizowane jest po
          każdym zakończonym etapie projektu w postaci ustalonego z góry sposobu wynagrodzenia.
        </li>
        <li>
          Kooperatywa nie oznacza Wszyscy po równo. Procent wynagrodzenia zależy od rodzaju pracy,
          wkładu pracy, zaangażowania czasu,
          wiedzy itp. według ustalonych i podpisywanych umów z każdym z Uczestników indywidualnie.
        </li>
      </ol>
    </section>
    <!-- Newsletter Section -->
    <section id="newsletter">
      <div class="register-info-wrapper">
        <div class="register-info">
          <h1>Zainteresowany?</h1>
          <h2>Poznaj nasz projekt</h2>
          <h3>
            Dokonaj rejestracji <br>
            Wypełnij formularz otrzymasz więcej informacji
          </h3>
          <div class="circle"/>
        </div>
        <InitialForm/>
      </div>
    </section>
    <Footer/>
    <div id="cookie-law" ref="cookie-law">
      <p>
        Strona wykorzystuje pliki cookie 🍪
      </p>
      <button v-on:click="acceptCookie()"><span>Akceptuje</span></button>
    </div>
  </div>
</template>

<script>
import InitialForm from '@/components/InitialForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    InitialForm,
    Footer,
  },
  mounted() {
    if (localStorage.getItem('cookiesAccept')) {
      this.$refs['cookie-law'].style.display = 'none';
    }
  },
  methods: {
    async acceptCookie() {
      this.$refs['cookie-law'].style.display = 'none';
      localStorage.setItem('cookiesAccept', 'true');
    },
  },
};
</script>

<style lang="scss">
/* Initial styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
}

/* App */
#newsletter-wrapper {
  // Landing Section
  #landing {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    &::before {
      background: $bg-black;
      overflow: hidden;
      content: "";
      position: absolute;
      background-image: url(../assets/img/red-background.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      z-index: -1;
      transform: scale(1.1);
    }

    h1 {
      color: white;
      font-size: 70px;
      margin-left: 5%;
      font-weight: 700;
      margin-bottom: 1vh;

      span {
        color: $red;
      }

      @include tablet {
        font-size: 45px;
        margin-bottom: 1vh;
      }
      @include mobile {
        font-size: 35px;
        margin-bottom: 1vh;
      }
      @media screen and (max-height: 380px) {
        font-size: 25px;
      }
    }

    h2 {
      color: white;
      font-style: italic;
      font-weight: 400;
      font-size: 25px;
      margin-left: 5%;
      margin-top: 3px;
      @include tablet {
        font-size: 20px;
      }
      @include mobile {
        font-size: 18px;
      }
      @media screen and (max-height: 380px) {
        font-size: 18px;
      }
    }

    .logo {
      width: 200px;
      height: 200px;
      z-index: 1;
      margin-left: 5%;
      margin-top: 2vh;
      margin-bottom: 20px;
      transform: translateX(-30px);
      @include tablet {
        width: 100px;
        height: 100px;
        transform: translateX(-10px);
        margin-bottom: 2.5vh;
      }
      @media screen and (max-height: 380px) {
        width: 100px;
        height: 100px;
      }
    }

    .woman {
      width: 35vw;
      height: auto;
      position: absolute;
      bottom: -20px;
      right: 0;
      object-fit: cover;
      @include large-tablet {
        display: none;
      }
    }
  }

  // About us section
  #about-us {
    width: 100vw;
    overflow: hidden;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 70%;
      font-weight: 400;
      font-style: italic;
      font-size: 20px;
      margin: 100px auto;
      @include tablet {
        font-size: 18px;
        margin: 60px auto;
      }
      @include mobile {
        font-size: 16px;
        margin: 60px auto;
      }
    }

    .main-title {
      width: 100%;
      position: relative;
      margin: 40px auto;
      text-align: center;

      h1 {
        font-weight: 700;
        font-size: 34px;
        @include tablet {
          font-size: 50px;
          margin: 20px auto;
        }
        @include mobile {
          font-size: 20px;
          margin: 20px auto;
        }

      }

      .circle {
        width: 168px;
        height: 168px;
        border-radius: 50%;
        background-color: $red;
        position: absolute;
        z-index: -1;
        left: 20%;
        top: -40px;
        @include tablet {
          width: 100px;
          height: 100px;
          top: -20px;
        }
        @include mobile {
          width: 50px;
          height: 50px;
          top: 0;
          left: 45px;
        }
      }

      span {
        color: $red;
      }
    }

    ol {
      width: 70%;
      text-align: center;
      list-style: decimal;
      margin: 100px auto;
      font-size: 20px;
      font-weight: 500;
      @include tablet {
        font-size: 18px;
        margin: 50px auto;
      }
      @include mobile {
        font-size: 16px;
        margin: 50px auto;
      }

      li {
        margin-bottom: 30px;
        @include tablet {
          margin-bottom: 15px;
        }
      }
    }
  }

  // Newsletter Section
  #newsletter {
    height: auto;
    overflow: hidden;

    .register-info-wrapper {
      height: auto;
      color: white;
      font-weight: 700;
      font-style: italic;

      .register-info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 13vh 0 20vh 0;
        position: relative;
        background-color: $bg-black;

        h1 {
          z-index: 10;
          font-size: 40px;
          transform: translateX(-60px);
          margin: 7px auto;
          @include tablet {
            font-size: 27px;
            transform: translateX(-20px);
          }
          @include mobile {
            font-size: 24px;
            transform: translateX(-30px);
          }
        }

        h2 {
          z-index: 10;
          font-size: 25px;
          transform: translateX(-30px);
          margin: 5px auto;
          @include tablet {
            font-size: 20px;
          }
          @include mobile {
            font-size: 18px;
            transform: translateX(-15px);
          }
        }

        h3 {
          z-index: 10;
          text-align: center;
          font-size: 20px;
          margin: 3px auto;
          @include tablet {
            font-size: 16px;
          }
          @include mobile {
            font-size: 10px;
          }
        }

        .circle {
          width: 168px;
          height: 168px;
          border-radius: 50%;
          background-color: $red;
          position: absolute;
          z-index: 1;
          left: 26vw;
          top: 17%;
          @include tablet {
            width: 100px;
            height: 100px;
            left: 15vw;
            top: 24%;
          }
          @include mobile {
            width: 50px;
            height: 50px;
            left: 7vw;
            top: 27%;
          }
          @media screen and (max-height: 360px) {
            top: 19%;
          }
        }
      }
    }
  }
}

#cookie-law {
  position: fixed;
  bottom: 0;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1em;
  z-index: 1;
  box-shadow: 0px 4px 25px 6px #000000;

  & button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    &:hover {
      background-color: $red-darker;
    }

    @include mobile {
      cursor: auto;
    }
    @include tablet {
      cursor: auto;
    }
  }

  & p {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    margin: 30px 0px;
    @include mobile {
      cursor: auto;
      font-size: 18px;
    }
    @include tablet {
      cursor: auto;
    }
  }
}
</style>
