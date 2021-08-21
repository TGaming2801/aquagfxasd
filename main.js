const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

client.on("message", message => {
  if(message.channel.id === "871469986487607296") {
    if(!message.attachments.size > 0) {
      message.delete()
      const deleteEmbed = new Discord.MessageEmbed()
      deleteEmbed.addField("Verwarnung", "Du darfst nur Bilder in <#871469986487607296>!", false)
      deleteEmbed.setFooter('Versucht by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
      message.author.send(deleteEmbed)
    } else {
      message.react("🏆")
    }
  
  }
})

client.once('ready', () => {
  function presence() {
    let status = ['https://dsc.gg/aquagfx', 'https://discord.com/fuB2QQW5B6', '-help', 'Prefix: -', 'https://dsc.gg/aquagfx', 'https://discord.com/fuB2QQW5B6'] //you can add how many you like
    let rstatus = Math.floor(Math.random() * status.length); //this chooses a status from the ones you typed up
    client.user.setPresence({
        status: "PLAYING", //you can change to offline, dnd
        activity: {
            name: `${status[rstatus]}`, //rhese sets the status                type: "WATCHING" //you can change to listening, streaming, playing (just a quick google search :) )
        }
    });
}
  console.log(`Discord Bot active Status started`); // the presence needs to be like this, near the ready event
  setInterval(presence, 300000) //you can reduce/add the time (milliseconds) if you reduce it l3ss then 15 seconds your bot will get ratelimited
});

/**client.on("ready", () =>{
  client.user.setActivity("dsc.gg/aquagfx", { //Stream name oder Game Name
    type: "PLAYING", //playing oder STREAMING
    url: "https://twitch.tv/aquagfx"
  });
  console.log('Status aktiviert');
});**/

client.once('ready', () => {
    console.log('Bot gestartet!')
});

client.login('ODc4NjQ1Mjk3MTkzMDQxOTYx.YSEMMw.Qkho-CcY-g12D-P9A0jNose4QiQ')