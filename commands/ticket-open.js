const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "ticket-open", 
    alternatifler: [],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
  
 const ad = await db.fetch(`numara.${message.channel.id}`);
  if (
    message.channel.name === `ticket-${ad}` ||
    message.channel.name === `closed-${ad}`
  ) {
    const ann = await db.fetch(
      `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
    );
    if (!ann) return message.channel.send(`Bu bilet senin değil.`);
    message.delete();
const e = new Discord.MessageEmbed()
        .setColor("#ffff00")
        .setDescription(`Ticket ${message.author} tarafından açıldı.`)
    message.channel.send({embeds: [e]});
    message.channel.setName(`ticket-${ad}`);
    //Narcos Code tarafından türkçe çevrildi
  } else {
    return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`);
  }
}
}