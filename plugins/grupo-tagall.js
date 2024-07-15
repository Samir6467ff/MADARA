let handler = async(m, { isOwner, groupMetadata, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `❐ رسالة : ${pesan}`
let teks = `*┌───⊷﹝المنشن⊰⚜⊱الجماعي﹞+⊷*\n❏ نقابة : *${groupMetadata.subject}*\n❏ الاعضاء \n${oi}\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `*└──────────────────⊷*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler

