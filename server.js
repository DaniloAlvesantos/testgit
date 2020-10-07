const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.status(200).send({menssage: 'Olá Mundo'});
})

app.listen(3001, () => {
    console.log('api rodado na porta 3001');
})