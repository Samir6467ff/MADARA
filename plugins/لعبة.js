const _0x4be383 = _0x4729;

function _0x4729(_0x325430, _0x20a4f6) {
    const _0x472903 = _0x20a4();
    _0x4729 = function (_0x5e0ffa, _0x3a7ff6) {
        _0x5e0ffa = _0x5e0ffa - 0x0;
        let _0x9b1c24 = _0x472903[_0x5e0ffa];
        return _0x9b1c24;
    };
    return _0x4729(_0x325430, _0x20a4f6);
}(function (_0x5d91bb, _0x4b328f) {
    const _0x59e2e1 = _0x4729;
    const _0x3bfc7d = _0x5d91bb();
    while (!![]) {
        try {
            const _0x1b00be = -parseInt(_0x59e2e1(0x9)) / 0x1 * (-parseInt(_0x59e2e1(0xc)) / 0x2) + parseInt(_0x59e2e1(0x8)) / 0x3 + parseInt(_0x59e2e1(0x1)) / 0x4 * (-parseInt(_0x59e2e1(0x1d)) / 0x5) + parseInt(_0x59e2e1(0xa)) / 0x6 + parseInt(_0x59e2e1(0x11)) / 0x7 + parseInt(_0x59e2e1(0x1b)) / 0x8 * (parseInt(_0x59e2e1(0x2)) / 0x9) + -parseInt(_0x59e2e1(0x1a)) / 0xa * (parseInt(_0x59e2e1(0xd)) / 0xb);
            if (_0x1b00be === _0x4b328f) {
                break;
            } else {
                _0x3bfc7d['push'](_0x3bfc7d['shift']());
            }
        } catch (_0x47c827) {
            _0x3bfc7d['push'](_0x3bfc7d['shift']());
        }
    }
}(_0x20a4, 0x6d526));
const handler = async (_0x539a2f, {
    conn: _0x381180,
    text: _0xc66c29,
    command: _0x55f077,
    usedPrefix: _0x122673,
    args: _0x107239
}) => {
    const _0x4ed048 = _0x4729;
    const _0x39b2bc = _0x4ed048(0x3);
    const _0x1dbec1 = global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f['sender']][_0x4ed048(0x20)] + 0x2710;
    if (new Date() - global['db']['data'][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]]['wait'] < 0x2710) throw _0x4ed048(0x19) + Math[_0x4ed048(0x21)]((_0x1dbec1 - new Date()) / 0x3e8) + _0x4ed048(0x18);
    if (!_0x107239[0x0]) return _0x381180[_0x4ed048(0x15)](_0x539a2f['chat'], _0x4ed048(0x10) + (_0x122673 + _0x55f077) + ' حجر*\x0a*◉ ' + (_0x122673 + _0x55f077) + _0x4ed048(0xb) + (_0x122673 + _0x55f077) + _0x4ed048(0x17), _0x539a2f);
    let _0x865aa5 = Math[_0x4ed048(0x1c)]();
    if (_0x865aa5 < 0.34) {
        _0x865aa5 = 'حجر';
    } else if (_0x865aa5 > 0.34 && _0x865aa5 < 0.67) {
        _0x865aa5 = 'مقص';
    } else {
        _0x865aa5 = _0x4ed048(0x12);
    }
    const _0x5682d3 = _0xc66c29['toLowerCase']();
    if (_0x5682d3 == _0x865aa5) {
        global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] += 0x1f4;
        _0x539a2f[_0x4ed048(0x15)]('*🔰 تعادل!*\x0a\x0a*👈🏻 انت: ' + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + '*\x0a*🎁 الجائزه +500 XP*');
    } else if (_0xc66c29 == _0x4ed048(0x12)) {
        if (_0x865aa5 == _0x4ed048(0x23)) {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f['sender']][_0x4ed048(0xf)] += 0x3e8;
            _0x539a2f[_0x4ed048(0x15)]('*🥳 عاش كسبتني! 🎉*\x0a\x0a*👈🏻 انت: ' + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + '*\x0a*🎁 الجائزة +1000 XP*');
        } else {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]]['exp'] -= 0x12c;
            _0x539a2f['reply'](_0x4ed048(0x4) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x13));
        }
    } else if (_0xc66c29 == 'حجر') {
        if (_0x865aa5 == _0x4ed048(0x12)) {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] += 0x3e8;
            _0x539a2f[_0x4ed048(0x15)](_0x4ed048(0x5) + _0x5682d3 + '*\x0a*👈🏻 البوت: ' + _0x865aa5 + _0x4ed048(0x1e));
        } else {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] -= 0x12c;
            _0x539a2f['reply'](_0x4ed048(0x4) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x13));
        }
    } else if (_0x5682d3 == _0x4ed048(0x7)) {
        if (_0x865aa5 == _0x4ed048(0x12)) {
            global['db']['data'][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] += 0x3e8;
            _0x539a2f[_0x4ed048(0x15)]('*🥳 عاش كسبتني! 🎉*\x0a\x0a*👈🏻 انت: ' + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x1e));
        } else {
            global['db']['data'][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] -= 0x12c;
            _0x539a2f[_0x4ed048(0x15)](_0x4ed048(0x4) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x13));
        }
    } else if (_0x5682d3 == _0x4ed048(0x12)) {
        if (_0x865aa5 == _0x4ed048(0x23)) {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f['sender']][_0x4ed048(0xf)] += 0x3e8;
            _0x539a2f['reply']('*🥳 عاش كسبتني! 🎉*\x0a\x0a*👈🏻 انت: ' + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x1e));
        } else {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]]['exp'] -= 0x12c;
            _0x539a2f['reply'](_0x4ed048(0x4) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x13));
        }
    } else if (_0x5682d3 == _0x4ed048(0x23)) {
        if (_0x865aa5 == _0x4ed048(0x7)) {
            global['db'][_0x4ed048(0x16)]['users'][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] += 0x3e8;
            _0x539a2f[_0x4ed048(0x15)](_0x4ed048(0x5) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x1e));
        } else {
            global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f[_0x4ed048(0x1f)]][_0x4ed048(0xf)] -= 0x12c;
            _0x539a2f[_0x4ed048(0x15)](_0x4ed048(0x4) + _0x5682d3 + _0x4ed048(0x24) + _0x865aa5 + _0x4ed048(0x13));
        }
    }
    global['db'][_0x4ed048(0x16)][_0x4ed048(0x0)][_0x539a2f['sender']][_0x4ed048(0x20)] = new Date() * 0x1;
};
handler[_0x4be383(0x22)] = ['ppt'];
handler[_0x4be383(0x14)] = [_0x4be383(0xe)];
handler[_0x4be383(0x6)] = /^(لعبة|العب)$/i;

