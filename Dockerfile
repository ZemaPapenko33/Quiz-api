# Используем образ для Node.js
FROM node:20.18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json  ./

# Устанавливаем зависимости
RUN npm ci 

# Копируем все остальные файлы проекта
COPY . .

# Запускаем приложение
CMD ["sh", "-c", "npm run migration:run && npm run start:dev"]
