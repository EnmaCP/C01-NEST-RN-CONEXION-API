import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Max', especie: 'Perro', edad: 3 },
    { id: 2, nombre: 'Luna', especie: 'Gato', edad: 2 },
    { id: 3, nombre: 'Rocky', especie: 'Loro', edad: 1 },
  ];

  findAll() {
    return this.mascotas;
  }

  findOne(id: number) {
    return this.mascotas.find((m) => m.id === id);
  }
}