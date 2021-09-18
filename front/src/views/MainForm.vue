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
          <h1>Co to właściwie jest <span>Bo</span>takmam?</h1>
          <p class="short-info">
            Jako Botakmam tworzymy rozwojową społeczność,&nbsp;która nie
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
        <h1>Filary <span>Bo</span>takmam</h1>
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
          headerContent="Budżet projektu"
          textContent=
          "
          Projekt samofinansujący się, szczegóły budżetu zostaną ustalone i
          przekazane po zebraniu zespołu realizującego projekt.
          Po każdym etapie następuje rozliczenie i podsumowanie pracy
          “Botakmam.pl”, a także wypłata wynagrodzenia według wcześniej
          ustalonych zasad.
          "
        />
      </section>
      <section id="benefits-section">
        <h1>Jako <span>Bo</span>takmam zapewniamy:</h1>
        <div class="grid">
          <ReverseCard
            iconName="book"
            frontHeaderContent="Minimum formalności"
            textContent=
            "
            Koniec z tyranią urzędów i biurokracji! Wszelkie formalne rozliczenia
            i&nbsp;papierologiczne obciążenia już nigdy nie będą Twoim zmartwieniem.
            "
          />
          <ReverseCard
            iconName="sitemap"
            frontHeaderContent="Organizację wdrażanych etapów"
            textContent=
            "
            Nie wiesz jak zacząć pracę? Żaden problem! Organizacją
            zajmiemy się osobiście, a ty zawsze otrzymasz jasno
            sprecyzowane i konkretne zadania.
            "
          />
          <ReverseCard
            iconName="laptop-house"
            frontHeaderContent="Pracę zdalną"
            textContent=
            "
            Ceny paliwa niejednokrotnie potrafią popsuć
            nawet najlepszy dzień, ale spokojnie,
            z nami ci to nie grozi! Laptop z dotępem do
            internetu będzie wszystkim czego potrzebujesz.
            "
          />
          <ReverseCard
            iconName="smile-wink"
            frontHeaderContent="Przyjazną atmosferę"
            textContent=
            "
            Nie ma nic przyjemniejszego niż praca w otoczeniu przyjaciół.
            Serdeczność, uczciwość i wsparcie, które znajdziesz w naszym
            zespole z pewnością dodadzą ci skrzydeł!
            "
          />
          <ReverseCard
            iconName="level-up-alt"
            frontHeaderContent="Codzienną motywację"
            textContent=
            "
            Jakiś złoczyńca posypał twoją pizzę kawałkami ananasa? Nie pozwolimy,
            aby twój cały twój dzień legł przez to
            w gruzach! Wierzymy w twój potencjał i będziemy Cię aktywnie
            wspierać w wyciąganiu każdego fragmentu!
            "
          />
          <ReverseCard
            iconName="people-carry"
            frontHeaderContent="Pomoc w realizacji powierzonych zadań"
            textContent=
            "
            Społeczność Botakmam to rodzina, która nigdy nie zostawi Cię
            samego z nierozwiązanym
            problemem. Gdy otrzymasz już swoje zadanie zrobimy wszystko, aby
            udało ci się doprowadzić je do końca.
            "
          />
        </div>
      </section>
      <section id="conclusion-section">
        <h1>Podsumowując</h1>
        <h2>Czym będą zajmować się poszczególni współpracownicy w Botakmam.pl? </h2>
        <p>
          Każdy otrzyma przypisaną sobie część, za którą będzie w całości
          odpowiadać. Do zrealizowania jest wiele zadań: od promocji, reklamy i
          programowania poprzez organizację szkoleń, cateringu, materiałów
          szkoleniowych, wycieczek, transportu, ubezpieczenia, integracji,
          rekrutacji, realizacji warsztatów, networkingu, aż do koordynacji
          działań całościowych i wyszczególnionych. Bez wątpienia każdy
          znajdzie dla siebie część, która pozwoli uwydatnić, oraz wykorzystać
          jego umiejętności, predyspozycje i chęci.
        </p>
        <p>
          Wchodzisz w to? – działasz. <br>
          Masz problem? – prosisz o pomoc. <br>
          Nie chcesz, lub nie możesz dalej działać? –
          informujesz i odchodzisz.
        </p>
        <p>
          Kooperatywa to wyjście z dyskomfortu siebie samego.
          Nie płacisz za wejście do kooperatywy, a wynagrodzenie
          otrzymujesz po efektywnie zakończonym etapie.
        </p>
      </section>
      <section id="between-section">
        <div class="circle"></div>
        <div class="catch-someone-attention">
          <p>
            Uważasz, że szukamy <br> właśnie
            <span class="you">Ciebie</span>
            <span class="question-mark">?</span>
          </p>
        </div>
      </section>
      <section id="form-section">
        <Form />
      </section>
      <Footer />
    </div>
