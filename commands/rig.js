module.exports = {
    name: 'rig',
    category: 'Design',
    aliases: ['rig', 'brush'],
    permissions: [],
    description: "ping",
    execute(client, message, cmd, args, Discord) {
        if(cmd === 'rig'){
            const Rigs = new Discord.MessageEmbed()
            .setAuthor('Rigs:', 'https://cdn.discordapp.com/icons/832547818127753216/6449507dd6cce3cf0bbe3075feb467dc.webp?size=256')
            .addField('Mob Pack:', '[Click here](https://www.youtube.com/playlist?list=PLFdeYhKr4J_-TAgqZsJjbWOGhNU64Vu4u "Click here")')
            .addField('Player Rig Pack:', '[Click here](https://www.youtube.com/playlist?list=PLFdeYhKr4J__zENDTKbp7lYTLcnqPlfgt "Click here")')
            .addField('Block Pack:', '[Click here](https://www.youtube.com/playlist?list=PLFdeYhKr4J_8vL98pCPOxmPs47b1BLJgx "Click here")')
            .addField('Item Pack:', '[Click here](https://www.youtube.com/playlist?list=PLFdeYhKr4J_8iLoZIFgnDNUIB9Tr6N5Vc "Click here")')
            .addField('C4D Packs Pack:', '[Click here](https://www.youtube.com/playlist?list=PLFdeYhKr4J__ryfwndzk_IY66YaxHma1c "Click here")')
            .setFooter(text="Requested by: " + message.author.tag, icon_URL = message.author.displayAvatarURL({ dynamic: true, size: 512 }))
            .setTimestamp()
            message.channel.send(Rigs);
        }
    }
}