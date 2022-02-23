//-------------- TANIMLAMALAR --------------
const Discord = require('discord.js')

const { Client, Util } = require('discord.js');
const { Intents } = require('discord.js');
const ayarlar = require('./ayarlar.json');
const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => !["GUILD_PRESENCES", "GUILD_MEMBERS"].includes(K)).reduce((t, [, V]) => t | V, 0)
const client = new Discord.Client({intents: INTENTS})
const db = require("quick.db")
require("./util/slashCommandsLoader.js")(client) 
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);

const ayarla = require('./ayarlar.json');

const fs = require("fs")
const moment = require("moment");
require("moment-duration-format");
require('dotenv').config()


//vCodes
const vCodes = require('vcodes.js');
const dbl = new vCodes("jsHSKFcoGztSOMoEMlDVHpKtgANmBMaBRegRRkJwjRoajwKvehZdBmQEccTyQtORoCezlgeyHAHafslJzjqtpDZYwDbhUAXTbEFDcsOmpsRUNzYNUrPOLEOQrPQtPXOL")

client.on("ready", () => {
    let guildCount = client.guilds.cache.size;
    dbl.stats(guildCount, () => console.log("[🔎 - vCodes] » vCodes.xyz'de istatistik güncellendi."));
})
    dbl.on("vote", ({ user, bot}) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Gölge#8629'a oy verdiğiniz için teşekkür ederiz 🎉`)
        .setDescription(`**Kullanıcı: \`${user.username} (${user.id})\` 

        Her 12 saatte bir [vCodes](https://vcodes.xyz/tr/bot/897562864859119647/vote)'ten oy verebilirsiniz.**`)
        .setFooter({ text: `Oy verip bizi desteklediğiniz için teşükkür ederiz.`})
        client.channels.cache.get("916997242668339240").send({embeds: [embed]})
    })




/*client.on('guildDelete', guild => {

    let narcoscode = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setDescription(`**Bir sunucudan atıldım.

    » Bilgiler;

   » Sunucu Adı: \`${guild.name}\`
   » Sunucu Sahibi: <@${guild.ownerId}>
   » Sunucu Sahibi ID: \`${guild.ownerId}\`
   » Sunucu ID: \`${guild.id}\`
   » Sunucudaki Üye Sayısı: \`${guild.memberCount}\`**`)
   .setThumbnail(guild.iconURL({dynamic: true}))
       client.channels.cache.get(ayarlar.girdiçıktılog).send({embeds: [narcoscode]});
      
    });
    
    
    client.on('guildCreate', guild => {
    
    let narcoscode = new Discord.MessageEmbed()

    .setDescription(`**Bir sunucuya eklendim.
    
    » Bilgiler;

   » Sunucu Adı: \`${guild.name}\`
   » Sunucu Sahibi: <@${guild.ownerId}>
   » Sunucu Sahibi ID: \`${guild.ownerId}\`
   » Sunucu ID: \`${guild.id}\`
   » Sunucudaki Üye Sayısı: \`${guild.memberCount}\`**`)
   .setThumbnail(guild.iconURL({dynamic: true}))
    
       client.channels.cache.get(ayarlar.girdiçıktılog).send({embeds: [narcoscode]});
      
    });
*/
client.on('guildCreate', guild => {
    process.exit(0)
})










var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));





client.login(process.env.token)

const express = require("express")
 const app = express()
const http = require("http")
app.get("/", (request, response) => {
  console.log(`[🩸 - Uptime] » Uptime başarıyla yapıldı.`)
  response.sendStatus(200);
})
app.listen(process.env.PORT)
setInterval(() => {
  http.get(`http://ballistic-inexpensive-polonium.glitch.me/`)
}, 280000)