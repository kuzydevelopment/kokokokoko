const {Collection} = require("discord.js")
const {readdirSync} = require("fs")
    const Discord = require("discord.js")
    const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => !["GUILD_PRESENCES", "GUILD_MEMBERS"].includes(K)).reduce((t, [, V]) => t | V, 0)
 const client = new Discord.Client({intents: INTENTS})
module.exports = (client, interaction) => {
  client.commands = new Collection() 
  var files = readdirSync("./komutlar")
  var props;
  for(var file in files) {
    props = require("../komutlar/" + files[file])
    client.commands.set(props.name, props)
    console.log(`[💻 - Eğik Çizgi Komutları] » [ ${props.name} ] komutu yüklenecek.`) 
  }
  var allFiles = client.commands.map(a => {
    return {name: a.name, description: a.description, options: a.options}
  })
  client.on("ready", async() => {
client.application.commands.set(allFiles) 
    console.log("[💻 - Eğik Çizgi Komutları] » Eğik çizgi komutları başarıyla yüklendi.")
    console.log(" ")
    console.log("[✨ - Bot Durum] » Bot durumu başarıyla yüklendi.")
    console.log(" ")
    console.log(`[🔎 - Bot İstatistik] » ${client.guilds.cache.size} Sunucu`)
    console.log(`[🔎 - Bot İstatistik] » ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`)
    console.log(" ")
    console.log("[💧 - Gölge] » Bot başarıyla aktif oldu.")
    console.log(`[💧 - Gölge] » Giriş yapılan bot ismi: ${client.user.tag}`)
    console.log(` `)
    const vCodes = require('vcodes.js');
const dbl = new vCodes("jsHSKFcoGztSOMoEMlDVHpKtgANmBMaBRegRRkJwjRoajwKvehZdBmQEccTyQtORoCezlgeyHAHafslJzjqtpDZYwDbhUAXTbEFDcsOmpsRUNzYNUrPOLEOQrPQtPXOL")


dbl.on("ready", (bot) => {
    console.log(`[🔎 - vCodes] » ${bot.username} adlı bot vCodes.xyz'de başarıyla bulundu.`)
})
    client.user.setPresence({ activities: [{ name: '☕ /davet - Çok Yakında Sizlerle', type: 'PLAYING' }] });
}) 
  client.on("interactionCreate", async (interaction) => {
    if(!interaction.guild) {
        const embed = new Discord.MessageEmbed() 
  .setDescription(`
  **Komutlarımı sadece sunucularda kullanabilirsiniz.**
  `)
  .setColor("RED")
  .setFooter({ text: `${client.user.username} - DM Güvenlik`})
  
  await interaction.reply({embeds: [embed]})  
      } else {
    if (!interaction.isCommand()) return;
    if (!client.commands.get(interaction.commandName)) return
    interaction.selectedValue = (interaction.options._hoistedOptions[0]) ? interaction.options._hoistedOptions[0].value : undefined
    const komut = client.commands.get(interaction.commandName)
    komut.run(client, interaction)
      }
  })
} 