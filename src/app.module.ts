import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UtilsModule } from './utils/index';

@Module({
  imports: [UtilsModule],
  controllers: [AppController]
})
export class AppModule { }
