import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Productstorage, ProductstorageRelations} from '../models';

export class ProductstorageRepository extends DefaultCrudRepository<
  Productstorage,
  typeof Productstorage.prototype.id,
  ProductstorageRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Productstorage, dataSource);
  }
}
