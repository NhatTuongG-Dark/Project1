const { MessageEmbed } = require('discord.js');
module['exports'] = {
    name: 'buyplan',
    description: 'Mua Plan',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`MUA PLAN K-JUKIE DISCORD\``)
            .setDescription(`\n**[ 🔰 PLAN 🔰 ]**\n
                            \n📩 SMS : 19K/VINH VIEN\n
                            \n💭 BASIC : 29K/VINH VIEN\n
                            \n💮 VIP : 49K/VINH VIEN\n
                            \n💠 SUPER : 99K/VINH VIEN\n
                            \n❄ MASTER : 139K/VINH VIEN\n
                            \n☢ 𝘈𝘕𝘐𝘔𝘌 : 55k/1MONTH\n



`)
.setColor("RANDOM")
            .setFooter({ text: "© » gbao#3417|Trần Khánh Phương#8365" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};
