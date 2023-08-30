## Окружение
### Common
Основное окружение разворачивается через Docker

### Redis
Установка:
docker run -d --name redis-stack-server -p 127.0.0.1:6379:6379 -it redis/redis-stack-server:latest