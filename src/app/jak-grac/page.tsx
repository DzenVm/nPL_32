import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Jak grać — pełne zasady łamigłówki",
  description:
    "Kompletny opis zasad: elementy planszy, sposób mieszania barw, sterowanie i struktura poziomów przeglądarkowej łamigłówki ze świetlnymi pierścieniami.",
  alternates: { canonical: "/jak-grac" },
};

export default function JakGracPage() {
  return (
    <>
      <PageIntro
        eyebrow="pełne zasady"
        title="Wszystko, co robi ta łamigłówka, zmieściło się na jednej stronie"
        lede="Bez ukrytych mechanik i bez niespodzianek w dziesiątym poziomie. Jeśli przeczytasz to do końca, znasz grę równie dobrze jak ja."
      />
      <Container>
        <article className={prose.prose}>
          <h2>Cel</h2>
          <p>
            Na planszy stoi kilka koncentrycznych pierścieni szkła — od dwóch w pierwszych
            poziomach do czterech w najtrudniejszych. Każdy da się obracać niezależnie od
            pozostałych, w jedną albo w drugą stronę, o pojedynczy segment na kliknięcie. Twoje
            zadanie: ustawić pierścienie tak, żeby w rdzeniu na środku zapaliło się światło o
            dokładnie wymaganym kolorze. Czasem trzeba trafić w jeden odbiornik, czasem w dwa
            naraz — i wtedy naprawienie jednego bardzo łatwo psuje drugi.
          </p>

          <h2>Elementy planszy</h2>
          <p>Każdy pierścień podzielony jest na równe segmenty. Segment może być jednym z trzech typów:</p>
          <ul>
            <li>
              <strong>Przezroczysty</strong> — przepuszcza wiązkę bez żadnej zmiany. To on stoi w
              większości pierścienia.
            </li>
            <li>
              <strong>Barwiący</strong> (czerwony, zielony albo niebieski) — dokłada do wiązki
              swoją barwę, jeśli akurat stoi na drodze do rdzenia.
            </li>
            <li>
              <strong>Bloker</strong> — gasi wiązkę całkowicie. Nie ma znaczenia, ile kolorów
              zdążyła zebrać wcześniej — bloker kończy sprawę.
            </li>
          </ul>
          <p>
            Wiązka wchodzi od zewnętrznej krawędzi planszy i przechodzi kolejno przez wszystkie
            pierścienie — od najbardziej zewnętrznego do najbardziej wewnętrznego — zanim dotrze
            do odbiornika w rdzeniu. Po drodze mija dokładnie jeden segment z każdego pierścienia:
            ten, który akurat znajduje się na jej linii po obróceniu wszystkich warstw.
          </p>

          <h2>Jak liczą się kolory</h2>
          <p>
            Barwy się sumują, tak jak światło, a nie jak farba. Dwie różne barwy w tej samej
            wiązce zawsze dają ten sam, przewidywalny wynik:
          </p>
          <table>
            <thead>
              <tr>
                <th>Składniki</th>
                <th>Wynik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>czerwień + zieleń</td>
                <td>żółć</td>
              </tr>
              <tr>
                <td>zieleń + błękit</td>
                <td>turkus</td>
              </tr>
              <tr>
                <td>czerwień + błękit</td>
                <td>purpura</td>
              </tr>
              <tr>
                <td>czerwień + zieleń + błękit</td>
                <td>biel</td>
              </tr>
              <tr>
                <td>ten sam kolor dwa razy</td>
                <td>bez zmian — nie ma „mocniejszej” czerwieni</td>
              </tr>
              <tr>
                <td>cokolwiek + bloker</td>
                <td>ciemno, niezależnie od reszty</td>
              </tr>
            </tbody>
          </table>
          <p>
            Odbiornik przyjmuje tylko dokładny wynik. Jeśli potrzebuje żółci, a wiązka niesie samą
            czerwień albo pełną biel, odbiornik zostaje ciemny — zbliżenie się do celu nic tu nie
            daje.
          </p>

          <h2>Sterowanie</h2>
          <p>
            Przy każdym pierścieniu stoją dwa przyciski obrotu — w lewo i w prawo — obsługiwane
            myszką, dotykiem albo klawiaturą (to zwykłe przyciski, więc działają z klawiszem Tab i
            Enter tak samo jak wszystko inne na tej stronie). Dodatkowo można kliknąć bezpośrednio
            w sam pierścień na planszy, co obraca go o jeden segment w prawo — to szybszy skrót dla
            osoby korzystającej z myszki albo ekranu dotykowego.
          </p>

          <h2>Struktura poziomów</h2>
          <p>
            Pełna gra ma być podzielona na pięć odcinków: Świt, Południe, Zmierzch, Zaćmienie i
            Rdzeń, o rosnącej liczbie pierścieni i coraz gęściej rozstawionych blokerach. Więcej o
            tym podziale — razem z tym, co już działa, a co dopiero powstaje — znajdziesz na{" "}
            <Link href="/o-projekcie">stronie o projekcie</Link>. Sześć poziomów w playowalnym demo
            na stronie głównej odpowiada mniej więcej pierwszym dwóm odcinkom.
          </p>

          <h2>Ruchy i tempo</h2>
          <p>
            Przy każdej planszy demo widać dwie liczby: ile ruchów już wykonałeś i ile wynosi
            najkrótsza możliwa droga do rozwiązania, sprawdzona wcześniej przeszukaniem całej
            przestrzeni możliwych ustawień. To informacja, nie rywalizacja — plansza nie przestaje
            się liczyć, jeśli zrobisz więcej ruchów niż to minimum. Nie ma tu zegara odmierzającego
            czas ani żadnego ograniczenia, jak długo możesz nad czymś siedzieć.
          </p>

          <h2>Dostępność</h2>
          <p>
            Przełącznik pod planszą dokłada do każdej barwy osobny wzór — przydatny, jeśli dwa
            kolory są dla Ciebie trudne do odróżnienia. Cała plansza działa z klawiatury, a
            animacje obrotu i pulsowania wyłączają się automatycznie, jeśli w systemie masz
            włączone ograniczenie ruchu.
          </p>

          <p>
            To wszystkie zasady. Reszta to już tylko konkretne układy segmentów na kolejnych
            planszach.
          </p>
        </article>
        <ButtonLink href="/#demo" variant="primary">
          Wypróbuj na planszy
        </ButtonLink>
      </Container>
    </>
  );
}
