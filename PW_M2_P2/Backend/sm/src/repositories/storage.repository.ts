import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Storage, StorageRelations, Product, Productstorage, Inputoutput} from '../models';
import {ProductstorageRepository} from './productstorage.repository';
import {ProductRepository} from './product.repository';
import {InputoutputRepository} from './inputoutput.repository';

export class StorageRepository extends DefaultCrudRepository<
  Storage,
  typeof Storage.prototype.id,
  StorageRelations
> {

  public readonly products: HasManyThroughRepositoryFactory<Product, typeof Product.prototype.id,
          Productstorage,
          typeof Storage.prototype.id
        >;

  public readonly inputoutputs: HasManyRepositoryFactory<Inputoutput, typeof Storage.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProductstorageRepository') protected productstorageRepositoryGetter: Getter<ProductstorageRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('InputoutputRepository') protected inputoutputRepositoryGetter: Getter<InputoutputRepository>,
  ) {
    super(Storage, dataSource);
    this.inputoutputs = this.createHasManyRepositoryFactoryFor('inputoutputs', inputoutputRepositoryGetter,);
    this.registerInclusionResolver('inputoutputs', this.inputoutputs.inclusionResolver);
    this.products = this.createHasManyThroughRepositoryFactoryFor('products', productRepositoryGetter, productstorageRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
