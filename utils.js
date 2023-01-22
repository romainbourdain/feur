const Discord = require("discord.js");

const isEndOfMessage = (message, suffix) => {
  return (
    message.length >= suffix.length &&
    message.slice(message.length - suffix.length, message.length) === suffix
  );
};

const sendAnswer = (message, answer) => {
  if (!answer.images || answer.images.length === 0) {
    message.channel.send(answer.title);
    return;
  }

  const image = answer.images[parseInt(Math.random() * answer.images.length)];
  const embed = new Discord.EmbedBuilder()
    .setTitle(answer.title)
    .setImage(image);
  message.channel.send({ embeds: [embed] });
};

module.exports = { isEndOfMessage, sendAnswer };
