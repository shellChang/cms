import { NestFactory } from '@nestjs/core';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import { join } from 'path'

async function bootstrap() {
  const app:NestExpressApplication  = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/static/'})
  app.setBaseViewsDir(join(__dirname, '..', 'public/views')) // 放视图的文件
  // app.setViewEngine({
  //   engine: {
  //    html:,
  //   }
  // });
  await app.listen(3000);
}
bootstrap();
