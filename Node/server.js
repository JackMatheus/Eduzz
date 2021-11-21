const http = require ('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage.js');



// http.createServer((req, res) =>{
//        res.end('<h1>working</h1>')    
//     }).listen(port,()=> console.log('Server running in ${host}: ${port}, ${status}'));
    
    http.createServer((req, res) =>{
        let url = req.url;
        //rota padrão: localhost 3000
        // if(url==='/') {
        //     res.end('<h1>working</h1>') 
        // }

        if(url==='/status') {
            res.end(JSON.stringify(status,null,2)) 
        }else{
            res.end('<h1>Seja bem vindo</h1>')
        }
           
        }).listen(port,()=> console.log('Server running in ${host}: ${port}, ${status}'));
        