const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "remove",
  vcOnly: true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  

run:(client, message, args) => {
  const player = message.client.manager.players.get(message.guild.id)
  const color = message.guild.me.roles.highest.color

   if (!player) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(" There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

 
  if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

  if (!args.length) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setTitle(messages.messages.incorrectUse)
      .setDescription(` provde me number from queue,  which song you want remove`)
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(" args must be number")
    return message.channel.send(embed)
  }

  if (args[0] > player.queue.length || args[0] <= 0) {
    let embed = new MessageEmbed()
      .setColor(color)
      .setDescription(` last song number  is ${player.queue.length}`)
    return message.channel.send(embed)
  }

  player.queue.splice(args[0] - 1, 1) 
  return embed("Successfully  removed that song from queue",message.channel)
}
}