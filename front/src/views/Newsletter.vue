<template>
  <div id="newsletter-wrapper">
    <!-- Landing Page Section -->
    <section id="landing">
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <img
        class="logo"
        src="@/assets/img/logo.svg"
        alt=""
      >
      <h1><span>Bo</span>takmam</h1>
      <h2>Kooperacja</h2>
      <h2>Perspektywa</h2>
      <h2>Gratyfikacja</h2>
      <div class="circle">
        <div class="circle_text">
          <p class="circle_first_half">Dołącz</p>
          <p class="circle_second_half">do Nas</p>
        </div>
        <p class="circle_sign">!</p>
      </div>
      <img
        class="woman"
        src="@/assets/img/woman.webp"
        alt=""
      >

    </section>
    <!-- About Us Section -->
    <section id="about-us">
      <h3>
        Botakmam to grupa osób współdziałających ze sobą przy organizacji i realizacji
        wieloletniego projektu dla przedsiębiorców i osób indywidualnych.
      </h3>
      <div class="main-title">
        <h1>
          Tworzymy
          <span>nowe</span>
          możliwości!
          <div class="circle"/>
          </h1>
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
          <h1>
            <div>
              Zainteresowany?
              <div class="circle"/>
            </div> <br>
            Poznaj nasz projekt.
            Dokonaj rejestracji.
            Wypełnij formularz otrzymasz więcej informacji.
          </h1>
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
    if (localStorage.getItem('cookiesAccept') === 'true') {
      this.$refs['cookie-law'].style.display = 'none';
    } else {
      this.$refs['cookie-law'].style.display = 'flex';
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

/* App */
#newsletter-wrapper {
  // Landing Section
  #landing {
    width: 100%;
    height: 75vh;
    overflow: hidden;
    position: relative;
    background: $bg-black;
    z-index: 11;
    & #particles-js{
      position: absolute;
      width: 100%;
      height: 75vh;
      z-index: 1;
    }
    &::before {
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
      z-index: 2;
      transform: scale(1.1);
    }

    h1 {
      color: white;
      font-size: 50px;
      margin-left: 5%;
      margin-bottom: 1vh;
      font-weight: 500;
      z-index: 10;
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
      font-size: 25px;
      margin-left: 5%;
      margin-top: 7px;
      font-weight: 200;
      letter-spacing: 1px;
      z-index: 10;
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
      z-index: 10;
      transform: translateX(-30px);
      @include tablet {
        width: 100px;
        height: 100px;
        transform: translateX(-10px);
        margin-bottom: 2.5vh;
      }
      @media screen and (max-height: 380px) {
        width: 90px;
        height: 90px;
      }
    }
    .circle {
      display: flex;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: #ee1a0a;
      position: absolute;
      z-index: 2;
      top: 45%;
      left: 45%;
      box-shadow: 11px 20px 13px 7px rgba(0, 0, 0, 0.5);
      @include tablet {
        width: 250px;
        height: 250px;
        top: 50%;
        left: 45%;
      }
      @include mobile {
        width: 200px;
        height: 200px;
        top: 55%;
        left: 40%;
      }
      & p {
        display: flex;
        height: 100%;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 2.5rem;
        color: #fff;
        line-height: 80px;
        text-align: center;
        @include tablet{
          font-size: 2rem;
          line-height: 50px;
        }
        @include mobile{
          font-size: 1.8rem;
          line-height: 50px;
        }
      }
      & .circle_text{
        position: absolute;
        height: 20%;
        top: 30%;
        right: 20%;
        & .circle_first_half{
          position: relative;
          right: 50%;
        }
        & .circle_second_half{
          position: relative;
          right: 40%;
        }
      }
      & .circle_sign {
        position: absolute;
        right: 15%;
        top: -5%;
        font-size: 13rem;
        @include tablet{
          font-size: 12rem;
        }
        @include mobile{
          font-size: 9rem;
        }
      }
      @media screen and (max-height: 773px) {
        top: 43%;
        left: 40%;
      }
      @media screen and (max-height: 500px) {
        width: 150px;
        height: 150px;
        & p {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          font-size: 1.3rem;
          color: #fff;
          line-height: 80px;
          text-align: center;
          @include tablet{
            font-size: 1.3rem;
            line-height: 50px;
          }
          @include mobile{
            font-size: 1.3rem;
            line-height: 50px;
          }
        }
        & .circle_sign {
          position: absolute;
          right: 15%;
          top: -5%;
          font-size: 8rem;
          @include tablet{
            font-size: 8rem;
          }
          @include mobile{
            font-size: 8rem;
          }
        }
      }
    }
    .woman {
      width: 400px;
      height: 500px;
      position: absolute;
      bottom: -30px;
      right: 50px;
      z-index: 2;
      object-fit: cover;
      @media screen and (max-width: 1240px) {
        display: none;
      }
      @media screen and (max-height: 700px) {
        display: none;
      }
    }
  }

  // About us section
  #about-us {
    width: 100vw;
    overflow: hidden;
    font-weight: 200;
    padding: 2vh 0;
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 50%;
      font-weight: 200;
      font-style: italic;
      font-size: 20px;
      margin: 100px auto;
      @include tablet {
        font-size: 18px;
        margin: 60px auto;
        width: 70%;
      }
      @include mobile {
        font-size: 16px;
        margin: 60px auto;
        width: 90%;
      }
    }

    .main-title {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-weight: 400;
        font-size: 28px;
        position: relative;
        text-align: center;
        @include tablet {
          font-size: 20px;
        }
        @include mobile {
          font-size: 18px;
        }
      .circle {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: $red;
        position: absolute;
        z-index: -1;
        left: -20px;
        top: -30px;
        @include tablet {
          width: 80px;
          height: 80px;
        }
        @include mobile {
          width: 50px;
          height: 50px;
          top: -15px;
        }
      }
      }

      span {
        color: $red;
      }
    }

    ol {
      width: 60%;
      text-align: center;
      list-style: decimal;
      margin: 100px auto;
      font-size: 20px;
      font-weight: 200;
      @include tablet {
        font-size: 18px;
        margin: 50px auto;
        width: 70%;
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
      font-weight: 200;
      padding: 5vh 0;

      .register-info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 2vh 0 8vh 0;
        color: #000;
        h1 {
          position: relative;
          z-index: 10;
          font-weight: 400;
          font-size: 28px;
          line-height: 37px;
          text-align: center;
          width: 80%;
          word-spacing: 2px;
          position: relative;
          @include tablet {
            font-size: 22px;
          }
          @include mobile {
            font-size: 19px;
            line-height: 28px;
          }
          div {
            position: relative;
            display: inline-block;
            .circle {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background-color: $red;
              position: absolute;
              z-index: -1;
              top: -15px;
              left: -30px;
              @include mobile {
                width: 45px;
                height: 45px;
                top: -9px;
                left: -20px;
              }
            }
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
