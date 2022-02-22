const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "oyun", 
  options: [
      
        {
            name:"oyun",
            type:3,
            description:"Hangi oyunu oynayacaksın?",
            choices:[
                {name:"Awkword",value:"awkword"},
                {name:"Betrayal",value:"betrayal"},
                {name:"Chess",value:"chess"},
                {name:"Doodlecrew",value:"doodlecrew"},
                {name:"Fishing",value:"fishing"},
                {name:"Lettertile",value:"lettertile"},
                {name:"Poker",value:"poker"},
                {name:"Puttparty",value:"puttparty"},
                {name:"Spellcast",value:"spellcast"},
                {name:"Wordsnack",value:"wordsnack"},
                {name:"Youtube",value:"youtube"}
            ],
            required: true
        }
      
  ], 
  description: 'Discord üzerinde oyunlar oynarsınız',

    run: async (client, interaction) => {



        const hata = new Discord.MessageEmbed() 
.setDescription("**Herhangi bir ses kanalında olmalısınız.**")
.setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
.setColor("GREEN")
const embed = new Discord.MessageEmbed() 
.setDescription("**Aşağıdan oyunu açabilirsiniz.**")
.setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
.setTimestamp()
.setColor("GREEN")
if(!interaction.member.voice.channel) {await interaction.reply({embeds: [hata]})  } 

const tür = interaction.options.get("oyun").value
const row = new MessageActionRow()
client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, tür).then(async invite => {
    
			row.addComponents(

 new Discord.MessageButton() 
.setStyle("LINK") 
.setLabel("Oyunu aç") 
.setURL(`${invite.code}`)
); 

await interaction.reply({embeds: [embed], components: [row]})
});

}
} 