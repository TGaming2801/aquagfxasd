module.exports = {
    name: 'rankup',
    category: 'Design',
    aliases: [],
    permissions: [],
    description: "ranks sb up",
    execute(client, message, cmd, args, Discord) {
        let mention = message.mentions.members.first();

        if (args[0] === undefined) {
            const undefinedEmbed = new Discord.MessageEmbed()
                    undefinedEmbed.addField('⛔️ | Rank Up System | ⛔️', '<@' + message.author + '> bitte benutze `-rankup <@Mention>`', false);
                    undefinedEmbed.setFooter('Versucht by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
                    undefinedEmbed.setTimestamp()
                      message.delete()
                      message.channel.send(undefinedEmbed).then(msg => msg.delete({timeout: 10000}))
        } else {

        if(message.member.roles.cache.has('874990537432768514')){ //has rolemanager?
            if(mention.roles.cache.has('871472355568939018')){ //has poseidon?
              const poseidonEmbed = new Discord.MessageEmbed()
              poseidonEmbed.addField('⛔️ | Rank Up System | ⛔️', '<@' + mention + '> hat bereits der höchste Rang!', false);
              poseidonEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              poseidonEmbed.setTimestamp()
                message.delete()
                message.channel.send(poseidonEmbed).then(msg => msg.delete({timeout: 10000}))
            }
            else if(mention.roles.cache.has('871472355963191367')){ //has Wassermann
                mention.roles.add('871472355568939018')
                mention.roles.remove('871472355963191367')
                const wassermannEmbed = new Discord.MessageEmbed()
              wassermannEmbed.addField('<a:accepted1:870587223165251604> | Rank Up | <a:accepted1:870587223165251604>', '<@'+mention + '> ist nun **Poseidon**!', false)
              wassermannEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              wassermannEmbed.setTimestamp()
                message.delete()
                message.channel.send(wassermannEmbed)
                
            }
            else if(mention.roles.cache.has('871472774114312203')){ //has Krabbe
                mention.roles.add('871472355963191367')
                mention.roles.remove('871472774114312203')
                const krabbeEmbed = new Discord.MessageEmbed()
              krabbeEmbed.addField('<a:accepted1:870587223165251604> | Rank Up | <a:accepted1:870587223165251604>', '<@'+mention + '> ist nun **Wassermann**!', false)
              krabbeEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              krabbeEmbed.setTimestamp()
                message.delete()
                message.channel.send(krabbeEmbed)
                
            }
            else if(mention.roles.cache.has('871472357271797820')){ //has Fisch
                mention.roles.add('871472774114312203')
                mention.roles.remove('871472357271797820')
                const fischEmbed = new Discord.MessageEmbed()
              fischEmbed.addField('<a:accepted1:870587223165251604> | Rank Up | <a:accepted1:870587223165251604>', '<@'+mention + '> ist nun **Krabbe**!', false)
              fischEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              fischEmbed.setTimestamp()
                message.delete()
                message.channel.send(fischEmbed)
            }
            else if(mention.roles.cache.has('871472954754605106')){//has muschel
                mention.roles.add('871472357271797820')
                mention.roles.remove('871472954754605106')
                const muschelEmbed = new Discord.MessageEmbed()
              muschelEmbed.addField('<a:accepted1:870587223165251604> | Rank Up | <a:accepted1:870587223165251604>', '<@'+mention + '> ist nun **Fisch**!', false)
              muschelEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              muschelEmbed.setTimestamp()
                message.delete()
                message.channel.send(muschelEmbed)
            }
            else if(!mention.roles.cache.has('871472954754605106')){ //hasnt muschel
                mention.roles.add('871472954754605106')
                const noneEmbed = new Discord.MessageEmbed()
              noneEmbed.addField('<a:accepted1:870587223165251604> | Rank Up | <a:accepted1:870587223165251604>', '<@'+mention + '> ist nun **Muschel!**', false)
              noneEmbed.setFooter('Uprank by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              noneEmbed.setTimestamp()
                message.delete()
                message.channel.send(noneEmbed)
            }
        } else {
          const rechteEmbed = new Discord.MessageEmbed()
              rechteEmbed.addField('⛔️ | Rank Up System | ⛔️', '<@'+message.author+ '> hat nicht genügend Berechtigungen', false)
              rechteEmbed.setFooter('Versucht by: ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
              rechteEmbed.setTimestamp()
            message.delete()
            message.channel.send(rechteEmbed).then(msg => msg.delete({timeout: 10000}))
        }
    }}
}