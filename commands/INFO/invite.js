const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITE MELODY BOTS",client.user.displayAvatarURL())
.setDescription(`

[MELODY MUSIC](https://discord.com/oauth2/authorize?client_id=776095696646438972&scope=bot&permissions=7045906193)

[SUPPORT SERVER](https://discord.gg/4yeufeREFK)
`)
message.channel.send(embed)


}}