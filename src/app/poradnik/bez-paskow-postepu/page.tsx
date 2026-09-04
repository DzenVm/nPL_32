import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Dlaczego nie ma tu pasków postępu",
  description: "O interfejsowych elementach, których świadomie unikałem przy projektowaniu łamigłówki, i o tym, co zamiast nich mówi Ci, jak Ci idzie.",
  alternates: { canonical: "/poradnik/bez-paskow-postepu" },
};

export default function ArtykulBezPaskowPostepuPage() {
  return (
    <>
      <PageIntro eyebrow="poradnik · 5 min" title="Dlaczego nie ma tu pasków postępu" />
      <Container>
        <article className={prose.prose}>
          <p className={prose.meta}>Krótka notatka o kilku świadomie pominiętych elementach interfejsu.</p>

          <p>
            Przy pierwszym podejściu do interfejsu miałem gotową listę rzeczy „które się robi” w
            grze przeglądarkowej: pasek postępu na górze, procent ukończenia, licznik dni z rzędu.
            Dodałem je, potestowałem przez tydzień i usunąłem prawie wszystko. Zostały dwie liczby:
            ile ruchów wykonałeś i ile wynosi najkrótsza droga do rozwiązania danej planszy.
          </p>

          <h2>Pasek postępu kłamie w łamigłówce</h2>
          <p>
            W grze akcji pasek postępu ma sens — mówi, ile etapów zostało. W łamigłówce logicznej
            nie da się tak łatwo powiedzieć, że jesteś „w 60%” do rozwiązania — możesz mieć
            wszystkie pierścienie ustawione poza jednym i nadal być równie daleko od celu, co na
            starcie. Pokazywanie procenta w takiej sytuacji nie informuje, tylko wprowadza w błąd,
            więc lepiej było go w ogóle nie pokazywać.
          </p>

          <h2>Licznik dni z rzędu robi z gry obowiązek</h2>
          <p>
            Testowałem też wersję, która pamiętała, ile dni pod rząd otworzyłeś grę. Efekt uboczny
            był natychmiastowy: zamiast myśleć o planszy, myślałem o tym, żeby nie przerwać serii.
            To dwa zupełnie różne stany skupienia i tylko jeden z nich ma coś wspólnego z
            rozwiązywaniem łamigłówek. Usunąłem licznik tego samego wieczora.
          </p>

          <h2>Co zostało zamiast tego</h2>
          <p>
            Ruchy kontra najkrótsza droga do rozwiązania to informacja zwrotna, która nie ocenia —
            po prostu pokazuje fakt. Rozwiązanie planszy w piętnastu ruchach zamiast w siedmiu
            nadal otwiera rdzeń dokładnie tak samo. Do tego kropki przy numerach poziomów zmieniają
            kolor po rozwiązaniu, żeby dało się wrócić do miejsca, w którym skończyłeś — bez
            zapisywania tego w pamięci.
          </p>

          <h2>Cisza jako domyślny stan</h2>
          <p>
            Rdzeń po rozwiązaniu delikatnie pulsuje, ale nie wydaje dźwięku i nie przesuwa
            automatycznie do kolejnej planszy. Decyzję, czy grać dalej, zostawiam Tobie —
            interfejs nie ma w tym miejscu nic do powiedzenia. Jeśli zamkniesz kartę zaraz po
            rozwiązaniu pierwszej planszy, z punktu widzenia gry to równie dobre zakończenie
            sesji jak każde inne.
          </p>

          <p>
            Więcej o samych zasadach jest na stronie{" "}
            <Link href="/jak-grac">jak grać</Link>, a o tym, co jeszcze jest w budowie — na{" "}
            <Link href="/o-projekcie">stronie o projekcie</Link>.
          </p>
        </article>
      </Container>
    </>
  );
}
