import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaletasModule } from './paletas/paletas.module';

@Module({
  imports: [PaletasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
