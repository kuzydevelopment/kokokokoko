const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "ticket-delete", 
    alternatifler: [],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
  
const ad = await db.fetch(`numara.${message.channel.id}`)
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await db.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
message.delete()
const e = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
  .setFooter('Narcos Code ticket tool bot altyapı ')
message.channel.send({embeds: [e]})
setTimeout(async () => {
message.channel.delete()
db.delete(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
}, 5000)

} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }

}
}