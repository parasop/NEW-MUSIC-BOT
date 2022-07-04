const discord = require("discord.js")
const ms = require("ms")
module.exports.run = async (client,player,track) => {

  const embed = new discord.MessageEmbed()
  .setAuthor({name:`Now Playing`,iconURL: track.info.requester.displayAvatarURL()})
  .setColor("WHITE")
  .setDescription(`
**TRACK**
[${track.info.title}](${track.info.uri})

**AUTHOR**
${track.info.author}

**SOURCE**
${track.info.sourceName}

**DURATION**
${ms(track.info.length)}

`)
  .setImage(track.info.image)
return player.textChannel.send({ embeds: [embed]});

}