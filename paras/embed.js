const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("BLUE")
  .setDescription("<:OP_Yes:838839933165764669> " +""+ text);

    await channel.send(embed)
}