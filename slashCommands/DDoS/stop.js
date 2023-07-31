const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
var photovip2 = ayarlar['photovip2'];
var randomgif = photovip2[Math['floor']((Math['random']() * photovip2['length']))];
var roleID1 = ayarlar.roleID1;

module.exports = {
    name: 'stop',
    description: 'Dừng cuộc tấn công',
    type: 'CHAT_INPUT',
    cooldown: 10,

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID3))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID1}> mới được dùng lệnh này.`)
            .setFooter('© Developer: gbao#3417|Trần Khánh Phương#8365', img)
            .setTimestamp(),
        ],
      });

        var exec = require('child_process').exec
                exec(`taskkill /f /im node.exe`, (error, stdout, stderr) => {
            });
            console.log('Dừng lại tất cả cuộc tấn công:' +  interaction.guild.id)
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(version)
                .setDescription("```css\n[ TẤT CẢ CUỘC TẤN CÔNG ĐÃ DỪNG LẠI ]\n\```")
                .setFooter(':copyright: Developer: gbao#3417|Trần Khánh Phương#8365', img)
                .setTimestamp()
            interaction.reply({ embeds: [embed] });
        }       
}