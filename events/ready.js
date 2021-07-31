const { Manager } = require("erela.js");
const Spotify  = require("erela.js-spotify");
const { MessageEmbed } = require("discord.js")
const Deezer = require("erela.js-deezer")
const delay = require("delay")

module.exports = {
  name: "ready",
  async execute(client) {
    console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `>help`,
        `+india's pride `,
        `24/7 vc`,
        `v2.0.0`,
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "LISTENING" });
    }, 60000);



let nodes = client.config.nodes

  let clientID = client.config.spotifyID
  let clientSecret = client.config.spotifySecret
    
     
  
  client.manager = new Manager({
    nodes,
    plugins: [ new Spotify({ clientID, clientSecret}),
    new Deezer()],
    
    autoPlay: true,
    secure: false,
    send: (id, payload) => {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    }
  });
  
  
//initialize the manager
  client.manager.init(client.user.id);

  client.on("raw", d => client.manager.updateVoiceState(d));

  
  client.manager.on("nodeConnect",async node => {
      console.log(`[NODE] "${node.options.identifier}" connected.`);
 /*let server = await  client.db.get(`guild`)
let guild = client.guilds.cache.get(server);
 
 let channels = await client.db.get(`channel_${server}`)
     
 if (channels === null) {
    return;
  }
let text = await client.db.get(`message_${server}`) 
  
  if(text = null){
    return 
  }
  
  let message  = client.channels.cache.get(text)
let player = client.manager.players.get(guild)
if(player)  {
  player.destroy();
}
if(channels.joinable) {
return 
}
   let  players = client.manager.create({
      guild: server,
      voiceChannel: channels,
      textChannel: text,
      selfDeafen: true,
    })

  
  

 players.connect()*/

  })
  

  client.manager.on("nodeError", (node, error) => {
      console.log(`Node "${node.options.identifier}" encountered an error: ${error.message}.`);
  
   
    
  });
  
 
  //Track start
  client.manager.on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    let min = Math.floor((track.duration/1000/60) << 0), sec = Math.floor((track.duration/1000) % 60);
    let sec2;
      if(sec < 10) {
          sec2 = `0${sec}`
      }
      else {
          sec2 = sec
      }

     let np = new MessageEmbed()
    .setColor("")
   .setAuthor(` NOW PLAYING`,`${track.requester.displayAvatarURL()}`)
    .setDescription(` 
    [${track.title}](${track.uri})[${track.requester}]
     
`);
setTimeout(() => {
channel.send(np).then(m => m.delete({ timeout: track.duration }));
},5000)
  
});
  
 client.manager.on("queueEnd", player => {
    if (player.twentyFourSeven) return;

    const channel = client.channels.cache.get(player.textChannel);
    channel.send({embed: {
      color: "GREEN",
      description:"<:emoji_16:763367280817471498> Queue has ended."}});
    player.destroy();
  });
  
  
   
client.manager.on("socketClosed", (player, payload) => {
		if(payload.byRemote === true) player.destroy();
	});
	
  client.manager.on("playerMove", (player, currentChannel, newChannel) => {
	player.voiceChannel = client.channels.cache.get(newChannel);


setTimeout(() => {
 player.pause(false) 
})
	},2000);
      
   
  
  
  
  
  },
};