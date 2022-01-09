const db = require("quick.db")
const Discord = require('discord.js')
const {MessageActionRow} = require("discord.js")

module.exports = {
    
    isim: "addbot", 
    alternatifler: ["add-bot", "botekle", "bot-ekle"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      if(en) {
            let botid = args[0]
            let prefix = args[1]
            let onaylımı = args[2]
            let kanal = db.fetch(`addbot.${message.guild.id}`)
            let log =   db.fetch(`botlog.${message.guild.id}`)
                  let botrole = db.fetch(`botrole.${message.guild.id}`)
            let devrole = db.fetch(`developerrole.${message.guild.id}`)
      
      
      
      
            const logerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the botlog channel must be set on the server.`)
            .setFooter(`Elenor - Botlist System`)
      
      const kanalerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the addbot channel must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
      
      const boterr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the botlist bot role must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
      
      const deverr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the developer role must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
            
      
      
      const kanalerr2 = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You can use this command only on channel <#${kanal}>.`)
            .setFooter(`Elenor - BotList System`)

            if(db.fetch(`botu.${message.author.id}.${message.guild.id}`)) {
                  const a = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You have already requested to add a bot.To be requested to add boots again, the confirmation of its boot need to be used or redeemed.`)
            .setFooter(`Elenor - BotList System`)
            message.channel.send({embeds: [a]})
      } else {
      
      const iderr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot.`)
            .setFooter(`Elenor - BotList System`)
      
      const harferr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ An **ID** input is not the letter.`)
            .setFooter(`Elenor - BotList System`)
      
        
      const prefixerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the bot **Prefix**.`)
            .setFooter(`Elenor - BotList System`)
      
      const dbl = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Top.gg you should write the confirmation status.`)
            .setFooter(`Elenor - BotList System`)
      
      const yesno = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You have to answer **yes** or **no**.`)
            .setFooter(`Elenor - BotList System`)
      
            
            if(!log) return message.channel.send({embeds: [logerr]})
            if(!kanal) return message.channel.send({embeds: [kanalerr]})
            if(!botrole) return message.channel.send({embeds: [boterr]})
            if(!devrole) return message.channel.send({embeds: [deverr]})
            
            
            if (message.channel.id !== kanal) return message.channel.send({embeds: [kanalerr2]})
             
            if (message.channel.id == kanal) {
            if (!botid)  return message.channel.send({embeds: [iderr]})
               
      
          if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
               
          
          
            if (!prefix) return message.channel.send({embeds: [prefixerr]})
               
              if (!onaylımı) return message.channel.send({embeds: [dbl]})
               
              if (onaylımı !== "yes" && onaylımı !== "no") return message.channel.send({embeds: [yesno]})
              setTimeout(() => message.delete(), Boolean, 10000);
              
          
              const taken = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Your request to add a bot has been taken successfully.`)
                  .setFooter(`Elenor - BotList System`)
          
      if(onaylımı == "yes") {
        
        const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Added ${message.author}'s bot <@${botid}> to the queue. The bot is awaiting approval. `)
            .setFooter(`Elenor - BotList System`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Add Bot Request")
            .addField("\`・>\` **・** Bot Owner", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefix", prefix)
            .addField("\`・>\` **・** Top.gg approval", onaylımı)
            .setFooter(`Elenor - BotList System`)
            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
            ).addComponents(
            new Discord.MessageButton()
        
        .setLabel('Top.gg')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://top.gg/bot/${botid}`)
            )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
        
      } else {
            const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Added ${message.author}'s bot <@${botid}> to the queue. The bot is awaiting approval. `)
            .setFooter(`Elenor - BotList System`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Add Bot Request")
            .addField("\`・>\` **・** Bot Owner", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefix", prefix)
            .addField("\`・>\` **・** Top.gg approval", onaylımı)
            .setFooter(`Elenor - BotList System`)
            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
            )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
      }
            }
            db.set(`botu.${message.author.id}.${message.guild.id}`, botid)
            db.set(`prefixi.${message.author.id}.${message.guild.id}`, prefix)
        
          
      }
      }
      if(tr) {
            let botid = args[0]
            let prefix = args[1]
            let onaylımı = args[2]
            let kanal = db.fetch(`addbot.${message.guild.id}`)
            let log =   db.fetch(`botlog.${message.guild.id}`)
                  let botrole = db.fetch(`botrole.${message.guild.id}`)
            let devrole = db.fetch(`developerrole.${message.guild.id}`)
      
      
      
      
            const logerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için sunucuda bot log kanalının ayarlanmış olması gerekir.`)
            .setFooter(`Elenor - Botlist Sistem`)
        
        const kanalerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için bot ekle kanalının sunucuda ayarlanmış olması gerekir.`)
            .setFooter(`Elenor - BotList Sistem`)
        
        const boterr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için sunucuda botlist bot rolünün ayarlanmış olması gerekir.`)
            .setFooter(`Elenor - BotList Sistem`)
        
        const deverr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmeniz için sunucuda geliştirici rolünün ayarlanmış olması gerekir.`)
            .setFooter(`Elenor - BotList Sistem`)
            
      
      
      const kanalerr2 = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
            .setFooter(`Elenor - BotList Sistem`)
      
            if(db.fetch(`botu.${message.author.id}.${message.guild.id}`)) {
                  const a = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Zaten bir bot ekleme isteğinde bulunmuşsun. Tekrar bot ekleme isteğinde bulunabilmen için botunun onaylanması yada rededilmesi gerek.`)
            .setFooter(`Elenor - BotList Sistem`)
            message.channel.send({embeds: [a]})
      } else {

            const iderr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Botun **ID**'sini girmelisiniz.`)
            .setFooter(`Elenor - BotList Sistem`)
              
              const harferr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ **ID** bir harf olamaz.`)
            .setFooter(`Elenor - BotList Sistem`)
      
        
      const prefixerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Botun **Prefix**'ini yazmalısın.`)
            .setFooter(`Elenor - BotList Sistem`)
      
      const dbl = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Top.gg onay durumunu yazmalısın.`)
            .setFooter(`Elenor - BotList Sistem`)
      
      const yesno = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Cevabın **evet** yada **hayır** olabilir.`)
            .setFooter(`Elenor - BotList Sistem`)
      
            
            if(!log) return message.channel.send({embeds: [logerr]})
            if(!kanal) return message.channel.send({embeds: [kanalerr]})
            if(!botrole) return message.channel.send({embeds: [boterr]})
            if(!devrole) return message.channel.send({embeds: [deverr]})
            
            
            if (message.channel.id !== kanal) return message.channel.send({embeds: [kanalerr2]})
             
            if (message.channel.id == kanal) {
            if (!botid)  return message.channel.send({embeds: [iderr]})
               
      
          if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
               
          
          
            if (!prefix) return message.channel.send({embeds: [prefixerr]})
               
              if (!onaylımı) return message.channel.send({embeds: [dbl]})
               
              if (onaylımı !== "evet" && onaylımı !== "hayır") return message.channel.send({embeds: [yesno]})
              setTimeout(() => message.delete(), Boolean, 10000);
              
          
              const taken = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Bot ekleme isteğin başarıyla alındı.`)
                  .setFooter(`Elenor - BotList Sistem`)
          
      if(onaylımı == "evet") {
        
        const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`${message.author} adlı kişinin botu <@${botid}> sıraya eklendi. Onaylanmayı bekliyor. `)
            .setFooter(`Elenor - BotList Sistem`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Bot Ekleme İsteği")
            .addField("\`・>\` **・** Bot Sahibi", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefixi", prefix)
            .addField("\`・>\` **・** Top.gg Onay ", onaylımı)
            .setFooter(`Elenor - BotList Sistem`)
            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
            ).addComponents(
            new Discord.MessageButton()
        
        .setLabel('Top.gg')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://top.gg/bot/${botid}`)
            )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
        
      } else {
            const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`${message.author} adlı kişinin botu <@${botid}> sıraya eklendi. Onaylanmayı bekliyor. `)
            .setFooter(`Elenor - BotList Sistem`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Bot Ekleme İsteği")
            .addField("\`・>\` **・** Bot Sahibi", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefixi", prefix)
            .addField("\`・>\` **・** Top.gg Onay", onaylımı)
            .setFooter(`Elenor - BotList Sistem`)
            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
                      )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
      }
            }
            db.set(`botu.${message.author.id}.${message.guild.id}`, botid)
            db.set(`prefixi.${message.author.id}.${message.guild.id}`, prefix)
        
          
      }
      }
      if(!tr && !en) {
            let botid = args[0]
            let prefix = args[1]
            let onaylımı = args[2]
            let kanal = db.fetch(`addbot.${message.guild.id}`)
            let log =   db.fetch(`botlog.${message.guild.id}`)
                  let botrole = db.fetch(`botrole.${message.guild.id}`)
            let devrole = db.fetch(`developerrole.${message.guild.id}`)
      
      
      
      
            const logerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the botlog channel must be set on the server.`)
            .setFooter(`Elenor - Botlist System`)
      
      const kanalerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the addbot channel must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
      
      const boterr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the botlist bot role must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
      
      const deverr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ In order for you to use this command, the developer role must be set on the server.`)
            .setFooter(`Elenor - BotList System`)
            
      
      
      const kanalerr2 = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You can use this command only on channel <#${kanal}>.`)
            .setFooter(`Elenor - BotList System`)
      
            if(db.fetch(`botu.${message.author.id}.${message.guild.id}`)) {
                  const a = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You have already requested to add a bot.To be requested to add boots again, the confirmation of its boot need to be used or redeemed.`)
            .setFooter(`Elenor - BotList System`)
            message.channel.send({embeds: [a]})
      } else {
      const iderr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot.`)
            .setFooter(`Elenor - BotList System`)
      
      const harferr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ An **ID** input is not the letter.`)
            .setFooter(`Elenor - BotList System`)
      
        
      const prefixerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the bot **Prefix**.`)
            .setFooter(`Elenor - BotList System`)
      
      const dbl = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ Top.gg you should write the confirmation status.`)
            .setFooter(`Elenor - BotList System`)
      
      const yesno = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You have to answer **yes** or **no**.`)
            .setFooter(`Elenor - BotList System`)
      
            
            if(!log) return message.channel.send({embeds: [logerr]})
            if(!kanal) return message.channel.send({embeds: [kanalerr]})
            if(!botrole) return message.channel.send({embeds: [boterr]})
            if(!devrole) return message.channel.send({embeds: [deverr]})
            
            
            if (message.channel.id !== kanal) return message.channel.send({embeds: [kanalerr2]})
             
            if (message.channel.id == kanal) {
            if (!botid)  return message.channel.send({embeds: [iderr]})
               
      
          if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
               
          
          
            if (!prefix) return message.channel.send({embeds: [prefixerr]})
               
              if (!onaylımı) return message.channel.send({embeds: [dbl]})
               
              if (onaylımı !== "yes" && onaylımı !== "no") return message.channel.send({embeds: [yesno]})
              setTimeout(() => message.delete(), Boolean, 10000);
              
          
              const taken = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Your request to add a bot has been taken successfully.`)
                  .setFooter(`Elenor - BotList System`)
          
      if(onaylımı == "yes") {
        
        const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Added ${message.author}'s bot <@${botid}> to the queue. The bot is awaiting approval. `)
            .setFooter(`Elenor - BotList System`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Add Bot Request")
            .addField("\`・>\` **・** Bot Owner", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefix", prefix)
            .addField("\`・>\` **・** Top.gg approval", onaylımı)
            .setFooter(`Elenor - BotList System`)

            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
            ).addComponents(
            new Discord.MessageButton()
        
        .setLabel('Top.gg')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://top.gg/bot/${botid}`)
            )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
        
      } else {
            const basvuruuu = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setDescription(`Added ${message.author}'s bot <@${botid}> to the queue. The bot is awaiting approval. `)
            .setFooter(`Elenor - BotList System`)
            const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Add Bot Request")
            .addField("\`・>\` **・** Bot Owner", message.author.tag)
            .addField("\`・>\` **・** Bot ID", botid)
            .addField("\`・>\` **・** Bot Prefix", prefix)
            .addField("\`・>\` **・** Top.gg approval", onaylımı)
            .setFooter(`Elenor - BotList System`)
            const row = new MessageActionRow()
            .addComponents(
              
                  new Discord.MessageButton()
        
                  .setLabel('0 Perm')
                  .setStyle('LINK')
                  .setEmoji("<:link:897863115272777739>")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0`)
                      ).addComponents(
                      new Discord.MessageButton()
        
        .setLabel('8 Perm')
        .setStyle('LINK')
        .setEmoji("<:link:897863115272777739>")
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8`)
            )
            client.channels.cache.get(log).send({embeds: [basvuruuu]})
            client.channels.cache.get(log).send({embeds: [embed], components: [row]})
            message.channel.send({embeds: [taken]})
               
      }
            }
            db.set(`botu.${message.author.id}.${message.guild.id}`, botid)
            db.set(`prefixi.${message.author.id}.${message.guild.id}`, prefix)
        
          
      }
      }

}
}


