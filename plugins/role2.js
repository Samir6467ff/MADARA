//V E N O M @ D E L E T E D E L E T E D E L E T E #level [❗].... role(level)
// (['lurk'])
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "مواطن 👨🏻‍💼", level: 0 }, { name: "فقير 😞", level: 3 }, 
      { name: "موظف 👨🏻‍🔧", level: 4 }, { name: "رجل اعمال 🧑🏻‍✈️", level: 6 }, 
      { name: "طباخ 👨🏻‍🍳", level: 8 }, { name: "عميل سري 🥷🏻", level: 12 }, 
      { name: "عسكري 💂🏻", level: 13 }, { name: "كاتب 📚", level: 14 }, 
      { name: "جاسوس 🕵🏻", level: 16 }, { name: "مصارع 🤼‍♂", level: 20 }, 
      { name: "قاضي 👩‍⚖", level: 24 }, { name: "لاعب كرة قدم ⚽", level: 28 }, 
      { name: "رسام 🧑🏻‍🎨", level: 32 }, { name: "مدير بنك 🏦", level: 36 },
      { name: "ظابط شرطة 👮‍♂️", level: 48 }, { name: "كاتب ✒️", level: 52 }, 
      { name: "ظابط جيش 🎖️", level: 56 }, { name: "ممثل 👨‍🎤", level: 60 }, 
      { name: "رئيس دولة 🤵🏻‍♂", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
  
