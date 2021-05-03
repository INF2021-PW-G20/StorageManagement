import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations, Inputoutput} from '../models';
import {InputoutputRepository} from './inputoutput.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly productIO: HasManyRepositoryFactory<Inputoutput, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('InputoutputRepository') protected inputoutputRepositoryGetter: Getter<InputoutputRepository>,
  ) {
    super(Product, dataSource);
    this.productIO = this.createHasManyRepositoryFactoryFor('productIO', inputoutputRepositoryGetter,);
    this.registerInclusionResolver('productIO', this.productIO.inclusionResolver);
  }
}
