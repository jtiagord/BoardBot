const Discord = require('discord.js');
require('dotenv').config();

const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {

  if (msg.author.bot) return;


  let args = msg.content.toLowerCase().split(" ");

  console.log(msg.guild.id);
  if (!fs.existsSync(msg.guild.id + '.json')) {
    console.log("There is no commands in this server");
    return;
  }
  let data = JSON.parse(fs.readFileSync(msg.guild.id + '.json'));

  if(args[0]=='add'){
    data[args[1]]=link;
  }

  console.log(data);

});

client.login(process.env.BOT_TOKEN);
