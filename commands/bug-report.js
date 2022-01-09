const db = require("quick.db")
const Discord = require('discord.js')
let ayarlar = ["report", "fixed", "bildir", "düzeltildi"]
module.exports = {
    
    isim: "bug", 
    alternatifler: ["hata"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      
  
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      
      if(en) {
        const arg = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ You should write a **report** or **fixed**.`)
        .setFooter(`Elenor - Bug Report`)
        const arg2 = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ You must use valid parameters. **set - reset**.`)
        .setFooter(`Elenor - Bug Report`)
          if(!args[0]) return message.channel.send({embeds: [arg]})
          if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [arg2]})
        if(args[0] == "report") {
          
          
          if(db.fetch(`bugid.${message.author.id}`)) {
            const a = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ You have already reported a bug. In order to report a bug again, your previous bug must be fixed.`)
      .setFooter(`Elenor - Bug Report`)
            
            message.channel.send({embeds: [a]})
          } else {
          
    var öneri = args.slice(1).join(" ");
   
    var channelID = "923601517355859979"; // Kanal ID
   
          const öne = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ Specify a bug report.`)
      .setFooter(`Elenor - Bug Report`)
          
    if (!öneri) {
      message.channel.send({embeds: [öne]})
    } else {
      let codeList = [];
          for (let i = 0; i < 1; i++) {
        let code = Math.random().toString(36).slice(-8).toUpperCase();
        codeList.push(code)
          }
      
      const embed = new Discord.MessageEmbed()
        .setTitle(`A bug report has arrived.`)
        .addField("User:", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Bug Report", öneri)
        .addField("Bug ID", codeList[0])
        
        .setFooter(`Elenor - Bug Report`)
   
  
  
        client.channels.cache.get(channelID).send({embeds: [embed]});
   
      const rec = new Discord.MessageEmbed()
        .setDescription(`<:rules:897863114681385040> ・ Your bug report has been received.`)
        .setFooter(`Elenor - Bug Report`)
        message.channel.send({embeds: [rec]})
      db.set(`bugid.${message.author.id}`,codeList)
    }
  
  
  
        }
        }
      
        
        if(args[0] == "fixed") {
          
          const sahip = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ Only my owner can use this command.`)
      .setFooter(`Elenor - Bug Report`)
          if(message.author.id !== "880795562419580928") return message.channel.send({embeds: [sahip]})
          
          const id = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ Specify a bug ID.`)
      .setFooter(`Elenor - Bug Report`)
          const kid = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ You must write the id of the person who sent this message.`)
      .setFooter(`Elenor - Bug Report`)
          const bugerr = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ A bug belonging to that user has not been found.`)
      .setFooter(`Elenor - Bug Report`)
          const b = new Discord.MessageEmbed()
      .setDescription(`<:shop:897863114962395187> ・ No such bug id was found.`)
      .setFooter(`Elenor - Bug Report`)
          
          const harferr = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ An ID input is not the letter.`)
        .setFooter(`Elenor - Bug Report`)
         if(!args[1]) return message.channel.send({embeds: [kid]})
          if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
          if(!db.fetch(`bugid.${args[1]}`)) return message.channel.send({embeds: [bugerr]})
          
          if(!args[2]) return message.channel.send({embeds: [id]})
          if(db.fetch(`bugid.${args[1]}`) == args[2]) {
            
            const bas = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ The bug was successfully fixed.`)
        .setFooter(`Elenor - Bug Report`)
            
            message.channel.send({embeds: [bas]})
            db.delete(`bugid.${args[1]}`)
                                                      
         } else {
          
          message.channel.send({embeds: [b]})}
          
  
          
         }
        }
        if(tr) {
          const arg = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ **bildir** yada **düzeltildi** yazmalısın.`)
        .setFooter(`Elenor - Hata Bildir`)
        const arg2 = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Geçerli parametreleri kullanmalısın. **bildir - düzeltildi**.`)
        .setFooter(`Elenor - Hata Bildir`)
          if(!args[0]) return message.channel.send({embeds: [arg]})
          if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [arg2]})
          if(args[0] == "bildir") {
            
            
            if(db.fetch(`bugid.${message.author.id}`)) {
              const a = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Zaten bir hata bildirmişsin. Tekrar hata bildirmen için bildirdiğin hatanın düzeltilmesi gerek.`)
        .setFooter(`Elenor - Hata Bildir`)
              
              message.channel.send({embeds: [a]})
            } else {
            
      var öneri = args.slice(1).join(" ");
     
      var channelID = "923601517355859979"; // Kanal ID
     
            const öne = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Bir hata belirtin.`)
        .setFooter(`Elenor - Hata Bildir`)
            
      if (!öneri) {
        message.channel.send({embeds: [öne]})
      } else {
        let codeList = [];
            for (let i = 0; i < 1; i++) {
          let code = Math.random().toString(36).slice(-8).toUpperCase();
          codeList.push(code)
            }
        
        const embed = new Discord.MessageEmbed()
          .setTitle(`Bir Hata Geldi.`)
          .addField("Kullanıcı:", message.author.tag)
          .addField("ID", message.author.id)
          .addField("Hata", öneri)
          .addField("Hata ID", codeList[0])
          
          .setFooter(`Elenor - Hata Bildir`)
     
    
    
          client.channels.cache.get(channelID).send({embeds: [embed]});
     
        const rec = new Discord.MessageEmbed()
          .setDescription(`<:rules:897863114681385040> ・ Hata bildiriniz alındı.`)
          .setFooter(`Elenor - Hata Bildir`)
          message.channel.send({embeds: [rec]})
        db.set(`bugid.${message.author.id}`,codeList)
      }
    
    
    
          }
          }
        
          
          if(args[0] == "düzeltildi") {
            
            const sahip = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Bu komutu sadece benim sahibim kullanabilir.`)
        .setFooter(`Elenor - Hata Bildir`)
            if(message.author.id !== "880795562419580928") return message.channel.send({embeds: [sahip]})
            
            const id = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Bir hata ID'si belirt.`)
        .setFooter(`Elenor - Hata Bildir`)
            const kid = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Bu mesajı gönderen kişinin id'sini yazmalısınız.`)
        .setFooter(`Elenor - Hata Bildir`)
            const bugerr = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・Bu kullanıcıya ait bir hata bulunamadı.`)
        .setFooter(`Elenor - Hata Bildir`)
            const b = new Discord.MessageEmbed()
        .setDescription(`<:shop:897863114962395187> ・ Böyle bir hata id'si bulunamadı.`)
        .setFooter(`Elenor - Hata Bildir`)
            
            const harferr = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ ID yerine bir rakam yazmalısın harf değil.`)
          .setFooter(`Elenor - Hata Bildir`)
           if(!args[1]) return message.channel.send({embeds: [kid]})
            if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
            if(!db.fetch(`bugid.${args[1]}`)) return message.channel.send({embeds: [bugerr]})
            
            if(!args[2]) return message.channel.send({embeds: [id]})
            if(db.fetch(`bugid.${args[1]}`) == args[2]) {
              
              const bas = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ Hata başarıyla düzeltildi.`)
          .setFooter(`Elenor - Hata Bildir`)
              
              message.channel.send({embeds: [bas]})
              db.delete(`bugid.${args[1]}`)
                                                        
           } else {
            
            message.channel.send({embeds: [b]})}
            
    
            
           }
          }
          if(!tr && !en) {
            const arg = new Discord.MessageEmbed()
            .setDescription(`<:shop:897863114962395187> ・ You should write a **report** or **fixed**.`)
            .setFooter(`Elenor - Bug Report`)
            const arg2 = new Discord.MessageEmbed()
            .setDescription(`<:shop:897863114962395187> ・ You must use valid parameters. **set - reset**.`)
            .setFooter(`Elenor - Bug Report`)
              if(!args[0]) return message.channel.send({embeds: [arg]})
              if(!ayarlar.includes(args[0])) return message.channel.send({embeds: [arg2]})
            if(args[0] == "report") {
              
              
              if(db.fetch(`bugid.${message.author.id}`)) {
                const a = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ You have already reported a bug. In order to report a bug again, your previous bug must be fixed.`)
          .setFooter(`Elenor - Bug Report`)
                
                message.channel.send({embeds: [a]})
              } else {
              
        var öneri = args.slice(1).join(" ");
       
        var channelID = "923601517355859979"; // Kanal ID
       
              const öne = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ Specify a bug report.`)
          .setFooter(`Elenor - Bug Report`)
              
        if (!öneri) {
          message.channel.send({embeds: [öne]})
        } else {
          let codeList = [];
              for (let i = 0; i < 1; i++) {
            let code = Math.random().toString(36).slice(-8).toUpperCase();
            codeList.push(code)
              }
          
          const embed = new Discord.MessageEmbed()
            .setTitle(`A bug report has arrived.`)
            .addField("User:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Bug Report", öneri)
            .addField("Bug ID", codeList[0])
            
            .setFooter(`Elenor - Bug Report`)
       
      
      
            client.channels.cache.get(channelID).send({embeds: [embed]});
       
          const rec = new Discord.MessageEmbed()
            .setDescription(`<:rules:897863114681385040> ・ Your bug report has been received.`)
            .setFooter(`Elenor - Bug Report`)
            message.channel.send({embeds: [rec]})
          db.set(`bugid.${message.author.id}`,codeList)
        }
      
      
      
            }
            }
          
            
            if(args[0] == "fixed") {
              
              const sahip = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ Only my owner can use this command.`)
          .setFooter(`Elenor - Bug Report`)
              if(message.author.id !== "880795562419580928") return message.channel.send({embeds: [sahip]})
              
              const id = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ Specify a bug ID.`)
          .setFooter(`Elenor - Bug Report`)
              const kid = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ You must write the id of the person who sent this message.`)
          .setFooter(`Elenor - Bug Report`)
              const bugerr = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ A bug belonging to that user has not been found.`)
          .setFooter(`Elenor - Bug Report`)
              const b = new Discord.MessageEmbed()
          .setDescription(`<:shop:897863114962395187> ・ No such bug id was found.`)
          .setFooter(`Elenor - Bug Report`)
              
              const harferr = new Discord.MessageEmbed()
            .setDescription(`<:shop:897863114962395187> ・ An ID input is not the letter.`)
            .setFooter(`Elenor - Bug Report`)
             if(!args[1]) return message.channel.send({embeds: [kid]})
              if(isNaN(args[1])) return message.channel.send({embeds: [harferr]})
              if(!db.fetch(`bugid.${args[1]}`)) return message.channel.send({embeds: [bugerr]})
              
              if(!args[2]) return message.channel.send({embeds: [id]})
              if(db.fetch(`bugid.${args[1]}`) == args[2]) {
                
                const bas = new Discord.MessageEmbed()
            .setDescription(`<:shop:897863114962395187> ・ The bug was successfully fixed.`)
            .setFooter(`Elenor - Bug Report`)
                
                message.channel.send({embeds: [bas]})
                db.delete(`bugid.${args[1]}`)
                                                          
             } else {
              
              message.channel.send({embeds: [b]})}
              
      
              
             }
            }
}
}