</template>

<script>
import Idea from '../components/Idea.vue';
import ShortAnswer from '../components/ShortAnswer.vue';
import ReverseCard from '../components/ReverseCard.vue';
import Form from '../components/Form.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'MainForm',
  components: {
    Idea,
    ShortAnswer,
    ReverseCard,
    Form,
    Footer,
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
    font-weight: 600;
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
      font-size: 4rem;
      color: $red;
      @include tablet {
        font-size: 3rem;
      }
      @include mobile {
        font-size: 2rem;
      }
      @media screen and (max-height: 360px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.1rem;
      padding: 0 10%;
      margin-top: 20px;
      font-weight: 400;
      @include tablet {
        font-size: 1.1rem;
      }
      @include mobile {
        font-size: 1.1rem;
      }
    }
    h2 {
      font-size: 1.1rem;
      margin-top: 30px;
      padding: 0 5px;
      font-weight: 400;
      @include tablet {
        font-size: 1.1rem;
      }
      @include mobile {
        font-size: 1.1rem;
      }
      @media screen and (max-height: 360px) {
        font-size: 1.1rem;
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
      font-size: 2rem;
      padding: 100px 0 20px 0;
      font-weight: 600;
      @include tablet {
        font-size: 2rem;
      }
      @include mobile {
        font-size: 2rem;
      }
      span {
        color: $red;
      }
    }
    .short-info {
      font-size: 1.1rem;
      font-weight: 400;
      width: 50%;
      margin-top: 50px;
      @include tablet {
        width: 90%;
        font-size: 1.1rem;
      }
      @include mobile {
        width: 90%;
        font-size: 1.1rem;
      }
    }
    .long-info {
      font-weight: 400;
      font-size: 1.1rem;
      margin-top: 70px;
      margin-bottom: 100px;
      width: 60%;
      @include tablet {
        width: 90%;
        font-size: 1.1rem;
        margin-top: 50px;
      }
      @include mobile {
        width: 90%;
        font-size: 1.1rem;
      }
    }
  }
}

#main-ideas-section {
  background-color: #222222;
  padding: 50px 0 10px 0;
}
#keystones-section {
  background-color: #161616;
  color: white;
  padding: 50px 0;
  h1 {
    text-align: center;
    font-size: 2rem;
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
        font-size: 50px;
      }
      p {
        font-size: 1.1rem;
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
  padding: 0 0 50px 0;
  h1 {
    font-weight: 600;
    font-size: 2rem;
    padding: 50px 0;
    width: 80%;
    @include tablet {
      font-size: 2rem;
    }
    @include mobile {
      font-size: 1.5rem;
    }
    span {
      color: $red;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    align-items: center;
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 70px;
    }
  }
}
#conclusion-section {
  padding: 100px 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 3rem;
    color: $red;
    margin-bottom: 70px;
    font-weight: 600;
    @include mobile {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 80px;
    padding: 0 30px;
    @include mobile {
      font-size: 1.1rem;
    }

  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    padding: 0 20vw;
    margin-bottom: 40px;
    @include mobile {
      font-size: 0.85rem;
      padding: 0 20px;
    }
  }
}
#between-section {
  padding: 50px 0 110px 0;
  background-color: $bg-black;
  color: white;
  font-weight: 600;
  overflow: hidden;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  .circle {
    background-color: $red;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    top: -200px;
    left: -200px;
    z-index: -1;
    @media screen and (max-width: 520px) {
        width: 200px;
        height: 200px;
        top: -100px;
        left: -100px;
      }
  }
  .catch-someone-attention {
    p {
      font-size: 4rem;
      line-height: 50px;
      @media screen and (max-width: 1200px) {
        font-size: 2rem;
        line-height: 20px;
      }
      @media screen and (max-width: 600px) {
        font-size: 3rem;
        line-height: 30px;
      }
      @media screen and (max-width: 520px) {
        font-size: 2rem;
      }
      .you {
        color: $red;
        position: relative;
        top: 30px;
        font-size: 5rem;
        @media screen and (max-width: 1200px) {
          font-size: 3rem;
          top: 20px;
        }
        @media screen and (max-width: 600px) {
          font-size: 3.5rem;
        }
        @media screen and (max-width: 520px) {
          font-size: 3rem;
          top: 10px;
        }
      }
      .question-mark {
        font-size: 7rem;
        position: relative;
        top: 50px;
        padding: 0 10px;
        @media screen and (max-width: 1200px) {
          font-size: 3.5rem;
          top: 30px;
        }
        @media screen and (max-width: 600px) {
          font-size: 5rem;
        }
        @media screen and (max-width: 520px) {
          font-size: 3rem;
          top: 20px;
        }
      }
    }
  }
}
</style>
