const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("help comammd",client.user.displayAvatarURL())
 .setURL(`https://github.com/parasop`)
.setDescription(`

**Everyone comammds**
\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,seek,stop,volume\`

**Filters commands**
\`24/7,radio,bass,bassboost,deepbass,earrape,nightcore,pitch,pop,reset,soft,speed,television,vaporwave\`

**Utility commands**
\`about,prefix,ping,lava,uptime,invite,shard\`

**PARAS DOCS**
[JOIN SUPPORT SERVER](https://discord.gg/SY7DjDpwpk)`)
 
.setFooter("MADE BY PARAS")
message.channel.send(embed)
  }
}