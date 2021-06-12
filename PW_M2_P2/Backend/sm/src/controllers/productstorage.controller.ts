import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Productstorage} from '../models';
import {ProductstorageRepository} from '../repositories';

export class ProductstorageController {
  constructor(
    @repository(ProductstorageRepository)
    public productstorageRepository : ProductstorageRepository,
  ) {}

  @post('/productstorages')
  @response(200, {
    description: 'Productstorage model instance',
    content: {'application/json': {schema: getModelSchemaRef(Productstorage)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productstorage, {
            title: 'NewProductstorage',
            exclude: ['id'],
          }),
        },
      },
    })
    productstorage: Omit<Productstorage, 'id'>,
  ): Promise<Productstorage> {
    return this.productstorageRepository.create(productstorage);
  }

  @get('/productstorages/count')
  @response(200, {
    description: 'Productstorage model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Productstorage) where?: Where<Productstorage>,
  ): Promise<Count> {
    return this.productstorageRepository.count(where);
  }

  @get('/productstorages')
  @response(200, {
    description: 'Array of Productstorage model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productstorage, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Productstorage) filter?: Filter<Productstorage>,
  ): Promise<Productstorage[]> {
    return this.productstorageRepository.find(filter);
  }

  @patch('/productstorages')
  @response(200, {
    description: 'Productstorage PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productstorage, {partial: true}),
        },
      },
    })
    productstorage: Productstorage,
    @param.where(Productstorage) where?: Where<Productstorage>,
  ): Promise<Count> {
    return this.productstorageRepository.updateAll(productstorage, where);
  }

  @get('/productstorages/{id}')
  @response(200, {
    description: 'Productstorage model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Productstorage, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Productstorage, {exclude: 'where'}) filter?: FilterExcludingWhere<Productstorage>
  ): Promise<Productstorage> {
    return this.productstorageRepository.findById(id, filter);
  }

  @patch('/productstorages/{id}')
  @response(204, {
    description: 'Productstorage PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productstorage, {partial: true}),
        },
      },
    })
    productstorage: Productstorage,
  ): Promise<void> {
    await this.productstorageRepository.updateById(id, productstorage);
  }

  @put('/productstorages/{id}')
  @response(204, {
    description: 'Productstorage PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productstorage: Productstorage,
  ): Promise<void> {
    await this.productstorageRepository.replaceById(id, productstorage);
  }

  @del('/productstorages/{id}')
  @response(204, {
    description: 'Productstorage DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productstorageRepository.deleteById(id);
  }
}
