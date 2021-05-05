const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const {prefix,comandos} = require('./config.json');
const totalCamaradas = require("./funciones.js");


/*

EMOJIS

*/
const urss = ':urss:839575642651099177'


client.on("ready", () => {
  const channelGeneral = client.channels.cache.get("839565051362279430");

  channelGeneral.send("Hola a todos!");
});

client.on("message", (message) => {
    
  if (message.content === `${prefix}b`) {

    message.channel.send(`Bienvenido al server commie de España ${urss}, :urss:, :heart:`);

  } else if (message.content === `${prefix}num`){

    message.channel.send(`Somos un total de ${totalCamaradas(message.guild.memberCount)} camaradas.`)

  }else if( message.content == `${prefix}`){

      message.channel.send(` Tienes que enviar algun argumento. Aqui tienes los comandos disponibles: ${comandos} `)
  }
});

client.login(config.TOKEN);
