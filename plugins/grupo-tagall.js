let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `❐ رسالة : ${pesan}`
let teks = `╭━〔 *⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `╰━━━━━[ *𝐇𝐀𝐑𝐋𝐄𝐘 𝐋𝐈𝐆𝐇𝐓* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
