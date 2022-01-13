const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "ticket-close", 
    alternatifler: [],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
  

const ad = await db.fetch(`numara.${message.channel.id}`)
if(!ad) {
let ad = '0' }
  
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await db.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
message.delete()
const u = new Discord.MessageEmbed()
.setColor('#ffff00')
.setDescription(`Bilet ${message.author} tarafından kapatıldı.`)
message.channel.send({embeds: [u]})
message.channel.setName(`closed-${ad}`)
  const i = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`:unlock:: Ticketi tekrar açar.
:no_entry:: Ticketi siler.`)
message.channel.send({embeds: [i]}).then(m => {
m.react('🔓')
m.react('⛔')
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id && user.id == message.author.id
let sill = m.createReactionCollector(sil, { time: 0 });
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id && user.id == message.author.id
let geriaç = m.createReactionCollector(geri, { time: 0 });

geriaç.on('collect', async reaction => {
const author = reaction.users.last()
m.delete('500')
reaction.remove(author.id) 
  const a = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Bilet ${message.author} tarafından tekrar açıldı.`)
message.channel.send({embeds: [a]})
message.channel.setName(`ticket-${ad}`)
})

sill.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
  const e = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
message.channel.send({embeds: [e]})
setTimeout(async () => {
message.channel.delete()
db.delete(`asd.${message.guild.id}.${message.channel.id}`)
}, 5000)

})  

})
  

} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }

}
}