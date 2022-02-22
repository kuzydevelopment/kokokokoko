const Discord = require('discord.js');
const db = require("quick.db") 
const {MessageActionRow, MessageButton} = require("discord.js") 
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
module.exports = {

  name: "istatistik", 
  options: [], 
  description: 'Botun istatistiklerini gösterir',

    run: async (client, interaction) => {
        moment.locale("tr")
        const duration = moment.duration(client.uptime).format('W [hafta], D [gün], H [saat], m [dakika], s [saniye]');
     const embed = new Discord.MessageEmbed()
       
       .setDescription(`
      ** » Bot Hakkında;
       - Bot Adı: \`${client.user.username}\`
       - Kuruluş Tarihi: \`27.01.2022\`
       - Bot Gecikmesi: \`${client.ws.ping}ms\` 
       - Mesaj Gecikmesi: \`${new Date().getTime() - interaction.createdTimestamp}ms\`
       - Kullanıcı Sayısı: \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
       - Sunucu Sayısı: \`${client.guilds.cache.size.toLocaleString()}\`
       - Kütüphane: \`Discord.js\`
       - Uptime: \`${duration}\`

       » Sistem Bilgileri;
       - RAM Kullanımı: \`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} mb\`
       - CPU: \`${os.cpus().map(i => `${i.model}`)[0]}\`**
       `)
     

await interaction.reply({embeds: [embed]})  
} 

} 