const {MessageEmbed} = require("discord.js");
const  Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    
    isim: "ticket", 
    alternatifler: [],
     kullanımı:"ping",

    çalıştır: async (client, message, args, user, text, prefix) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     
      if(en) {const ping = new MessageEmbed()
        .setDescription(`**Ping:** \`${client.ws.ping}ms\` `)
        .setFooter(`Elenor - Ping` )
          message.channel.send({embeds: [ping]});}
          if(tr) {const ping = new MessageEmbed()
            .setDescription(`**Gecikme Sürem:** \`${client.ws.ping}ms\` `)
            .setFooter(`Elenor - Gecikme Sürem` )
              message.channel.send({embeds: [ping]});}
              if(!en && !tr) {const ping = new MessageEmbed()
                .setDescription(`**Ping:** \`${client.ws.ping}ms\` `)
                .setFooter(`Elenor - Ping` )
                  message.channel.send({embeds: [ping]});}
      
  }
  }