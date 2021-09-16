import { createConnection } from 'typeorm';

createConnection()
.then( ()=> console.log("Sucessfully connected with is Mysql !"))
.catch( (err)=> console.log("Opa, algo deu errado tente novamente!", err))