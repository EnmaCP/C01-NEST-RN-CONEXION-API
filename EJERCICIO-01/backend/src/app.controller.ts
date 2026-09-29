import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hola')
export class HolaController {
  @Get()
  saludar() {
    return { mensaje: '¡Hola desde DAM! 🚀' };
  }
}
