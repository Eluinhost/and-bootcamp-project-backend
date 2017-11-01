require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const getUsers = require('./endpoints/getUsers');
const db = require('./database');

const app = new Koa();
const router = new Router();

app.context.db = db;

router.get('/api/users', getUsers);

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = process.env.APIPORT;

console.log(`starting on port ${port}`);

app.listen(port);
