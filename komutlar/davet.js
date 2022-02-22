const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "davet", 
  options: [], 
  description: 'Botun davet linkini gösterir',

    run: async (client, interaction) => {
const embed = new Discord.MessageEmbed() 
.setDescription("**Aşağıdan istediğiniz herhangi bir bağlantıya gidebilirsiniz.**")
.setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
.setColor("GREEN")

const row = new MessageActionRow()
			.addComponents(

 new Discord.MessageButton() 
.setStyle("LINK") 
.setLabel("Davet linki") 
.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`), 

new Discord.MessageButton() 
.setStyle("LINK") 
.setLabel("Destek sunucusu") 
.setURL("https://discord.gg/muhCP8kN2s"),

new Discord.MessageButton() 
.setStyle("LINK") 
.setLabel("Oy linki") 
.setURL("https://vcodes.xyz/tr/bot/897562864859119647/vote")
); 
await interaction.reply({embeds: [embed], components: [row]})  
} 

} 