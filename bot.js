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


["command"].forEach(handler => {
  require(`./events/loader`)(client);
});

client.on("ready", () => {
  require("./events/eventLoader")(client);
});
const express = require("express")
 const app = express()
const http = require("http")
app.get("/", (request, response) => {
  console.log(`Your bot has been successfully activated 24/7.`)
  response.sendStatus(200);
})
app.listen(process.env.PORT)
setInterval(() => {
  http.get(`http://ballistic-inexpensive-polonium.glitch.me/`)
}, 280000)
const Log = message => {
  console.log(`[ »» ] ${message}`)
};




client.on('guildCreate', async guild => {
  db.set(`en.lang.${guild.id}`, true)
  })

const zm = require("ms")
client.on("messageCreate", async message => {
  let kanal = db.fetch(`addbot.${message.guild.id}`)
  if(kanal) {
    if(message.channel.id !== kanal) return;
  setTimeout(() => {
  message.delete()
  }, zm("20s"))
  }

  })


client.login(config.token);







