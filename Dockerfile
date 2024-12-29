# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de dependências e instale-as
COPY package*.json ./
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Adicione um script de espera
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["./wait-for-it.sh", "db:3306", "-t", "30", "--", "npm", "start"]