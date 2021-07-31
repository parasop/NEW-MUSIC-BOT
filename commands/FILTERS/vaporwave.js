const discord  = require("discord.js")
const delay = require('delay');
const { MessageEmbed} = require("discord.js")

module.exports = {
  name:"vaporwave",
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
  const m1 = await message.channel.send("<a:MelodyM_loading:839504372815626301>Turning on **vaporwave**.")


	// Change bassboost value
	player.setVaporwave(!player.Vaporwave)
	 const bass = new MessageEmbed()
 .setTitle("<:emoji_16:763367280817471498> turned on : vaporwave")
            .setColor('#000001');

        await delay(5000);
        m1.edit('', bass);
  
  
  
  	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:MelodyM_loading:839504372815626301>Turning off **vaporwave**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **vaporwave**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
    	}
         
  }
}