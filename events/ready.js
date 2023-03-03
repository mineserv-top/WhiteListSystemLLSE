//===============READY EVENT================
module.exports = {
    name: 'ready',
    async execute(client){
        const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
        setTimeout(() => {
            sendmsg()
        }, 3000)
        const conf = client.config
        var sendChannel = client.channels.cache.get(conf.mainEmbedChannel)
        time = new Date()
        console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mБот \x1b[33m'+client.user.username+' \x1b[36mзапустился.\x1b[0m')
        if(!client.db.get(conf.guildId)){
            client.guilds.cache.get(conf.guildId).roles.create({
                data: {
                    name: 'WhiteList',
                    color: conf.moderatorRoleCollor
                },
                reason: 'Создание роли для принятия заявок в Discord'
            }).then((r) => {
                client.db.set(conf.guildId,r.id)
                console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mРоль \x1b[33m'+r.id+' \x1b[36mсоздана.\x1b[0m')
            }).catch((e)=>{console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[31mERROR \x1b[37m| \x1b[36mПроизошла Ошибка > \x1b[31m'+e+'\x1b[0m')})
        }
        function clearOldMessages(sendChannel,nbr){
            return sendChannel.messages.fetch({limit: 99}).then(messages => {
                messages = messages.filter(msg => (msg.author.id == client.user.id && !msg.system))
                let promises = []
                let i = 0
                messages.each(mesasge => {
                    if (i >= nbr) {
                promises.push(
                    mesasge.delete().catch(function(error) {
                        return
                    })
                    )
                }
                i += 1
            })
            return Promise.all(promises).then(() => {
                return
            }) 
        }).catch(function(error) {
            return
        }
    )
}
function getLastMessage(sendChannel) {
    return sendChannel.messages.fetch({limit: 20}).then(messages => {
        messages = messages.filter()
        return messages.first()
    }).catch(function(error) {
        return
    })
}
async function sendmsg(){
    await clearOldMessages(sendChannel, 1)
    let startmessage = await getLastMessage(sendChannel)
    if (startmessage != undefined) {
        return startmessage
    }
    await clearOldMessages(sendChannel, 0)
    const embed = new EmbedBuilder()
    .setColor(conf.embedCollor)
    .setAuthor(
        {
        name: 'Подать Заявку'
        })
    .setDescription('**Нажмите на кнопку ниже, чтобы подать заявку для входа на сервер!**')
    .setThumbnail(conf.thumbImage)
    .setFooter(
        {
            text: conf.footerText
        })
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('requestEmbed')
            .setLabel('Подать Заявку')
            .setEmoji('📝')
            .setStyle(ButtonStyle.Success)
            )
            sendChannel.send(
                {
                    embeds: [embed],
                    components: [row]
                }
            )
        }
    }
}