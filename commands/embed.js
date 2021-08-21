const Discord = require('discord.js');

module.exports = {
name: 'embed',
permissions: [],
description: 'Erstellt ein Embed',
execute(message){
    let args = message.content.split(' ');
    const titel = args[1]
    const description = args.splice(2).join(" ");
    const embed = new Discord.MessageEmbed()
        .addField(titel + "", description + "", true)
        .setTimestamp(new Date)
    message.delete();
    message.channel.send(embed);
  }
}