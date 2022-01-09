const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
    
    isim: "avatar", 
    alternatifler: ["avatar"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {
      
//let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))

const en = db.has(`en.lang.${message.guild.id}`)
const tr = db.has(`tr.lang.${message.guild.id}`)

if(en) {
  let muser = message.mentions.users.first();
  let userid;
  if(isNaN(args[0])){
    if(!muser){
      userid = message.author.id;
    }else{
      userid = muser.id;
    }
  }else{
    userid = args[0];
  }
  try{
  let user = await client.users.fetch(userid);
  let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
  if(avatar.endsWith(".gif?size=1024")) {
  
  let embed = new Discord.MessageEmbed()
  .setAuthor(user.tag + '', user.displayAvatarURL())
  .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png', size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg', size: 1024 })})** | **[[GIF]](${user.displayAvatarURL({ format: 'gif', size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp', size: 1024 })})**`)
  .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
  .setColor("RANDOM")
  message.channel.send({embeds: [embed]})
  
  } else {
  
    let embed = new Discord.MessageEmbed()
  .setAuthor(user.tag + '', user.displayAvatarURL())
  .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **~~[GIF]~~** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
  .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
  .setColor("RANDOM")
  message.channel.send({embeds: [embed]})
  
  }
  }catch{
      const e = new Discord.MessageEmbed().setColor("RANDOM").setDescription("I couldn't find the user!")
    message.channel.send({embeds: [e]});
  
  }
  }
  if(tr) {
    let muser = message.mentions.users.first();
    let userid;
    if(isNaN(args[0])){
      if(!muser){
        userid = message.author.id;
      }else{
        userid = muser.id;
      }
    }else{
      userid = args[0];
    }
    try{
    let user = await client.users.fetch(userid);
    let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
    if(avatar.endsWith(".gif?size=1024")) {
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag + '', user.displayAvatarURL())
    .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png', size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg', size: 1024 })})** | **[[GIF]](${user.displayAvatarURL({ format: 'gif', size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp', size: 1024 })})**`)
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
    
    } else {
    
      let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag + '', user.displayAvatarURL())
    .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **~~[GIF]~~** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
    
    }
    }catch{
        const e = new Discord.MessageEmbed().setColor("RANDOM").setDescription("Kullanıcıyı bulamadım.")
      message.channel.send({embeds: [e]});
    
    }
    }
    if(!tr && !en) {
      let muser = message.mentions.users.first();
      let userid;
      if(isNaN(args[0])){
        if(!muser){
          userid = message.author.id;
        }else{
          userid = muser.id;
        }
      }else{
        userid = args[0];
      }
      try{
      let user = await client.users.fetch(userid);
      let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
      if(avatar.endsWith(".gif?size=1024")) {
      
      let embed = new Discord.MessageEmbed()
      .setAuthor(user.tag + '', user.displayAvatarURL())
      .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png', size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg', size: 1024 })})** | **[[GIF]](${user.displayAvatarURL({ format: 'gif', size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp', size: 1024 })})**`)
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      message.channel.send({embeds: [embed]})
      
      } else {
      
        let embed = new Discord.MessageEmbed()
      .setAuthor(user.tag + '', user.displayAvatarURL())
      .setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **~~[GIF]~~** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
      .setColor("RANDOM")
      message.channel.send({embeds: [embed]})
      
      }
      }catch{
          const e = new Discord.MessageEmbed().setColor("RANDOM").setDescription("I couldn't find the user!")
        message.channel.send({embeds: [e]});
      
      }
      }

}
}
