const conf = require('./config.json')
const { EmbedBuilder, PermissionsBitField } = require('discord.js')
const prefix = conf.prefix
const time = new Date()
var t = 0
//=====WhiteList====
function sendCmd(cmd,type,msg){
  if(type == '0'){
    var str = mc.runcmdEx(cmd)
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mЧерез Discord выполнена команда | ответ > \x1b[33m'+str.output+'\x1b[0m')
    msg.channel.send({
      content: '**Response:**\n```'+str.output+'```',
    })
  }
  else{
    var str = mc.runcmdEx(cmd)
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mВыполняется команда > \x1b[33m'+cmd+'\x1b[0m')
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mОтвет > \x1b[33m'+str.output+'\x1b[0m')
  }
}
function wladd(r, msg){
  const arggs = msg.content.split(' ').slice(1)
  const nickname = arggs.join(' ')
  if (!nickname || !msg.member.permissions.has(PermissionsBitField.Flags.Administrator) || !msg.member.roles.cache.has(client.db.get(conf.guildId))) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
  else{
    var cmd = conf.WhiteList.addCommand.replaceAll('$user',nickname)
    sendCmd(cmd,'1',msg)
    msg.channel.send({
      content: '**Игрок с ником "'+nickname+'" успешно добавлен в вайтлист!**',
    })
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mИгрок \x1b[33m'+nickname+' \x1b[36mбыл добавлен в вайтлист!\x1b[0m')
  }
}
function wlrem(r, msg){
  const arggs = msg.content.split(' ').slice(1)
  const nickname = arggs.join(' ')
 if (!nickname || !msg.member.permissions.has(PermissionsBitField.Flags.Administrator) || !msg.member.roles.cache.has(client.db.get(conf.guildId))) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
 else{
    var cmd = conf.WhiteList.rem.replaceAll('$user',nickname)
    sendCmd(cmd,'1',msg)
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mИгрок \x1b[33m'+nickname+' \x1b[36mбыл удалён из вайтлиста!\x1b[0m')
    msg.channel.send({
      content: '**Игрок с ником "'+nickname+'" успешно удалён из вайтлиста!**',
    })
  }
}
//=====BANS====
function wlban(r, msg){
  const arggs = msg.content.split(' ').slice(1)
  const nickname = arggs.join(' ')
  if (!nickname || !msg.member.permissions.has(PermissionsBitField.Flags.Administrator)) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
  else{
    var cmd = conf.WhiteList.banCommand.replaceAll('$user',nickname)
    sendCmd(cmd,'1',msg)
    msg.channel.send({
      content: '**Игрок с ником "'+nickname+'" успешно забанен!**',
    })
    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mИгрок \x1b[33m'+nickname+' \x1b[36mбыл забанен!\x1b[0m')
  }
}

function wlunban(r, msg){
  const arggs = msg.content.split(' ').slice(1)
  const nickname = arggs.join(' ')
 if (!nickname || !msg.member.permissions.has(PermissionsBitField.Flags.Administrator)) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
 else{
  var cmd = conf.WhiteList.unbanCommand.replaceAll('$user',nickname)
  sendCmd(cmd,'1',msg)
  msg.channel.send({
    content: '**Игрок с ником "'+nickname+'" успешно разбанен!**',
  })
  console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mИгрок \x1b[33m'+nickname+' \x1b[36mбыл разбанен!\x1b[0m')
  }
}

function wlcmd(r, msg){
  const arggs = msg.content.split(' ').slice(1)
  const cmd = arggs.join(' ')
  if (!cmd || !msg.member.permissions.has(PermissionsBitField.Flags.Administrator)) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
  else{
    sendCmd(cmd,'0',msg)
    msg.channel.send({
      content: '**Команда "'+cmd+'" выполнена на сервере!**',
    })
  }
}
function wlhelp(r, msg){
 if (!msg.member.permissions.has(PermissionsBitField.Flags.Administrator)) return msg.channel.send({content: '**У вас нет прав на выполнение команды, либо вы допустили ошибку!**',})
 else{
  const embed = new EmbedBuilder()
  .setColor('#00ffe1')
  .setAuthor(
    {
      name: 'MineServ WhiteList'
    })
  .setDescription('**Помощь по командам бота**')
  .setThumbnail(conf.thumbImage)
  .addFields(
    { name: '**Префикс бота:**', value: '`'+prefix+'`'},
    { name: '**wlhelp:**', value: '`Информация о командах бота.`'},
    { name: '**wlcmd:**', value: '`Выполнить на сервере команду.`'},
    { name: '**wladd:**', value: '`Добавить игрока в ВЛ.`'},
    { name: '**wlrem:**', value: '`Удалить игрока из ВЛ.`'},
    { name: '**wlban:**', value: '`Забанить игрока на игровом сервере.`'},
    { name: '**wlunban:**', value: '`Разбанить игрока на игровом сервере.`'},
  )
  .setFooter(
    {
      text: conf.footerText
    })
    msg.channel.send(
      {
        embeds: [embed]
      }
    )
  }
}
var comms_list = [
{
  name: "wladd",
  out: wladd,
  about: "добавить в вайтлист"
},
{
  name: "wlrem",
  out: wlrem,
  about: "удалить из вайтлиста"
},
{
  name: "wlban",
  out: wlban,
  about: "забанить игрока"
},
{
  name: "wlunban",
  out: wlunban,
  about: "разбанить игрока"
},
{
  name: "wlhelp",
  out: wlhelp,
  about: "Хелп"
},
{
  name: "wlcmd",
  out: wlcmd,
  about: "выполнить команду"
}];

module.exports.comms = comms_list
