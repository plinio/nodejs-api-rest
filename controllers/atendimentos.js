const Atendimento = require('../models/atendimento');

module.exports = app => {

    app.get('/atendimentos',(req, res) => 
        {
            Atendimento.lista(res);
        });

    app.get('/atendimentos/:id',(req, res)=>
    {
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    })

    app.post('/atendimentos',(req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch(erros => {
                res.status(400).json(erros);
            })
        
    })

    app.patch('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        const valores = req.body;
        //Dados que serão alterados: 
        console.log(valores);

        Atendimento.altera(id, valores, res);
    })

    app.delete('/atendimentos/:id', (req, res)=>{
        const id = parseInt(req.params.id);

        Atendimento.apaga(id, res);
    })

}