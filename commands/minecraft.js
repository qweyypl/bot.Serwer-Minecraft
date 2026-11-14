const { SlashCommandBuilder, MessageFlags } = require('discord.js');
const { link, messages } = require('voltapi-sdk');

// Teksty są w VOLT-BOT.Messages (dokument VoltCraft, obiekt minecraft).
const text = (key, vars) => messages.text('VoltCraft', `minecraft.${key}`, vars);

module.exports = {
    get data() {
        return new SlashCommandBuilder()
            .setName('minecraft')
            .setDescription(text('description'))
            .addStringOption((option) => option.setName('kod').setDescription(text('option')).setRequired(true));
    },

    async execute(interaction) {
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
        const result = await link.redeem(interaction.options.getString('kod'), interaction.user);
        if (result?.linked) {
            await interaction.editReply(text('already', { nick: result.linked }));
            return;
        }
        await interaction.editReply(result ? text('success', { nick: result.nick }) : text('invalid'));
    },
};
