//V E N O M @ D E L E T E D E L E T E D E L E T E #level [❗].... role(level)
// (['lurk'])
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "تلميذ🥋", level: 0 }, { name: "جنين🎑", level: 3 }, 
      { name: "قاهر💀", level: 4 }, { name: "مستذئب 🐺", level: 6 }, 
      { name: "قرصان🎴", level: 8 }, { name: "نينجا⚔️", level: 12 }, 
      { name: "صياد🎽", level: 13 }, { name: "بطل🇵🇸", level: 14 }, 
      { name: "ساحر🧙🏻‍♂️", level: 16 }, { name: "العملاق🌫️", level: 20 }, 
      { name: "ملك🤴🏻", level: 24 }, { name: "خارق🍥", level: 28 }, 
      { name: "هاشيرا🗡️", level: 32 }, { name: "شرير😈", level: 36 },
      { name: "اقوي شرينجان💥", level: 48 }, { name: "شيطان⚰️", level: 52 }, 
      { name: "ملك الشياطين👹", level: 56 }, { name: "هوكاجي⛰️", level: 60 }, 
      { name: "امبراطور🤴🏻", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
  
