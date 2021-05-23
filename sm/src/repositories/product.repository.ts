import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations, Inputoutput, Productstorage} from '../models';
import {InputoutputRepository} from './inputoutput.repository';
import {ProductstorageRepository} from './productstorage.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly productIO: HasManyRepositoryFactory<Inputoutput, typeof Product.prototype.id>;

  public readonly productPS: HasManyRepositoryFactory<Productstorage, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('InputoutputRepository') protected inputoutputRepositoryGetter: Getter<InputoutputRepository>, @repository.getter('ProductstorageRepository') protected productstorageRepositoryGetter: Getter<ProductstorageRepository>,
  ) {
    super(Product, dataSource);
    this.productPS = this.createHasManyRepositoryFactoryFor('productPS', productstorageRepositoryGetter,);
    this.registerInclusionResolver('productPS', this.productPS.inclusionResolver);
    this.productIO = this.createHasManyRepositoryFactoryFor('productIO', inputoutputRepositoryGetter,);
    this.registerInclusionResolver('productIO', this.productIO.inclusionResolver);
  }
}
