const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "loop",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: async (client, message, args) => {

const player = message.client.manager.players.get(message.guild.id)
 const { channel } = message.member.voice


 if (channel.id !== player.voiceChannel) {
      let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(" must be in same voice channel"
        
        
        )
   return message.channel.send(embed)
 }
 
   
if (!args[0] || args[0].toLowerCase() == 'song') {
			if (!player.trackRepeat) {
				player.setTrackRepeat(true);
				return embed('now looping the **current track**', message.channel);
			}
			else {
				player.setTrackRepeat(false);
				return embed('looping is now **disabled**',message.channel);
			}
		}
		else if (args[0] == 'queue') {
			if (player.queueRepeat) {
				player.setQueueRepeat(false);
				return embed('looping is **disabled**',message.channel);
			}
			else {
				player.setQueueRepeat(true);
				return embed('now looping the **queue**',message.channel);
			}
		}
 
 
}}