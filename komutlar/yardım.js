const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = {

  name: "yardım", 
  options: [], 
  description: 'Botun yardım menüsünü gösterir',

    run: async (client, interaction) => {
        const help = new MessageEmbed()
        .setTitle(`・ Yardım Menüsü`)
        .setDescription(`**Merhaba, Botun Yardım menüsüne hoş geldiniz.
        Menüler arasında aşağıdaki butonlar ile gezinebilirsiniz.
    
    Semboller;
    <:menu:929364033231015946> ・ Yardım Menüsü
    <:members:897863115121786900> ・ Kullanıcı Menüsü
    <:bot:897863178787102770> ・ Bot Menüsü
    <:wumpuslovebot:936189630536093746> ・ Oyun Menüsü**
    `)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
        
        const row = new MessageActionRow()
        .addComponents(
          
          new MessageButton()
         .setCustomId('helpb')
         .setStyle('SECONDARY')
         .setEmoji("<:menu:929364033231015946>"),
     
     new MessageButton()
    .setCustomId('userb')
    .setStyle('SECONDARY')
    .setEmoji("<:members:897863115121786900>"),

     new MessageButton()
    .setCustomId('botb')
    .setStyle('SECONDARY')
    .setEmoji("<:bot:897863178787102770>"),
      
       new MessageButton()
         .setCustomId('gameb')
         .setStyle('SECONDARY')
         .setEmoji("<:wumpuslovebot:936189630536093746>")
           
             )
             
            
        
    interaction.reply({embeds: [help], components: [row]}).then(async function(mesaj) {
    
      const filter = i => i.user.id === interaction.user.id;
      mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
     if(button.customId === "helpb") {
    
      const help = new MessageEmbed()
      .setTitle(`・ Yardım Menüsü`)
      .setDescription(`**Merhaba, Botun Yardım menüsüne hoş geldiniz.
      Menüler arasında aşağıdaki butonlar ile gezinebilirsiniz.
  
  Semboller;
  <:menu:929364033231015946> ・ Yardım Menüsü
  <:members:897863115121786900> ・ Kullanıcı Menüsü
  <:bot:897863178787102770> ・ Bot Menüsü
  <:wumpuslovebot:936189630536093746> ・ Oyun Menüsü**
    `)
      .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
    button.update({embeds: [help]})
    }
        if(button.customId === "userb") {
          const user = new MessageEmbed()
        .setTitle(`・ Kullanıcı Menüsü`)
        .setDescription(`<:members:897863115121786900> ・ \`/avatar\` -> Avatarını gösterir
        <:members:897863115121786900> ・ \`/sunucu-bilgi\` -> Sunucu bilgisini gösterir`)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
          button.update({embeds: [user]})
          
        }
     
     if(button.customId === "botb") {
          const bot = new MessageEmbed()
        .setTitle(`・ Bot Menüsü`)
        .setDescription(`<:bot:897863178787102770> ・ \`/ping\` -> Botun pingini gösterir
        <:bot:897863178787102770> ・ \`/istatistik\` -> Botun istatistiğini gösterir
        <:bot:897863178787102770> ・ \`/davet\` -> Botu davet edersiniz`)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
          button.update({embeds: [bot]})
          
        }
        if(button.customId === "gameb") {
          const bot = new MessageEmbed()
        .setTitle(`・ Oyun Menüsü`)
        .setDescription(`<:wumpuslovebot:936189630536093746> ・ \`/oyunlar\` -> Oyunları gösterir
        <:wumpuslovebot:936189630536093746> ・ \`/oyun\` -> Oyun açarsınız
`)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
        .setTimestamp()
          button.update({embeds: [bot]})
          
        }
    
        
    })
    })  
} 

} 