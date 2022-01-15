const {MessageEmbed} = require("discord.js");
const  Discord = require("discord.js");
const {MessageActionRow} = require("discord.js")
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
      const row = new MessageActionRow()
    .addComponents(
      
 new Discord.MessageButton()
.setCustomId("ticketaç")
.setLabel('Ticket Aç')
.setStyle('SECONDARY')


    )

client.channels.cache.get(kanalbelirle).send({embeds: [a], components: [row]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector().on('collect', async (button, interaction, member) => {

const author = button.member
const sd = await db.fetch(`ass.${message.guild.id}.${author.id}`)

db.add(`numara.${message.guild.id}`, 1)
const as = await db.fetch(`numara.${message.guild.id}`)
message.guild.channels.create(`ticket-${as}`).then(async s => {
db.add(`numara.${s.id}`, as)// Narcos Code 
db.set(`ass.${message.guild.id}.${author.id}`, s.id)
db.set(`asd.${message.guild.id}.${s.id}.${author.id}`, 'ticketaçma')
let role = message.guild.roles.cache.find(r => r.name === '@everyone')
s.permissionOverwrites.create(role, { 'VIEW_CHANNEL': false });
message.guild.members.cache.forEach(u => {
if(u.permissions.has('MANAGE_GUILD')) {
s.permissionOverwrites.create(u, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true, 'MANAGE_MESSAGES':true, 'MANAGE_CHANNELS':true }); }})
s.permissionOverwrites.create(author, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
  const e = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Çok yakın zaman da seninle ilgileneceğiz.`)
.setFooter(`Elenor - Ticket Sistem`, client.user.avatarURL())
  
        const row2 = new MessageActionRow()
    .addComponents(
      
 new Discord.MessageButton()
.setCustomId("tsil")
.setLabel('Ticketi Sil')
.setStyle('SECONDARY')
      
    )    
        .addComponents(
      
 new Discord.MessageButton()
.setCustomId("tgaç")
.setLabel('Ticketi Geri Aç')
.setStyle('SECONDARY')
      
    )
s.send({content:`${author}, Hoşgeldin!`, embeds: [e], components: [row2]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction, member) => {

     


  const ei = new Discord.MessageEmbed()
.setColor('#ffff00')
.setDescription(`Bilet ${author} tarafından kapatıldı.`)
button.reply({embeds: [ei]})
s.setName(`closed-${as}`)
  const ae = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`:unlock:: Ticketi tekrar açar.
:no_entry:: Ticketi siler.`)
s.send({embeds: [ae]}).then(m2 => {



if(button.customId === "tgaç") {
  const a = new Discord.MessageEmbed()//Narcos Code tarafından türkçe çevrildi
.setColor('GREEN')
.setDescription(`Bilet ${author} tarafından tekrar açıldı.`)
s.send({embeds: [a]})
s.setName(`ticket-${as}`)
}

if(button.customId === "tsil") {
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
}



})
})
})
})
  
  
})



})

                                                            
                                                                 
  }
  }
    }