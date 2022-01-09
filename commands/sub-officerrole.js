const db = require("quick.db")
const Discord = require('discord.js')
 let ayarlar = ["set", "reset", "ayarla", "sıfırla"]
module.exports = {
    
    isim: "subofficerrole", 
    alternatifler: ["sub-officerrole", "abone-yetkilisi", "aboneyetkilisi"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {

        const en = db.has(`en.lang.${message.guild.id}`)
        const tr = db.has(`tr.lang.${message.guild.id}`)
        
      //EN
const settings = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ You have to type **set** or **reset**.`)
    .setFooter(`Elenor - Subscriber System`)

const no = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ You must use valid parameters. **set - reset** `)
    .setFooter(`Elenor - Subscriber System`)

const permerr = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Administrator do not have the authority.`)
    .setFooter(`Elenor - Security System`)

const aset = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The subscriber officer role already been set up.`)
    .setFooter(`Elenor - Subscriber System`)

const set = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The subscriber officer role has been successfully set up.`)
    .setFooter(`Elenor - Subscriber System`)

const areset = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The subscriber officer role is not already set.`)
    .setFooter(`Elenor - Subscriber System`)

const reset = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ The subscriber officer role has been successfully reset.`)
    .setFooter(`Elenor - Subscriber System`)

const m = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Specify the role to be set.`)
    .setFooter(`Elenor - Subscriber System`)

    //TR
    
    const ayarla = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ **ayarla** yada **sıfırla** yazmanız gerek.`)
    .setFooter(`Elenor - Abone Sistem`)

const parametre = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Geçerli parametreleri kullanmalısın. **ayarla - sıfırla** `)
    .setFooter(`Elenor - Abone Sistem`)

const izin = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için Yönetici yetkisine sahip olmasın.`)
    .setFooter(`Elenor - Güvenlik Sistem`)

const zatenayarlı = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Abone yetkilisi rolü zaten ayarlı.`)
    .setFooter(`Elenor - Abone Sistem`)

const ayarlandı = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Abone yetkilisi rolü başarıyla ayarlandı.`)
    .setFooter(`Elenor - Abone Sistem`)

const zatensıfırlanmış = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Abone yetkilisi rolü zaten ayarlı değil.`)
    .setFooter(`Elenor - Abone Sistem`)

const sıfırlandı = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Abone yetkilisi rolü başarıyla sıfırlandı.`)
    .setFooter(`Elenor - Abone Sistem`)

const birrol = new Discord.MessageEmbed()
    .setDescription(`<:hammer:897863047991947324> ・ Bir rol belirtmelisin.`)
    .setFooter(`Elenor - Abone Sistem`)




  if(en) {
    if (!args[0]) return message.channel.send({embeds: [settings]})
    if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [no]})
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
   
    if (args[0] == 'set' || args[0] == 'Set') {
      if(db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [aset]})
      let bot = message.mentions.roles.first();
      if(!bot) return message.channel.send({embeds: [m]})
     
      db.set(`subofficer.${message.guild.id}`, bot.id)
        message.channel.send({embeds: [set]})
    }
    if (args[0] == 'reset' || args[0] == 'Reset') {
          if(!db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [areset]})
      db.delete(`subofficer.${message.guild.id}`)
        message.channel.send({embeds: [reset]})
    }
  
  }
  if(tr) {
      if (!args[0]) return message.channel.send({embeds: [ayarla]})
      if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [parametre]})
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [izin]})
     
      if (args[0] == 'ayarla' || args[0] == 'Ayarla') {
          if(db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [zatenayarlı]})
        let bot = message.mentions.roles.first();
        if(!bot) return message.channel.send({embeds: [birrol]})
       
        db.set(`subofficer.${message.guild.id}`, bot.id)
          message.channel.send({embeds: [ayarlandı]})
      }
      if (args[0] == 'sıfırla' || args[0] == 'Sıfırla' ) {
            if(!db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [zatensıfırlanmış]})
        db.delete(`subofficer.${message.guild.id}`)
          message.channel.send({embeds: [sıfırlandı]})
      }
    
  }
  
  
  if(!en && !tr) {
      if (!args[0]) return message.channel.send({embeds: [settings]})
      if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [no]})
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
     
      if (args[0] == 'set' || args[0] == 'Set') {
          if(db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [aset]})
        let bot = message.mentions.roles.first();
        if(!bot) return message.channel.send({embeds: [m]})
        
        db.set(`subofficer.${message.guild.id}`, bot.id)
          message.channel.send({embeds: [set]})
      }
      if (args[0] == 'reset' || args[0] == 'Reset') {
            if(!db.has(`subofficer.${message.guild.id}`)) return message.channel.send({embeds: [areset]})
        db.delete(`subofficer.${message.guild.id}`)
          message.channel.send({embeds: [reset]})
      }
    
    }


 
}
}
 
