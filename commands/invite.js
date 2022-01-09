const db = require("quick.db")
const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");

module.exports = {
    
    isim: "invite", 
    alternatifler: ["invite", "davet"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
if(en) {    const embed = new MessageEmbed()
  .setDescription(`You can select the operation you want to do from the buttons below.`)
  .setFooter(`Elenor - Invite`)
const row = new MessageActionRow()
    .addComponents(
      
 new MessageButton()

.setLabel('Invite')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=`+ client.user.id +`&permissions=8&scope=bot%20applications.commands`)
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Support Server')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL("https://discord.gg/bEF3khU9HZ")
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Vote Page')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
      .setURL("https://vcodes.xyz/bot/897562864859119647/vote")
  
    )


message.channel.send({embeds: [embed], components: [row]})}
if(tr) {    const embed = new MessageEmbed()
  .setDescription(`Aşağıdaki butonlardan yapmak istediğiniz işlemi seçebilirsiniz.`)
  .setFooter(`Elenor - Davet`)
const row = new MessageActionRow()
    .addComponents(
      
 new MessageButton()

.setLabel('Davet')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=`+ client.user.id +`&permissions=8&scope=bot%20applications.commands`)
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Destek Sunucusu')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL("https://discord.gg/bEF3khU9HZ")
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Oy Sayfası')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
      .setURL("https://vcodes.xyz/bot/897562864859119647/vote")
  
    )


message.channel.send({embeds: [embed], components: [row]})}
if(!tr && !en) {    const embed = new MessageEmbed()
  .setDescription(`You can select the operation you want to do from the buttons below.`)
  .setFooter(`Elenor - Invite`)
const row = new MessageActionRow()
    .addComponents(
      
 new MessageButton()

.setLabel('Invite')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=`+ client.user.id +`&permissions=8&scope=bot%20applications.commands`)
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Support Server')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL("https://discord.gg/bEF3khU9HZ")
    )
    .addComponents(
      
 new MessageButton()

.setLabel('Vote Page')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
      .setURL("https://vcodes.xyz/bot/897562864859119647/vote")
  
    )


message.channel.send({embeds: [embed], components: [row]})}

}
}