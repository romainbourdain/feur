const Discord = require("discord.js");
require("dotenv").config();

const answers = require("./answers.json");
const { isEndOfMessage, sendAnswer } = require("./utils.js");

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

bot.login(process.env.BOT_TOKEN);

bot.on("messageCreate", async (message) => {
  const filteredMessage = message.content
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
  answers.forEach((a) => {
    a.suffix.forEach((s) => {
      if (isEndOfMessage(filteredMessage, s)) {
        try {
          sendAnswer(message, a.answer);
        } catch (e) {
          console.log(e);
        }
      }
    });
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est connecté`);
});
