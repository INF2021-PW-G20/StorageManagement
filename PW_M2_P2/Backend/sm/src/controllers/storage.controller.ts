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
import {Storage} from '../models';
import {StorageRepository} from '../repositories';

export class StorageController {
  constructor(
    @repository(StorageRepository)
    public storageRepository : StorageRepository,
  ) {}

  @post('/storages')
  @response(200, {
    description: 'Storage model instance',
    content: {'application/json': {schema: getModelSchemaRef(Storage)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Storage, {
            title: 'NewStorage',
            exclude: ['id'],
          }),
        },
      },
    })
    storage: Omit<Storage, 'id'>,
  ): Promise<Storage> {
    return this.storageRepository.create(storage);
  }

  @get('/storages/count')
  @response(200, {
    description: 'Storage model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Storage) where?: Where<Storage>,
  ): Promise<Count> {
    return this.storageRepository.count(where);
  }

  @get('/storages')
  @response(200, {
    description: 'Array of Storage model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Storage, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Storage) filter?: Filter<Storage>,
  ): Promise<Storage[]> {
    return this.storageRepository.find(filter);
  }

  @patch('/storages')
  @response(200, {
    description: 'Storage PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Storage, {partial: true}),
        },
      },
    })
    storage: Storage,
    @param.where(Storage) where?: Where<Storage>,
  ): Promise<Count> {
    return this.storageRepository.updateAll(storage, where);
  }

  @get('/storages/{id}')
  @response(200, {
    description: 'Storage model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Storage, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Storage, {exclude: 'where'}) filter?: FilterExcludingWhere<Storage>
  ): Promise<Storage> {
    return this.storageRepository.findById(id, filter);
  }

  @patch('/storages/{id}')
  @response(204, {
    description: 'Storage PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Storage, {partial: true}),
        },
      },
    })
    storage: Storage,
  ): Promise<void> {
    await this.storageRepository.updateById(id, storage);
  }

  @put('/storages/{id}')
  @response(204, {
    description: 'Storage PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() storage: Storage,
  ): Promise<void> {
    await this.storageRepository.replaceById(id, storage);
  }

  @del('/storages/{id}')
  @response(204, {
    description: 'Storage DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.storageRepository.deleteById(id);
  }
}
