const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "oyunlar", 
  options: [], 
  description: 'Discord üzerinde oyunlar oynarsınız',

    run: async (client, interaction) => {
        const embed = new Discord.MessageEmbed() 
        .setDescription(`**Oyunlar;
        1- Awkword
        2- Betrayal
        3- Chess
        4- Doodlecrew
        5- Fishing
        6- Lettertile
        7- Poker
        8- Puttparty
        9- Spellcast
        10- Wordsnack
        11- Youtube
        
        Oyunları açmak için \`/oyun\`**`)
        .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
        .setTimestamp()
        .setColor("GREEN")

   await interaction.reply({embeds: [embed]})  
 
}
} 