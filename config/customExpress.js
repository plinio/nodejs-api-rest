const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    //cria variável app com instância do servidor;
    const app = express();

    //bibliotecas que vou usar
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //configura as rotas do app
    consign()
        .include('controllers')
        .into(app);

    return app
}

