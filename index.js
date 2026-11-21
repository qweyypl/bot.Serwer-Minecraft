const { Client, GatewayIntentBits, Events } = require('discord.js');
const sdk = require('voltapi-sdk');

const BOT_ID = 'VoltCraft';
// Komendy slash: każdy moduł eksportuje { data, execute }.
const commands = [require('./commands/minecraft')];

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
sdk.bot.setupShutdownHook(client);

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    try {
        await commands.find((c) => c.data.name === interaction.commandName)?.execute(interaction);
    } catch (error) {
        console.error(`Błąd komendy /${interaction.commandName}:`, error);
    }
});

(async () => {
    await sdk.mongo.connect();
    const main = await sdk.bot.main(BOT_ID);
    await sdk.messages.load(BOT_ID, require('./messages.json'));

    client.once('clientReady', async () => {
        console.log(`Zalogowano jako ${client.user.tag}.`);
        sdk.bot.startActivity(client, BOT_ID);
        sdk.sync.start(client);
        sdk.verify.start(client, BOT_ID);

        const guild = await client.guilds.fetch(main.Discord.Guild).catch(() => null);
        if (guild) {
            await guild.commands.set(commands.map((command) => command.data));
        } else {
            console.error(`Nie można zarejestrować komend — serwer (${main.Discord.Guild}) niedostępny.`);
        }
    });

    await sdk.bot.login(client, main.Discord.Token);
})();
