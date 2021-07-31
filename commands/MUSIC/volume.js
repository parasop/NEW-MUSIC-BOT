const { MessageEmbed } = require('discord.js')
const embed = require("../../paras/embed")
module.exports = {
  name: "volume",
  vcOnly:true,
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
run: (client, message, args) => {
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
      
      .setDescription(`Please  Provide me volume between 1 to 100 `)
  
    return message.channel.send(embed)
  }

  if (isNaN(args[0])) {
    let embed = new MessageEmbed()
      .setColo("RED")
      .setDescription(" that is not a vaild number")
    return message.channel.send(embed)
  }

  if (args[0] < 1 || args[0] > 100) {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(" Volume should be 1 to 100")
    return message.channel.send(embed)
  }

  const volume = Number(args[0])

  player.setVolume(volume)
  return message.channel.send(
    {
      embed: {
        color: "YELLOW",
      description:` Volume seted to ${args[0]}`,}})
}}