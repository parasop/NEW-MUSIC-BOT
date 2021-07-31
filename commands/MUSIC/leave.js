const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "leave",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {
 
 let player = client.manager.players.get(message.guild.id);
if(!player)  return
 const { channel } = message.member.voice

if (channel.id !== player.voiceChannel) {
      let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription("> must be in same voice channel"
        
        
        )
   return message.channel.send(embed)
 }
 
		if(player) {
			player.destroy();
		}
		else {message.member.voice.channel.leave();}

		return embed(`Left **${message.member.voice.channel.name}** voice channel`,message.channel);
	


}}