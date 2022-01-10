const Discord = require('discord.js');
const moment = require('moment');
const db = require("quick.db")

module.exports = {
    
    isim: "userinfo", 
    alternatifler: ["user-info", "ui", "kb", "kullanıcıbilgi", "kullanıcı-bilgi"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
        const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     
const Target = message.mentions.users.first() || message.author;
const Member = message.guild.members.cache.get(Target.id)

if(en) {
    moment.locale("en")
    const Target = message.mentions.users.first() || message.author;
const Member = message.guild.members.cache.get(Target.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
    .setThumbnail(Target.displayAvatarURL({dynamic: true}))
    .addField(`User ID`, Target.id, false)
    .addField(`Roles`, Member.roles.cache.map(r => r).join(' '))
    .addField(`Date to join the server`, `${moment(Member.joinedAt).format('D MMMM YYYY')}`)
    .addField(`Date to join the discord`, `${moment(Target.createdAt).format('D MMMM YYYY')}`)
    .setFooter("Elenor - User Info")
    message.channel.send({embeds: [embed]})
}
if(tr) {
    moment.locale("tr")
    const Target = message.mentions.users.first() || message.author;
const Member = message.guild.members.cache.get(Target.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
    .setThumbnail(Target.displayAvatarURL({dynamic: true}))
    .addField(`Kullanıcı ID`, Target.id, false)
    .addField(`Rolleri`, Member.roles.cache.map(r => r).join(' '))
    .addField(`Sunucuya katılım tarihi`, `${moment(Member.joinedAt).format('D MMMM YYYY')}`)
    .addField(`Discorda katılım tarihi`, `${moment(Target.createdAt).format('D MMMM YYYY')}`)
    .setFooter("Elenor - Kullanıcı Bilgi")
    message.channel.send({embeds: [embed]})
}
if(!en && !tr) {
    moment.locale("en")
    const Target = message.mentions.users.first() || message.author;
const Member = message.guild.members.cache.get(Target.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
    .setThumbnail(Target.displayAvatarURL({dynamic: true}))
    .addField(`User ID`, Target.id, false)
    .addField(`Roles`, Member.roles.cache.map(r => r).join(' '))
    .addField(`Date to join the server`, `${moment(Member.joinedAt).format('D MMMM YYYY')}`)
    .addField(`Date to join the discord`, `${moment(Target.createdAt).format('D MMMM YYYY')}`)
    .setFooter("Elenor - User Info")
    message.channel.send({embeds: [embed]})
}


}
}