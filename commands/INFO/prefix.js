
const { default_prefix } = require("../../config.json")
const embed = require("../../paras/embed")
module.exports = {
  name: "prefix",
  category: "moderation",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 userPermission: ["MANAGE_GUILD"],
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return embed("Please give the prefix that you want to set", message.channel)
    } 
    
    if(args[1]) {
      return embed("You can not set prefix a double argument",message.channel )
    }
    
    if(args[0].length > 3) {
      return embed("You can not send prefix more than 3 characters",message.channel)}
    
    if(args.join("") === default_prefix) {
      client.db.delete(`prefix_${message.guild.id}`)
     return await embed("Reseted Prefix ", message.channel)
    }
    
    client.db.set(`prefix_${message.guild.id}`, args[0])
  await embed(`Seted Bot's Prefix to ${args[0]}`,message.channel)
    
  }
}