//importing local files
const manageJSON = require('./files/JavaScript/manageJSON.js');
const randomNum = require('./files/JavaScript/randomNum.js');

//installing the discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "~" //prefix for the bot

//logging in as the hardware bot
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

 client.on('message', message => {
   //if the message doesn't start with the prefix or if its from the bot, don't do anything
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/); //any arguments the user sends
   const command = args.shift().toLowerCase(); //the command the user sends

  switch(command){
    //just says hello
    case "hello":
      message.channel.send("Hello!");
      break;
      
    //the scientifically proven funniest joke ever
    case "joe":
      message.channel.send("Mama");
      break;
      
    //shout out to the original "G" issue (#10) on Github
    case "g":
      message.channel.send("lmao");
      break;

    //21st century humour
    case "fart":
    case "fard":
      message.channel.send("*vine boom sound effect*");
      break;

    //when the replit is sus! :flushed:
    case "amongus":
    case "amingus":
    case "amogus":
      message.channel.send("STOP POSTING ABOUT AMONG US! I'M TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME MEMES, ON DISCORD IT'S FUCKING MEMES! I was in a server, right? and ALL OF THE CHANNELS were just among us stuff. I-I showed my champion underwear to my girlfriend and t-the logo I flipped it and I said 'hey babe, when the underwear is sus HAHA DING DING DING DING DING DING DING DI DI DING' I fucking looked at a trashcan and said 'THAT'S A BIT SUSSY' I looked at my penis I think of an astronauts helmet and I go 'PENIS? MORE LIKE PENSUS'");
      break;
    
    //random number 1 to 100
    case "random":
      message.channel.send(randomNum.randomNumber(100, 1));
      break;

    //Magnes moment
    case "visual":
      //pay attention to what i did here fellas, this is important
      //will probably remove this comment later on down the line
      if(args[0] == "basic"){
        if(args[1] == "sucks"){
          message.channel.send("I agree.");
        } else {
        message.channel.send("VISUAL BASIC SUCKS");
        }
      }
      break;
  } 
 });

//log in to the bot
 client.login(process.env.DISCORD_ID);