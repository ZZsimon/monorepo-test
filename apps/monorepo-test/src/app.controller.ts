import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MylibService } from '@app/mylib';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mylibService: MylibService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('app1')
  app1() {
    return this.mylibService.libService() + ' app1';
  }
}
