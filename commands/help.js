module.exports = {
    name: "help",
    category: 'Bug',
    aliases: ['hilfe'],
    permissions: [],
    description: 'Zeigt alle Commands',
    async execute(client, message, cmd, args, Discord){
        
        const help = new Discord.MessageEmbed()
            .setAuthor('Help:', 'https://cdn.discordapp.com/icons/832547818127753216/6449507dd6cce3cf0bbe3075feb467dc.webp?size=256')
            .setDescription('AquaGFX hat den Prefix `-`')
            .addField('General:', '`ping` `about`')
            .addField('Design:', '`rig`')
            .addField('Bug:', '`serverbug` `botbug`')
            .addField('Rolemanager:', '`rankup`')
            .addField('Admin:', '`N/A`')
            .setFooter(text="Requested by: " + message.author.tag, icon_URL = message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
    message.channel.send(help);

    }
}