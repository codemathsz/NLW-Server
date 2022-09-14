import express from "express";

const app = express()

// primaira rota
// www.minhaapi.com/ads  exemplo
app.get('/ads', (request, response) =>{// request buscar as respostas(nome do jogo,etc...), response para devolver uma resposta
    // quando usamos essa função precisamos devolver uma resposta, se não o browser fica carregando infinito

    return response.json([
        {id:1, name: 'Anúncio 1'},
        {id:2, name: 'Anúncio 2'},
        {id:3, name: 'Anúncio 3'},
        {id:4, name: 'Anúncio 4'},
        {id:5, name: 'Anúncio 5'},

    ])// retornando respostar no formato json(qlqr tipo primitivo js, array [], obj {})
})//primeiro parametro é o endereço que o úsuario va acessar, segundo paramentro precisa ser uma função que será executada quando o úsuario acesar

//acessar nop browser, localhost:3333/ads
app.listen(3333)// passamos uma porta, nossa aplicação no ambiente de desenvolvimento roda no localhost e passamos uma porta para acessar, se tivermos varia aplicação node rodando ela vai diferenciart pela porta
// quando usamos o listen, estamos falando para a aplicação fique ouvindo novas requisições e que não pare ate que o úsuario queira
// para rodar node src/server.mjs
