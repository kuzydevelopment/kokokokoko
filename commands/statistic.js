const {MessageEmbed} = require("discord.js");
const  Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const { stripIndents } = require('common-tags');
require("moment-duration-format");
const db = require("quick.db")



module.exports = {
    
    isim: "statistic", 
    alternatifler: ["s", "i", "istatistik"],
     kullanımı:"statistic",

    çalıştır: async (client, message, args) => {
      const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
     
      
        var osType = await os.type();

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
  
    //--------------------------//
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bite'
    else if (osBit === 'x82') osBit = '32 Bite'
    else osBit = os.arch();
      
    if(en) {
      moment.locale("en")
      const duration = moment.duration(client.uptime).format('D [day], H [hour], m [minute], s [second]');
   const istatistikler = new MessageEmbed()
     .setAuthor(`・ Statistics`)
     .addField('Delay times', "Message delay: {ping1} Millisecond \nBot delay: {ping2} Millisecond".replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", client.ws.ping), true)
     .addField('Operation time', `${duration}`, true)
     .addField('General data', stripIndents`
     **Number of users:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
     **Number of Servers:** ${client.guilds.cache.size.toLocaleString()}
     **The number of channels:** ${client.channels.cache.size.toLocaleString()}
     `, true)
     .addField('Versions', stripIndents`
     **Discord.JS version** v${Discord.version}
     **NodejsJS version** ${process.version}
     `, true)
     .addField('Memory size used', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
     .addField('OS', `${osType} ${osBit}`, true)
     
     .addField('Processor', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
   .setFooter(`Elenor - Statistics` )
   message.channel.send({embeds: [istatistikler]});
   }
   if(tr) {
     moment.locale("tr")
    const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
 const istatistikler = new MessageEmbed()
   .setAuthor(`・ İstatistik`)
   .addField('Gecikme süreleri', "Mesaj Gecikmesi: {ping1} Mili Saniye \nBot Gecikmesi: {ping2} Mili Saniye".replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", client.ws.ping), true)
   .addField('Çalışma süresi', `${duration}`, true)
   .addField('Genel Veri', stripIndents`
   **Kullanıcı Sayısı:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
   **Sunucu Sayısı:** ${client.guilds.cache.size.toLocaleString()}
   **Kanal Sayısı:** ${client.channels.cache.size.toLocaleString()}
   `, true)
   .addField('Versiyonlar', stripIndents`
   **Discord.JS versiyon** v${Discord.version}
   **NodejsJS versiyon** ${process.version}
   `, true)
   .addField('Kullanılan bellek boyutu', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
   .addField('OS', `${osType} ${osBit}`, true)
   
   .addField('İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
 .setFooter(`Elenor - İstatistik` )
 message.channel.send({embeds: [istatistikler]});
 }
 if(!en && !tr) {
  moment.locale("en")
  const duration = moment.duration(client.uptime).format('D [day], H [hour], m [minute], s [second]');
const istatistikler = new MessageEmbed()
 .setAuthor(`・ Statistics`)
 .addField('Delay times', "Message delay: {ping1} Millisecond \nBot delay: {ping2} Millisecond".replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", client.ws.ping), true)
 .addField('Operation time', `${duration}`, true)
 .addField('General data', stripIndents`
 **Number of users:**  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
 **Number of Servers:** ${client.guilds.cache.size.toLocaleString()}
 **The number of channels:** ${client.channels.cache.size.toLocaleString()}
 `, true)
 .addField('Versions', stripIndents`
 **Discord.JS version** v${Discord.version}
 **NodejsJS version** ${process.version}
 `, true)
 .addField('Memory size used', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
 .addField('OS', `${osType} ${osBit}`, true)
 
 .addField('Processor', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
.setFooter(`Elenor - Statistics` )
message.channel.send({embeds: [istatistikler]});
}

}
}