function _0x20a4() {
    const _0x53e277 = ['*☠️ كسبتك! ❌*\x0a\x0a*👈🏻 انت: ', '*🥳 عاش كسبتني! 🎉*\x0a\x0a*👈🏻 انت: ', 'command', 'مقص', '391680NGgBLv', '501gLSMgw', '4508676MRjwMO', ' ورقه*\x0a*◉ ', '2722drZOCb', '11vgRUpp', 'games', 'exp', '*حجر 🗿, ورقه📄 𝐨 مقص ✂️*\x0a\x0a*—◉ أختار هشان تلعب مع تلبوت مثل:*\x0a*◉ ', '1767416qWstYv', 'ورقه', '*\x0a*❌ الخسائر -300 XP*', 'tags', 'reply', 'data', ' مقص*\x0aꨁ+201280244814\x0aꨁ*𝐍𝐀𝐑𝐔𝐓𝐎↳💧↲ 𝐁𝐎𝐓*', ' وقم بالعب مره اخري*', '*🕓  انتظر حتى', '14076770tjdvZO', '3280fabUyu', 'random', '20IgCFwh', '*\x0a*🎁 الجائزة +1000 XP*', 'sender', 'wait', 'floor', 'help', 'حجر', '*\x0a*👈🏻 البوت: ', 'users', '350396quUEbc', '8550vxkfsA', 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'];
    _0x20a4 = function () {
        return _0x53e277;
    };
    return _0x20a4();
}
export default handler;
