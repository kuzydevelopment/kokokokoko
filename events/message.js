const { Client, Intents, Collection, Interaction } = require("discord.js");
const Discord = require("discord.js");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const fs = require("fs");
const config = require("../config.json");
const prefix = config.prefix;
const db = require("quick.db");

module.exports = async (message) => {
  const en = db.has(`en.lang.${message.guild.id}`);
  const tr = db.has(`tr.lang.${message.guild.id}`);
  let client = message.client;

  if (message.author.bot) return;
  if (!message.guild) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  var command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.alternatifler.get(cmd));

  if (command) {
   /* if (en) {
      if (db.get(`user_${message.author.id}.şartlar`) != "kabul edilmiş") {
        const warningEmbed = new Discord.MessageEmbed().setColor("RED")
          .setDescription(`Hi ${message.author}
        You need to accept the rules to use Elenor.
        
        ❖ Reach developers from an open to the bot [Support Server](https://discord.gg/vu9pn4bs4z).
        ↳ Do not use the command to ping the bot.
        ↳ Similar & do not open the same bot, do not remove the infrastructure.
        . The responsibility of the files you do with the bot (Troji, Token Grabber, etc.) are the responsibility of the files.
        ↳ Note [Discord Community Rules](https://discord.com/terms).`);

        const row = new MessageActionRow().addComponents(
          new Discord.MessageButton()
            .setCustomId("kabul")
            .setStyle("SECONDARY")
            .setEmoji("<:tick:925110068930818198>")
        );

        return message.channel
          .send({ embeds: [warningEmbed], components: [row] })
          .then(async function (mesaj) {
            const filter = (i) => i.user.id === message.author.id;
            mesaj
              .createMessageComponentCollector({ filter, time: 15000 })
              .on("collect", async (button, interaction) => {
                if (button.customId === "kabul") {
                  const g = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(
                      `**You have accepted the terms of use. You can now use the bot!**`
                    )
                    .setTitle(`${client.user.username} - Terms of use`);
                  button.update({ embeds: [g], components: [] });
                  await db.set(
                    `user_${message.author.id}.şartlar`,
                    "kabul edilmiş"
                  );
                }
              });
          });
      }
    }
    if (tr) {
      if (db.get(`user_${message.author.id}.şartlar`) != "kabul edilmiş") {
        const warningEmbed = new Discord.MessageEmbed().setColor("RED")
          .setDescription(`Merhaba ${message.author}
        Elenor'u kullanmak için kuralları kabul etmen gerek.
        
        ↳ Bot üzerinde bulunacak bir açıkta [destek sunucusu](https://discord.gg/Vu9pn4BS4z) üzerinden geliştiricilere ulaşın.
        ↳ Botta ping çıkartacak şekilde komut kullanmayın.
        ↳ Bota benzer & aynı bot açmayın, altyapısını çıkartmayın.
        ↳ Bot ile yaptığınız yasadışı(trojen, token grabber vb.) dosyaların sorumluluğu hesaba aittir.
        ↳ [Discord Topluluk Kuralları](https://discord.com/terms)'na dikkat edin.`);

        const row = new MessageActionRow().addComponents(
          new Discord.MessageButton()
            .setCustomId("kabul")
            .setStyle("SECONDARY")
            .setEmoji("<:tick:925110068930818198>")
        );

        return message.channel
          .send({ embeds: [warningEmbed], components: [row] })
          .then(async function (mesaj) {
            const filter = (i) => i.user.id === message.author.id;
            mesaj
              .createMessageComponentCollector({ filter, time: 15000 })
              .on("collect", async (button, interaction) => {
                if (button.customId === "kabul") {
                  const g = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(
                      `**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**`
                    )
                    .setTitle(`${client.user.username} - Kullanım Şartları`);
                  button.update({ embeds: [g], components: [] });
                  await db.set(
                    `user_${message.author.id}.şartlar`,
                    "kabul edilmiş"
                  );
                }
              });
          });
      }
    }
    if (!tr && !en) {
      if (db.get(`user_${message.author.id}.şartlar`) != "kabul edilmiş") {
        const warningEmbed = new Discord.MessageEmbed().setColor("RED")
          .setDescription(`Hi ${message.author}
        You need to accept the rules to use Elenor.
        
        ❖ Reach developers from an open to the bot [Support Server](https://discord.gg/vu9pn4bs4z).
        ↳ Do not use the command to ping the bot.
        ↳ Similar & do not open the same bot, do not remove the infrastructure.
        . The responsibility of the files you do with the bot (Troji, Token Grabber, etc.) are the responsibility of the files.
        ↳ Note [Discord Community Rules](https://discord.com/terms).`);

        const row = new MessageActionRow().addComponents(
          new Discord.MessageButton()
            .setCustomId("kabul")
            .setStyle("SECONDARY")
            .setEmoji("<:tick:925110068930818198>")
        );

        return message.channel
          .send({ embeds: [warningEmbed], components: [row] })
          .then(async function (mesaj) {
            const filter = (i) => i.user.id === message.author.id;
            mesaj
              .createMessageComponentCollector({ filter, time: 15000 })
              .on("collect", async (button, interaction) => {
                if (button.customId === "kabul") {
                  const g = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(
                      `**You have accepted the terms of use. You can now use the bot!**`
                    )
                    .setTitle(`${client.user.username} - Terms of use`);
                  button.update({ embeds: [g], components: [] });
                  await db.set(
                    `user_${message.author.id}.şartlar`,
                    "kabul edilmiş"
                  );
                }
              });
          });
      }
    } */
    try {
      command.çalıştır(
        client,
        message,
        args,
        message.author,
        args.join(" "),
        prefix
      );
    } catch (error) {
      console.log(error);
    }
  }
};
