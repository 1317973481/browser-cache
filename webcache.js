import Koa from 'koa';
import path from 'path';
// //静态资源中间件,不缓存
// import resource from 'koa-static';
// const app = new Koa();
// const host = 'localhost';
// const port = 4396;
// app.use(resource(path.join(__dirname, './static')));

// app.listen(port, () => {
//   console.log(`server is listen in ${host}:${port}`);
// });
//静态资源中间件 缓存
import resource from 'koa-static';
const app = new Koa();
const host = 'localhost';
const port = 4396;

app.use(async (ctx, next) => {
 // 设置响应头Cache-Control 设置资源有效期为300秒
  ctx.set({
    'Cache-Control': 'max-age=30'  
  });
//   ctx.set({
//     'Cache-Control': 'no-cache'  
//   });
  await next();
});
app.use(resource(path.join(__dirname, './static')));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
})