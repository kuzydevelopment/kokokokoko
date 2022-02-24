const Discord = require('discord.js');
const db = require("quick.db") 
const guildsModel = require("../database/models/guild");
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = {

  name: "level-sistem", 
  description: 'Level sistemini açarsınız/kapatırsınız',
  options: [
    {
        name:"işlem",
        type:3,
        description:"Açacakmısın kapatacakmısın?",
        choices:[
            {name:"Aç",value:"aç"},
            {name:"Kapat",value:"kapat"}
        ],
      required: true
    }
    
],
run: async (client, interaction) => {
  const tür = interaction.options.get("işlem").value
  if (tür == "aç") {
    await guildsModel.updateOne({ guildID: interaction.guild.id }, { $set: { levelSystem: true } }, { upsert: true })
    interaction.reply({content: 'Level sistemi başarıyla açıldı.'})
  } else if (tür == "kapat") {
    await guildsModel.updateOne({ guildID: interaction.guild.id }, { $unset: { levelSystem: 1 } }, { upsert: true })
    interaction.reply({content: 'Level sistemi başarıyla kapatıldı.'})
  }
} 

} 