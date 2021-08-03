<template>
    <div class="main-form-wrapper">
      <section id="welcome-section">
        <div class="circle"></div>
        <div class="info-wrapper">
          <img
          class="logo"
          src="@/assets/img/logo.svg"
          alt="BO Logo"
          >
          <h1>Witamy w zespole!</h1>
          <p>
            Twoje wsparcie jest dla nas nieocenione. Nie mamy żadnych wątpliwości,
            że łącząc siły uda nam się dokonać niesamowitych rzeczy!
          </p>
          <h2>Dowiedz się o nas więcej i&nbsp;wypełnij krótki formularz.</h2>
        </div>
      </section>
      <section id="what-is-bo-section">
        <div class="background"></div>
        <div class="info-wrapper">
          <h1>Co to właściwie jest <span>BoTakMam</span>?</h1>
          <p class="short-info">
            Jako BoTakMam tworzymy rozwojową społeczność,&nbsp;która nie
            chce być uzależniona od systemu narzucającego z&nbsp;góry formy
            zatrudnienia, zarobkowania i&nbsp;płatności.
          </p>
          <p class="long-info">
            Przedsięwzięcie jest innowacyjnym projektem,&nbsp;który
            zaczyna się właśnie w tym miejscu.
            Nasza misja rozpoczyna się od budowania
            społeczności,&nbsp;własnej waluty,&nbsp;firm, oraz&nbsp;sklepów i&nbsp;kończy
            się w miejscu,&nbsp;które
            Ty sam sobie wyznaczysz. To nie fantazja,&nbsp;ale autorski
            projekt wprowadzany w&nbsp;życie modułowo i&nbsp;etapowo.
            Działania na wielu polach pozwolą
            odnaleźć się tutaj każdemu zainteresowanemu.
          </p>
        </div>
      </section>
      <section id="main-ideas-section">
        <Idea
          icon="globe-europe"
          message=
          "
          Budując globalny trend otwieramy nowe drzwi,
          które dają możliwość szybkiego samorozwoju
          oraz wyjątkowej formy zarobkowania wszystkim uczestnikom.
          "
        />
        <Idea
          icon="user"
          message=
          "
          Tworzymy nasze jutro na własnych warunkach
          i zasadach w
          innowacyjny, nowoczesny sposób.
          "
        />
        <Idea
          icon="child"
          message=
          "
          Nieważne ile masz lat i gdzie mieszkasz, wszystko będzie odbywać
          się online tak, aby wszelkie działania ograniczyć do Twojego
          własnego laptopa i dostępu do internetu.

          "
        />
      </section>
      <section id="keystones-section">
        <h1>Filary <span>BoTakMam</span></h1>
        <div class="keystones-wrapper">
          <div class="keystone">
            <fa class="icon" icon="briefcase" />
            <p>Biznes</p>
          </div>
          <div class="keystone">
            <fa class="icon" icon="brain" />
            <p>Rozwój osobisty</p>
          </div>
          <div class="keystone">
            <fa class="icon" icon="rocket" />
            <p>Pasja</p>
          </div>
        </div>
      </section>
      <section id="short-answers-section">
        <ShortAnswer
          iconName="user-check"
          headerContent="Dla kogo jest ten projekt?"
          textContent=
          "
          Beneficjentami projektu są przedsiębiorcy, oraz osoby indywidualne
          zamieszkujące dowolne miejsce na świecie.
          "
        />
        <ShortAnswer
          iconName="flag"
          headerContent="Produkt Polski"
          textContent=
          "
          Łączymy wyjątkowych ludzi z całego kraju, a
          swoim działaniem aktywnie wspieramy polską gospodarkę.
          "
        />
        <ShortAnswer
          iconName="clock"
          headerContent="Harmonogram projektu"
          textContent=
          "
          Projekt składa się z wielu zasadniczych etapów. Każdy z nich
          oznacza organizację i realizację projektu “Botakmam.pl” według
          ustalonych zadań. Szczegółowy harmonogram projektu zostanie
          przedstawiony po ustaleniu osób odpowiedzialnych za
          poszczególne działania i etapy realizacji.
          "
        />
        <ShortAnswer
          iconName="dollar-sign"
          headerContent="Harmonogram projektu"
          textContent=
          "
          Projekt składa się z wielu zasadniczych etapów. Każdy z nich
          oznacza organizację i realizację projektu “Botakmam.pl” według
          ustalonych zadań. Szczegółowy harmonogram projektu zostanie
          przedstawiony po ustaleniu osób odpowiedzialnych za
          poszczególne działania i etapy realizacji.
          "
        />
      </section>
      <section id="benefits-section">
        <h1>Jako <span>BoTakMam</span> zapewniamy:</h1>
        <div class="grid">
          <ReverseCard />
          <ReverseCard />
          <ReverseCard />
          <ReverseCard />
          <ReverseCard />
          <ReverseCard />
        </div>
      </section>
    </div>
