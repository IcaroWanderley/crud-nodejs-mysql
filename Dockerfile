
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["./wait-for-it.sh", "db:3306", "-t", "30", "--", "npm", "start"]