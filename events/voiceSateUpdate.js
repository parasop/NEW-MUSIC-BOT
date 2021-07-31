const discord  = require("discord.js")
const delay = require("delay")
module.exports = {
  name: "voiceStateUpdate",
  async execute(client, oldState, newState) {
const player = client.manager.players.get(newState.guild.id);

		if (!player) return;
		if (!newState.guild.members.cache.get(client.user.id).voice.channelID) player.destroy();
		if (oldState.id === client.user.id) return;
		if (!oldState.guild.members.cache.get(client.user.id).voice.channelID) return;

		if (player.twentyFourSeven) return;

		if (oldState.guild.members.cache.get(client.user.id).voice.channelID === oldState.channelID) {
			if (oldState.guild.voice.channel && oldState.guild.voice.channel.members.filter(m => !m.user.bot).size === 0) {
				const vcName = oldState.guild.me.voice.channel.name;
				await delay(18000);

				const vcMembers = oldState.guild.voice.channel.members.size;
				if (!vcMembers || vcMembers === 1) {
					const newPlayer = client.manager.players.get(newState.guild.id);
					(newPlayer) ? player.destroy() : oldState.guild.voice.channel.leave();
	let embed1  = new discord.MessageEmbed 
					embed1.setColor("FF0000")
						embed1.setDescription(`I left vc because I was inactive for too long, for 24/7 use 24/7 comammd`)
					try {
						const c = client.channels.cache.get(player.textChannel);
						if (c) c.send(embed1)
					} catch (err) {
						console.log(err)
					}
				}
			}
		}


}}