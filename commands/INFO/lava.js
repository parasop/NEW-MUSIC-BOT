const discord = require('discord.js');

module.exports = {
  name: 'lavalink',
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args) => {
      if(!client.config.owner.includes(message.author.id)) return;
     
  const msg = await message.channel.send(`Getting lavalink stats...`);

    var  {
            memory,
            cpu,
            uptime,
            frameStats,
            playingPlayers,
            players,
        } = client.manager.nodes.first().stats;

        const allocated = Math.floor(memory.allocated / 1024 / 1024);
        const used = Math.floor(memory.used / 1024 / 1024);
        const free = Math.floor(memory.free / 1024 / 1024);
        const reservable = Math.floor(memory.reservable / 1024 / 1024);

        const systemLoad = (cpu.systemLoad * 100).toFixed(2);
        const lavalinkLoad = (cpu.lavalinkLoad * 100).toFixed(2);

     
        const embed = new discord.MessageEmbed()
            .setAuthor('Lavalink Statistics')
            .setColor("FF0000")
            .setThumbnail(client.user.displayAvatarURL())
            .addField('Playing Players/Players', `\`\`\`${playingPlayers} playing / ${players} players\`\`\``)
            .addField('Memory', `\`\`\`Allocated: ${allocated} MB\nUsed: ${used} MB\nFree: ${free} MB\nReservable: ${reservable} MB\`\`\``)
            .addField('CPU', `\`\`\`Cores: ${cpu.cores}\nSystem Load: ${systemLoad}%\nLavalink Load: ${lavalinkLoad}%\`\`\``)
          
            .setTimestamp(Date.now());


        if (frameStats) {
            const { sent, deficit, nulled } = frameStats;
            embed.addField('Frame Stats', `\`\`\`Sent: ${sent}\nDeficit: ${deficit}\nNulled: ${nulled}\`\`\``);
        }
        return msg.edit('', embed);
    }

   }
