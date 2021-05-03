import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Storage, StorageRelations} from '../models';

export class StorageRepository extends DefaultCrudRepository<
  Storage,
  typeof Storage.prototype.id,
  StorageRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Storage, dataSource);
  }
}
