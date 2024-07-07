# API Node.js com Express e MongoDB :dragon:

## Descrição
Esta API foi desenvolvida com Node.js, Express e MongoDB, utilizando Mongoose para modelagem de dados. Ela serve como back-end para um projeto de front-end hospedado em outro repositório (https://github.com/AndradeRafael41/RubyStreaming).

## Pré-requisitos :computer:
- [Node.js](https://nodejs.org/) >= versão 14
- [NPM](https://www.npmjs.com/) >= versão 6
- [MongoDB](https://www.mongodb.com/)

## Instalação :arrow_down:
Passos para instalar as dependências do projeto.
```
git clone https://github.com/seu-usuario/seu-repositorio-api.git
cd seu-repositorio-api
npm install
```

## Configuração :gear:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
  
  DB_USER = 
  
  DB_URL = 
  
  DB_PASS = 
  
  SECRET =   
  
  PORT = 
  
## Uso

```npm start ```

## Estrutura :construction:

```
root/
├── controllers/
│   └── ... (controladores da aplicação)
│
├── database/
│   └── ... (configurações e scripts relacionados ao banco de dados)
│
├── logs/
│   └── ... (arquivos de log da aplicação)
│
├── models/
│   └── ... (modelos de dados da aplicação)
│
├── routes/
│   └── ... (definições de rotas da aplicação)
│
├── .gitignore
├── app.js
├── package-lock.json
└── package.json
```
