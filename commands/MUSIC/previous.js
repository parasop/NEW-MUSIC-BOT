const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "previous",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run:(client, message) => {
  const player = message.client.manager.players.get(message.guild.id)
if(!player) return
  

  const { channel } = message.member.voice
if(player.previous == null) return embed('There are no previous songs.',message.channel);
        player.queue.unshift(player.previous).catch(err => {})
        player.stop();

message.channel.send(`BACK!`)

	}
};