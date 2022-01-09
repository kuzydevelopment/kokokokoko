const discord = require('discord.js');
const fetch = require('node-fetch')
const {MessageActionRow} = require("discord.js")
const db = require("quick.db")
module.exports = {
    
    isim: "yt-together", 
    alternatifler: ["youtube-together"],
     kullanımı:"help",

    çalıştır: async (client, message, args, interaction) => {

        const en = db.has(`en.lang.${message.guild.id}`)
      const tr = db.has(`tr.lang.${message.guild.id}`)
      
      if(en) {
        if(!message.member.voice.channel) return message.channel.send('You are not in any audio channel.')
      
      fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                          method: "POST",
                          body: JSON.stringify({
                              max_age: 86400,
                              max_uses: 0,
                              target_application_id: "880218394199220334",
                              target_type: 2,
                              temporary: false,
                              validate: null
                          }),
                          headers: {
                              "Authorization": `Bot ${client.token}`,
                              "Content-Type": "application/json"
                          }
                      })
                      .then(res => res.json())
                      .then(invite => {
            
      let embed = new discord.MessageEmbed()
      .setDescription(`Youtube Together, Click the button below to open Youtube.`)
      .setFooter("Elenor - Youtube Together")
      const row = new MessageActionRow()
    .addComponents(
      
 new discord.MessageButton()

.setLabel('Youtube')
.setStyle('LINK')
.setEmoji("<:link:897863115272777739>")
  .setURL(`https://discord.gg/${invite.code}`)
    )
      message.channel.send({embeds: [embed], components: [row]})
                          
                      })
      
                  }

                  if(tr) {
                    if(!message.member.voice.channel) return message.channel.send('Herhangi bir ses kanalında bulunmuyorsun.')
                  
                  fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                                      method: "POST",
                                      body: JSON.stringify({
                                          max_age: 86400,
                                          max_uses: 0,
                                          target_application_id: "880218394199220334",
                                          target_type: 2,
                                          temporary: false,
                                          validate: null
                                      }),
                                      headers: {
                                          "Authorization": `Bot ${client.token}`,
                                          "Content-Type": "application/json"
                                      }
                                  })
                                  .then(res => res.json())
                                  .then(invite => {
                        
                                    let embed = new discord.MessageEmbed()
                                    .setDescription(`Youtube Together, Youtube'u açmak için aşağıdaki butona tıkla.`)
                                    .setFooter("Elenor - Youtube Together")
                                    const row = new MessageActionRow()
                                  .addComponents(
                                    
                               new discord.MessageButton()
                              
                              .setLabel('Youtube')
                              .setStyle('LINK')
                              .setEmoji("<:link:897863115272777739>")
                                .setURL(`https://discord.gg/${invite.code}`)
                                  )
                                    message.channel.send({embeds: [embed], components: [row]})
                                      
                                  })
                  
                              }
                              if(!en && !tr) {
                                if(!message.member.voice.channel) return message.channel.send('You are not in any audio channel.')
                              
                              fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                                                  method: "POST",
                                                  body: JSON.stringify({
                                                      max_age: 86400,
                                                      max_uses: 0,
                                                      target_application_id: "880218394199220334",
                                                      target_type: 2,
                                                      temporary: false,
                                                      validate: null
                                                  }),
                                                  headers: {
                                                      "Authorization": `Bot ${client.token}`,
                                                      "Content-Type": "application/json"
                                                  }
                                              })
                                              .then(res => res.json())
                                              .then(invite => {
                                    
                                                let embed = new discord.MessageEmbed()
                                                .setDescription(`Youtube Together, Click the button below to open Youtube.`)
                                                .setFooter("Elenor - Youtube Together")
                                                const row = new MessageActionRow()
                                              .addComponents(
                                                
                                           new discord.MessageButton()
                                          
                                          .setLabel('Youtube')
                                          .setStyle('LINK')
                                          .setEmoji("<:link:897863115272777739>")
                                            .setURL(`https://discord.gg/${invite.code}`)
                                              )
                                                message.channel.send({embeds: [embed], components: [row]})
                                                  
                                              })
                              
                                          }

  
            }       

}