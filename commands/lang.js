const db = require("quick.db")
const Discord = require('discord.js')
 let diller = ["en", "tr"]
module.exports = {
    
    isim: "language", 
    alternatifler: ["lang", "dil"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {

      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      let lang = args[0]
      //EN

const permerr = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Administrator do not have the authority.`)
    .setFooter(`Elenor - Security System`)


const set = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The language of the bot has been successfully set to **English**.`)
    .setFooter(`Elenor - Language System`)




    const m = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ You should specify a language.`)
    .setFooter(`Elenor - Language System`)

    const validlang = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Valid languages: \`en / tr\`.`)
    .setFooter(`Elenor - Language System`)

    const aenglish = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The bot's language is already in **English**.`)
    .setFooter(`Elenor - Language System`)


    //TR
    const zatentürkçe = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Botun dili zaten **Türkçe**.`)
    .setFooter(`Elenor - Dil Sistem`)
    const gecerlidil = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Geçerli diller: \`en / tr\`.`)
    .setFooter(`Elenor - Dil Sistem`)

    const dilbelirt = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Bir dil belirtmesilin.`)
    .setFooter(`Elenor - Dil Sistem`)

    const ayarlandı = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Botun dili başarıyla **Türkçe** olarak ayarlandı.`)
    .setFooter(`Elenor - Dil Sistem`)
    const izin = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için Yönetici yetkisine sahip olmasın.`)
    .setFooter(`Elenor - Güvenlik Sistem`)
    if(en) {
  
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
   
  
 
      if(!lang) return message.channel.send({embeds: [m]})
      if(!diller.includes(lang)) return message.channel.send({embeds: [validlang]})
      
    }
    if(tr) {
  
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [izin]})
   
  

      if(!lang) return message.channel.send({embeds: [dilbelirt]})
      if(!diller.includes(lang)) return message.channel.send({embeds: [gecerlidil]})
      
      
    }

    if(!en && !tr) {
  
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
   

      if(!lang) return message.channel.send({embeds: [m]})
      if(!diller.includes(lang)) return message.channel.send({embeds: [validlang]})
      
      
    }  

    if(lang == "en") {
      if(en) return message.channel.send({embeds: [aenglish]})
      db.set(`en.lang.${message.guild.id}`, true)
      db.delete(`tr.lang.${message.guild.id}`)
      message.channel.send({embeds: [set]})
    }
    if(lang == "tr") {
      if(tr) return message.channel.send({embeds: [zatentürkçe]})
      db.set(`tr.lang.${message.guild.id}`, true)
      db.delete(`en.lang.${message.guild.id}`)
      message.channel.send({embeds: [ayarlandı]})
    }
  }



    
}
 
