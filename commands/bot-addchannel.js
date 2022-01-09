const db = require("quick.db")
const Discord = require('discord.js')
let ayarlar = ["set", "reset", "ayarla", "sıfırla"]
module.exports = {
    
    isim: "b-addchannel", 
    alternatifler: ["botlist-addchannel", "botekle-kanal", "botekle-kanal"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
        const en = db.has(`en.lang.${message.guild.id}`)
        const tr = db.has(`tr.lang.${message.guild.id}`)
      

        if(en) {
            const settings = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ You have to type **set** or **reset**.`)
                .setFooter(`Elenor - Botlist System`)
            
            const no = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ You must use valid parameters. **set - reset** `)
                .setFooter(`Elenor - Botlist System`)
            
            const permerr = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Administrator do not have the authority.`)
                .setFooter(`Elenor - Security System`)
            
            const aset = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ The add bot channel already been set up.`)
                .setFooter(`Elenor - Botlist System`)
            
            const set = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ The add bot channel has been successfully set up.`)
                .setFooter(`Elenor - Botlist System`)
            
            const areset = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ The add bot channel is not already set.`)
                .setFooter(`Elenor - Botlist System`)
            
            const reset = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ The add bot channel has been successfully reset.`)
                .setFooter(`Elenor - Botlist System`)
            
            const m = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ Specify the channel to be set.`)
                .setFooter(`Elenor - Botlist System`)
            
            
              if (!args[0]) return message.channel.send({embeds: [settings]})
              if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [no]})
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
             
              if (args[0] == 'set' | args[0] == 'Set') {
                let officer = message.mentions.channels.first();
                if(!officer) return message.channel.send({embeds: [m]})
                if(db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [aset]})
                db.set(`addbot.${message.guild.id}`, officer.id)
                  message.channel.send({embeds: [set]})
              }
              if (args[0] == 'reset' | args[0] == 'Reset') {
                    if(!db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [areset]})
                db.delete(`addbot.${message.guild.id}`)
                  message.channel.send({embeds: [reset]})
              }
            
            
            
            }
            if(tr) {
                const settings = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ **ayarla** yada **sıfırla** yazmanız gerek.`)
                .setFooter(`Elenor - BotList Sistem`)

            
            const no = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ Geçerli parametreleri kullanmalısın. **ayarla - sıfırla** `)
                .setFooter(`Elenor - BotList Sistem`)
            
            const permerr = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için Yönetici yetkisine sahip olmasın.`)
                .setFooter(`Elenor - Güvenlik Sistem`)
                
                const aset = new Discord.MessageEmbed()
                    .setDescription(`<:hammer:897863047991947324> ・ Bot ekleme kanalı zaten ayarlı.`)
                    .setFooter(`Elenor - Botlist Sistem`)
                
                const set = new Discord.MessageEmbed()
                    .setDescription(`<:hammer:897863047991947324> ・ Bot ekleme kanalı başarıyla ayarlandı.`)
                    .setFooter(`Elenor - Botlist Sistem`)
                
                const areset = new Discord.MessageEmbed()
                    .setDescription(`<:hammer:897863047991947324> ・ Bot ekleme kanalı zaten ayarlı değil.`)
                    .setFooter(`Elenor - Botlist Sistem`)
                
                const reset = new Discord.MessageEmbed()
                    .setDescription(`<:hammer:897863047991947324> ・ Bot ekleme kanalı başarıyla sıfırlandı.`)
                    .setFooter(`Elenor - Botlist Sistem`)
                
                const m = new Discord.MessageEmbed()
                    .setDescription(`<:hammer:897863047991947324> ・ Bir kanal belirtmelisin.`)
                    .setFooter(`Elenor - Botlist Sistem`)
                
                
                  if (!args[0]) return message.channel.send({embeds: [settings]})
                  if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [no]})
                    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
                 
                  if (args[0] == 'ayarla' | args[0] == 'Ayarla') {
                    let officer = message.mentions.channels.first();
                    if(!officer) return message.channel.send({embeds: [m]})
                    if(db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [aset]})
                    db.set(`addbot.${message.guild.id}`, officer.id)
                      message.channel.send({embeds: [set]})
                  }
                  if (args[0] == 'sıfırla' | args[0] == 'Sıfırla') {
                        if(!db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [areset]})
                    db.delete(`addbot.${message.guild.id}`)
                      message.channel.send({embeds: [reset]})
                  }
                
                
                
                }
                if(!tr && !en) {
                    const settings = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ You have to type **set** or **reset**.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const no = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ You must use valid parameters. **set - reset** `)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const permerr = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Administrator do not have the authority.`)
                        .setFooter(`Elenor - Security System`)
                    
                    const aset = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ The add bot channel already been set up.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const set = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ The add bot channel has been successfully set up.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const areset = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ The add bot channel is not already set.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const reset = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ The add bot channel has been successfully reset.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    const m = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ Specify the channel to be set.`)
                        .setFooter(`Elenor - Botlist System`)
                    
                    
                      if (!args[0]) return message.channel.send({embeds: [settings]})
                      if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [no]})
                        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [permerr]})
                     
                      if (args[0] == 'set' | args[0] == 'Set') {
                        let officer = message.mentions.channels.first();
                        if(!officer) return message.channel.send({embeds: [m]})
                        if(db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [aset]})
                        db.set(`addbot.${message.guild.id}`, officer.id)
                          message.channel.send({embeds: [set]})
                      }
                      if (args[0] == 'reset' | args[0] == 'Reset') {
                            if(!db.has(`addbot.${message.guild.id}`)) return message.channel.send({embeds: [areset]})
                        db.delete(`addbot.${message.guild.id}`)
                          message.channel.send({embeds: [reset]})
                      }
                    
                    
                    
                    }



 
}
}
 
