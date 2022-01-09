const db = require("quick.db")
const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");
const Discord = require('discord.js')
const ms = require("ms")
 let ayarlar = ["set", "reset"]
module.exports = {
    
    isim: "subs-sub", 
    alternatifler: ["sub", "abone"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {

      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     


    //EN
        const roleerr1 = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the subscriber role must be set on the server.`)
        .setFooter(`Elenor - Subscriber System`)

        const roleerr2 = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the subscriber officer role must be set on the server.`)
        .setFooter(`Elenor - Subscriber System`)

        const uuuu = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ You should label the person to be given the subscriber role.`)
        .setFooter(`Elenor - Subscriber System`)

        const e = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ This user already has a subscriber role.`)
        .setFooter(`Elenor - Subscriber System`)

        let user = message.mentions.members.first()
        const a = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ If you want to give ${user} to the Subscriber role Confirm.`)
        .setFooter(`Elenor - Subscriber System`)

        const f = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ You have the role of subscriber authority to use this command.`)
        .setFooter(`Elenor - Subscriber System`)
        

        //TR

        const rolhata1 = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için sunucuda abone rolünün ayarlanması gerekir.`)
        .setFooter(`Elenor - Abone Sistem`)

        const rolhata2 = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için sunucuda abone yetkilisi rolünün ayarlanması gerekir.`)
        .setFooter(`Elenor - Abone Sistem`)

        const belirt = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Abone rolü verilecek kişiyi etiketlemelisiniz.`)
        .setFooter(`Elenor - Abone Sistem`)

        const zatenalmış = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Bu kullanıcının zaten bir abone rolü var.`)
        .setFooter(`Elenor - Abone Sistem`)

        const onayla = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ ${user} kullanıcısına abone rolü vermek istiyorsanız Onaylayın.`)
        .setFooter(`Elenor - Abone Sistem`)

        const yetki = new Discord.MessageEmbed()
        .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için abone yetkilisi rolüne sahip olmalısın.`)
        .setFooter(`Elenor - Abone Sistem`)


        if(en) {
        const row = new MessageActionRow()
        .addComponents(
    
            new MessageButton()
           .setCustomId('confirm')
           .setStyle('SECONDARY')
           .setEmoji("<:tick:925110068930818198>")
           
                   )
                   .addComponents(
    
                    new MessageButton()
                   .setCustomId('cancel')
                   .setStyle('SECONDARY')
                   .setEmoji("<:cross1:925033487424176158>")
                   
                           )
        

                           let ooff = db.fetch(`subofficer.${message.guild.id}`)
                           let suub = db.fetch(`subrole.${message.guild.id}`)
                           if(!ooff) return message.channel.send({embeds: [roleerr2]})
                           if(!suub) return message.channel.send({embeds: [roleerr1]})
                           if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
                            return message.channel.send({embeds: [f]});
                         }

         if (!user) return message.channel.send({embeds: [uuuu]})

         if (user.roles.cache.has(db.fetch(`subrole.${message.guild.id}`))) return message.channel.send({embeds: [e]})



 

        message.channel.send({embeds: [a], components: [row]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
                

if(button.customId === "confirm") {
    if(db.has(`substat.${message.author.id}.${message.guild.id}`)) {
        db.add(`substat.${message.author.id}.${message.guild.id}`, 1) }
       else {db.set(`substat.${message.author.id}.${message.guild.id}`, 1)}
                   
       
    let sayı = db.fetch(`substat.${message.author.id}.${message.guild.id}`)
                    const g = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                  .setTitle(`・ Subscriber role has been gived.`)
                  .setDescription(`<:yt:925438536595951636> ・ The subscriber role is given: ${user}
                  <:yt:925438536595951636> ・ Officer by the subscriber role: ${message.author}
                  <:yt:925438536595951636> ・ Total Subscriber Statistics: **${sayı}** Member`)
                  .setFooter(`Elenor - Subscriber System` )
                   button.update({embeds: [g], components: []})
                   user.roles.add(suub)
                 
                  }

                  if(button.customId === "cancel") {
                    const g = new MessageEmbed()
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                  .setTitle(`・ Cancelled.`)
                  .setDescription(`<:yt:925438536595951636> ・ The process of subscribing role has been canceled.`)
                  .setFooter(`Elenor - Subscriber System` )
                  button.update({embeds: [g], components: []})
                   
                  }
            })
})
        }

        if(tr) {
          const row = new MessageActionRow()
          .addComponents(
      
              new MessageButton()
             .setCustomId('confirm1')
             .setStyle('SECONDARY')
             .setEmoji("<:tick:925110068930818198>")
             
                     )
                     .addComponents(
      
                      new MessageButton()
                     .setCustomId('cancel1')
                     .setStyle('SECONDARY')
                     .setEmoji("<:cross1:925033487424176158>")
                     
                             )
                             let ooff = db.fetch(`subofficer.${message.guild.id}`)
                             let suub = db.fetch(`subrole.${message.guild.id}`)
                             if(!ooff) return message.channel.send({embeds: [rolhata2]})
                             if(!suub) return message.channel.send({embeds: [rolhata1]})
                             if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
                              return message.channel.send({embeds: [yetki]});
                           }
  
           if (!user) return message.channel.send({embeds: [belirt]})
  
           if (user.roles.cache.has(db.fetch(`subrole.${message.guild.id}`))) return message.channel.send({embeds: [zatenalmış]})
  
  
         
   
  
          message.channel.send({embeds: [onayla], components: [row]}).then(async function(mesaj) {
  
  
            const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
                  
  
  if(button.customId === "confirm1") {
      if(db.has(`substat.${message.author.id}.${message.guild.id}`)) {
          db.add(`substat.${message.author.id}.${message.guild.id}`, 1) }
         else {db.set(`substat.${message.author.id}.${message.guild.id}`, 1)}
                     
         
      let sayı = db.fetch(`substat.${message.author.id}.${message.guild.id}`)
                      const g = new MessageEmbed()
                      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setTitle(`・ Abone rolü verildi.`)
                    .setDescription(`<:yt:925438536595951636> ・ Abone rolü verilen: ${user}
                    <:yt:925438536595951636> ・ Abone rolü veren: ${message.author}
                    <:yt:925438536595951636> ・ Toplam Abone İstatistiği: **${sayı}** Üye`)
                    .setFooter(`Elenor - Abone Sistem` )
                    button.update({embeds: [g], components: []})
                     user.roles.add(suub)
                    
                    }
  
                    if(button.customId === "cancel1") {
                      const g = new MessageEmbed()
                      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setTitle(`・ Cancelled.`)
                    .setDescription(`<:yt:925438536595951636> ・ Abone verme işlemini iptal ettim.`)
                    .setFooter(`Elenor - Abone Sistem` )
                    button.update({embeds: [g], components: []})
                     
                    }
              })
  })

        }
        if(!en && !tr) {

          const row = new MessageActionRow()
          .addComponents(
      
              new MessageButton()
             .setCustomId('confirm2')
             .setStyle('SECONDARY')
             .setEmoji("<:tick:925110068930818198>")
             
                     )
                     .addComponents(
      
                      new MessageButton()
                     .setCustomId('cancel2')
                     .setStyle('SECONDARY')
                     .setEmoji("<:cross1:925033487424176158>")
                     
                             )
                             let ooff = db.fetch(`subofficer.${message.guild.id}`)
                             let suub = db.fetch(`subrole.${message.guild.id}`)
                             if(!ooff) return message.channel.send({embeds: [roleerr2]})
                             if(!suub) return message.channel.send({embeds: [roleerr1]})
                             if(!message.member.roles.cache.has(db.fetch(`subofficer.${message.guild.id}`))) {
                              return message.channel.send({embeds: [f]});
                           }
  
           if (!user) return message.channel.send({embeds: [uuuu]})
  
           if (user.roles.cache.has(db.fetch(`subrole.${message.guild.id}`))) return message.channel.send({embeds: [e]})
  
  
          
   
  
          message.channel.send({embeds: [a], components: [row]}).then(async function(mesaj) {
  
  
            const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
                  
  
  if(button.customId === "confirm2") {
      if(db.has(`substat.${message.author.id}.${message.guild.id}`)) {
          db.add(`substat.${message.author.id}.${message.guild.id}`, 1) }
         else {db.set(`substat.${message.author.id}.${message.guild.id}`, 1)}
                     
         
      let sayı = db.fetch(`substat.${message.author.id}.${message.guild.id}`)
                      const g = new MessageEmbed()
                      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setTitle(`・ Subscriber role has been gived.`)
                    .setDescription(`<:yt:925438536595951636> ・ The subscriber role is given: ${user}
                    <:yt:925438536595951636> ・ Officer by the subscriber role: ${message.author}
                    <:yt:925438536595951636> ・ Total Subscriber Statistics: **${sayı}** Member`)
                    .setFooter(`Elenor - Subscriber System` )
                    button.update({embeds: [g], components: []})
                     user.roles.add(suub)
                   
                    }
  
                    if(button.customId === "cancel2") {
                      
                      const g = new MessageEmbed()
                      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                    .setTitle(`・ Cancelled.`)
                    .setDescription(`<:yt:925438536595951636> ・ The process of subscribing role has been canceled.`)
                    .setFooter(`Elenor - Subscriber System` )
                    button.update({embeds: [g], components: []})
                   
                    }
              })
  })
        }
}
}

 
