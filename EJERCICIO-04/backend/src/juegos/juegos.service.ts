import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'The Legend of Zelda', genero: 'Aventura', precio: 60 },
    { id: 2, titulo: 'Super Mario Odyssey', genero: 'Plataformas', precio: 50 },
    { id: 3, titulo: 'Elden Ring', genero: 'RPG', precio: 70 },
  ];

 
findAll(genero?: string) {
  if (!genero) return this.juegos;
  return this.juegos.filter(j => j.genero === genero);
}

  findOne(id: number) {
    return this.juegos.find((j) => j.id === id);
  }
}