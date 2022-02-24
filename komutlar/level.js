const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageEmbed, Permissions,MessageAttachment } = require('discord.js');
const canvacord = require("canvacord");
const levels = require("../database/models/levels");
const guildss = require("../database/models/guild");
module.exports = {

  name: "level", 
  description: 'Levelinizi gösterir',
  options: [
    {
        name:"kullanıcı",
        description:"Kullanıcı seçin",
        type:6,
    }
    
    
],
run: async (client, interaction) => {
    const member = interaction.options.getMember('kullanıcı') || interaction.user.id;
  const { levelSystem } = await guildss.findOne({ guildID: interaction.guild.id }) || { levelSystem: null };
  if (!levelSystem) return interaction.reply({ content: "Seviye sistemi aktif değil açmak için: `/level-sistem`" })
  
  
  const x = await levels.findOne({ guildID: interaction.guild.id, userID: interaction.user.id }) 
  
  
  if (x) {
    

const rank = new canvacord.Rank()
    .setAvatar(`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=2048`)
    .setCurrentXP(x.xp)
    .setLevel(x.level)
    .setRequiredXP(x.gerekli)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(member.user.username)
    .setRankColor('transparent', 'transparent')
    .setBackground('IMAGE','https://cdn.discordapp.com/attachments/891638389449846784/892140967128358972/Baslksz-1.png')
    .setDiscriminator(member.user.discriminator);

rank.build()
    .then(data => {
        const attachment = new MessageAttachment(data, "RankCard.png");
        interaction.reply({content:`${member} isimli kişinin leveli`,files:[attachment]});
    });
  return;
  }
} 

} 