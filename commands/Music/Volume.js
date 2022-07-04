module.exports = {
  name: "volume",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = await client.poru.players.get(message.guild.id)

    player.setVolume(args[0])
message.reply(`Volume set to ${args[0]}`)
  }
}
