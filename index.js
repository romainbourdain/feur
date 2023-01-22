const Discord = require("discord.js");
const answers = require("./answers.json");
require("dotenv").config();

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

bot.login(process.env.BOT_TOKEN);

bot.on("messageCreate", async (message) => {
  const content = message.content.toLowerCase().replace(/[^a-z]+/g, "");
  answers.forEach((a) => {
    a.message.forEach((m) => {
      if (
        content.length >= m.length &&
        content.slice(content.length - m.length, content.length) === m
      ) {
        const image =
          a.answer.images[parseInt(Math.random() * a.answer.images.length)];
        const embed = new Discord.EmbedBuilder()
          .setTitle(a.answer.title)
          .setImage(image);
        message.channel.send({ embeds: [embed] });
      }
    });
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est connecté`);
});
