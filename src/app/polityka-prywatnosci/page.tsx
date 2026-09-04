import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jakie dane są przetwarzane w związku z korzystaniem z serwisu, w jakim celu i na jakiej podstawie prawnej.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <PageIntro eyebrow="dokument prawny" title="Polityka prywatności" />
      <Container>
        <article className={prose.prose}>
          <p className={prose.meta}>Ostatnia aktualizacja: wrzesień 2026.</p>

          <h2>1. Administrator</h2>
          <p>
            Administratorem danych osobowych przetwarzanych w związku z korzystaniem z serwisu
            dostępnego pod adresem {SITE_URL} jest jego wydawca. Kontakt we wszystkich sprawach
            związanych z ochroną danych: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>2. Jakie dane przetwarzamy</h2>
          <p>Serwis przetwarza dane w trzech niezależnych zakresach:</p>
          <ul>
            <li>
              <strong>Dane techniczne niezbędne do działania strony</strong> — adres IP, typ
              przeglądarki i podstawowe logi zapisywane automatycznie przez infrastrukturę
              hostingową w celach bezpieczeństwa i diagnostyki awarii. Nie są one wykorzystywane do
              identyfikowania konkretnych osób.
            </li>
            <li>
              <strong>Dane z plików cookies</strong> — wyłącznie w kategoriach i na zasadach
              opisanych w <Link href="/polityka-cookies">polityce cookies</Link>. Cookies
              analityczne i reklamowe są ładowane dopiero po wyrażeniu zgody w banerze widocznym
              przy pierwszej wizycie.
            </li>
            <li>
              <strong>Dane podane dobrowolnie w kontakcie e-mailowym</strong> — adres e-mail
              nadawcy i treść wiadomości, wyłącznie w celu udzielenia odpowiedzi.
            </li>
          </ul>
          <p>
            Sam mechanizm gry — obracanie pierścieni, liczba ruchów, informacja o rozwiązanych
            poziomach demo — działa lokalnie w Twojej przeglądarce (localStorage) i nie jest
            wysyłany na żaden serwer.
          </p>

          <h2>3. Podstawy prawne przetwarzania</h2>
          <ul>
            <li>art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora) — dla logów technicznych niezbędnych do zapewnienia bezpieczeństwa serwisu;</li>
            <li>art. 6 ust. 1 lit. a RODO (zgoda) — dla cookies analitycznych i reklamowych;</li>
            <li>art. 6 ust. 1 lit. b RODO — dla korespondencji e-mailowej, jako działanie podejmowane na żądanie osoby kontaktującej się, przed zawarciem lub w ramach ewentualnej relacji.</li>
          </ul>

          <h2>4. Odbiorcy danych</h2>
          <p>Dane mogą być przetwarzane przez dostawców, z których korzysta serwis:</p>
          <ul>
            <li>dostawcę infrastruktury hostingowej, na której działa serwis;</li>
            <li>
              Google — wyłącznie jeśli wyrazisz zgodę na cookies analityczne lub reklamowe, w
              zakresie usług Google Analytics i Google Ads.
            </li>
          </ul>
          <p>
            Żaden z tych podmiotów nie otrzymuje danych w szerszym zakresie, niż wynika to z
            wybranej przez Ciebie zgody.
          </p>

          <h2>5. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
          <p>
            Dostawcy wymienieni w punkcie 4 mogą przetwarzać dane na serwerach zlokalizowanych poza
            EOG, w tym w Stanach Zjednoczonych. W takich przypadkach przekazanie odbywa się na
            podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub
            innego mechanizmu przewidzianego w RODO.
          </p>

          <h2>6. Okres przechowywania</h2>
          <p>
            Logi techniczne przechowywane są przez okres wynikający z konfiguracji dostawcy
            hostingu, standardowo nie dłużej niż kilkanaście miesięcy. Dane z cookies przechowywane
            są zgodnie z okresami wskazanymi w <Link href="/polityka-cookies">polityce cookies</Link>.
            Korespondencja e-mailowa przechowywana jest przez czas potrzebny do załatwienia sprawy
            oraz, jeśli to zasadne, przez okres przedawnienia ewentualnych roszczeń.
          </p>

          <h2>7. Twoje prawa</h2>
          <p>W zakresie przewidzianym przez RODO przysługuje Ci prawo do:</p>
          <ul>
            <li>dostępu do swoich danych i uzyskania ich kopii,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie,</li>
            <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
          </ul>
          <p>
            Zgodę na cookies analityczne i reklamowe możesz zmienić w dowolnym momencie przez link
            „Ustawienia cookies” w stopce strony. W pozostałych sprawach napisz na adres podany w
            punkcie 1.
          </p>

          <h2>8. Dobrowolność podania danych</h2>
          <p>
            Korzystanie z demo gry nie wymaga podania żadnych danych osobowych. Podanie adresu
            e-mail w wiadomości kontaktowej jest całkowicie dobrowolne, choć niezbędne, jeśli
            oczekujesz odpowiedzi.
          </p>

          <h2>9. Zautomatyzowane podejmowanie decyzji</h2>
          <p>
            Serwis nie podejmuje wobec użytkowników zautomatyzowanych decyzji wywołujących skutki
            prawne. Jeśli wyrazisz zgodę na cookies reklamowe, Google może w ograniczonym zakresie
            dobierać wyświetlane Ci reklamy na podstawie Twojej aktywności — możesz to wyłączyć w
            każdej chwili w ustawieniach cookies opisanych w punkcie 7.
          </p>

          <h2>10. Zmiany tej polityki</h2>
          <p>
            Serwis jest w aktywnym rozwoju, więc treść tej strony może się zmieniać wraz z nowymi
            funkcjami. Data na górze dokumentu zawsze wskazuje moment ostatniej aktualizacji.
          </p>
        </article>
      </Container>
    </>
  );
}
