const db = require("quick.db")
const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");
const Discord = require('discord.js')
const ms = require("ms")
 let ayarlar = ["set", "reset"]
module.exports = {
    
    isim: "sub-stat", 
    alternatifler: ["sub-stats", "aboneistatistik", "abone-istatistik"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {


        const en = db.has(`en.lang.${message.guild.id}`)
        const tr = db.has(`tr.lang.${message.guild.id}`)
        



//EN
        const f = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ You have the role of subscriber authority to use this command.`)
        .setFooter(`Elenor - Subscriber System`)
//TR
        const yetki = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için abone yetkilisi rolüne sahip olmalısın.`)
        .setFooter(`Elenor - Abone Sistem`)
        

        if(en) {
            if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
             return message.channel.send({embeds: [f]});
          }

          let kişi = message.mentions.users.first()
          if(!args[0]) {
              const abonestats = await db.fetch(`substat.${message.author.id}.${message.guild.id}`)
              const nrcembed = new Discord.MessageEmbed()
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
              .setTimestamp()
              .setFooter(`Elenor - Subscriber System` )
              .setDescription(`**The number of ${message.author}'s gived subscriber roles**
             
              <:yt:925438536595951636> ・ **Total: \`${abonestats ? abonestats : '0'}\` Member**
            `)
              message.channel.send({embeds: [nrcembed]})}
          if(kişi) {
              const abonestats2 = await db.fetch(`substat.${kişi.id}.${message.guild.id}`)
              const nrcembed1 = new Discord.MessageEmbed()
              .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
              .setTimestamp()
              .setFooter(`Elenor - Subscriber System` )
              .setDescription(`**The number of ${kişi}'s gived subscriber roles**

             <:yt:925438536595951636> ・ **Total: \`${abonestats2 ? abonestats2 : '0'}\` Member**
             `)
             message.channel.send({embeds: [nrcembed1]})}

          }
          if(tr) {
            if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
             return message.channel.send({embeds: [yetki]});
          }

          let kişi = message.mentions.users.first()
          if(!args[0]) {
              const abonestats = await db.fetch(`substat.${message.author.id}.${message.guild.id}`)
              const nrcembed = new Discord.MessageEmbed()
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
             
              .setFooter(`Elenor - Abone Sistem` )
              .setDescription(`**${message.author}'ın verdiği abone rolü sayısı**
             
              <:yt:925438536595951636> ・ **Toplam: \`${abonestats ? abonestats : '0'}\` Üye**
            `)
              message.channel.send({embeds: [nrcembed]})}
          if(kişi) {
              const abonestats2 = await db.fetch(`substat.${kişi.id}.${message.guild.id}`)
              const nrcembed1 = new Discord.MessageEmbed()
              .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
             
              .setFooter(`Elenor - Abone Sistem` )
              .setDescription(`**${kişi}'ın verdiği abone rolü sayısı**

             <:yt:925438536595951636> ・ **Toplam: \`${abonestats2 ? abonestats2 : '0'}\` Üye**
             `)
             message.channel.send({embeds: [nrcembed1]})}

          }
          if(!en && !tr) {
            if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
             return message.channel.send({embeds: [f]});
          }

          let kişi = message.mentions.users.first()
          if(!args[0]) {
              const abonestats = await db.fetch(`substat.${message.author.id}.${message.guild.id}`)
              const nrcembed = new Discord.MessageEmbed()
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
              .setTimestamp()
              .setFooter(`Elenor - Subscriber System` )
              .setDescription(`**The number of ${message.author}'s gived subscriber roles**
             
              <:yt:925438536595951636> ・ **Total: \`${abonestats ? abonestats : '0'}\` Member**
            `)
              message.channel.send({embeds: [nrcembed]})}
          if(kişi) {
              const abonestats2 = await db.fetch(`substat.${kişi.id}.${message.guild.id}`)
              const nrcembed1 = new Discord.MessageEmbed()
              .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
              .setTimestamp()
              .setFooter(`Elenor - Subscriber System` )
              .setDescription(`**The number of ${kişi}'s gived subscriber roles**

             <:yt:925438536595951636> ・ **Total: \`${abonestats2 ? abonestats2 : '0'}\` Member**
             `)
             message.channel.send({embeds: [nrcembed1]})}

          }



}
}

 
