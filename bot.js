const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528535365959811099")
setInterval(function() {
channel.send(`alah akber`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
