import { Injectable } from '@nestjs/common';
import { CreatePaletaDto } from './dto/create-paleta.dto';
import { UpdatePaletaDto } from './dto/update-paleta.dto';
import { Paleta } from './entities/paleta.entity';

@Injectable()
export class PaletasService {
  paletas: Paleta[] = [];

  create(createPaletaDto: CreatePaletaDto) {
    const paleta: Paleta = { ...createPaletaDto };
    this.paletas.push(paleta);
    return paleta;
  }

  findAll() {
    return this.paletas;
  }

  findOne(id: number) {
    return this.paletas[id];
  }

  update(id: number, updatePaletaDto: UpdatePaletaDto) {
    const paleta: Paleta = this.paletas[id];
    paleta.preco = updatePaletaDto.preco;
    // this.paletas.splice(id, 1, paleta);
    return paleta;
  }

  remove(id: number) {
    this.paletas.splice(id, 1);
    return this.paletas;
  }
}
