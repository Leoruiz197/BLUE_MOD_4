import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePaletaDto } from './create-paleta.dto';

export class UpdatePaletaDto extends PartialType(CreatePaletaDto) {
  @ApiProperty({
    description: 'O preco a ser pago pela paleta',
    example: 10.5,
  })
  preco: number;
}
