//installing the discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "~" //prefix for the bot

//logging in as the hardware bot
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

 client.on('message', message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();

  switch(command){
    case "hello":
      message.channel.send("Hello!");
  } 
 });

//log in to the bot
 client.login(process.env.DISCORD_ID);