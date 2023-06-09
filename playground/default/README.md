# Frontend vizsga alap | 2023.5

> Az alap tartalmaz minden olyan csomagot amely a vizsga teljesítéséhez szükséges.

## Tartalom {#content}

- [Tartalom](#content)
- [Node és a Vite kezelése](#vite)
- [Mappaszerkezet](#directory)
- [Tesztelés](#testing)

## Node és a Vite kezelése {#vite}

### Telepítés

Első indítás alkalmával:

```bash
npm install
```

Egyéb csomagok telepítése:

```bash
npm install <csomag_neve>
```

Fejlesztői csomagok telepítése:

```bash
npm install --save-dev <csomag_neve>
```

### Fejlesztői szerver indítás

A fejlesztői szervet a következő paranccsal tudod elnidítani. Ezt követően a jelzett linken éred el a szervert.

```bash
npm run dev
```

### Közzétenni kívánt verzió előállítása

A következő parancs futtatásával egy olyan mappát állít elő a Vite, amit fel tudsz tölteni egy statikus tárhelyre (Pl. [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/)), ezzel elérhetővé téve az elkészült oldaladat. Az elkészült fájlokat a `dist` könyvtárban találod.

```bash
npm run build
```

Ahhoz, hogy ellenőrizni tudd, hogy helyesen működik az alkalmazásod, a következő paranccsal egy olyan szervert tudsz elindítani, ami az elkészült fájlokat mutatja meg neked. Ekkor már fejlesztői eszközök nem fognak működni az oldalon.

```bash
npm run preview
```

## Mappaszerkezet {#directory}

- `components`: Újrahasnosítható komponensek
  - `bootstrap`: Bootstrap elemek alapján készült komponensek
  - `layout`: Az olal elrendezéséhez tartozó komponensek (Navbar, Footer)
- `pages`: Az oldalakat tartalmazó komponensek
- `router`: Routerhez tartozó scriptek
  - `guards`: Router Guardokat tartalmazó scriptek
- `stores`: Pinia tárolók
- `test`: Unit tesztek
- `utils`: Kiegészítű scriptek, pl.: Axios

## Tesztelés {#testing}

A következő parancs segítségével le tudod futtatni a unit teszteket a projektben és ezek sikerességét egy megnyiló oldaon tudod megtekinteni.

```bash
npm run test
```

A következő parancs a teszt lefedettségét fogja ellenőrizni neked:

```bash
npm run test:coverage
```
