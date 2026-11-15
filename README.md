# Serwer-Minecraft

Główny bot VoltCraft. Komenda `/minecraft <kod>` łączy konto Discord z kontem z gry (kod z `/discord` w grze, zapis w `Accounts.Recover.DiscordId`).

- **Typ:** Bot Discord (discord.js)
- **Wymaga:** `voltapi-sdk` (połączenie z Mongo, logowanie bota)
- **Repo:** `qweyypl/bot.Serwer-Minecraft`

---

## Spis

| Sekcja | Co znajdziesz |
|---|---|
| [Uruchomienie](#uruchomienie) | jak uruchomić lokalnie |
| [Konfiguracja](#konfiguracja) | gdzie są ustawienia |
| [Komendy](#komendy) | komendy |
| [Wdrożenie](#wdrożenie) | jak to chodzi na VPS |

---

## Uruchomienie

```bash
npm install
npm start
```

---

## Konfiguracja

- `.env`: tylko dane połączenia z Mongo dla `voltapi-sdk`.
- Token i ustawienia: `VOLT-BOT.Main` / `VOLT-BOT.Config` (dokument `VoltCraft`), teksty w `messages.json`.

---

## Komendy

| Komenda | Co robi |
|---|---|
| `/minecraft <kod>` | łączy konto Discord z kontem Minecraft |

---

## Wdrożenie

- pm2: `VoltCraft` w `/var/bots/VoltCraft`.
- `pm2 restart VoltCraft`
