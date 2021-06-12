import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Inputoutput, InputoutputRelations, Storage, Product} from '../models';
import {StorageRepository} from './storage.repository';
import {ProductRepository} from './product.repository';

export class InputoutputRepository extends DefaultCrudRepository<
  Inputoutput,
  typeof Inputoutput.prototype.id,
  InputoutputRelations
> {

  public readonly storage: BelongsToAccessor<Storage, typeof Inputoutput.prototype.id>;

  public readonly product: BelongsToAccessor<Product, typeof Inputoutput.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('StorageRepository') protected storageRepositoryGetter: Getter<StorageRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Inputoutput, dataSource);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
    this.storage = this.createBelongsToAccessorFor('storage', storageRepositoryGetter,);
    this.registerInclusionResolver('storage', this.storage.inclusionResolver);
  }
}
