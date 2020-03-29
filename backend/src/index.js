const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);
//metodos HTTP

//GET: Buscar/listar uma informação do back-end
//POST: criar uma informação no back-end
//PUT: alterar uma informação no back-end
//DELETE: deletar uma informação no back-end



//TIPOS de parametros:

//Query params: parametros nomeados na rotaapós "?"
//Route params: parametros utilizados para identificar recursos
//request Body:


//banco de dados

//Sql:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//NoSQL: MongoDB, CouchDB


//Ddriver: SELECT * FROM users
//query builder: table('user).select('*').where()