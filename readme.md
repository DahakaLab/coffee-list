## Описание
Приложение представляет из себя расширяемую ленту карточек с кофе которые загружаются из внешнего источника и кешируются на сервере.

## Разворачивание

### Common
В проекте используется node версии:

    20.4.0
 npm версии
 

    9,7,2

Для кеширования данных используется Redis с дефолтным подключением по адресу: 

    127.0.0.1:6379
Сервер работает по адресу:

    127.0.0.1:3000
Клиент работает по адресу:

Dev:

    127.0.0.1:5173
Priview:

    127.0.0.1:4173

### Redis

 - Скачиваем и разворачиваем Redis через Docker:

	    docker run -d --name redis-stack-server -p 127.0.0.1:6379:6379 -it redis/redis-stack-server:latest
    
### Server
 - Сервер находится в директории: server

	    cd ./server
 - Устанавливаем зависимости

	    npm ci
 - Запускаем сервер

	    npm start
 
### Client
 - В другом окне терминала переходим в директорию client

	    cd ./client
 - Устанавливаем зависимости

	    npm ci
 - Собираем клиентскую часть

	    npm run build
 - Запускаем превью

	    npm run preview
 - Открываем в браузере

	    http://localhost:4173/
## Настройки
Клиентскую часть можно настроить через переменные окружения например через файлик .env
| Переменная | Значение по умолчанию |Назначение|
|--|--|--|
| DEV_PORT | 5173 |На каком порту запустить dev окружение|
| PREV_PORT | 4173 |На каком порту запустить preview|
| VITE_API_URL| http://127.0.0.1:3000 |Адрес апишки (тот на котором запускается server)|

## Дополнительная информация

### Кеширование
Кеширование осуществляется через redis. Данные кешируются на 30 минут. Каждый запрос к кешу обнавляет таймер очистки. Сервер пытается по ключу в хеш мапе "cache" найти необходимую запись. Если запись найдена - отдает ее, если нет асинхронно получает данные с адресов:
-   Сорта кофе: [https://random-data-api.com/api/coffee/random_coffee](https://random-data-api.com/api/coffee/random_coffee)
- Картинки: [https://loremflickr.com/json/500/500/coffee,bean](https://loremflickr.com/json/500/500/coffee,bean)

Затем преобразует данные к единому формату CoffeeDTO, записывает в кеш и отдает эти данные в ответ.

### Placeholder картинки
В компоненте Image реализована механика плейсхолдера. Пока картинка не загрузится, будет отображаться поверх div с автором и тэгами. Как картинка загрузилась, отрабатывает событие которое отключает плейстхолдер.

### Дополнительно
#### Тросировка запроса
Для отслеживания запросов при падении, сделана троссировка с помощью асинхронного контекста. Когда приходит запрос, ему задается traceId. Если приложение падает, то в логах выводится этот traceId. Можно посмотреть как это работает если перейти по адресу:

    http://127.0.0.1:3000/get-error
    
#### GitHub Actions
Для проверки корректности работы приложения, подключен self-hosted раннер который развернут на личном debian сервере где прогоняются тесты, код проверяется на типизацию и на соответсвие правилам линтера.