</template>

<script>
import Idea from '../components/Idea.vue';
import ShortAnswer from '../components/ShortAnswer.vue';
import ReverseCard from '../components/ReverseCard.vue';

export default {
  name: 'MainForm',
  components: {
    Idea,
    ShortAnswer,
    ReverseCard,
  },
};
</script>

<style lang="scss" scoped>

#welcome-section {
  height: 70vh;
  @media screen and (max-height: 360px) {
    height: auto;
  }
  .circle {
    width: 600px;
    height: 600px;
    background-color: $red;
    border-radius: 50%;
    position: absolute;
    left: -300px;
    top: -300px;
    z-index: -1;
    @include tablet {
      width: 400px;
      height: 400px;
      left: -150px;
      top: -220px;
    }
    @include mobile {
      width: 200px;
      height: 200px;
      left: -100px;
      top: -120px;
    }
    @media screen and (max-height: 360px) {
      top: -200px;
      left: -200px;
    }
  }
  .info-wrapper {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    .logo {
      width: 200px;
      height: 200px;
      margin-top: 50px;
      @include mobile {
        width: 100px;
        height: 100px;
      }
      @media screen and (max-height: 360px) {
        width: 100px;
        height: 100px;
      }
    }
    h1 {
      margin-top: 20px;
      font-size: 5rem;
      color: $red;
      @include tablet {
        font-size: 3.5rem;
      }
      @include mobile {
        font-size: 2rem;
      }
      @media screen and (max-height: 360px) {
        font-size: 2.1rem;
      }
    }
    p {
      font-size: 1.5rem;
      padding: 0 10%;
      margin-top: 20px;
      @include tablet {
        font-size: 1rem;
      }
      @include mobile {
        font-size: 1rem;
      }
    }
    h2 {
      font-size: 3rem;
      margin-top: 30px;
      padding: 0 5px;
      @include tablet {
        font-size: 2rem;
      }
      @include mobile {
        font-size: 1.5rem;
      }
      @media screen and (max-height: 360px) {
        font-size: 1.8rem;
        padding-bottom: 30px;
      }
    }
  }
}
#what-is-bo-section {
  position: relative;
  .background {
    background-color: #F9F9F9;
    background-size: 100% auto;
    clip-path: polygon(25% 0%, 75% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%);
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .info-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: 3rem;
      padding: 80px 0 20px 0;
      font-weight: 600;
      @include tablet {
        font-size: 2.5rem;
      }
      @include mobile {
        font-size: 2rem;
      }
      span {
        color: $red;
      }
    }
    .short-info {
      font-size: 1.5rem;
      font-weight: 600;
      width: 50%;
      margin-top: 50px;
      @include tablet {
        width: 90%;
        font-size: 1.2rem;
      }
      @include mobile {
        width: 90%;
        font-size: 1rem;
      }
    }
    .long-info {
      font-weight: 500;
      font-size: 1.2rem;
      margin-top: 70px;
      margin-bottom: 100px;
      width: 60%;
      @include tablet {
        width: 90%;
        font-size: 1rem;
        margin-top: 50px;
      }
      @include mobile {
        width: 90%;
        font-size: 0.95rem;
      }
    }
  }
}

#main-ideas-section {
  background-color: #222222;
  padding: 100px 0 10px 0;
}
#keystones-section {
  background-color: #161616;
  color: white;
  padding: 50px 0;
  h1 {
    text-align: center;
    font-size: 2.3rem;
    letter-spacing: .8px;
    word-spacing: 2px;
    @include mobile {
      font-size: 2rem;
    }
    span {
      color: $red;
    }
  }
  .keystones-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    text-align: center;
    margin-top: 50px;
    @include mobile {
      justify-content: center;
      flex-direction: column;
      margin-top: 0;
    }
    .keystone {
      @include mobile {
        margin-top: 55px;
      }
      .icon {
        font-size: 60px;
      }
      p {
        font-size: 1.3rem;
        margin-top: 20px;
        color: $red;
        font-weight: 500;
        word-spacing: 2px;
      }
    }
  }
}
#short-answers-section {
  padding: 0 0 90px 0;
}

#benefits-section {
  background-color: #EDEDED;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 70px 0;
  h1 {
    font-weight: 600;
    font-size: 4rem;
    padding: 100px 0;
    width: 80%;
    @include tablet {
      font-size: 3.5rem;
    }
    @include mobile {
      font-size: 3rem;
    }
    span {
      color: $red;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 200px;
    align-items: center;
    @media screen and (max-width: 1220px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 776px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 70px;
    }
  }
}
</style>
