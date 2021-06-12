import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Product,
Productstorage,
Storage,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductStorageController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/storages', {
    responses: {
      '200': {
        description: 'Array of Product has many Storage through Productstorage',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Storage)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Storage>,
  ): Promise<Storage[]> {
    return this.productRepository.storages(id).find(filter);
  }

  @post('/products/{id}/storages', {
    responses: {
      '200': {
        description: 'create a Storage model instance',
        content: {'application/json': {schema: getModelSchemaRef(Storage)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Storage, {
            title: 'NewStorageInProduct',
            exclude: ['id'],
          }),
        },
      },
    }) storage: Omit<Storage, 'id'>,
  ): Promise<Storage> {
    return this.productRepository.storages(id).create(storage);
  }

  @patch('/products/{id}/storages', {
    responses: {
      '200': {
        description: 'Product.Storage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Storage, {partial: true}),
        },
      },
    })
    storage: Partial<Storage>,
    @param.query.object('where', getWhereSchemaFor(Storage)) where?: Where<Storage>,
  ): Promise<Count> {
    return this.productRepository.storages(id).patch(storage, where);
  }

  @del('/products/{id}/storages', {
    responses: {
      '200': {
        description: 'Product.Storage DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Storage)) where?: Where<Storage>,
  ): Promise<Count> {
    return this.productRepository.storages(id).delete(where);
  }
}
