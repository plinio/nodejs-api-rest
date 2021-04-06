const express = require('express');
const consign = require('consign');

module.exports = () => {
    //cria variável app com instância do servidor;
    const app = express();

    //configura as rotas do app
    consign()
        .include('controllers')
        .into(app);

    return app
}

