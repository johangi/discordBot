const { Client, IntentsBitField, codeBlock, userMention } = require('discord.js');
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
let prefix = '!';
const commands = ['!help', '!retard', '!code'];

Pinger.on('ready', async () => {
    Pinger.user.setActivity('Genshin Impact');
    console.log(`${Pinger.user.username} is online!`);
});

Pinger.on('messageCreate', async message => {   
    if (message.author.id == '1070978195672805426') {
        switch (message.content) {
            case 'I HATE SEX!!!!':
                await message.channel.sendTyping();
                setTimeout(() => {message.reply('Fuck you!');}, 500);
                break;
            case 'I fucked your father':
                await message.channel.sendTyping();
                setTimeout(() => {message.reply('I fucked your little sister');}, 500);
                break;
            case 'I fucked your mother':
                await message.channel.sendTyping();
                setTimeout(() => {message.reply('The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.');}, 2000);
                break;
            case 'Go to gym, fatass!!!':
                await message.channel.sendTyping();
                setTimeout(() => {message.reply("This you, fatass? \n https://cdn.shopify.com/s/files/1/0170/5859/4880/files/cartmanOverlay_1980x.png?v=1613773493 ");}, 500)
                break;
            default:
                break;
        }
    }
    if (message.author.bot) return;     
    if (message.content.includes('sex')) {
        await message.channel.sendTyping()
        setTimeout(() => {message.reply('I love sex!');}, 500)
    }
    if (!message.content.startsWith(prefix)) return;
    switch (message.content) {
        case '!help':
            await message.channel.sendTyping();
            setTimeout(() => {
                message.reply('Help is for pussies. \n');
                message.channel.send(commands.forEach(element => returnCommands(element)));
            }, 500);
            break;
        case '!retard':
            await message.channel.sendTyping();
            setTimeout(() => {message.reply(userMention('270546422116384768') + ' is a retard');}, 500);
            break;
        // case '!retarddm <@421201992057356308>':
        //     await message.channel.sendTyping();
        //     setTimeout(() => {message.reply('DM sent!');}, 500);
        //     console.log(message.mentions.users);
        //     break;
        case '!code':
            await message.channel.sendTyping();
            setTimeout(() => {message.reply(codeBlock('<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Video</a>'))}, 1000);
            break;
        // case '!poll':
        //     await message.channel.sendTyping();
        //     setTimeout(() => message.channel.send(message.content).then(sentMessage => {
        //         sentMessage.react('☑');
        //         sentMessage.react('❌');
        //     }));
        //     break;
        default:
            break;
    }
});

function returnCommands (element) {
    return element.toString();
}

Pinger.login(config.token);