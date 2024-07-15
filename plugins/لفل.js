import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
 let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/moyt.jpg')
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
      let lvl = `╭━━━[ *~الـتصـنـيف~ | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┇ *🤴🏼 الاسم* : ${name} ღ
┇ *🔮 الفل :* *${user.level}*
┇ *♟️ مصنف :* ${role}
┇ *🤖 نقاط الخبرة :* *${user.exp - min}/${xp}*
┇*تحتاج ${max - user.exp} من نقاط الخبرة للوصول الي مستوي جديد*
╰━━━〔 👑 15.4.9 〕━━⬣`
conn.sendFile(m.chat, pp, 'levelup.jpg', lvl, m)
    }

    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `عاش يحب! ${conn.getName(m.sender)} المستوي: ${user.level}`
        let str = `╭━━━[ *~الـتصـنـيف~ | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┇👀 *المستوي السابق :* *${before}*
┇🎉 *المستوي الحالي :* *${user.level}*
┇♟️ *التصنيف :* ${role} 
╰━━━〔 👑 15.4.9 〕━━⬣`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, pp, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
await delay(5 * 5000)  
}
handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'رانك', 'لفل'] 

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/*import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn }) => {
    let name = conn.getName(m.sender)
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/killua.jpg')
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let txt = `
┓━━【 *الـتصـنـيف* 】━━┏
☎️ الـرقـم : *${name}*
🚒 الـلـفـل : *${user.level}*
♨️ الـاكـس بـي : *${user.exp - min}/${xp}*
♟️ الـتـصـنيـف : *${user.role}*

ناقـصـك *${max - user.exp}* من *الـاكس  بـي* لـلـصعود الـى لفـل جـديـد
`.trim()
try {
  let imgg = API('fgmods', '/api/rank', {
    username: name,
    xp: user.exp - min,
    exp: xp,
    avatar: pp,
    level: user.level,
    background: 'https://i.ibb.co/CsNgBYw/qiyana.jpg'
}, 'apikey')

    conn.sendFile(m.chat, pp, 'level.jpg', txt, m)
} catch (e) {
    m.reply(txt)
}
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      user.role = global.rpg.role(user.level).name

        let str = `
┓━━【 *لفل جديد* 】━━┏
♨️ اللفل القديم : *${before}*
🎉 اللفل الجديد : *${user.level}*
♟️ التصنيف : *${user.role}*
`.trim()
         try {
            let img = API('fgmods', '/api/levelup', { 
                avatar: pp 
             }, 'apikey')
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['رانك', 'لفل', 'levelup', 'lvl'] 

export default handler*/













import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js' 

//import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false
//let handler = async (m, { conn }) => {
//let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
throw `╭━━━[ *~الـتصـنـيف~ | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┇ *🤴🏼 الاسم* : ${name} ღ
┇ *🔮 الفل :* *${user.level}*
┇ *♟️ مصنف :* ${role}
┇ *🤖 نقاط الخبرة :* *${user.exp - min}/${xp}*
┇*تحتاج ${max - user.exp} من نقاط الخبرة للوصول الي مستوي جديد*
╰━━━〔 👑 15.4.9 〕━━⬣
`.trim()}
        
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let teks = `عاش يا حب! ${conn.getName(m.sender)} المستوي: ${user.level}`
let str = `╭━━━[ *~الـتصـنـيف~ | 𝙇𝙀𝙑𝙀𝙇* ]━━━━⬣
┇👀 *المستوي السابق :* *${before}*
┇🎉 *المستوي الحالي :* *${user.level}*
┇♟️ *التصنيف :* ${role} 
╰━━━〔 👑 15.4.9 〕━━⬣`.trim()
try {
const img = await levelup(teks, user.level)
conn.sendMessage(m.chat, {image: {url: gataImg}, caption: str, mentions: conn.parseMention(str)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
} catch (e) {
m.reply(str)
}}}
handler.help = ['levelup']
handler.tags = ['xp']
handler.command = ['رانك', 'lvl', 'لفل', 'level'] 
export default handler
    
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}    

