import { createHash } from 'crypto' 
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/d8ef67ebf82d35afc66c3.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`*┌───⊷﹝بــروفــايــل﹞⊷*
*▢〉🔖‣  الأســـــم :* 
*•* ${registered ? '' + name + ' ': ''}
*• @${who.replace(/@.+/, '')}*
*🔗 : wa.me/${who.split`@`[0]}*
*▢〉📱‣ : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*
${registered ? '*▢〉🎈‣ عـــمـــر:' + age + 'ســـنـــوات*' : ''}
*▢〉📇‣ مـــســـجـــل : ${registered ? '✅' : '❌'}*
*└──────────────────⊷*`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', str, fkontak, false, { contextInfo: { mentionedJid }}) 
  }
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
