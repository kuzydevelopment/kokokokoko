const { Client, Intents , Collection, Interaction} = require('discord.js');
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const db = require("quick.db")
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

client.commands = new Collection(); 
client.alternatifler = new Collection();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

["command"].forEach(handler => {
  require(`./events/loader`)(client);
}); 

client.on('ready', () => {
  console.log(`[ELENOR] -> The bot was entered
[ELENOR] -> The logged-in bot: ${client.user.tag}
[ELENOR] -> ${client.guilds.cache.size.toLocaleString()} Server - ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} User`);
 var oyun = [
    
    "Developer: ! Alonè#0411",
    "?help & ?invite",
    "Bot Version: beta v1.2.4"

    //Version Config

    //Bug Fix: + v0.0.2
    //Add Command: + v0.0.4
    //Add System: + v0.0.9

  ]
  
  setInterval(function() {
    var oyun1 = oyun[Math.floor(Math.random() * (oyun.length))]
    client.user.setPresence({activities: [{name: oyun1}]});

}, 2 * 10000);
});
 

client.on("messageCreate", async message => {
  const en = db.has(`en.lang.${message.guild.id}`)
        const tr = db.has(`tr.lang.${message.guild.id}`)
  

  if (message.author.bot) return; 
  if (!message.guild) return; 

  if (!message.content.startsWith(prefix)) return; 

  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase(); 

  if (cmd.length === 0) return; 

  var command = client.commands.get(cmd); 
  if (!command) command = client.commands.get(client.alternatifler.get(cmd));


  if (command) 

  {
    


    if(en) {
      if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
        const warningEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Hi ${message.author}
        You need to accept the rules to use Elenor.
        
        ❖ Reach developers from an open to the bot [Support Server](https://discord.gg/vu9pn4bs4z).
        ↳ Do not use the command to ping the bot.
        ↳ Similar & do not open the same bot, do not remove the infrastructure.
        . The responsibility of the files you do with the bot (Troji, Token Grabber, etc.) are the responsibility of the files.
        ↳ Note [Discord Community Rules](https://discord.com/terms).`)
  
        
  
        const row = new MessageActionRow()
        .addComponents(
          
     new Discord.MessageButton()
    .setCustomId("kabul")
    .setStyle('SECONDARY')
    .setEmoji("<:tick:925110068930818198>")
        )
          

        return message.channel.send({embeds: [warningEmbed], components: [row]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
  
if(button.customId === "kabul") {
    const g = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**You have accepted the terms of use. You can now use the bot!**`)
    .setTitle(`${client.user.username} - Terms of use`);
    button.update({embeds: [g], components: []})
  await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
       
  

}
            })
})
}
                
                
         
      
    }
    if(tr) {
      
      if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
        const warningEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Merhaba ${message.author}
        Elenor'u kullanmak için kuralları kabul etmen gerek.
        
        ↳ Bot üzerinde bulunacak bir açıkta [destek sunucusu](https://discord.gg/Vu9pn4BS4z) üzerinden geliştiricilere ulaşın.
        ↳ Botta ping çıkartacak şekilde komut kullanmayın.
        ↳ Bota benzer & aynı bot açmayın, altyapısını çıkartmayın.
        ↳ Bot ile yaptığınız yasadışı(trojen, token grabber vb.) dosyaların sorumluluğu hesaba aittir.
        ↳ [Discord Topluluk Kuralları](https://discord.com/terms)'na dikkat edin.`)
  
        
  
        const row = new MessageActionRow()
        .addComponents(
          
     new Discord.MessageButton()
    .setCustomId("kabul")
    .setStyle('SECONDARY')
    .setEmoji("<:tick:925110068930818198>")
        )
       
          

        return message.channel.send({embeds: [warningEmbed], components: [row]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
  
if(button.customId === "kabul") {
    const g = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**`)
    .setTitle(`${client.user.username} - Kullanım Şartları`);
    button.update({embeds: [g], components: []})
  await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
       
  

}
            })
})
}
                
                
         
      
    }
    if(!tr && !en) {
      if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
        const warningEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Hi ${message.author}
        You need to accept the rules to use Elenor.
        
        ❖ Reach developers from an open to the bot [Support Server](https://discord.gg/vu9pn4bs4z).
        ↳ Do not use the command to ping the bot.
        ↳ Similar & do not open the same bot, do not remove the infrastructure.
        . The responsibility of the files you do with the bot (Troji, Token Grabber, etc.) are the responsibility of the files.
        ↳ Note [Discord Community Rules](https://discord.com/terms).`)
  
        
  
        const row = new MessageActionRow()
        .addComponents(
          
     new Discord.MessageButton()
    .setCustomId("kabul")
    .setStyle('SECONDARY')
    .setEmoji("<:tick:925110068930818198>")
        )
          

        return message.channel.send({embeds: [warningEmbed], components: [row]}).then(async function(mesaj) {

          const filter = i => i.user.id === message.author.id;
            mesaj.createMessageComponentCollector({ filter, time: 15000 }).on('collect', async (button, interaction) => {
  
if(button.customId === "kabul") {
    const g = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**You have accepted the terms of use. You can now use the bot!**`)
    .setTitle(`${client.user.username} - Terms of use`);
    button.update({embeds: [g], components: []})
  await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
       
  

}
            })
})
}
                
                
         
      
    }
    try {
      command.çalıştır(client, message, args, message.author, args.join(" "), prefix)
    } catch (error) {
      console.log(error)
    }
  } 
    

});



client.on('guildCreate', async guild => {
  db.set(`en.lang.${guild.id}`, true)
  })




client.login(config.token);







