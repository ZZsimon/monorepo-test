import { Module } from '@nestjs/common';
import { App2Controller } from './app2.controller';
import { App2Service } from './app2.service';
import { MylibModule } from '@app/mylib';

@Module({
  imports: [MylibModule],
  controllers: [App2Controller],
  providers: [App2Service],
})
export class App2Module {}
