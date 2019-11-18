//#region Consts
const Discord = require('discord.js') 
const fs = require('fs')
const colors = require('colors')
const moment = require('moment')
const log4js = require('log4js')
const mysql = require('mysql')
const client = new Discord.Client()
const config = require('./settings/configuration.json')

//#endregion

//#region Files
require('./logscript/consolelog.js')
require('./logscript/discordlog.js')
require('./sqlmes.js')
require('./SqlTest.js')
//require('./starboard.js')
//#endregion



//#region Command Handle
    //#region Collections
global.servers = {};
client.aliases = new Discord.Collection(); //collection of command aliases
client.commands = new Discord.Collection(); // collection of command names
client.enabled = new Discord.Collection(); //collection of enebled commands
    //#endregion
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js") //gets ride of '.js'
    if(jsfile.length <= 0){
        return console.log("No Commands found") //if there are no commands say 'No commands found'
    }
//repeat fs.readdir for command group folders
jsfile.forEach((f, i) =>{
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

jsfile1.forEach((f, i) =>{
        let pull = require(`./commands/admim/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

jsfile2.forEach((f, i) =>{
        let pull = require(`./commands/eco/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

jsfile3.forEach((f, i) =>{
        let pull = require(`./commands/fun/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

jsfile4.forEach((f, i) =>{
        let pull = require(`./commands/gen/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

jsfile5.forEach((f, i) =>{
        let pull = require(`./commands/music/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });

client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });

    jsfile2.forEach((f, i) =>{
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull); //Gets the name from the command config
        pull.config.aliases.forEach(alias =>{
            client.aliases.set(alias, pull.config.name)
        });
        client.enabled.set(pull.config.enabled, pull);
        console.log(`${colors.green('[CMD-LOG]')} ${f} loaded`)
    });
});
//#endregion

//#region Console Chat

let y = process.openStdin()
y.addListener("data", res =>{
    let x = res.toString().trim().split(/ +/g)
    client.channels.get(config.setup.cChat).send(x.join(' '));
})
//#endregion

//#region SQL Connect
var con = mysql.createConnection({
    host: "localhost",
    user: "Electric",
    password: "Password",
    database: "overlord",
    port: "3306"
});


const data = mysql.createConnection({
    host: "localhost",
    user: "Bot",
    password: "password",
    database: "electricbeaver",
    debug: false
    
})
//#endregion

//#region Ready
client.on("ready", async () =>{
    console.log(`${colors.green('[START-LOG]')} ${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`Servers ${client.guilds.size}|Users ${client.users.size}|Channels ${client.channels.size}`);
  
});
//#endregion

//#region Event Finder
/*client.on('raw', event => {
    console.log('\nRaw event data:\n', event);
});*/
//#endregion

//#region errorHandel
function errorHandle(err){
  const errorEmbed0 = new Discord.RichEmbed()
   .setTitle('~There’s Been an Error~')
   .setDescription('So there’s been an error. Don’t worry it’s probably something little if this message came through. All you gotta do is contact the server owner and tell them to contact one of the devs')
   const errorEmbed1 = new Discord.RichEmbed()
   .setTitle('~There’s Been an Error~')
   .setDescription(err)
  message.channel.send(errorEmbed0 + errorEmbed1)
  }
  //#endregion

  //#region Message
  client.on("message", async message =>{
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      if(message.channel.id === "565674304482574336") return;
      if(message.content === 'None') return;
      if(message.content === 'none') return;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    



    //#region React
  if(message.channel.id === '565566525940039680'){
      message.attachments.forEach(attachments =>{
          let mImage = attachments.url
          if(mImage){
              message.react('577153408084082688')//upvote
                    .then(() => message.react('572162066836619265'))//stalin
                    .then(() => message.react('577153454863024138'))//downvote
          }
      })
  }else{
      
  }
  if(message.channel.id === '609395100585558047'){
    message.attachments.forEach(attachments =>{
        let mImage = attachments.url
        if(mImage){
            message.react('577153408084082688')//upvote
                  .then(() => message.react('572162066836619265'))//stalin
                  .then(() => message.react('577153454863024138'))//downvote
        }
    })
}else{
    
}

    //#endregion
const footerMessage = config.setup.footer
    //#region Command Push
    if(!message.content.startsWith(config.setup.prefix) || message.content.startsWith(config.setup.other)) return;
    let commandFile = client.commands.get(cmd.slice(config.setup.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.setup.prefix.length)))
    if(commandFile) commandFile.run(client, message, args, Discord, con, data, errorHandle, footerMessage)
  })
client.login(config.setup.token)
