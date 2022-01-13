const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "ticket-add", 
    alternatifler: [],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
  
if(!args[0]) {

return message.channel.send(`Komutu düzgün kullanın: \`?ticket-add [Etiket/Rol] (kanal)\``) }
  
if(args[0]) {

if(!args[1]) {
const ad = await db.fetch(`numara.${message.channel.id}`)
if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await db.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)

return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`).then(c => c.delete(5000)) } }
  
let mt = message.mentions.roles.first() || message.mentions.users.first()
if(!mt) {

return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }
let mention = message.guild.roles.cache.get(mt.id) || message.guild.members.cache.get(mt.id)
if(!mention) {

return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }  
  
if(args[1]) {  
  
if(message.mentions.channels.first()) {
  
let ch = message.mentions.channels.first()
const ad = await db.fetch(`numara.${message.channel.id}`)
if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {

return message.channel.send(`Bir bilet kanalı değil.`).then(c => c.delete(5000)) }  
const ann = await db.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
ch.permissionOverwrites.create(mt, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true })

const emb = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`${mt}: ${ch} kanalına eklendi.`)
return message.channel.send({embeds: [emb]}) } }
  
message.channel.permissionOverwrites.create(mt, { 'SEND_MESSAGES': true, 'VIEW_CHANNEL': true })

const emb = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`${mt}: ${message.channel} kanalına eklendi.`)
return message.channel.send({embeds: [emb]})

}

}
}