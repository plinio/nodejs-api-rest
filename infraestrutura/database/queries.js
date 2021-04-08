const conexao = require('./conexao')

const executaQuery = (query, parametros = '') => {
    //para desacoplar, preciso passar as variáveis pra quem invocou. Farei isso com promises
    return new Promise((resolve, reject)=>{
        conexao.query(query, parametros, (erros, resultados, campos) => {

            if(erros){
               reject(erros) ;
            }else{
               resolve(resultados);
            }
    
        })
    })
    
}

module.exports = executaQuery;