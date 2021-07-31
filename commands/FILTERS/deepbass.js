const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"deepbass",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("<:emoji_42:763352436139098123> Please connect to a voice channel")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

if (!args[0]) {
player.setEQ([{
                band: 0,
                gain: 0.6
            },
            {
                band: 1,
                gain: 0.67
            },
            {
                band: 2,
                gain: 0.67
            },
            {
                band: 3,
                gain: 0
            },
            {
                band: 4,
                gain: -0.5
            },
            {
                band: 5,
                gain: 0.15
            },
            {
                band: 6,
                gain: -0.45
            },
            {
                band: 7,
                gain: 0.23
            },
            {
                band: 8,
                gain: 0.35
            },
            {
                band: 9,
                gain: 0.45
            },
            {
                band: 10,
                gain: 0.55
            },
            {
                band: 11,
                gain: 0.6
            },
            {
                band: 12,
                gain: 0.55
            },
            {
                band: 13,
                gain: 0
            }
        ]);       
        const msg = await message.channel.send(`<a:MelodyM_loading:839504372815626301>Turning on **deepbass**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned on **deepbass**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		  player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
		player.clearEffects()
		const msg = await message.channel.send(`<a:MelodyM_loading:839504372815626301>Turning off **deepbass**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **deepbass**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

	}
};