import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./DeepDescription.module.css";

export function DeepDescription() {
  return (
    <section className={styles.section} aria-labelledby="opis-tytul">
      <Container>
        <SectionHeading
          eyebrow="o samej grze"
          title={<span id="opis-tytul">Dlaczego akurat pierścienie i dlaczego akurat światło</span>}
        />
        <div className={styles.layout}>
          <div className={styles.body}>
            <p>
              Większość łamigłówek w przeglądarce sprowadza się do przesuwania kafelków albo
              dopasowywania trójek tego samego koloru. Chciałem czegoś, co ma fizyczny ciężar —
              żeby obrócenie pierścienia czuło się jak przekręcenie prawdziwego mechanizmu z metalu
              i szkła, a nie kliknięcie w kolorowy kwadracik na płaskiej siatce.
            </p>
            <p>
              Stąd pierścienie zamiast kafelków i światło zamiast punktów. Każdy pierścień to
              osobna warstwa szkła z ośmioma, dziesięcioma, czasem sześcioma segmentami — kawałek
              przezroczysty, kawałek barwiący, kawałek całkiem nieprzepuszczalny. Obracasz warstwy
              niezależnie od siebie, a wiązka światła po drodze do rdzenia zbiera po jednym
              składniku z każdej, którą mija.
            </p>
            <p>
              <strong>Trudność nie rośnie przez zegar ani przez liczbę żyć.</strong> Rośnie przez
              liczbę pierścieni, gęstość blokerów i to, ile odbiorników trzeba nasycić jednocześnie
              tym samym zestawem ruchów. Szósta plansza w demie wyżej ma cztery pierścienie po
              dziesięć segmentów każdy — to dziesięć tysięcy możliwych ustawień, a przeszukanie
              całej tej przestrzeni pokazuje, że najkrótsza droga do rozwiązania zajmuje trzynaście
              ruchów. Da się to sprawdzić brute force&apos;em w niecałą sekundę, ale znaleźć ręcznie,
              bez podpowiedzi — już zdecydowanie dłużej.
            </p>
            <p>
              Docelowo każdego dnia ma się pojawiać jedna wspólna plansza — ta sama dla każdego,
              kto tego dnia otworzy grę, z archiwum poprzednich dni do nadrobienia zaległości. To
              akurat jeszcze nie działa w wersji, którą widzisz w demie: najpierw musiały porządnie
              zadziałać same pierścienie, zanim zacząłem dokładać wokół nich kolejne warstwy.
            </p>
          </div>
          <blockquote className={styles.quote}>
            „Jeśli chcesz odłożyć planszę w połowie i wrócić za tydzień, pierścienie będą czekać
            dokładnie tam, gdzie je zostawiłeś. Żadnego licznika, który w tym czasie tyka.”
            <cite className={styles.quoteCite}>notatka projektowa, wersja robocza</cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
