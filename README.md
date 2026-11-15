# bot.Serwer-Minecraft

> VoltCraft: główny bot Discord serwera, łączenie kont komendą /minecraft

Główny bot VoltCraft. Komenda `/minecraft <kod>` łączy konto Discord z kontem z gry (kod z `/discord` w grze, zapis w `Accounts.Recover.DiscordId`).

| | |
|---|---|
| **Typ** | Bot Discord (discord.js) |
| **Wymaga** | `voltapi-sdk` (połączenie z Mongo, logowanie bota) |
| **Repo** | `qweyypl/bot.Serwer-Minecraft` |

## Uruchomienie

```bash
npm install
npm start
```

## Konfiguracja

- `.env`: tylko dane połączenia z Mongo dla `voltapi-sdk`.
- Token i ustawienia: `VOLT-BOT.Main` / `VOLT-BOT.Config` (dokument `VoltCraft`), teksty w `messages.json`.

## Komendy

| Komenda | Co robi |
|---|---|
| `/minecraft <kod>` | łączy konto Discord z kontem Minecraft |

## Wdrożenie

- pm2: `VoltCraft` w `/var/bots/VoltCraft`.
- `pm2 restart VoltCraft`
