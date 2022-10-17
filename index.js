const Discord = require("discord.js");
const quoi = require("./quoi.json");
require("dotenv").config();

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

bot.login(process.env.BOT_TOKEN);

bot.on("messageCreate", async (message) => {
  quoi.forEach((q) => {
    const content = message.content.toLowerCase().replace(/[^a-z]+/g, "");
    if (
      content.length >= q.length &&
      content.slice(content.length - q.length, content.length) === q
    ) {
      message.channel.send("feur");
    }
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est connecté`);
});
