function loginWithTelegram() {
    var botUsername = '@arztune_bot';
    var botToken = '5844104350:AAEkYk8EOhJMCkYKKlytqummkJ_WH5rkmMU';
    var redirectUrl = 'https://ваш_сайт.com/redirect'; // URL, на который пользователь будет перенаправлен после авторизации

    var widget = new TelegramLoginWidget(botUsername, botToken, redirectUrl);
    widget.render('telegram-login', {size: 'large', requestAccess: true});
}