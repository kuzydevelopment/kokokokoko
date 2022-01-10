const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "confirmbot", 
    alternatifler: ["confirm-bot", "botonayla", "bot-onayla"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {


      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     
      if(en) {
            const permerr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You don't have the **Botlist Officer** role in order to use this command.`)
            .setFooter(`Elenor - Botlist System`)
      
            let yetkili = db.fetch(`officerrole.${message.guild.id}`)
            if (!message.member.roles.cache.has(yetkili)) return message.channel.send({embeds: [permerr]})
            let botisim = args[0]
            let sahip = args[1]
      
            let botrole = db.fetch(`botrole.${message.guild.id}`)
            let devrole = db.fetch(`developerrole.${message.guild.id}`)
      
            let botismi = args.slice(2).join(' ')
            let prefix = db.fetch(`prefixi.${sahip}.${message.guild.id}`)
          
              let kanal = db.fetch(`addbot.${message.guild.id}`)
            let log =   db.fetch(`botlog.${message.guild.id}`)
            
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
            
            if(!log) return message.channel.send({embeds: [logerr]})
            if(!kanal) return message.channel.send({embeds: [kanalerr]})
            if(!botrole) return message.channel.send({embeds: [boterr]})
            if(!devrole) return message.channel.send({embeds: [deverr]})
            
            const onay = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<@${sahip}>'s bot <@${botisim}> has been approved.\n Approving Authority: ${message.author}`)
            .setFooter(`Elenor - BotList System`)
              
            
            const harferr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ An **ID** input is not the letter.`)
            .setFooter(`Elenor - BotList System`)
            
            const sahiperr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot owner.`)
            .setFooter(`Elenor - BotList System`)
            
            const iderr = new Discord.MessageEmbed()
            .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot.`)
            .setFooter(`Elenor - BotList System`)
            
            if(!botisim) return message.channel.send({embeds: [iderr]})
            
      
            
            
            
      
          if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
            
            if (!sahip) return message.channel.send({embeds: [sahiperr]})
            
            
           
            
        
          if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
            
                  client.channels.cache.get(log).send({embeds: [onay]})
                  
                  await message.guild.members.cache.get(args[0]).roles.add(botrole);
                  
            const onayy = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ You have successfully confirmed the bot.`)
                  .setFooter(`Elenor - BotList System`)
            
                   message.channel.send({embeds: [onayy]}).then(m =>  message.guild.members.cache.get(args[1]).roles.add(devrole))
            
      
               
       if(db.fetch(`nameprefix.${message.guild.id}`)) {
      
                  message.guild.members.cache.get(args[0]).setNickname(`${message.guild.members.cache.get(args[0]).displayName} [${prefix}]`)
                  
                } 
                else {
      
                }
                db.delete(`botu.${sahip}.${message.guild.id}`)
                      db.delete(`prefixi.${sahip}.${message.guild.id}`)
            }
            if(tr) {
                  const permerr = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Bu komutu kullanabilmek için **Botlist Yetkilisi** rolüne sahip değilsiniz.`)
                  .setFooter(`Elenor - Botlist Sistem`)
            
                  let yetkili = db.fetch(`officerrole.${message.guild.id}`)
                  if (!message.member.roles.cache.has(yetkili)) return message.channel.send({embeds: [permerr]})
                  let botisim = args[0]
                  let sahip = args[1]
            
                  let botrole = db.fetch(`botrole.${message.guild.id}`)
                  let devrole = db.fetch(`developerrole.${message.guild.id}`)
            
                  let botismi = args.slice(2).join(' ')
                  let prefix = db.fetch(`prefixi.${sahip}.${message.guild.id}`)
                
                    let kanal = db.fetch(`addbot.${message.guild.id}`)
                  let log =   db.fetch(`botlog.${message.guild.id}`)
                  
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
                  
                  if(!log) return message.channel.send({embeds: [logerr]})
                  if(!kanal) return message.channel.send({embeds: [kanalerr]})
                  if(!botrole) return message.channel.send({embeds: [boterr]})
                  if(!devrole) return message.channel.send({embeds: [deverr]})
                  
                  const onay = new Discord.MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`<@${sahip}> adlı kişinin botu <@${botisim}> onaylandı.\n Onaylayan Yetkili: ${message.author}`)
                  .setFooter(`Elenor - BotList Sistem`)
                    
                  
                  const iderr = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Botun **ID**'sini girmelisiniz.`)
                  .setFooter(`Elenor - BotList Sistem`)
                    
                    const harferr = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ **ID** bir harf olamaz.`)
                  .setFooter(`Elenor - BotList Sistem`)
                  
                  const sahiperr = new Discord.MessageEmbed()
                  .setDescription(`<:hammer:897863047991947324> ・ Bot sahibinin **ID**'sini girmelisiniz.`)
                  .setFooter(`Elenor - BotList Sistem`)
                  
                  if(!botisim) return message.channel.send({embeds: [iderr]})
                  
            
                  
                  
                  
            
                if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
                  
                  if (!sahip) return message.channel.send({embeds: [sahiperr]})
                  
                  
                 
                  
              
                if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
                  
                        client.channels.cache.get(log).send({embeds: [onay]})
                        
                        await message.guild.members.cache.get(args[0]).roles.add(botrole);
                        
                  const onayy = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ Botu başarıyla onayladınız.`)
                        .setFooter(`Elenor - BotList Sistem`)
                  
                         message.channel.send({embeds: [onayy]}).then(m =>  message.guild.members.cache.get(args[1]).roles.add(devrole))
                  
            
                     
             if(db.fetch(`nameprefix.${message.guild.id}`)) {
            
                        message.guild.members.cache.get(args[0]).setNickname(`${message.guild.members.cache.get(args[0]).displayName} [${prefix}]`)
                        
                      } 
                      else {
            
                      }
                      db.delete(`botu.${sahip}.${message.guild.id}`)
                      db.delete(`prefixi.${sahip}.${message.guild.id}`)

                  }
                  if(!tr && !en) {
                        const permerr = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ You don't have the **Botlist Officer** role in order to use this command.`)
                        .setFooter(`Elenor - Botlist System`)
                  
                        let yetkili = db.fetch(`officerrole.${message.guild.id}`)
                        if (!message.member.roles.cache.has(yetkili)) return message.channel.send({embeds: [permerr]})
                        let botisim = args[0]
                        let sahip = args[1]
                  
                        let botrole = db.fetch(`botrole.${message.guild.id}`)
                        let devrole = db.fetch(`developerrole.${message.guild.id}`)
                  
                        let botismi = args.slice(2).join(' ')
                        let prefix = db.fetch(`prefixi.${sahip}.${message.guild.id}`)
                      
                          let kanal = db.fetch(`addbot.${message.guild.id}`)
                        let log =   db.fetch(`botlog.${message.guild.id}`)
                        
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
                        
                        if(!log) return message.channel.send({embeds: [logerr]})
                        if(!kanal) return message.channel.send({embeds: [kanalerr]})
                        if(!botrole) return message.channel.send({embeds: [boterr]})
                        if(!devrole) return message.channel.send({embeds: [deverr]})
                        
                        const onay = new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setDescription(`<@${sahip}>'s bot <@${botisim}> has been approved.\n Approving Authority: ${message.author}`)
                        .setFooter(`Elenor - BotList System`)
                          
                        
                        const harferr = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ An **ID** input is not the letter.`)
                        .setFooter(`Elenor - BotList System`)
                        
                        const sahiperr = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot owner.`)
                        .setFooter(`Elenor - BotList System`)
                        
                        const iderr = new Discord.MessageEmbed()
                        .setDescription(`<:hammer:897863047991947324> ・ You must enter the **ID** of the bot.`)
                        .setFooter(`Elenor - BotList System`)
                        
                        if(!botisim) return message.channel.send({embeds: [iderr]})
                        
                  
                        
                        
                        
                  
                      if(isNaN(args[0])) return message.channel.send({embeds: [harferr]})
                        
                        if (!sahip) return message.channel.send({embeds: [sahiperr]})
                        
                        
                       
                        
                    
                      if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
                        
                              client.channels.cache.get(log).send({embeds: [onay]})
                              
                              await message.guild.members.cache.get(args[0]).roles.add(botrole);
                              
                        const onayy = new Discord.MessageEmbed()
                              .setDescription(`<:hammer:897863047991947324> ・ You have successfully confirmed the bot.`)
                              .setFooter(`Elenor - BotList System`)
                        
                               message.channel.send({embeds: [onayy]}).then(m =>  message.guild.members.cache.get(args[1]).roles.add(devrole))
                        
                  
                           
                   if(db.fetch(`nameprefix.${message.guild.id}`)) {
                  
                              message.guild.members.cache.get(args[0]).setNickname(`${message.guild.members.cache.get(args[0]).displayName} [${prefix}]`)
                              
                            } 
                            else {
                  
                            }
                            db.delete(`botu.${sahip}.${message.guild.id}`)
                      db.delete(`prefixi.${sahip}.${message.guild.id}`)
                        }
}
}

