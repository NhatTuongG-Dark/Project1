const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Xem độ trễ của bot',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s Ping\``)
            .setDescription(`\`\`\`ini\n[ ${client.ws.ping}ms ]\n\`\`\``)
            .setColor("RANDOM")
            .setFooter({ text: "© » gbao#3417|Trần Khánh Phương#8365" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};