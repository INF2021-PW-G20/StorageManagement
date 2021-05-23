import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Storage, StorageRelations, Inputoutput, Productstorage} from '../models';
import {InputoutputRepository} from './inputoutput.repository';
import {ProductstorageRepository} from './productstorage.repository';

export class StorageRepository extends DefaultCrudRepository<
  Storage,
  typeof Storage.prototype.id,
  StorageRelations
> {

  public readonly storageIO: HasManyRepositoryFactory<Inputoutput, typeof Storage.prototype.id>;

  public readonly storagesPS: HasManyRepositoryFactory<Productstorage, typeof Storage.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('InputoutputRepository') protected inputoutputRepositoryGetter: Getter<InputoutputRepository>, @repository.getter('ProductstorageRepository') protected productstorageRepositoryGetter: Getter<ProductstorageRepository>,
  ) {
    super(Storage, dataSource);
    this.storagesPS = this.createHasManyRepositoryFactoryFor('storagesPS', productstorageRepositoryGetter,);
    this.registerInclusionResolver('storagesPS', this.storagesPS.inclusionResolver);
    this.storageIO = this.createHasManyRepositoryFactoryFor('storageIO', inputoutputRepositoryGetter,);
    this.registerInclusionResolver('storageIO', this.storageIO.inclusionResolver);
  }
}
