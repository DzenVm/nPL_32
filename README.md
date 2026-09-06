# Łamigłówka światła

Przeglądarkowa gra logiczna (koncentryczne pierścienie szkła + mieszanie
światła) i strona, która ją opisuje. Next.js 16 (App Router), React 19,
TypeScript, bez Tailwinda i bez frameworka do gier — silnik planszy to
czysty TypeScript testowany Vitestem, style to CSS Modules na natywnych
zmiennych CSS.

## Uruchomienie lokalne

```bash
npm install
npm run dev       # http://localhost:3000
npm run test      # testy silnika gry (Vitest)
npm run lint
npm run typecheck
npm run build      # build produkcyjny
```

Node 20.9+ wymagane (patrz `engines` w `package.json`).

## Struktura

- `src/lib/puzzle/` — silnik gry (rotacja pierścieni, mieszanie barw,
  sprawdzanie zwycięstwa) + `levels.ts` z sześcioma poziomami demo.
  Każdy poziom ma potwierdzoną przeszukiwaniem stanu (`tests/puzzle-engine.test.ts`)
  najkrótszą liczbę ruchów do rozwiązania.
- `src/components/game/PuzzleBoard.tsx` — playowalna plansza (SVG, bez canvas,
  bez zależności od biblioteki do gier).
- `src/components/home/` — sekcje strony głównej.
- `src/app/*/page.tsx` — pozostałe podstrony (zasady, o projekcie, poradnik,
  FAQ, kontakt, dokumenty prawne).
- `src/lib/consent.ts`, `src/lib/progress.ts` — dwa małe "store'y" oparte o
  `useSyncExternalStore` (zgoda na cookies i postęp w demo), zsynchronizowane
  z `localStorage`.
- `public/illustrations/*.svg` — ręcznie zrobione ilustracje (bez żadnego
  generatora obrazów).

## Zmienne środowiskowe

Zobacz `.env.example`. Obie są opcjonalne — bez nich strona działa normalnie,
tylko nie ładuje żadnego skryptu Google (patrz
`src/components/analytics/Analytics.tsx`). Skrypty i tak nie wystartują bez
zgody użytkownika w banerze cookies (kategorie: niezbędne / analityczne /
reklamowe, zgodnie z `polityka-cookies`).

## Deploy na Vercel

Projekt nie wymaga żadnej specjalnej konfiguracji poza standardowym importem
repozytorium w Vercel — to zwykła aplikacja Next.js (App Router), Vercel
wykrywa ją automatycznie.

1. Zaimportuj repozytorium w Vercel (New Project → wskaż to repo).
2. Framework Preset: Next.js (wykrywa się sam).
3. Jeśli będą używane Google Analytics / Google Ads, dodaj w
   Project Settings → Environment Variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_ADS_ID`
4. Deploy.
5. W Project Settings → Domains dodaj `bemookad.pro` (i ewentualnie
   `www.bemookad.pro` z przekierowaniem) i podepnij rekordy DNS zgodnie z
   instrukcją, którą pokaże Vercel po dodaniu domeny.

### Domena

Cała konfiguracja domeny jest scentralizowana w jednym miejscu:
`src/lib/site.ts` → stała `SITE_DOMAIN` (obecnie `bemookad.pro`). Zmiana tej
jednej wartości aktualizuje automatycznie: `metadataBase`, canoniczne
URL-e, `sitemap.xml`, `robots.txt`, dane JSON-LD oraz adres kontaktowy w
stopce i na stronie kontaktowej (`kontakt@bemookad.pro`).

Przed uruchomieniem produkcyjnym warto też uzupełnić w
`polityka-prywatnosci` pełne dane administratora (nazwę działalności / NIP /
adres), jeśli działalność zostanie do tego czasu zarejestrowana — obecna
treść identyfikuje administratora funkcjonalnie (przez adres kontaktowy),
co jest wystarczające na etapie przedpremierowym, ale RODO wymaga pełnej
identyfikacji administratora w produkcyjnym serwisie.
