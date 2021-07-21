<template>
  <div id="newsletter">
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
        src="@/assets/img/woman.svg"
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
        <div class="circle" />
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
          projektu  i rozwój  całego projektu Botakmam.pl
        </li>
        <li>
          Współpraca odbywa się w ramach B2B. Wynagrodzenie za wkład pracy realizowane jest po
          każdym zakończonym etapie projektu w postaci ustalonego z góry sposobu wynagrodzenia.
        </li>
        <li>
          Kooperatywa nie oznacza Wszyscy po równo.  Procent wynagrodzenia zależy od rodzaju pracy,
          wkładu pracy, zaangażowania czasu,
          wiedzy itp.  według  ustalonych i podpisywanych umów z każdym z Uczestników indywidualnie.
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
          <div class="circle" />
        </div>
        <InitialForm />
      </div>
    </section>
    <Footer />
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
};
</script>

<style lang="scss">
/* Initial styles */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
}

/* App */
#newsletter {
  // Landing Section
  #landing{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    &::before{
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
  h1{
        color:white;
        font-size: 100px;
        margin-left: 5%;
        font-weight: 700;
        margin-bottom: 1vh;
        span {
            color: $red;
        }
        @include tablet{
            font-size: 70px;
            margin-bottom: 1vh;
        }
        @include mobile{
            font-size: 50px;
            margin-bottom: 1vh;
        }
        @media screen and (max-height: 380px) {
            font-size: 49px;
        }
    }
    h2{
        color:white;
        font-style: italic;
        font-weight: 400;
        font-size: 50px;
        margin-left: 5%;
        margin-top: 3px;
        @include tablet{
            font-size: 35px;
        }
        @include mobile{
            font-size: 25px;
        }
        @media screen and (max-height: 380px) {
            font-size: 22px;
        }
    }
    .logo{
        width: 200px;
        height: 200px;
        z-index: 1;
        margin-left: 5%;
        margin-top: 2vh;
        margin-bottom: 20px;
        transform: translateX(-30px);
        @include tablet{
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
    .woman{
        width: 35vw;
        height: auto;
        position: absolute;
        bottom: -20px;
        right: 0;
        object-fit: cover;
        @include large-tablet{
            display: none;
        }
    }
  }
  // About us section
  #about-us{
    width: 100vw;
    overflow: hidden;
      h3{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 70%;
        font-weight: 400;
        font-style: italic;
        font-size: 30px;
        margin: 100px auto;
        @include tablet{
          font-size: 20px;
          margin: 60px auto;
        }
        @include mobile{
          font-size: 17px;
          margin: 60px auto;
        }
      }
      .main-title{
        width: 100%;
        position: relative;
        margin: 40px auto;
        text-align: center;
        h1{
          font-weight: 700;
          font-size: 68px;
          @include tablet{
            font-size: 50px;
            margin: 20px auto;
          }
          @include mobile{
            font-size: 40px;
            margin: 20px auto;
          }

        }
        .circle{
          width: 168px;
          height: 168px;
          border-radius: 50%;
          background-color: $red;
          position: absolute;
          z-index: -1;
          left: 20%;
          top: -40px;
          @include tablet{
            width: 100px;
            height: 100px;
            top: -20px;
          }
          @include mobile{
            width: 50px;
            height: 50px;
            top: 0;
            left: 45px;
          }
        }
        span{
          color: $red;
        }
      }
      ol{
        width: 80%;
        text-align: center;
        list-style: decimal;
        margin: 100px auto;
        font-size: 30px;
        font-weight: 500;
        @include tablet{
            font-size: 25px;
            margin: 50px auto;
          }
        @include mobile{
          font-size: 17px;
          margin: 50px auto;
        }
        li{
          margin-bottom: 30px;
          @include tablet{
            margin-bottom: 15px;
          }
        }
      }
  }
  // Newsletter Section
  #newsletter{
    height: auto;
    overflow: hidden;
    .register-info-wrapper{
      height: auto;
      color: white;
      font-weight: 700;
      font-style: italic;
      .register-info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 13vh 0 20vh 0;
        position: relative;
        background-color: $bg-black;
        h1{
          z-index: 10;
          font-size: 80px;
          transform: translateX(-60px);
          margin: 7px auto;
          @include tablet{
            font-size: 55px;
            transform: translateX(-20px);
          }
          @include mobile{
            font-size: 35px;
            transform: translateX(-30px);
          }
        }
        h2{
          z-index: 10;
          font-size: 50px;
          transform: translateX(-30px);
          margin: 5px auto;
          @include tablet{
            font-size: 40px;
          }
          @include mobile{
            font-size: 20px;
            transform: translateX(-15px);
          }
        }
        h3{
          z-index: 10;
          text-align: center;
          font-size: 25px;
          margin: 3px auto;
          @include tablet{
            font-size: 20px;
          }
          @include mobile{
            font-size: 10px;
          }
        }
        .circle{
          width: 168px;
          height: 168px;
          border-radius: 50%;
          background-color: $red;
          position: absolute;
          z-index: 1;
          left: 26vw;
          top: 17%;
          @include tablet{
            width: 100px;
            height: 100px;
            left: 15vw;
            top: 24%;
          }
          @include mobile{
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
</style>
