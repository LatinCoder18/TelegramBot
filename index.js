const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1091563893:AAFaTzfSf77ResTA-cwJ1w51th_HXroGnEQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
var username;
var password;

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Bienvenido al bot de Recargas Nauta para identificar su usario tipee /user Usuario y luego /password password");

});
bot.onText(/\/user/, (msg) => {
    var res = msg.text.split(" ");

    if(res.length>1){
        username = res[1];
            bot.sendMessage(msg.chat.id, username);
    }else{
        bot.sendMessage(msg.chat.id, "Introduce un nombre de usuario correcto");
    }
    




});
bot.onText(/\/password/, (msg) => {
    var res = msg.text.split(" ");
      if(res.length>1){
        password = res[1];
            bot.sendMessage(msg.chat.id, username);
    }else{
        bot.sendMessage(msg.chat.id, "Introduce una contraseña para "+ username);
    }

});