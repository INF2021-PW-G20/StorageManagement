import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations, Storage, Productstorage, Inputoutput} from '../models';
import {ProductstorageRepository} from './productstorage.repository';
import {StorageRepository} from './storage.repository';
import {InputoutputRepository} from './inputoutput.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly storages: HasManyThroughRepositoryFactory<Storage, typeof Storage.prototype.id,
          Productstorage,
          typeof Product.prototype.id
        >;

  public readonly inputoutputs: HasManyRepositoryFactory<Inputoutput, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProductstorageRepository') protected productstorageRepositoryGetter: Getter<ProductstorageRepository>, @repository.getter('StorageRepository') protected storageRepositoryGetter: Getter<StorageRepository>, @repository.getter('InputoutputRepository') protected inputoutputRepositoryGetter: Getter<InputoutputRepository>,
  ) {
    super(Product, dataSource);
    this.inputoutputs = this.createHasManyRepositoryFactoryFor('inputoutputs', inputoutputRepositoryGetter,);
    this.registerInclusionResolver('inputoutputs', this.inputoutputs.inclusionResolver);
    this.storages = this.createHasManyThroughRepositoryFactoryFor('storages', storageRepositoryGetter, productstorageRepositoryGetter,);
    this.registerInclusionResolver('storages', this.storages.inclusionResolver);
  }
}
