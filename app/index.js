
/*!
 * Module dependencies.
 */

import Koa from 'koa';

/*!
 * Initialize app.
 */

const app = new Koa();

// logger

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

module.exports = app;

