//installing the discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "~" //prefix for the bot

//logging in as the hardware bot
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

 client.on('message', message => {
   //if the messgae doesn't start with the prefix or if its from the bot, don't do anything
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/); //any arguments the user sends
   const command = args.shift().toLowerCase(); //the command the user sends

  switch(command){
    //just says hello
    case "hello":
      message.channel.send("Hello!");
      break;
    case "joe":
      message.channel.send("Mama");
      break;
    case "G"
      message.channel.send("lmao");
      break;
  } 
 });

//log in to the bot
 client.login(process.env.DISCORD_ID);