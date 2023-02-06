//============-MineServ WL BY Alpha-============
//===================-VAR`S-====================
ll.registerPlugin('WhiteListSystemLLSE', 'Удобная система заявок для серверов с вайтлистом использующих LLBDS от MineServ', [1,0,0])
const {Client} = require('discord.js');
const client = new Client({ intents: 32767 })
const discordModals = require('discord-modals')
discordModals(client)
const Discord = require('discord.js')
const config = require('./config.json')
const comms = require("./cmds.js")
const crdb = new JsonConfigFile('./plugins/nodejs/WhiteListSystemLLSE/data/DB.json')
crdb.init('c',0)
const db = require('qjson-db')
client.db = new db('./plugins/nodejs/WhiteListSystemLLSE/data/DB.json')
client.discord = Discord
client.config = config 
var token = config.token
const prefix = config.prefix
//=============-DISCORD BOT LOGIN-=============
client.login(token)
//===================-EVENTS-==================
const interactionCreate = require('./events/interactionCreate.js')
const modalSubmit = require('./events/modalSubmit.js')
const ready = require('./events/ready.js')
client.on(interactionCreate.name, (...args) => interactionCreate.execute(...args, client))
client.on(modalSubmit.name, (...args) => modalSubmit.execute(...args, client))
client.on(ready.name, (...args) => ready.execute(...args, client))
client.on('messageCreate', (msg) => {
    if (msg.author.username != client.user.username && msg.author.discriminator != client.user.discriminator) {
      var comm = msg.content.trim() + " "
      var comm_name = comm.slice(0, comm.indexOf(" "));
      for (comm_count in comms.comms) {
        var comm2 = prefix + comms.comms[comm_count].name;
        if (comm2 == comm_name) {
          comms.comms[comm_count].out(client, msg);
        }
      }
    }
  }
)