import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class AppController {
  @Get()
  getHello() {
    return 'Hello World!';
  }
}
