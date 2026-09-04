import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description: "Zasady korzystania z serwisu i udostępnianego w nim demo gry.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <>
      <PageIntro eyebrow="dokument prawny" title="Regulamin serwisu" />
      <Container>
        <article className={prose.prose}>
          <p className={prose.meta}>Ostatnia aktualizacja: wrzesień 2026.</p>

          <h2>1. Definicje</h2>
          <ul>
            <li><strong>Serwis</strong> — strona internetowa dostępna pod adresem {SITE_URL}.</li>
            <li><strong>Administrator</strong> — wydawca Serwisu, dane kontaktowe w punkcie 8.</li>
            <li><strong>Użytkownik</strong> — każda osoba korzystająca z Serwisu.</li>
            <li><strong>Demo</strong> — udostępniona w Serwisie, ograniczona, testowa wersja gry opisanej na stronie głównej.</li>
          </ul>

          <h2>2. Postanowienia ogólne</h2>
          <p>
            Serwis prezentuje informacje o rozwijanej grze przeglądarkowej oraz udostępnia jej
            ograniczoną wersję demonstracyjną. Korzystanie z Serwisu jest bezpłatne i nie wymaga
            rejestracji ani podawania danych osobowych. Do korzystania z Serwisu wystarczy
            urządzenie z dostępem do internetu i aktualną przeglądarką obsługującą JavaScript.
          </p>
          <p>
            Serwis, w tym udostępnione w nim Demo, znajduje się w aktywnym rozwoju. Zakres
            dostępnych treści i funkcji może się zmieniać, a Administrator nie gwarantuje ich
            stałej dostępności ani ciągłości działania w każdym momencie.
          </p>

          <h2>3. Zasady korzystania z Demo</h2>
          <p>
            Demo udostępnia sześć plansz łamigłówki opisanej na stronie głównej. Postęp w Demo —
            informacja o rozwiązanych poziomach — jest zapisywany lokalnie w przeglądarce
            Użytkownika i nie jest przekazywany do Administratora. Administrator zastrzega sobie
            prawo do zmiany, rozszerzenia albo wycofania Demo w dowolnym momencie, w szczególności
            w związku z pracami nad pełną wersją gry.
          </p>

          <h2>4. Własność intelektualna</h2>
          <p>
            Kod źródłowy, mechanika gry, grafiki, ilustracje oraz treści tekstowe udostępnione w
            Serwisie stanowią przedmiot praw autorskich Administratora, chyba że wyraźnie wskazano
            inaczej. Kopiowanie, rozpowszechnianie lub wykorzystywanie tych treści w celach
            komercyjnych bez uprzedniej pisemnej zgody Administratora jest zabronione. Cytowanie
            fragmentów tekstu w celach niekomercyjnych, z podaniem źródła, jest dozwolone.
          </p>

          <h2>5. Obowiązki Użytkownika</h2>
          <p>Korzystając z Serwisu, Użytkownik zobowiązuje się nie podejmować działań polegających w szczególności na:</p>
          <ul>
            <li>próbach uzyskania nieautoryzowanego dostępu do systemów Serwisu,</li>
            <li>automatycznym pobieraniu treści Serwisu w sposób zakłócający jego działanie dla innych Użytkowników,</li>
            <li>wykorzystywaniu Serwisu do rozpowszechniania treści niezgodnych z prawem.</li>
          </ul>

          <h2>6. Odpowiedzialność</h2>
          <p>
            Serwis i Demo udostępniane są w stanie, w jakim się znajdują, bez gwarancji
            nieprzerwanego działania i bez gwarancji, że będą wolne od błędów — co jest naturalną
            konsekwencją tego, że projekt jest w trakcie rozwoju. Administrator dokłada starań, aby
            Serwis działał poprawnie, i reaguje na zgłoszenia błędów przesyłane drogą kontaktową
            wskazaną w punkcie 8.
          </p>

          <h2>7. Reklamacje</h2>
          <p>
            Zgłoszenia dotyczące działania Serwisu można przesyłać na adres e-mail wskazany w
            punkcie 8. Administrator ustosunkuje się do zgłoszenia w rozsądnym terminie,
            standardowo nie dłuższym niż 14 dni.
          </p>

          <h2>8. Kontakt</h2>
          <p>
            Wszelkie pytania dotyczące niniejszego regulaminu można kierować na adres{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Zasady przetwarzania danych
            osobowych opisuje odrębnie <Link href="/polityka-prywatnosci">polityka prywatności</Link>.
          </p>

          <h2>9. Zmiany regulaminu</h2>
          <p>
            Administrator może zmieniać niniejszy regulamin, w szczególności w związku z rozwojem
            Serwisu i Demo. Aktualna wersja regulaminu jest zawsze dostępna pod niniejszym adresem,
            a data na górze dokumentu wskazuje moment ostatniej aktualizacji.
          </p>

          <h2>10. Postanowienia końcowe</h2>
          <p>
            W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
            polskiego, w tym Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
          </p>
        </article>
      </Container>
    </>
  );
}
