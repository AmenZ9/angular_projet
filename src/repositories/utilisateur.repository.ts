import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EcommerceDsDataSource} from '../datasources';
import {Utilisateur, UtilisateurRelations} from '../models';

export class UtilisateurRepository extends DefaultCrudRepository<
  Utilisateur,
  typeof Utilisateur.prototype.id,
  UtilisateurRelations
> {
  constructor(
    @inject('datasources.ecommerce_ds') dataSource: EcommerceDsDataSource,
  ) {
    super(Utilisateur, dataSource);
  }
}
