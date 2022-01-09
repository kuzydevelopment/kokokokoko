const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");
const  Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    
    isim: "help", 
    alternatifler: ["yardım"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     
      if(en) {
        const help = new MessageEmbed()
        .setTitle(`・ Help Menu`)
        .setDescription(`Hi, Welcome to the Bot's Help menu.
   You can travel between menus with the following emojes.
  
   Emojis;
   <:menu:929364033231015946> ・ Help Menu
   <:members:897863115121786900> ・ User Menu
   <:yetkili:897863178942312498> ・ Moderation Menu
   <:bot:897863178787102770> ・ Bot Menu
   <:bakm:897863115176292422> ・ Botlist Menu
   <:yt:925438536595951636> ・ Subcriber Menu
   <:hashtag:929025834755436624> ・ Other Menu
  `)
        .setFooter(`Elenor - Help Menu` )
        
        const row = new MessageActionRow()
        .addComponents(
          
          new MessageButton()
         .setCustomId('helpb')
         .setStyle('SECONDARY')
         .setEmoji("<:menu:929364033231015946>")
           
             )
        .addComponents(
          
     new MessageButton()
    .setCustomId('userb')
    .setStyle('SECONDARY')
    .setEmoji("<:members:897863115121786900>")
      
        )
        .addComponents(
          
     new MessageButton()
    .setCustomId('modb')
    .setStyle('SECONDARY')
    .setEmoji("<:yetkili:897863178942312498>")
      
        )
        .addComponents(
          
     new MessageButton()
    .setCustomId('botb')
    .setStyle('SECONDARY')
    .setEmoji("<:bot:897863178787102770>")
      
        )
        .addComponents(
          
          new MessageButton()
         .setCustomId('botlistb')
         .setStyle('SECONDARY')
         .setEmoji("<:bakm:897863115176292422>")
           
             )
             
                 const row2 = new MessageActionRow()
                 .addComponents(
          
                  new MessageButton()
                 .setCustomId('subb')
                 .setStyle('SECONDARY')
                 .setEmoji("<:yt:925438536595951636>")
                   
                     )
                 .addComponents(
          
                  new MessageButton()
                 .setCustomId('otherb')
                 .setStyle('SECONDARY')
                 .setEmoji("<:hashtag:929025834755436624>")
                   
                     )
        
   message.channel.send({embeds: [help], components: [row, row2]}).then(async function(mesaj) {
  
    const filter = i => i.user.id === message.author.id;
    mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
     if(button.customId === "helpb") {
  
      const help = new MessageEmbed()
      .setTitle(`・ Help Menu`)
      .setDescription(`Hi, Welcome to the Bot's Help menu.
  You can travel between menus with the following emojes.
  
  Emojis;
  <:menu:929364033231015946> ・ Help Menu
  <:members:897863115121786900> ・ User Menu
  <:yetkili:897863178942312498> ・ Moderation Menu
  <:bot:897863178787102770> ・ Bot Menu
  <:bakm:897863115176292422> ・ Botlist Menu
  <:yt:925438536595951636> ・ Subcriber Menu
  <:hashtag:929025834755436624> ・ Other Menu
  `)
      .setFooter(`Elenor - Help Menu` )
    button.update({embeds: [help]})
    }
        if(button.customId === "userb") {
          const user = new MessageEmbed()
        .setTitle(`・ User Menu`)
        .setDescription(`<:members:897863115121786900> ・ \`?avatar\` -> Shows your avatar
        <:members:897863115121786900> ・ \`?userinfo\` -> Indicates user information`)
        .setFooter(`Elenor - User Menu` )
          button.update({embeds: [user]})
          
        }
     if(button.customId === "modb") {
          const mod = new MessageEmbed()
        .setTitle(`・ Moderation Menu`)
        .setDescription(`<:yetkili:897863178942312498> ・ \`?clear\` -> You can delete the message`)
        .setFooter(`Elenor - Moderation Menu` )
          button.update({embeds: [mod]})
          
        }
     if(button.customId === "botb") {
          const bot = new MessageEmbed()
        .setTitle(`・ Bot Menu`)
        .setDescription(`<:bot:897863178787102770> ・ \`?ping\` -> Shows the ping of the bot
        <:bot:897863178787102770> ・ \`?statistic\` -> Shows the statistics of the bot
        <:bot:897863178787102770> ・ \`?bug\` -> You report a bug in the bot
        <:bot:897863178787102770> ・ \`?language\` -> You set the bot's language on the server
        <:bot:897863178787102770> ・ \`?invite\` -> You invite the bot`)
        .setFooter(`Elenor - Bot Menu` )
          button.update({embeds: [bot]})
          
        }
        if(button.customId === "botlistb") {
          const bot = new MessageEmbed()
        .setTitle(`・ Botlist Menu`)
        .setDescription(`<:bakm:897863115176292422> ・ \`?b-addchannel\` -> You set the bot add channel
        <:bakm:897863115176292422> ・ \`?b-logchannel\` -> You set the bot log channel
        <:bakm:897863115176292422> ・ \`?b-officerrole\` -> You set the officer role
        <:bakm:897863115176292422> ・ \`?b-developerrole\` -> You set the developer role
        <:bakm:897863115176292422> ・ \`?b-botrole\` -> You set the botlist bot role
        <:bakm:897863115176292422> ・ \`?b-nameprefix\` -> Allows the bot to type the prefix in its name
        <:bakm:897863115176292422> ・ \`?addbot\` -> Add your bot
        <:bakm:897863115176292422> ・ \`?confirmbot\` -> You confirm the bot
        <:bakm:897863115176292422> ・ \`?rejectbot\` -> You reject the bot`)
        .setFooter(`Elenor - Botlist Menu` )
          button.update({embeds: [bot]})
          
        }
  
        if(button.customId === "subb") {
          const sub = new MessageEmbed()
        .setTitle(`・ Subscriber Menu`)
        .setDescription(`<:yt:925438536595951636> ・ \`?sub-subscriberrole\` -> You set the subscriber role
        <:yt:925438536595951636> ・ \`?sub-officerrole\` -> You set the subscriber authority role
        <:yt:925438536595951636> ・ \`?sub\` -> Subscribe to the person you are tagging gives the role
        <:yt:925438536595951636> ・ \`?sub-stats\` -> You look at your Subscriber Role Statistics`)
        .setFooter(`Elenor - Subscriber Menu` )
          button.update({embeds: [sub]})
          
        }
        if(button.customId === "otherb") {
          const sub = new MessageEmbed()
        .setTitle(`・ Other`)
        .setDescription(`<:hashtag:929025834755436624> ・ \`?yt-together\` -> Open the Youtube`)
        .setFooter(`Elenor - Other` )
          button.update({embeds: [sub]})
          
        }
        
   })
   })
  }
  if(tr) {
    const help = new MessageEmbed()
    .setTitle(`・ Yardım Menüsü`)
    .setDescription(`Merhaba, Botun Yardım menüsüne hoş geldiniz.
    Menüler arasında aşağıdaki emojilerle gezinebilirsiniz.

Emojiler;
<:menu:929364033231015946> ・ Yardım Menüsü
<:members:897863115121786900> ・ Kullanıcı Menüsü
<:yetkili:897863178942312498> ・ Moderasyon Menüsü
<:bot:897863178787102770> ・ Bot Menüsü
<:bakm:897863115176292422> ・ Botlist Menüsü
<:yt:925438536595951636> ・ Abone Menüsü
<:hashtag:929025834755436624> ・ Diğer
`)
    .setFooter(`Elenor - Yardım Menüsü` )
    
    const row = new MessageActionRow()
    .addComponents(
      
      new MessageButton()
     .setCustomId('helpb')
     .setStyle('SECONDARY')
     .setEmoji("<:menu:929364033231015946>")
       
         )
    .addComponents(
      
 new MessageButton()
.setCustomId('userb')
.setStyle('SECONDARY')
.setEmoji("<:members:897863115121786900>")
  
    )
    .addComponents(
      
 new MessageButton()
.setCustomId('modb')
.setStyle('SECONDARY')
.setEmoji("<:yetkili:897863178942312498>")
  
    )
    .addComponents(
      
 new MessageButton()
.setCustomId('botb')
.setStyle('SECONDARY')
.setEmoji("<:bot:897863178787102770>")
  
    )
    .addComponents(
      
      new MessageButton()
     .setCustomId('botlistb')
     .setStyle('SECONDARY')
     .setEmoji("<:bakm:897863115176292422>")
       
         )
         
             const row2 = new MessageActionRow()
             .addComponents(
      
              new MessageButton()
             .setCustomId('subb')
             .setStyle('SECONDARY')
             .setEmoji("<:yt:925438536595951636>")
               
                 )
             .addComponents(
      
              new MessageButton()
             .setCustomId('otherb')
             .setStyle('SECONDARY')
             .setEmoji("<:hashtag:929025834755436624>")
               
                 )
    
message.channel.send({embeds: [help], components: [row, row2]}).then(async function(mesaj) {

  const filter = i => i.user.id === message.author.id;
  mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
 if(button.customId === "helpb") {

  const help = new MessageEmbed()
  .setTitle(`・ Yardım Menüsü`)
  .setDescription(`Merhaba, Botun Yardım menüsüne hoş geldiniz.
  Menüler arasında aşağıdaki emojilerle gezinebilirsiniz.

Emojiler;
<:menu:929364033231015946> ・ Yardım Menüsü
<:members:897863115121786900> ・ Kullanıcı Menüsü
<:yetkili:897863178942312498> ・ Moderasyon Menüsü
<:bot:897863178787102770> ・ Bot Menüsü
<:bakm:897863115176292422> ・ Botlist Menüsü
<:yt:925438536595951636> ・ Abone Menüsü
<:hashtag:929025834755436624> ・ Diğer
`)
  .setFooter(`Elenor - Yardım Menüsü` )
button.update({embeds: [help]})
}
    if(button.customId === "userb") {
      const user = new MessageEmbed()
    .setTitle(`・ Kullanıcı Menüsü`)
    .setDescription(`<:members:897863115121786900> ・ \`?avatar\` -> Avatarını gösterir
    <:members:897863115121786900> ・ \`?kullanıcı-bilgi\` -> Kullanıcı Bilgini gösterir`)
    .setFooter(`Elenor - Kullanıcı Menüsü` )
      button.update({embeds: [user]})
      
    }
 if(button.customId === "modb") {
      const mod = new MessageEmbed()
    .setTitle(`・ Moderasyon Menüsü`)
    .setDescription(`<:yetkili:897863178942312498> ・ \`?sil\` -> Mesaj silersiniz`)
    .setFooter(`Elenor - Moderasyon Menüsü` )
      button.update({embeds: [mod]})
      
    }
 if(button.customId === "botb") {
      const bot = new MessageEmbed()
    .setTitle(`・ Bot Menüsü`)
    .setDescription(`<:bot:897863178787102770> ・ \`?ping\` -> Botun pingini gösterir
    <:bot:897863178787102770> ・ \`?istatistik\` -> Botun istatistiğini gösterir
    <:bot:897863178787102770> ・ \`?hata\` -> Hata bildirirsiniz
    <:bot:897863178787102770> ・ \`?dil\` -> Botun sunucudaki dilini ayarlarsınız
    <:bot:897863178787102770> ・ \`?davet\` -> Botu davet edersiniz`)
    .setFooter(`Elenor - Bot Menüsü` )
      button.update({embeds: [bot]})
      
    }
    if(button.customId === "botlistb") {
      const bot = new MessageEmbed()
    .setTitle(`・ Botlist Menüsü`)
    .setDescription(`<:bakm:897863115176292422> ・ \`?botekle-kanal\` -> Bot ekleme kanalını ayarlarsınız
    <:bakm:897863115176292422> ・ \`?botlog-kanal\` -> Bot log kanalını ayarlarsınız
    <:bakm:897863115176292422> ・ \`?yetkili-rol\` -> Yetkili rolünü ayarlarsınız
    <:bakm:897863115176292422> ・ \`?geliştirici-rol\` -> Geliştirici rolünü ayarlarsınız
    <:bakm:897863115176292422> ・ \`?bot-rol\` -> Bot rolünü ayarlarsınız
    <:bakm:897863115176292422> ・ \`?isimprefix\` -> Botun isminde prefix yazmasını açarsınız
    <:bakm:897863115176292422> ・ \`?bot-ekle\` -> Bot eklersiniz
    <:bakm:897863115176292422> ・ \`?botonayla\` -> Bot onaylarsınız
    <:bakm:897863115176292422> ・ \`?botreddet\` -> Bot reddedersiniz`)
    .setFooter(`Elenor - Botlist Menüsü` )
      button.update({embeds: [bot]})
      
    }

    if(button.customId === "subb") {
      const sub = new MessageEmbed()
    .setTitle(`・ Abone Menüsü`)
    .setDescription(`<:yt:925438536595951636> ・ \`?abonerolü\` -> Abone rolünü ayarlarsınız
    <:yt:925438536595951636> ・ \`?aboneyetkilisi\` -> Abone yetkilisini ayarlarsınız
    <:yt:925438536595951636> ・ \`?abone\` -> Etiketlediğiniz kullanıcıya abone rolü verirsiniz
    <:yt:925438536595951636> ・ \`?abone-istatistik\` -> Abone rolü verme istatistiğinize bakarsınız`)
    .setFooter(`Elenor - Abone Menüsü` )
      button.update({embeds: [sub]})
      
    }
    if(button.customId === "otherb") {
      const sub = new MessageEmbed()
    .setTitle(`・ Diğer`)
    .setDescription(`<:hashtag:929025834755436624> ・ \`?yt-together\` -> Youtube'u açarsınız`)
    .setFooter(`Elenor - Diğer` )
      button.update({embeds: [sub]})
      
    }
    
})
})
}
if(!tr && !en) {
  const help = new MessageEmbed()
  .setTitle(`・ Help Menu`)
  .setDescription(`Hi, Welcome to the Bot's Help menu.
You can travel between menus with the following emojes.

Emojis;
<:menu:929364033231015946> ・ Help Menu
<:members:897863115121786900> ・ User Menu
<:yetkili:897863178942312498> ・ Moderation Menu
<:bot:897863178787102770> ・ Bot Menu
<:bakm:897863115176292422> ・ Botlist Menu
<:yt:925438536595951636> ・ Subcriber Menu
<:hashtag:929025834755436624> ・ Other Menu
`)
  .setFooter(`Elenor - Help Menu` )
  
  const row = new MessageActionRow()
  .addComponents(
    
    new MessageButton()
   .setCustomId('helpb')
   .setStyle('SECONDARY')
   .setEmoji("<:menu:929364033231015946>")
     
       )
  .addComponents(
    
new MessageButton()
.setCustomId('userb')
.setStyle('SECONDARY')
.setEmoji("<:members:897863115121786900>")

  )
  .addComponents(
    
new MessageButton()
.setCustomId('modb')
.setStyle('SECONDARY')
.setEmoji("<:yetkili:897863178942312498>")

  )
  .addComponents(
    
new MessageButton()
.setCustomId('botb')
.setStyle('SECONDARY')
.setEmoji("<:bot:897863178787102770>")

  )
  .addComponents(
    
    new MessageButton()
   .setCustomId('botlistb')
   .setStyle('SECONDARY')
   .setEmoji("<:bakm:897863115176292422>")
     
       )
       
           const row2 = new MessageActionRow()
           .addComponents(
    
            new MessageButton()
           .setCustomId('subb')
           .setStyle('SECONDARY')
           .setEmoji("<:yt:925438536595951636>")
             
               )
           .addComponents(
    
            new MessageButton()
           .setCustomId('otherb')
           .setStyle('SECONDARY')
           .setEmoji("<:hashtag:929025834755436624>")
             
               )
  
message.channel.send({embeds: [help], components: [row, row2]}).then(async function(mesaj) {

  const filter = i => i.user.id === message.author.id;
  mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
if(button.customId === "helpb") {

const help = new MessageEmbed()
.setTitle(`・ Help Menu`)
.setDescription(`Hi, Welcome to the Bot's Help menu.
You can travel between menus with the following emojes.

Emojis;
<:menu:929364033231015946> ・ Help Menu
<:members:897863115121786900> ・ User Menu
<:yetkili:897863178942312498> ・ Moderation Menu
<:bot:897863178787102770> ・ Bot Menu
<:bakm:897863115176292422> ・ Botlist Menu
<:yt:925438536595951636> ・ Subcriber Menu
<:hashtag:929025834755436624> ・ Other Menu
`)
.setFooter(`Elenor - Help Menu` )
button.update({embeds: [help]})
}
  if(button.customId === "userb") {
    const user = new MessageEmbed()
  .setTitle(`・ User Menu`)
  .setDescription(`<:members:897863115121786900> ・ \`?avatar\` -> Shows your avatar
  <:members:897863115121786900> ・ \`?userinfo\` -> Indicates user information`)
  .setFooter(`Elenor - User Menu` )
    button.update({embeds: [user]})
    
  }
if(button.customId === "modb") {
    const mod = new MessageEmbed()
  .setTitle(`・ Moderation Menu`)
  .setDescription(`<:yetkili:897863178942312498> ・ \`?clear\` -> You can delete the message`)
  .setFooter(`Elenor - Moderation Menu` )
    button.update({embeds: [mod]})
    
  }
if(button.customId === "botb") {
    const bot = new MessageEmbed()
  .setTitle(`・ Bot Menu`)
  .setDescription(`<:bot:897863178787102770> ・ \`?ping\` -> Shows the ping of the bot
  <:bot:897863178787102770> ・ \`?statistic\` -> Shows the statistics of the bot
  <:bot:897863178787102770> ・ \`?bug\` -> You report a bug in the bot
  <:bot:897863178787102770> ・ \`?language\` -> You set the bot's language on the server
  <:bot:897863178787102770> ・ \`?invite\` -> You invite the bot`)
  .setFooter(`Elenor - Bot Menu` )
    button.update({embeds: [bot]})
    
  }
  if(button.customId === "botlistb") {
    const bot = new MessageEmbed()
  .setTitle(`・ Botlist Menu`)
  .setDescription(`<:bakm:897863115176292422> ・ \`?b-addchannel\` -> You set the bot add channel
  <:bakm:897863115176292422> ・ \`?b-logchannel\` -> You set the bot log channel
  <:bakm:897863115176292422> ・ \`?b-officerrole\` -> You set the officer role
  <:bakm:897863115176292422> ・ \`?b-developerrole\` -> You set the developer role
  <:bakm:897863115176292422> ・ \`?b-botrole\` -> You set the botlist bot role
  <:bakm:897863115176292422> ・ \`?b-nameprefix\` -> Allows the bot to type the prefix in its name
  <:bakm:897863115176292422> ・ \`?addbot\` -> Add your bot
  <:bakm:897863115176292422> ・ \`?confirmbot\` -> You confirm the bot
  <:bakm:897863115176292422> ・ \`?rejectbot\` -> You reject the bot`)
  .setFooter(`Elenor - Botlist Menu` )
    button.update({embeds: [bot]})
    
  }

  if(button.customId === "subb") {
    const sub = new MessageEmbed()
  .setTitle(`・ Subscriber Menu`)
  .setDescription(`<:yt:925438536595951636> ・ \`?sub-subscriberrole\` -> You set the subscriber role
  <:yt:925438536595951636> ・ \`?sub-officerrole\` -> You set the subscriber authority role
  <:yt:925438536595951636> ・ \`?sub\` -> Subscribe to the person you are tagging gives the role
  <:yt:925438536595951636> ・ \`?sub-stats\` -> You look at your Subscriber Role Statistics`)
  .setFooter(`Elenor - Subscriber Menu` )
    button.update({embeds: [sub]})
    
  }
  if(button.customId === "otherb") {
    const sub = new MessageEmbed()
  .setTitle(`・ Other`)
  .setDescription(`<:hashtag:929025834755436624> ・ \`?yt-together\` -> Open the Youtube`)
  .setFooter(`Elenor - Other` )
    button.update({embeds: [sub]})
    
  }
  
})
})
}
    }
};