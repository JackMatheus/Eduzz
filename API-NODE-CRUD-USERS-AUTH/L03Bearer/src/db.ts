//dbsite = https://customer.elephantsql.com/login
//https://node-postgres.com/api/pool
const { Pool } = require('pg');
//https://web.digitalinnovation.one/course/nodejs-com-bancos-de-dados-relacionais-sql/learning/e4099f86-b366-4814-8ff1-1b74a5f45d2a?back=/track/eduzz-fullstack-developer
//Pool de conexão instanciado () com o db através da url abaixo
const connectionString = 'postgres://fhgnnnvd:oeKsu1r3mcyk8rc1S9bU4vUPzoRsY13y@castor.db.elephantsql.com/fhgnnnvd';
const db = new Pool({connectionString});

export default db;