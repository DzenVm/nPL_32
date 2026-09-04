import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Jak myśleć w kategoriach światła, a nie liczb",
  description:
    "Dlaczego liczenie segmentów w głowie prowadzi na manowce w łamigłówce ze świetlnymi pierścieniami i co sprawdza się zamiast tego.",
  alternates: { canonical: "/poradnik/myslenie-w-swietle" },
};

export default function ArtykulMyslenieWSwietlePage() {
  return (
    <>
      <PageIntro eyebrow="poradnik · 6 min" title="Jak myśleć w kategoriach światła, a nie liczb" />
      <Container>
        <article className={prose.prose}>
          <p className={prose.meta}>Notatka o podejściu do plansz z trzema i czterema pierścieniami.</p>

          <p>
            Pierwszy odruch przy planszy z trzema pierścieniami jest zawsze ten sam: policzyć, o
            ile segmentów trzeba obrócić każdy z nich, i zapamiętać te liczby. Działa to na
            pierwszym, może drugim poziomie. Później przestaje — bo licząc segmenty, patrzysz na
            pierścień, a nie na wiązkę. A to wiązka mówi Ci, czy jesteś bliżej, czy dalej.
          </p>

          <h2>Zacznij od tego, czego brakuje, nie od tego, co już masz</h2>
          <p>
            Jeśli odbiornik potrzebuje żółci, a widzisz samą czerwień, pytanie brzmi: który
            pierścień, po obrocie, mógłby dołożyć zieleń w tym samym miejscu? Nie: „o ile obrócić
            pierścień zewnętrzny”. To rozróżnienie brzmi drobno, ale zmienia całe podejście — zamiast
            szukać ruchu, szukasz najpierw brakującego składnika, a dopiero potem tego, który
            pierścień może go dostarczyć.
          </p>

          <h2>Izoluj jeden pierścień na raz</h2>
          <p>
            Przy trzech albo czterech warstwach kuszące jest kręcenie wszystkim naraz, żeby
            „zobaczyć, co się stanie”. Zwykle prowadzi to donikąd, bo tracisz z oczu, który obrót
            faktycznie coś zmienił. Lepiej sprawdza się coś odwrotnego: zostaw dwa pierścienie w
            spokoju, obracaj tylko trzeci i patrz, jak zmienia się wynik w receptorze. Kiedy już
            wiesz, co robi każdy pierścień z osobna, dopiero wtedy szukaj kombinacji.
          </p>

          <h2>Dwa odbiorniki naraz to inna gra</h2>
          <p>
            Plansze z dwoma receptorami — jak „Dwa punkty” w demie na stronie głównej — działają
            inaczej, bo każdy obrót wpływa na oba naraz. Naprawienie pierwszego psuje drugi i
            odwrotnie. Tutaj nie szuka się już pojedynczego brakującego koloru, tylko pierścienia,
            który akurat w tych dwóch konkretnych miejscach ma segmenty pasujące jednocześnie do
            obu wymagań. Często jest tylko jeden taki pierścień na planszy — reszta obrotów tylko
            przesuwa problem z jednego odbiornika na drugi.
          </p>

          <h2>Bloker to informacja, nie kara</h2>
          <p>
            Kiedy w gnieździe pojawia się ciemno zamiast koloru, to prawie zawsze bloker, a nie
            błąd w rozumowaniu. Zamiast szukać, co zrobiłeś źle, sprawdź, który z pierścieni ma w
            tym miejscu segment nieprzepuszczalny, i obróć tylko jego. To jedyny typ segmentu, który
            unieważnia pracę wszystkich pozostałych warstw naraz — więc opłaca się go eliminować w
            pierwszej kolejności, zanim zaczniesz dopasowywać kolory.
          </p>

          <p>
            Żadna z tych zasad nie zastąpi patrzenia na konkretną planszę. To raczej kolejność, w
            jakiej warto na nią patrzeć — najpierw blokery, potem brakujący kolor, na końcu
            dopasowanie ruchów. Reszta to już zwykłe próbowanie.
          </p>

          <p>
            Pełny opis wszystkich zasad jest na stronie <Link href="/jak-grac">jak grać</Link>, a
            samą mechanikę można wypróbować w <Link href="/#demo">demo na stronie głównej</Link>.
          </p>
        </article>
      </Container>
    </>
  );
}
