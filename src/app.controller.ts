import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello from NestJS with HTMX!' };
  }

  @Get('/another')
  @Render('partial')
  another() {
    return { message: 'This message was fetched via HTMX!' };
  }
}
