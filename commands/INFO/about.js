const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("GREEN")
 .setAuthor(`${client.user.username} Information`,client.user.displayAvatarURL())
 
    
.addField(`
**DEVELOPERS**`,
`PARAS OPᴰᴱⱽ#9237
BLOODY `)

.addField(`**PLATFORM**`,
`${process.platform}`)

.addField(`**SERVERS**`,
`${client.guilds.cache.size}`)

.addField(`**PING**`,
`${client.ws.ping}`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}