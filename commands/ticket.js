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
     
    if(args[0] === 'gönder') {
const kanalbelirle = await db.fetch(`ticketk.${message.guild.id}`)
if(!kanalbelirle) return message.channel.send(`Mesajı göndereceğim kanalı ayarlamamışsın: ${prefix}ticket-kanal ayarla #channel`)
      const a = new Discord.MessageEmbed()
.setTitle(`Narcos Code Ticket Bot Altyapısı`)
.setFooter(`Narcos Code Ticket Bot Altyapısı - Ticketing without clutter.`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`📩 tepkisine tıklayıp bir bilet oluşturabilirsiniz.`)
client.channels.cache.get(kanalbelirle).send({embeds: [a]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {

aç.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id)
const sd = await db.fetch(`ass.${message.guild.id}.${author.id}`)

db.add(`numara.${message.guild.id}`, 1)
const as = await db.fetch(`numara.${message.guild.id}`)
message.guild.channels.create(`ticket-${as}`).then(async s => {
db.add(`numara.${s.id}`, as)// Narcos Code 
db.set(`ass.${message.guild.id}.${author.id}`, s.id)
db.set(`asd.${message.guild.id}.${s.id}.${author.id}`, 'ticketaçma')
let role = message.guild.roles.cache.find(r => r.name === '@everyone')
s.createOverwrite(role, { 'VIEW_CHANNEL': false });
message.guild.members.cache.forEach(u => {
if(u.hasPermission('MANAGE_GUILD')) {
s.createOverwrite(u, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true, 'MANAGE_MESSAGES':true, 'MANAGE_CHANNELS':true }); }})
s.createOverwrite(author, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
  const e = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Çok yakın zaman da seninle ilgileneceğiz.
Bileti kapatmak istersen: 🔒`)
.setFooter(`Narcos Code Ticket Bot Altyapısı - Ticketing without clutter`, client.user.avatarURL())
s.send({content:`${author}, Hoşgeldin!`, embeds: [e]}).then(m => {
m.react(`🔒`)
let si = (reaction, user) => reaction.emoji.name === "🔒" && user.id !== client.user.id
let s23 = m.createReactionCollector(si, { time: 0 });

s23.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
m.react(`✅`)
m.react(`❌`)
let sil = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id
let sill = m.createReactionCollector(sil, { time: 0 });
let ss = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id
let s2 = m.createReactionCollector(ss, { time: 0 });
s2.on('collect', async reaction => {
s.messages.fetchs({limit:10}).then(async messages => { 
  messages.get(m.id).reactions.get('✅').removeAll()
reaction.removeAll()
})})
sill.on('collect', async reaction => {
let us = reaction.users.last()
reaction.remove(us.id)
  const ei = new Discord.MessageEmbed()
.setColor('#ffff00')
.setDescription(`Bilet ${us} tarafından kapatıldı.`)
s.send({embeds: [ei]})
s.setName(`closed-${as}`)
  const ae = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`:unlock:: Ticketi tekrar açar.
:no_entry:: Ticketi siler.`)
s.send({embeds: [ae]}).then(m2 => {
m2.react('🔓')
m2.react('⛔')
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id
let sill = m2.createReactionCollector(sil, { time: 0 });
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id
let geriaç = m2.createReactionCollector(geri, { time: 0 });

geriaç.on('collect', async reaction => {
const author = reaction.users.last()
m2.delete('500')
reaction.remove(author.id) 
  const a = new Discord.MessageEmbed()//Narcos Code tarafından türkçe çevrildi
.setColor('GREEN')
.setDescription(`Bilet ${author} tarafından tekrar açıldı.`)
s.send({embeds: [a]})
s.setName(`ticket-${as}`)
})

sill.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
  const e = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
s.send({embeds: [e]})
setTimeout(async () => {
s.delete()
const sd = await db.fetch(`ass.${message.guild.id}.${author.id}`)
db.delete(`asd.${message.guild.id}.${author.id}`)
db.delete(`asd.${message.guild.id}.${s.id}.${author.id}`)
}, 5000)

})  

})
})
})
})
  
  
})

})  

})
})
                                                                 
                                                                 
  }
  }
    }