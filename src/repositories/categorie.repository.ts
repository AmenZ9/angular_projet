import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EcommerceDsDataSource} from '../datasources';
import {Categorie, CategorieRelations} from '../models';

export class CategorieRepository extends DefaultCrudRepository<
  Categorie,
  typeof Categorie.prototype.id,
  CategorieRelations
> {
  constructor(
    @inject('datasources.ecommerce_ds') dataSource: EcommerceDsDataSource,
  ) {
    super(Categorie, dataSource);
  }
}
