import { Controller, Get, Response, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Response() res): any {
    // res.sendFile(join(__dirname,'../public/views','index.html'))
      return this.appService.getHello();
  }
}
