const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 

module.exports = {

  name: "sunucu-bilgi", 
  options: [], 
  description: 'Sunucu bilgisini gösterir',

    run: async (client, interaction) => {
        const level = {
            "TIER_3":"3. Seviye",
            "TIER_2":"2. Seviye",
            "TIER_1":"1. Seviye",
            "NONE":"Seviye Yok"
        }
        const dog = {
            "VERY_HIGH":"Çok Yüksek",
            "HIGH":"Yüksek",
            "MEDIUM":"Orta",
            "LOW":"Düşük",
            "NONE":"Yok"
        }


     const embed = new MessageEmbed()

      .setColor("#2ACAEA")
      .setFooter({ text: `[ ${interaction.user.tag} ] tarafından istendi`})
      .setTimestamp()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .addField("Sunucu Adı", interaction.guild.name, true)
      .addField("Sunucu Açıklaması:",
        interaction.guild.description ? `${interaction.guild.description.slice(0,35)}...` : `Yok`,
        false
      )
      .addField("Sunucu ID", interaction.guild.id, false)
      .addField("Sunucu Sahibi", `<@!${interaction.guild.ownerId}>`, true)
      .addField("Takviye Seviyesi",`\`${interaction.guild.premiumSubscriptionCount}\` Boost
        (${interaction.guild.premiumTier ? level[interaction.guild.premiumTier] : '0 Level'})`,
        true
      )
      .addField("Doğrulama Seviyesi",dog[interaction.guild.verificationLevel],true)
      .addField("Özel Davet Linki",`${interaction.guild.vanityURLCode
        ? `discord.gg/${interaction.guild.vanityURLCode}` 
        : "Yok"}`,true)
      .addField("Üye Sayısı", `${interaction.guild.memberCount} üye`, true)
      .addField("Oluşturulma Tarihi",`<t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>`,true)
      .addField("Toplam Kanal/Rol Sayısı",`
    \`${interaction.guild.roles.cache.size}\` Rol - \`${
      interaction.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT")
        .size
    }\` Yazı Kanalları - \`${
      interaction.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE")
        .size
    }\` Ses Kanalları - \`${
      interaction.guild.channels.cache.filter(
        (c) => c.type === "GUILD_CATEGORY"
      ).size
    }\` Kategori
    `,
        false
      )

    return await interaction.reply({ embeds: [embed] }); 
} 

} 