module.exports = {
    name: "botbug",
    category: 'Bug',
    aliases: ['botbug', 'reportbotbug'],
    permissions: [],
    description: 'Reporte ein BotBug',
    async execute(client, message, cmd, args, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('875349152047988746')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Bitte beschreibe den Bug des Bots | Usage: `-botbug <Bug>`')

         //create an embed for the bug report
        const botReportEmbed = new Discord.MessageEmbed()
        .setTitle('Neuer Bug wurde gefunden!')
        .addField('Autor:', message.author.toString(), true)
        .addField('Server:', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setFooter(text="AquaGFX", icon_url="https://cdn.discordapp.com/icons/832547818127753216/6449507dd6cce3cf0bbe3075feb467dc.webp?size=128")
        .setTimestamp()
        channel.send(botReportEmbed);
        //send the embed to the channel
        message.channel.send("**Bug report wurde abgesendet!**")
    }
}