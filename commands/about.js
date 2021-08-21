module.exports = {
    name: 'about',
    category: 'General',
    aliases: [],
    permissions: [],
    description: "about the bot",
    execute(client, message, cmd, args, Discord) {
        const about = new Discord.MessageEmbed()
            .setTitle('Help:')
            .setThumbnail('https://cdn.discordapp.com/icons/832547818127753216/6449507dd6cce3cf0bbe3075feb467dc.webp?size=256')
            .addField('Seit:', '14.08.2021')
            .addField('Sprache:', 'JavaScript')
            .addField('Programmierer:', 'TGaming#7501 & Lurxx#9999')
            .addField('AquaGFX:', 'https://dsc.gg/aquagfx')
            .setFooter(text="Requested by: " + message.author.tag, icon_URL = message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        .setTimestamp()
    message.channel.send(about);
    }
}