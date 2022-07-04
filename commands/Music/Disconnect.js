module.exports = {
  name: "disconnect",
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {

    const player = client.poru.players.get(message.guild.id)

    player.destroy()

    message.reply("Disconnected")

  }
}