import { Controller, Get, Param } from '@nestjs/common';
import { JuegosService } from './juegos.service';

@Controller('juegos')
export class JuegosController {
  constructor(
    private readonly juegosService: JuegosService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juegosService.findOne(Number(id));
  }
}