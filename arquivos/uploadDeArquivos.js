const fs = require('fs');

fs.createReadStream('./assets/dog1.png')
    .pipe(
        fs.createWriteStream('./assets/dog1-stream.png'))
        .on('finish', () => {
            console.log('Imagem foi escrita com sucesso!')
        })