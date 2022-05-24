import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaletasService } from './paletas.service';
import { CreatePaletaDto } from './dto/create-paleta.dto';
import { UpdatePaletaDto } from './dto/update-paleta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('paletas')
@Controller('paletas')
export class PaletasController {
  constructor(private readonly paletasService: PaletasService) {}

  @Post()
  create(@Body() createPaletaDto: CreatePaletaDto) {
    return this.paletasService.create(createPaletaDto);
  }

  @Get()
  findAll() {
    return this.paletasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paletasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaletaDto: UpdatePaletaDto) {
    return this.paletasService.update(+id, updatePaletaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paletasService.remove(+id);
  }
}
