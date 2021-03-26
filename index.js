//installing the discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "~" //prefix for the bot

//logging in as the hardware bot
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

 client.on('message', msg => {
   msg.channel.send("Heck");
 });

//log in to the bot
 client.login(process.env.DISCORD_ID);