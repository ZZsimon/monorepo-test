import { Controller, Get } from '@nestjs/common';
import { App2Service } from './app2.service';
import { MylibService } from '@app/mylib';

@Controller()
export class App2Controller {
  constructor(
    private readonly app2Service: App2Service,
    private readonly mylibService: MylibService,
  ) {}

  @Get()
  getHello(): string {
    return this.app2Service.getHello();
  }

  @Get('app2')
  app2() {
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    return this.mylibService.libService() + ' app2';
  }
}
