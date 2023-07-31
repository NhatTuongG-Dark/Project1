const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Xem Info Admin',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : CgbxTKP ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : ccxcc ]\n\`\`\`                                               
                             \`\`\`ini\n[ 📱 Phone : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 💒 City : Ho Chi MInh ]\n\`\`\`
                             \`\`\`ini\n[ 👉 Hobbies : Xem ses,.. ]\n\`\`\`
                             \`\`\`ini\n[ 💚 Crush Name : đéo có dc chx ]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Facebook  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 📌 Github  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 🎧 Music  : MMB.. ]\n\`\`\`



`)
            .setColor("RANDOM")
            .setFooter({ text: "© » gbao#3417|Trần Khánh Phương#8365" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};