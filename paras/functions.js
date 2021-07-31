const ms = require("ms")

module.exports.swap_pages = swap_pages;
 module.exports.swap_pages2 = swap_pages2
 module.exports.delay = delay;
module.exports.format = format

function format(millis) {
  try {
    var h = Math.floor(millis / 3600000),
      m = Math.floor(millis / 60000),
      s = ((millis % 60000) / 1000).toFixed(0);
    if (h < 1) return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + " | " + (Math.floor(millis / 1000)) + " Seconds";
    else return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + " | " + (Math.floor(millis / 1000)) + " Seconds";
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}



function delay(delayInms) {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  } catch (e) {
    console.log(String(e.stack).bgRed)
  }
}



async function swap_pages(client, message, description, TITLE) {
  let currentPage = 0;
  //GET ALL EMBEDS
  let embeds = [];
  //if input is an array
  if (Array.isArray(description)) {
    try {
      let k = 15;
      for (let i = 0; i < description.length; i += 15) {
        const current = description.slice(i, k);
        k += 15;
        const embed = new Discord.MessageEmbed()
          .setDescription(current)
          .setTitle(TITLE)
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
        embeds.push(embed);
      }
      embeds;
    } catch {}
  } else {
    try {
      let k = 1000;
      for (let i = 0; i < description.length; i += 1000) {
        const current = description.slice(i, k);
        k += 1000;
        const embed = new Discord.MessageEmbed()
          .setDescription(current)
          .setTitle(TITLE)
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
        embeds.push(embed);
      }
      embeds;
    } catch {}
  }
  if (embeds.length === 1) return message.channel.send(embeds[0])
  const queueEmbed = await message.channel.send(
    `**Current Page - ${currentPage + 1}/${embeds.length}**`,
    embeds[currentPage]
  );
  let reactionemojis = ["⬅️", "⏹", "➡️"];
  try {
    for (const emoji of reactionemojis)
      await queueEmbed.react(emoji);
  } catch {}

  const filter = (reaction, user) =>
    (reactionemojis.includes(reaction.emoji.name) || reactionemojis.includes(reaction.emoji.name)) && message.author.id === user.id;
  const collector = queueEmbed.createReactionCollector(filter, {
    time: 45000
  });

  collector.on("collect", async (reaction, user) => {
    try {
      if (reaction.emoji.name === reactionemojis[2] || reaction.emoji.id === reactionemojis[2]) {
        if (currentPage < embeds.length - 1) {
          currentPage++;
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        } else {
          currentPage = 0
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        }
      } else if (reaction.emoji.name === reactionemojis[0] || reaction.emoji.id === reactionemojis[0]) {
        if (currentPage !== 0) {
          --currentPage;
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        } else {
          currentPage = embeds.length - 1
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        }
      } else {
        collector.stop();
        reaction.message.reactions.removeAll();
      }
      await reaction.users.remove(message.author.id);
    } catch {}
  });

}

async function swap_pages2(client, message, embeds) {
  let currentPage = 0;
  if (embeds.length === 1) return message.channel.send(embeds[0])
  queueEmbed = await message.channel.send(
    `**Current Page - ${currentPage + 1}/${embeds.length}**`,
    embeds[currentPage]
  );
  let reactionemojis = ["⬅️", "⏹", "➡️"];
  try {
    for (const emoji of reactionemojis)
      await queueEmbed.react(emoji);
  } catch {}

  const filter = (reaction, user) =>
    (reactionemojis.includes(reaction.emoji.name) || reactionemojis.includes(reaction.emoji.name)) && message.author.id === user.id;
  const collector = queueEmbed.createReactionCollector(filter, {
    time: 45000
  });

  collector.on("collect", async (reaction, user) => {
    try {
      if (reaction.emoji.name === reactionemojis[2] || reaction.emoji.id === reactionemojis[2]) {
        if (currentPage < embeds.length - 1) {
          currentPage++;
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        } else {
          currentPage = 0
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        }
      } else if (reaction.emoji.name === reactionemojis[0] || reaction.emoji.id === reactionemojis[0]) {
        if (currentPage !== 0) {
          --currentPage;
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        } else {
          currentPage = embeds.length - 1
          queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
        }
      } else {
        collector.stop();
        reaction.message.reactions.removeAll();
      }
      await reaction.users.remove(message.author.id);
    } catch {}
  });

}


