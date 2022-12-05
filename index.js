const { Client, GatewayIntentBits } = require('discord.js')
const CONFIG = require('./config.json')
const juego = require('./juegos')
const jokes = require('./jokes')
const pokes = require("./pokemons").pokemons;
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,]
});

client.on("ready", () => {
    client.channels.cache.get('751598114607071332').send("quien carajo me desperto de la siesta 😡🤬")
  })

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var isOneTime = false;

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (!newState.member.user) return;
    if (!newState.member.user.bot &&
        //newState.member.user.id == "414868471990452235" 
        //|| 
        newState.member.user.username == 'marki' && !isOneTime) {
        isOneTime = true;
        await sleep(1000);
        newState.member.voice.setChannel("992202620317999134")
    }
});

client.on("messageCreate", (message) => {
    if (message.content == "!juego") {
        message.reply(juego.generarJuego())
    } else if (message.content == "!chiste") {
        message.reply(GetJoke());
    } else if (message.content == "!pokemon") {
        message.reply(GetPokemon());
    } else {
        message.react(GetReaction());
    }
});

client.login(process.env.TOKEN);

function GetPokemon() {
    var id = Math.floor(Math.random() * (808 + 1)) + 0;
    const pokemonName = Object.entries(pokes[id])[1][1].english;
    return `Tu pokemon es #${id} ${pokemonName} 👾`;
}
function GetJoke() {
    var lenght = jokes.jokes.length;
    var random = Math.floor(Math.random() * (lenght + 1)) + 0;
    if (!jokes.jokes[random]) return jokes.jokes[0];
    return jokes.jokes[random];
}
function GetReaction() {
    var random = Math.floor(Math.random() * (3 + 1)) + 0;
    var msg = "🐸";
    switch (random) {
        case 1:
            msg = "🐵";
            break;
        case 2:
            msg = "🐨";
            break;
        case 3:
            msg = "🦁";
            break;
    }
    return msg;
}