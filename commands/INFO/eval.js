const Discord = require("discord.js");

module.exports = {
  name: "eval",
  description: "owner only",
  run: async (client, message, args) => {
    if(!client.config.owner.includes(message.author.id)) return
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "TERA BAAP DEKE GAYA THA YA TERI ME"
            );
          }
          message.channel.send(output, {
            code: "js"
          });
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "ABE SALE");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
}};