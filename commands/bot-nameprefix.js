const db = require("quick.db")
const Discord = require('discord.js')
 let ayarlar = ["open", "close", "aç", "kapat"]
module.exports = {
    
    isim: "b-nameprefix", 
    alternatifler: ["botlist-nameprefix", "isimprefix"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      if(en) {
        const t = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ You have to type **open** or **close**.`)
      .setFooter(`Elenor - Botlist System`)
  
    if (!args[0]) return message.channel.send({embeds: [t]})
        const p = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ You must use valid parameters. **open - close** `)
      .setFooter(`Elenor - Botlist System`)
    if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [p]})
        const pe = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command ** Administrator ** do not have the authority.`)
      .setFooter(`Elenor - Security System`)
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [pe]})
   
    if (args[0] == 'open' | args[0] == 'Open') {
      const a = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix already opened.`)
      .setFooter(`Elenor - Botlist System`)
      if(db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [a]})
      db.set(`nameprefix.${message.guild.id}`, 'acik')
      const e = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix succesfully opened.`)
      .setFooter(`Elenor - Botlist System`)
        message.channel.send({embeds: [e]})
    }
    if (args[0] == 'close' | args[0] == 'Close') {
      const c = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix already closed.`)
      .setFooter(`Elenor - Botlist System`)
          if(!db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [c]})
      db.delete(`nameprefix.${message.guild.id}`)
      const y = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix succesfully closed.`)
      .setFooter(`Elenor - Botlist System`)
        message.channel.send({embeds: [y]})
    }
  
      }
      if(tr) {
        const t = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ **aç** yada **kapat** yazmanız gerek.`)
      .setFooter(`Elenor - Botlist Sistem`)
  
    if (!args[0]) return message.channel.send({embeds: [t]})
        const p = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Geçerli parametreleri kullanmalısın. **aç - kapat** `)
      .setFooter(`Elenor - Botlist Sistem`)
    if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [p]})
        const pe = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için Yönetici yetkisine sahip olmasın.`)
      .setFooter(`Elenor - Güvenlik Sistem`)
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [pe]})
   
    if (args[0] == 'aç' | args[0] == 'Aç') {
      const a = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ İsim Prefix zaten açılmış.`)
      .setFooter(`Elenor - Botlist Sistem`)
      if(db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [a]})
      db.set(`nameprefix.${message.guild.id}`, 'acik')
      const e = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ İsim Prefix başarıyla açıldı.`)
      .setFooter(`Elenor - Botlist Sistem`)
        message.channel.send({embeds: [e]})
    }
    if (args[0] == 'kapat' | args[0] == 'Kapat') {
      const c = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ İsim Prefix zaten kapalı.`)
      .setFooter(`Elenor - Botlist Sistem`)
          if(!db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [c]})
      db.delete(`nameprefix.${message.guild.id}`)
      const y = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ İsim Prefix başarıyla kapatıldı.`)
      .setFooter(`Elenor - Botlist Sistem`)
        message.channel.send({embeds: [y]})
    }
  
      }
      if(!tr && !en) {
        const t = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ You have to type **open** or **close**.`)
      .setFooter(`Elenor - Botlist System`)
  
    if (!args[0]) return message.channel.send({embeds: [t]})
        const p = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ You must use valid parameters. **open - close** `)
      .setFooter(`Elenor - Botlist System`)
    if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [p]})
        const pe = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command ** Administrator ** do not have the authority.`)
      .setFooter(`Elenor - Security System`)
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [pe]})
   
    if (args[0] == 'open' | args[0] == 'Open') {
      const a = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix already opened.`)
      .setFooter(`Elenor - Botlist System`)
      if(db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [a]})
      db.set(`nameprefix.${message.guild.id}`, 'acik')
      const e = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix succesfully opened.`)
      .setFooter(`Elenor - Botlist System`)
        message.channel.send({embeds: [e]})
    }
    if (args[0] == 'close' | args[0] == 'Close') {
      const c = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix already closed.`)
      .setFooter(`Elenor - Botlist System`)
          if(!db.has(`nameprefix.${message.guild.id}`)) return message.channel.send({embeds: [c]})
      db.delete(`nameprefix.${message.guild.id}`)
      const y = new Discord.MessageEmbed()
      .setDescription(`<:hammer:897863047991947324> ・ Name Prefix succesfully closed.`)
      .setFooter(`Elenor - Botlist System`)
        message.channel.send({embeds: [y]})
    }
  
      }

  }
 
};
 
