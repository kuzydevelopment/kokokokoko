const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "ticket-remove", 
    alternatifler: [],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
  
if(!args[0]) {
message.delete()
return message.channel.send(`Komutu düzgün kullanın: \`?ticket-remove [Etiket/Rol] (kanal)\``)}
  
if(args[0]) {

if(!args[1]) {
const ad = await db.fetch(`numara.${message.channel.id}`)
if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
message.delete()
return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) } }
const ann = await db.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
let mt = message.mentions.roles.first() || message.mentions.users.first()
if(!mt) {
message.delete()
return message.channel.send(`Komutu düzgün kullanın: \`?ticket-remove [Etiket/Rol] (kanal)\``)  }
let mention = message.guild.roles.cache.get(mt.id) || message.guild.members.cache.get(mt.id)
if(!mention) {
message.delete()
return message.channel.send(`Komutu düzgün kullanın: \`?ticket-remove [Etiket/Rol] (kanal)\``)  }  
  
if(args[1]) {  
  
if(message.mentions.channels.first()) {
  
let ch = message.mentions.channels.first()
const ad = await db.fetch(`numara.${message.channel.id}`)
if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {
message.delete()
return message.channel.send(`Bir bilet kanalı değil.`) }
const ann = await db.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
ch.permissionOverwrites.create(mt, { 'SEND_MESSAGES': null, 'VIEW_CHANNEL': null })
message.delete()
const emb = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${mt}: ${ch} kanalından kaldırıldı.`)
return message.channel.send({embeds: [emb]}) } }
  
message.channel.permissionOverwrites.create(mt, { 'SEND_MESSAGES': null, 'VIEW_CHANNEL': null})
message.delete()
const emb = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`${mt}: ${message.channel} kanalından kaldırıldı.`)
return message.channel.send({embeds: [emb]})

}
}
}