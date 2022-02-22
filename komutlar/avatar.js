const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = {

  name: "avatar", 
  description: 'Avatarınızı gösterir',
  options: [
    {
        name:"user",
        description:"Kullanıcı Seçin",
        type:6,
    },
    {
        name:"type",
        type:3,
        description:"Resmin türü ne olucak?",
        choices:[
            {name:"Gif",value:"gif"},
            {name:"Png",value:"png"}
        ]
    },
    {
        name:"size",
        type:3,
        description:"Resmin büyüklüğü nasıl olucak?",
        choices:[
            {name:"1024px",value:"1024"},
            {name:"2048px",value:"2048"}
        ]
    },
    
],
run: async (client, interaction) => {
    const veri = interaction.options.getMember('user') ? interaction.options.getMember('user').user.id : interaction.member.user.id;
   const id = interaction.guild.members.cache.has(veri) ? interaction.guild.members.cache.get(veri).id : interaction.member.user.id
    const tür = interaction.options.get("type") ? interaction.options.get("type").value : "png"
    const oran = interaction.options.get("size") ? interaction.options.get("size").value : "1024"
    const url = `https://cdn.discordapp.com/avatars/${id}/${interaction.guild.members.cache.get(veri).user.avatar}.${tür}?size=${oran}`;
    try{
   
        const embed = new MessageEmbed()
    .setImage(url)
    .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
    .setTimestamp()

    const buton = new MessageButton()
    .setLabel("Tarayıcıda aç")
    .setStyle("LINK")
    .setURL(url)

    interaction.reply({embeds:[embed], components:[new MessageActionRow().addComponents(buton)]});
    }
    catch{
        interaction.reply({content:"Kullanıcı bulunamadı"})
    }
} 

} 