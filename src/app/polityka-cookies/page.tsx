import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import prose from "@/components/ui/Prose.module.css";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description: "Jakie pliki cookies i podobne technologie są używane w serwisie, w jakim celu i jak długo są przechowywane.",
  alternates: { canonical: "/polityka-cookies" },
};

export default function PolitykaCookiesPage() {
  return (
    <>
      <PageIntro eyebrow="dokument prawny" title="Polityka cookies" />
      <Container>
        <article className={prose.prose}>
          <p className={prose.meta}>Ostatnia aktualizacja: wrzesień 2026.</p>

          <p>
            Serwis korzysta z plików cookies oraz podobnych technologii przechowywania danych w
            przeglądarce (localStorage), podzielonych na trzy kategorie zgodne z banerem zgody
            widocznym przy pierwszej wizycie.
          </p>

          <h2>Niezbędne</h2>
          <p>
            Działają zawsze, niezależnie od wyboru w banerze — bez nich strona nie mogłaby
            zapamiętać podstawowych ustawień.
          </p>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Cel</th>
                <th>Czas przechowywania</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>zgoda-cookies-v1</td>
                <td>Zapamiętanie Twojego wyboru w banerze zgody, żeby nie pytać o niego przy każdej wizycie.</td>
                <td>Do ręcznego usunięcia danych strony w przeglądarce.</td>
              </tr>
              <tr>
                <td>postep-demo-v1</td>
                <td>Zapamiętanie, które z sześciu poziomów demo zostały już rozwiązane.</td>
                <td>Do ręcznego usunięcia danych strony w przeglądarce.</td>
              </tr>
            </tbody>
          </table>

          <h2>Analityczne</h2>
          <p>
            Ładowane wyłącznie po wyrażeniu zgody. Pozwalają zorientować się, które poziomy są za
            trudne, a które pomijane — w postaci zbiorczych, zanonimizowanych statystyk, bez
            budowania profilu konkretnej osoby.
          </p>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Dostawca</th>
                <th>Typowy czas przechowywania</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga, _ga_*</td>
                <td>Google Analytics</td>
                <td>Do 2 lat</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>Do 24 godzin</td>
              </tr>
            </tbody>
          </table>

          <h2>Reklamowe</h2>
          <p>
            Ładowane wyłącznie po wyrażeniu zgody. Służą do pomiaru skuteczności kampanii
            reklamowych, dzięki którym odwiedzający w ogóle trafiają na tę stronę.
          </p>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Dostawca</th>
                <th>Typowy czas przechowywania</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_gcl_au i pokrewne</td>
                <td>Google Ads</td>
                <td>Zwykle do 90 dni</td>
              </tr>
            </tbody>
          </table>

          <h2>Skrypty analityczne i reklamowe ładują się dopiero po zgodzie</h2>
          <p>
            Kod odpowiedzialny za Google Analytics i Google Ads nie wykonuje się w ogóle, dopóki
            nie zaznaczysz odpowiedniej kategorii w banerze albo w ustawieniach cookies. Brak
            zgody oznacza brak jakiegokolwiek żądania sieciowego do tych usług — nie tylko brak
            zapisu danych.
          </p>

          <h2>Jak zmienić swój wybór</h2>
          <p>
            W stopce każdej strony znajduje się link „Ustawienia cookies”, który otwiera ten sam
            panel co przy pierwszej wizycie. Możesz w nim w każdej chwili włączyć albo wyłączyć
            kategorie analityczną i reklamową. Możesz też usunąć pliki cookies i dane
            localStorage bezpośrednio w ustawieniach swojej przeglądarki — wtedy baner zgody
            pojawi się ponownie przy kolejnej wizycie.
          </p>

          <h2>Podstawa prawna</h2>
          <p>
            Cookies niezbędne są stosowane na podstawie art. 6 ust. 1 lit. f RODO (prawnie
            uzasadniony interes w postaci zapewnienia podstawowego działania strony). Cookies
            analityczne i reklamowe są stosowane wyłącznie na podstawie Twojej zgody (art. 6 ust. 1
            lit. a RODO oraz art. 173 Prawa telekomunikacyjnego), którą możesz wycofać w dowolnym
            momencie bez wpływu na zgodność z prawem wcześniejszego przetwarzania.
          </p>
        </article>
      </Container>
    </>
  );
}
