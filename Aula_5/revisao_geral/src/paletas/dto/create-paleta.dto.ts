import { ApiProperty } from '@nestjs/swagger';

export class CreatePaletaDto {
  @ApiProperty({
    description: 'O sabor da paleta',
    example: 'chocolate',
  })
  sabor: string;

  @ApiProperty({
    description: 'O preco a ser pago pela paleta',
    example: 10.5,
  })
  preco: number;
}
