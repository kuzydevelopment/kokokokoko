const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");
const  Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    
    isim: "delete", 
    alternatifler: ["clear", "sil"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {

      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      if(en) {
        const p = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Manage Messages do not have the authority.`)
            .setFooter(`Elenor - Güvenlik Sistem`)
        
          if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({embeds: [p]})
        
          const sayi = args.slice(0).join('');
        if(sayi.length < 1 || !args[0]) {
          const e = new Discord.MessageEmbed()
          .setDescription(`<:hammer:897863047991947324> ・ How many messages will I delete? `)
          .setFooter(`Elenor - Clear`)
          return message.channel.send({embeds: [e]})
        }
        
        
        
        if(sayi > 100 ) {
          const e = new Discord.MessageEmbed()
          .setDescription(`<:hammer:897863047991947324> ・ I can't delete more than 100 messages. `)
          .setFooter(`Elenor - Clear`)
          return message.channel.send({embeds: [e]})
        } else {
          message.channel.bulkDelete(sayi, Boolean);
          const e = new Discord.MessageEmbed()
          .setDescription(`<:hammer:897863047991947324> ・ **`+ sayi + `** message deleted successfully. `)
          .setFooter(`Elenor - Clear`)
          message.channel.send({embeds: [e]})
        
        
        } 
        }

        if(tr) {
          const p = new Discord.MessageEmbed()
              .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmasın.`)
              .setFooter(`Elenor - Sil`)
          
            if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({embeds: [p]})
          
            const sayi = args.slice(0).join('');
          if(sayi.length < 1 || !args[0]) {
            const e = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Ne kadar mesaj sileceğim?`)
            .setFooter(`Elenor - Sil`)
            return message.channel.send({embeds: [e]})
          }
          
          
          
          if(sayi > 100 ) {
            const e = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ 100'den fazla mesaj silemem. `)
            .setFooter(`Elenor - Sil`)
            return message.channel.send({embeds: [e]})
          } else {
            message.channel.bulkDelete(sayi, Boolean);
            const e = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ **`+ sayi + `** tane mesaj silindi. `)
            .setFooter(`Elenor - Sil`)
            message.channel.send({embeds: [e]})
          
          
          } 
          }

          if(!tr && !en) {
            const p = new Discord.MessageEmbed()
                .setDescription(`<:hammer:897863047991947324> ・ In order to be able to use this command Manage Messages do not have the authority.`)
                .setFooter(`Elenor - Clear`)
            
              if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({embeds: [p]})
            
              const sayi = args.slice(0).join('');
            if(sayi.length < 1 || !args[0]) {
              const e = new Discord.MessageEmbed()
              .setDescription(`<:hammer:897863047991947324> ・ How many messages will I delete? `)
              .setFooter(`Elenor - Clear`)
              return message.channel.send({embeds: [e]})
            }
            
            
            
            if(sayi > 100 ) {
              const e = new Discord.MessageEmbed()
              .setDescription(`<:hammer:897863047991947324> ・ I can't delete more than 100 messages. `)
              .setFooter(`Elenor - Clear`)
              return message.channel.send({embeds: [e]})
            } else {
              message.channel.bulkDelete(sayi, Boolean);
              const e = new Discord.MessageEmbed()
              .setDescription(`<:hammer:897863047991947324> ・ **`+ sayi + `** message deleted successfully. `)
              .setFooter(`Elenor - Clear`)
              message.channel.send({embeds: [e]})
            
            
            } 
            }
            
 
 }
}

