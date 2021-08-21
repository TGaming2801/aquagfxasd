module.exports = {
    name: 'ping',
    category: 'General',
    aliases: ['ping'],
    permissions: [],
    description: "ping",
    execute(client, message, cmd, args, Discord) {
        message.channel.send('pong!');
    }
}