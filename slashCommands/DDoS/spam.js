const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot1'];
var roleID5 = ayarlar['roleID5'];
var img = ayarlar['img'];
var photovip1 = ayarlar['photovip1'];
var randomgif = photovip1[Math['floor']((Math['random']() * photovip1['length']))];
module['exports'] = {
    name: 'spam',
    description: 'Spam Sms Ultraman (Super)',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [{
        name: 'version',
        description: 'vui long chon phien ban',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'SMS-V1'}`,
            value: `${'SMS-V1'}`,
            inline: true
        }]
    }, {
        name: 'phone',
        description: 'Nhap so dien thoai spam',
        required: true,
        type: 'STRING'
    }, {
        name: 'threads',
        description: 'Nhap so luong spam',
        required: true,
        type: 'STRING'
      }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID5)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID5}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 Developer: gbao#3417|Trần Khánh Phương#8365'
                })['setTimestamp']()]
            })
        };
        const _0xf396x9 = _0xf396x8['options']['getString']('version');
        const _0xf396xa = _0xf396x8['options']['getString']('phone');
        const _0xf396x0 = _0xf396x8['options']['getString']('threads');
        if (_0xf396x9 === 'SMS-V1') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'python methods/L7/'}${_0xf396xb}${'.py '}${_0xf396xa}${' 100'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`👤 User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`📱 Phone:`**',
                value: `${' [ '}${_0xf396xa}${' ] '}`,
                inline: true
            }, {
                name: '**`🌐 Version:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`💠 Threads:`**',
                value: `${' [ '}${_0xf396x0}${' ] '}`,
                inline: true
            }, {               
                name: '**`🏷 Plan:`**',
                value: `${' [ FREE ] '}`,
                inline: true
            }, {
                name: '**`☯️ Bot:`**',
                value: `${' [ SMS K-JUKIE ] '}`,
                inline: true
            }, {      
                name: '**`👑 Admin:`**',
                value: `${' [ Ng Duc Kien ] '}`,
                inline: true
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('LOADING...')['setImage']('https://i.pinimg.com/originals/fa/89/38/fa893857327bbc5f67587c9536f27a25.gif')['setFooter']('\xA9 Developer: K-JUKIE', img)['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }
    }
}