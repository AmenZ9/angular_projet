import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {table: 'panier'}
  }
})
export class Panier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  produitId: number;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'date',
  })
  dateAjout?: string;


  constructor(data?: Partial<Panier>) {
    super(data);
  }
}

export interface PanierRelations {
  // describe navigational properties here
}

export type PanierWithRelations = Panier & PanierRelations;
