const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = {

  name: "ping", 
  options: [], 
  description: 'Botun pingini gösterir',

    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(":ping_pong: Pong!")
        .setDescription(`**Gecikme değeri: \`${client.ws.ping}\`ms**`)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
        .setTimestamp()
   
        if(client.ws.ping < 60) embed.setColor("GREEN")
        else if(client.ws.ping > 60 && client.ws.ping < 120) embed.setColor("YELLOW")
        else if(client.ws.ping > 120) embed.setColor("RED")
   
   
        interaction.reply({embeds:[embed]});
} 

} 