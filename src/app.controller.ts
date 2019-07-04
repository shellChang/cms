import { Controller, Get, Response, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.html')
  getHello(@Response() res): any {
    // res.sendFile(join(__dirname,'../src/views','index.html'))
      // return this.appService.getHello();
  }
    // res.sendFile(join(__dirname,'../src/views','index.html'))}
}
