const { Client, Intents , Collection, Interaction} = require('discord.js');
const Discord = require("discord.js")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const fs = require("fs");
const config = require("../config.json");
const prefix = config.prefix;
const db = require("quick.db")

module.exports = async(client) => {
  
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
}