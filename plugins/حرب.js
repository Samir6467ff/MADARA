const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastPalestine + 600000;
  if (new Date - global.db.data.users[m.sender].lastPalestine < 600000) throw `⚔️ *¡انتظر لحظة أيها المحارب القوي!* ⚔️\n\n*—◉ العودة إلى الحرب بعد ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🇵🇸 *انت الان شجاع لكي تحارب مع غزة انجازاتك:*\n\n🏹 *${pickRandom(global.Palestine)}*\n\n*¡اكسب لي شجاعتك ${hasil} 💵دولار!*`}, {quoted: m});
  global.db.data.users[m.sender].doller += hasil;
  global.db.data.users[m.sender].lastPalestine = new Date() * 1;
  enviando = false
};
handler.help = ['Palestine'];
handler.tags = ['xp'];
handler.command = /^(غزة|حرب|العدوان)$/i
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' دقيقه ' + seconds + ' ثانيه ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.Palestine = [
  'انت محارب شجاع لقد قتلت 10 من الصهاينة الاسرائيليون',
  'انت بطل فلسطيني تاريخي لقد انقزت 100 فلسطيني من الموت',
  'أنت تدير شركة للطعام الصحي، وتحول الطعام الي اهل غزة',
  'انت جسوس علي الصهيانة استمر في التجسس عليهم من اجل غزة',
  'أنت تعمل كجندي في حرب غزة، وتواجه التحديات بمهاراتك وشجاعتك',
  'أنت محقق خوارق، تكتشف الأسرار الخفية التي يخفيها الصهاينة',
  'أنت تقوم بتدريب اهل غزة لمقاومت، الجنود الاسرائيليون',
  'ستصبح أفضل حداد في غزة، حيث تصنع الأسلحة القوية لي اهل غزة لي محاربة الجيش الاشرائيلي',
  'انت طبيب رائع في غزة وشجاع لكي تعالج اهل غزة من دون خوف من الجيش الاسرائيلي',
  'انت مزارع شجاع في غزة لئنك تطعم اهل غزة',
  'انت الان مجند في كتائب القسام وشجاع للدافع عن اهل غزة وفلسطين',
  'انت الان مجند في حزب الله البناني وشجاع لكي تحمي اهل غزة وفلسطين كاملة',
  'انت تقوم بتطوير الاسلحة لي كتائب القسام وذالك شجاعة منك',
  'انت فنان اسطوري حيثو تبهر اهل غزة لكي ينسو همهم',
  'انت شجاع لئنك حمية طفلا فلسطينية من الغارات الاسرائيلية',
  'انت تدير مستشفي في غزة لئنك شجاع',
  'أنت جاسوس دولي، تتسلل إلى امريكا الداعمة الي العدوان الاسرائيلي لكي تجمع لي كتائب القسام معلومات عن العدوان الاسرائيلي',
  'أنت تستكشف الفضاء وتقوم باكتشافات مذهلة تمنحك رؤية فريدة للكون',
  'انت ساحر عظيم وتبهج الشعب الفلسطيني لكي ينسو همهم',
  'أنت عالم قوي، تخلق اختراعات اسلحة الي كتائب القسام يا شجاع',
  'أنت تدافع عن الشعب الفلسطيني ضد الجيش الاسرائيلي، وتقود كتائب القسام وتظهر شجاعتك في الحرب',
  'أنت محترف في فن التخفي، والتحرك في الظل وتنفيذ المهام السرية الي كتائب القسام',
  'أنت طاهٍ مشهور، وتقوم بإعداد أطباق لذيذة تُسعد الشعب الفلسطيني في جميع احوالهم',
];
