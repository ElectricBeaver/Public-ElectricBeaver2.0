const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, Discord, con,data, errorHandle) =>
{
    const bet = args[0]
    if(isNaN(bet)){
        message.reply("You have to bet a number stupid.")
        return;
    }
    message.delete()
    try{
        data.query(`SELECT * FROM ecobank WHERE UserName = '${message.author.username}'`, (err, rows)=>{

            let pAmount = rows[0].Pocket
            const loseAmount = pAmount - bet
            var winAmount = bet * 2 + pAmount
            
            message.channel.send(`${pAmount}, ${loseAmount}, ${winAmount} [DEBUG]- 01`)
            if(bet > pAmount){
                message.reply("You fool you cant bet more then you have on you. Use ;withdraw <amount> to get more money from you account.")
                return;
            }
            if(bet <= pAmount){
                message.channel.send("```\nRolling Dice\n```")
                let botRoll = Math.floor((Math.random() * 10) + 1);
                let userRoll = Math.floor((Math.random() * 10) + 1);
                
                if(botRoll > userRoll){
                    message.channel.send("Did...Did I just win... I just won\n My roll:" + " `" + botRoll + "`" + "\nYour roll:" + " `" + userRoll + "`")
                    
                    data.query(`UPDATE ecobank SET Pocket = '${loseAmount}' WHERE UserName = '${message.author.username}' `)
                    return;
                }
                if(botRoll < userRoll){}
                    message.channel.send("Did...Did I just lose... I just loss\n My roll:" + " `" + botRoll + "`" + "\nYour roll:" + " `" + userRoll + "`")
                    
                    data.query(`UPDATE ecobank SET Pocket = '${winAmount}' WHERE UserName = '${message.author.username}' `)
                    return;
                }

            });
    }catch(err){
        console.log(err)
        message.channel.send(err)
    }

}

module.exports.config = 
{
   name: 'bet',
   aliases: ["gamble"],
   Accessable: "Member",
   description: "What you think it is",
   usage: "bet <amount>",
   category: "Eco",
   enabled: true
}