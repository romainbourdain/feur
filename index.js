const Discord = require("discord.js");
require("dotenv").config();

const answers = require("./answers.json");
const { isEndOfMessage, sendAnswer } = require("./utils.js");

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

bot.login(process.env.BOT_TOKEN);

bot.on("messageCreate", async (message) => {
  const filteredMessage = message.content.toLowerCase().replace(/[^a-z]+/g, "");
  answers.forEach((a) => {
    a.suffix.forEach((s) => {
      if (isEndOfMessage(filteredMessage, s)) {
        sendAnswer(message, a.answer);
      }
    });
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est connecté`);
});
