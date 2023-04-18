const { Client, IntentsBitField } = require('discord.js');
const Pinger = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});
Pinger.config = require('./config.js');
config = Pinger.config;

Pinger.on('ready', async () => {
    Pinger.user.setActivity('Definetly not a robot');
    console.log(`${Pinger.user.username} is online!`);
});

Pinger.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.includes('sex')) {
        message.reply('I love sex!');
    }
    let prefix = '!';
    if (!message.content.startsWith(prefix)) return;
});

Pinger.login(config.token);