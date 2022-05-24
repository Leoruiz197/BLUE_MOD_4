import { Module } from '@nestjs/common';
import { PaletasService } from './paletas.service';
import { PaletasController } from './paletas.controller';

@Module({
  controllers: [PaletasController],
  providers: [PaletasService]
})
export class PaletasModule {}
