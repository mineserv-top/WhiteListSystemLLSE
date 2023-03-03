# WhiteListSystemLLSE
Система удобных заявок с анкетами для входа на приватные сервера с LLSE от MineServ
У вас сервер с вайтлистом и вы не хотите возиться с плагинами на консоль в Discord? 
Тогда этот бот - ваш выбор!

Всё, что вам нужно для настройки бота - в конфиге 
```json
{
    "token": "",//токен бота
    "prefix": "!",//префикс бота
    "embedCollor": "#00bd6d",//Цвета встраиваний

    "guildId": "",//Айди Discord сервера, в котором будет работать бот
    
    "mainEmbedChannel": "",//канал, в который будет отправляться встраивание с кнопкой для создания канала

    "requestParent": "",//группа каналов, в которой будут создаваться каналы заявок
    "requestsChannel": "",//канал, в который будут отправляться заявки
    "nicknamesChannel": "",//канал, в который будут отправляться ники

    "moderatorRoleCollor": "",//цвет роли модератора

    "thumbImage": "https://media.discordapp.net/attachments/1057078822375264349/1066034808523866223/WoWqWgf5J4U.png",
    "footerText": "MineServ.top | WhiteList",

    "WhiteList": {
        "Question1": {//Первый вопрос в форме - это ОБЯЗАТЕЛЬНО никнейм!
            "Label": "ваш никнейм",//Имя первого вопроса
            "Placeholder": "напиши свой никнейм в Minecraft",//Плейсхолдер первого вопроса
            "Style": "SHORT"//Стиль первого вопроса. SHORT или LONG
        },
        "Question2": {//Второй вопрос в форме
            "Label": "ты хто такой",//Имя второго вопроса
            "Placeholder": "напиши хто ты такой в Minecraft",//Плейсхолдер второго вопроса
            "Style": "SHORT"//Стиль второго вопроса. SHORT или LONG
        },
        "Question3": {//Третий вопрос в форме
            "Label": "как дела",//Имя третьего вопроса
            "Placeholder": "напиши как дела в Minecraft",//Плейсхолдер третьего вопроса
            "Style": "SHORT"//Стиль третьего вопроса. SHORT или LONG
        },
        "Question4": {//Четвёртый вопрос в форме
            "Label": "ну как там с деньгами",//Имя четвертого вопроса
            "Placeholder": "с какими беньгами",//Плейсхолдер четвертого вопроса
            "Style": "SHORT"//Стиль четвертого вопроса. SHORT или LONG
        },
        "Question5": {//Пятый вопрос в форме
            "Label": "идеи кончились",//Имя пятого вопроса
            "Placeholder": "жалка",//Плейсхолдер пятого вопроса
            "Style": "LONG"//Стиль пятого вопроса. SHORT или LONG
        },

        "addCommand":"wl add $user",//команда для добавления в вайтлист. $user - ник игрока
        "remCommand":"wl remove $user",//комана для удаления из вайтлиста. $user - ник игрока

        "banCommand":"ban $user",//команда для бана игрока. $user - ник игрока
        "unbanCommand":"pardon $user"//команда для разбана игрока. $user - ник игрока
    }
}
```
