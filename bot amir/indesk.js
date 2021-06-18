const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "ODU0MDI5NDYwNjI5NjE4Njg4.YMd-6g.on3UdJxBznIX46iqonzikrAhWcQ";
const prefix = "#";

bot.on("ready", () => {
  //اعلام امادی بات
  console.log("iam ready");
  //وضعیت بات دیسکرد
  bot.user.setStatus("online");
});

bot.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  let args = message.content.substring(prefix.length).split(" ");

  if (message.content.startsWith(prefix)) {
    //کامند های بات
    if (args[0] === "ping") {
      message.reply("pong");
    }
    if (args[0] === "salam") {
      message.reply("hi");
    }
    if (args[0] === "twitch") {
      message.reply("https://www.twitch.tv/amir_vht");
    }
    if (args[0] === "sazande") {
      message.reply("!... ✔•NΐҜzeN•");
    }
    //فرستادن پیام در چنل
    if (args[0] === "send") {
      bot.channels.cache
        .get("854083765605367858")
        .send("https://www.twitch.tv/amir_vht  @everyone");
    }
    //help bot discord
    if (args[0] === "help") {
      const help = new Discord.MessageEmbed()
        .setTitle("rule")
        .addField("#salam", "salam kardan be to", true)
        .addField("#sazande", "sazande bot amir", true)
        .addField("#link", "link amir", true)
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/809041816866390056/854387333142806584/profile_GIF.gif"
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/809041816866390056/854387333142806584/profile_GIF.gif"
        )
        .setAuthor(
          "!... ✔•NΐҜzeN•",
          "https://cdn.discordapp.com/attachments/849286910387290125/855072948589953064/image0.jpg"
        )
        .setFooter(message.author, message.author.avatarURL())
        .setColor("3bbdf5");
      message.channel.send(help);
    }
  }
});

bot.login(token);
