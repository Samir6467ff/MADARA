let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*بل التكت بتاعها 🐧*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🐧', key: m.key } })
  }

   if (/^عبيط|يا عبيط$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بطل تنمر يسطا 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🥺💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو هارلي لايت طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمي مادارا ياورع 🐢*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
}

 if (/^يابوت|يا بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هممممم وش في انت كمان 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
 } 

   if (/^مادارا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*قلب مادارا 🐢💗*',m) //wm, null, [['Menu', '#menu']], m) botones :v
await conn.sendMessage(m.chat, { react: { text: '💗', key: m.key } })
   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *🗿 دزها يلا انا عمك*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*امشي يابت غوري مش ناقصة تلزيق 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^هارلي لايت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*عمو هارلي 🦦*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^مصر/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ام الدنيا 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هزعلك لو هزرت معايا تاني 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*معرفش انت تعرف؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*شغال يا حب 🐼*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وانت مالك بيا روح نام* 🗿`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*نورت البيت😂❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*دزها بس 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عارفين ف اسكت احسن لك🥱*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الشارع الي وراه 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*الحمد لله و انت 🐧*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 if (/^لاو ساما$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صديق لايت الروح بل الروح 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 }
  
 } 
 return !0 } 
 export default handler
