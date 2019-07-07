/*
 * @description: boot application 
 * @author: zb
 * @update: zb
 * @Date: 2019-07-04 16:25:33
 * @LastEditors: zb
 * @LastEditTime: 2019-07-05 12:16:46
 */
declare const module: any;
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import { join } from 'path'
import * as mustacheExpress from 'mustache-express';
// import './styles.scss'
// import * as serveStatic from 'serve-static';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'assets'), { prefix: '/static/' })
    .setBaseViewsDir(join(__dirname, '..', 'views'));

  app.engine('html', mustacheExpress()); // 设置模板渲染函数
  // app.use('/public', serveStatic(join(__dirname, '../public'), {
  //   maxAge: '1d',
  //   extensions: ['jpg', 'jpeg', 'png', 'gif'],
  //  }));
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
