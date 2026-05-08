import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EcommerceDsDataSource} from '../datasources';
import {Panier, PanierRelations} from '../models';

export class PanierRepository extends DefaultCrudRepository<
  Panier,
  typeof Panier.prototype.id,
  PanierRelations
> {
  constructor(
    @inject('datasources.ecommerce_ds') dataSource: EcommerceDsDataSource,
  ) {
    super(Panier, dataSource);
  }
}
