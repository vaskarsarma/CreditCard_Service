// Imports
const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
//const router = new Router();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require("koa-logger");

// Middlewares
app.use(bodyParser());
app.use(cors());
//app.use(router.routes()).use(router.allowedMethods());
app.use(logger());

//Error Handling
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
})

const cardApi = require('./routes/api');
app.use(cardApi.routes());

// Listining Port
app.listen(3001);

module.exports = app;
console.log("Starting server at port 3001")
