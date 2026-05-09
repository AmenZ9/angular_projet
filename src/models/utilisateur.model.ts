import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilisateur extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',

    defaultFn: 'now',
  })
  dateCreation: Date;

  @property({
    type: 'string',

    default: 'USER',
  })
  role: string;

  constructor(data?: Partial<Utilisateur>) {
    super(data);
  }
}
export interface UtilisateurRelations {
  // describe navigational properties here if you have relations
}

export type UtilisateurWithRelations = Utilisateur & UtilisateurRelations;
