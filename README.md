# Click Faster Than AI

Jednoduchá webová hra v čistém **HTML, CSS a JavaScriptu** bez backendu.

## Jak hra funguje

1. Klikni na tlačítko **Start**.
2. Po náhodné prodlevě se aktivuje tlačítko **Klikni teď!**.
3. Klikni co nejrychleji – hra změří tvůj reakční čas v milisekundách.
4. Hra vygeneruje reakční čas AI (náhodně **150–350 ms**) a porovná výsledky.
5. Zobrazí se:
   - reakční čas uživatele,
   - reakční čas AI,
   - výsledek (uživatel vyhrál / AI vyhrála / remíza).

Tlačítko **Restart** vrátí hru do výchozího stavu.

## Spuštění lokálně

### Varianta A: Otevření souboru přímo

Stačí otevřít soubor `index.html` v prohlížeči.

### Varianta B: Lokální HTTP server (doporučeno)

Pokud máš Python 3:

```bash
python3 -m http.server 8000
```

Pak otevři:

```text
http://localhost:8000
```
