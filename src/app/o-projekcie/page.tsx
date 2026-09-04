import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "O projekcie — kto i dlaczego to buduje",
  description:
    "Historia projektu, decyzje projektowe stojące za mechaniką światła i pierścieni oraz uczciwy status tego, co już działa, a co dopiero powstaje.",
  alternates: { canonical: "/o-projekcie" },
};

export default function OProjekciePage() {
  return (
    <>
      <PageIntro
        eyebrow="o projekcie"
        title="Robię to sam, wieczorami, od dobrych kilku miesięcy"
        lede="Bez zespołu, bez inwestora i na razie bez nazwy — ta ostatnia rzecz pojawi się dopiero, gdy będzie do czego jej przypiąć."
      />
      <Container>
        <article className={prose.prose}>
          <p>
            Pracuję jako programista i przez lata robiłem gry poboczne — nigdy nie skończone,
            nigdy nie pokazane nikomu poza sobą. Ta ma być inna, ale zasada, którą sobie
            postawiłem, jest prosta: nie publikuję niczego, dopóki sam nie zagram w to przez
            godzinę bez irytacji.
          </p>
          <p>
            Pomysł na pierścienie wziął się z frustracji, nie z inspiracji. Testowałem mnóstwo
            gotowych łamigłówek w przeglądarce i większość rozwiązywała się tym samym sposobem: 30
            sekund oglądania planszy, potem seria kliknięć na pamięć. Chciałem czegoś, gdzie
            rozwiązanie trzeba faktycznie przemyśleć, a mechanika — obracanie warstw względem
            siebie — akurat dobrze się do tego nadawała. Światło i mieszanie barw dołożyły się
            później, kiedy szukałem sposobu, żeby wynik obrotu dało się ocenić jednym spojrzeniem,
            bez czytania liczb.
          </p>

          <h2>Jak to jest robione</h2>
          <p>
            Silnik gry — cała logika obracania pierścieni i liczenia wyniku wiązki — to
            kilkaset linijek zwykłego TypeScriptu, bez żadnego gotowego frameworka do gier.
            Każda plansza w demo na stronie głównej ma sprawdzoną automatycznie najkrótszą
            możliwą drogę do rozwiązania — nie zgaduję, ile ruchów potrzeba, tylko każę
            komputerowi przeszukać wszystkie możliwe ustawienia i to policzyć.
          </p>
          <p>
            Strona, którą teraz czytasz, powstaje równolegle z grą, więc część sekcji będzie
            jeszcze wielokrotnie przepisywana. Zależało mi, żeby to, co już jest widoczne,
            działało naprawdę — stąd na przykład playowalne demo na stronie głównej zamiast
            samych zrzutów ekranu.
          </p>

          <h2>Co jest gotowe, a co nie</h2>
          <p>
            Gotowy jest silnik, sześć poziomów demo, mechanika mieszania barw i podstawy
            dostępności (wzory zamiast samego koloru, pełna obsługa z klawiatury). W budowie są:
            lustra odbijające wiązkę, pryzmaty rozszczepiające biel na barwy składowe, wspólna
            plansza dnia z archiwum oraz zapisywanie postępu między urządzeniami. Żadna z tych
            rzeczy nie jest udawana w interfejsie — jeśli czegoś nie widzisz na stronie, to
            dlatego, że naprawdę jeszcze nie istnieje.
          </p>

          <h2>Dlaczego bez nazwy i loga</h2>
          <p>
            Domena jeszcze się nie zmieniła z tymczasowej, więc uznałem, że nadawanie grze nazwy
            przed tym momentem nie ma sensu — musiałbym się do niej przywiązywać, żeby chwilę
            później zmieniać wszystkie materiały. To samo z logotypem: łatwiej zaprojektować go
            raz, dobrze, niż trzy razy naprędce.
          </p>

          <h2>Kontakt</h2>
          <p>
            Jeśli coś na planszy działa inaczej, niż powinno, albo masz uwagę do samej strony —
            napisz. Odpowiadam osobiście, więc czasem to trwa kilka dni, ale odpowiadam zawsze.
            Wszystkie dane są na <Link href="/kontakt">stronie kontaktowej</Link>.
          </p>
        </article>
      </Container>
    </>
  );
}
