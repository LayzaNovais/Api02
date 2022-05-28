import { semafaro, sequenciaPar, diasdaSemana, fatorial } from './services.js'

import { Router } from 'express'

 const server = Router();

 server.get('/ping', (req, resp) => {
     resp.send('pong');
 })

 server.get('/semafaro/:cor', (req, resp) => {
    try{
      const cor = req.params.cor;
      const pode = semafaro(cor);

        resp.send({
           semafaro: pode
     })
      
      
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
 
server.get('/diasdaSemana', (req, resp) =>{
    try{
        const dia = req.query.dia;
        const x = diasdaSemana(dia);

        resp.send({
            diasdaSemana: x
        })

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.post('/fatorial', (req, resp) => {
    try{
        const {numeros} = req.query;

        const x = fatorial(numeros);

        resp.send({
            fatorial: x
        })

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.post('/sequenciaPar', (req, resp) => {
    try{
        const {} = req.body;

        const x = fatorial(numeros);

        resp.send({
            fatorial: x
        })

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})





export default server;
