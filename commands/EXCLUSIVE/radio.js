const { MessageEmbed } = require('discord.js')
const { getStations } = require('radio-browser')
	module.exports = {
  name:"radio",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
    
    getStations({
			limit: 5,
			by: 'tag',
			searchterm: args.join(' '),
		})
			.then(async data => {
				if (!data[0]) return message.channel.send('<:Error:838826082178170931>No radio found with that name');

				const results = data.map((track, index) => `${++index} - \`${track.name}\``).join('\n');
				const embed = new MessageEmbed()
					.setTitle(`Results for ${args.join(' ')}`)
					.setColor(message.member.displayHexColor)
					.setDescription(`${results}\n\n\tPick a number from 1-10 or cancel.\n`);
				message.channel.send(embed);

				const filter = (m) => m.author.id === message.author.id && /^(\d+|cancel)$/i.test(m.content);
				const max = data.length;

				let collected;
				try {
					collected = await message.channel.awaitMessages(filter, { max: 1, time: 30e3, errors: ['time'] });
				} catch (e) {
					return message.reply('<:Error:838826082178170931>You didn\'t choose a song in time.');
				}

				const first = collected.first().content;

				if (first.toLowerCase() === 'cancel') {
					if (!player.queue.current) player.destroy();
					return message.channel.send('Cancelled selection.');
				}

				const index = Number(first) - 1;
				if (index < 0 || index > max - 1) return message.reply(`<:Error:838826082178170931>The number you provided was too small or too big (1-${max}).`);

				let player;
				try {
					player = message.client.manager.create({
						guild: message.guild.id,
						voiceChannel: message.member.voice.channel.id,
						textChannel: message.channel.id,
						selfDeafen: true,
					});
				} catch (err) {
					return message.channel.send( err.message).then(m => m.delete({ timeout: 5000 }));
				}

				const res = await player.search(data[index].url, message.author);

				if (res.loadType == 'NO_MATCHES') {
					// An error occured or couldn't find the track
					if (!player.queue.current) player.destroy();
					return message.channel.send("couldn't fint track");
				} else {
					// add track to queue and play
					if (player.state !== 'CONNECTED') player.connect();
					player.queue.add(res.tracks[0]);
					if (!player.playing && !player.paused && !player.queue.size) {
						player.play();
					} else {
						message.channel.send({ embed: { color: message.member.displayHexColor, description:`Added to queue: [${res.tracks[0].title}](${res.tracks[0].uri})` } });
					}
				}
			});
	}
}