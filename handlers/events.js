const { readdirSync } = require("fs");

module.exports = (client) => {
  const eventFiles = readdirSync("./events/").filter((file) =>
    file.endsWith(".js")
  );

  eventFiles.forEach((file) => {
    const event = require(`../events/${file}`);
    if (!event.execute)
      throw new TypeError(
        `[ERROR]: execute function is required for events! (${file})`
      );

    if (!event.name)
      throw new TypeError(`[ERROR]: name is required for events! (${file})`);

    client.on(event.name, event.execute.bind(null, client));

    delete require.cache[require.resolve(`../events/${file}`)];
  });
};