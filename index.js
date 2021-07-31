const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
})
const {Database} = require("quickmongo")



client.config = require("./config.json")
client.db = new Database(client.config.DB)
client.formatDuration  = require("./paras/formatDuration")
require("./paras/Player")
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.db.on("ready",() => {
  
  console.log("[DB] QUICK CONNECTED")
})
const mongoose = require('mongoose');

		const dbOptions = {
			useNewUrlParser: true,
			autoIndex: false,
			poolSize: 5,
			connectTimeoutMS: 10000,
			family: 4,
			useUnifiedTopology: true,
		};
		mongoose.connect(client.config.DB, dbOptions);
		mongoose.set('useFindAndModify', false);
		mongoose.Promise = global.Promise;
		mongoose.connection.on('connected', () => {
		console.log('[DB] DATABASE CONNECTED');
		});
		mongoose.connection.on('err', (err) => {
			console.log(`Mongoose connection error: \n ${err.stack}`);
		});
		mongoose.connection.on('disconnected', () => {
			console.log('Mongoose disconnected');
		});

client.login(process.env.TOKEN);