const Discord = require("discord.js");
const quoi = require("./quoi.json");
require("dotenv").config();

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

const imageList = [
  "https://media.tenor.com/CJIntL3axZUAAAAd/feur-meme.gif",
  "https://media.tenor.com/XH3pihjGqkwAAAAC/feur-quoi.gif",
  "https://media.tenor.com/MKwpJdV9qrUAAAAM/feur-heart-locket.gif",
  "https://media.tenor.com/zrP8LiC-940AAAAd/feur-phoenix-wright.gif",
  "https://media.tenor.com/71BKREg8HCMAAAAd/feur-bambam-feur.gif",
  "https://media.tenor.com/MlnMzLYdEnEAAAAC/multicort-feur.gif",
  "https://media.tenor.com/lGR06JUFwikAAAAC/cocrane-feur.gif",
  "https://media.tenor.com/W82_AKnTBgUAAAAC/feur.gif",
  "https://media.tenor.com/zvg8w0FkecYAAAAC/feur-theobabac.gif",
  "https://media.tenor.com/cjq-FpCxTaoAAAAC/feur-th%C3%A9obabac.gif"
];

bot.login(process.env.BOT_TOKEN);

bot.on("messageCreate", async (message) => {
  quoi.forEach((q) => {
    const content = message.content.toLowerCase().replace(/[^a-z]+/g, "");
    const image = imageList[parseInt(Math.random() * 10)];
    if (
      content.length >= q.length &&
      content.slice(content.length - q.length, content.length) === q
    ) {
      (Math.random() * 5) % 5;
      const embed = new Discord.EmbedBuilder().setTitle("Feur").setImage(image);
      message.channel.send({ embeds: [embed] });
    }
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag} est connecté`);
});
