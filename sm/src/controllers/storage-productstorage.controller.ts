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
  Storage,
  Productstorage,
} from '../models';
import {StorageRepository} from '../repositories';

export class StorageProductstorageController {
  constructor(
    @repository(StorageRepository) protected storageRepository: StorageRepository,
  ) { }

  @get('/storages/{id}/productstorages', {
    responses: {
      '200': {
        description: 'Array of Storage has many Productstorage',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Productstorage)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Productstorage>,
  ): Promise<Productstorage[]> {
    return this.storageRepository.storagesPS(id).find(filter);
  }
}

//   @post('/storages/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Storage model instance',
//         content: {'application/json': {schema: getModelSchemaRef(Productstorage)}},
//       },
//     },
//   })
//   async create(
//     @param.path.number('id') id: typeof Storage.prototype.id,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Productstorage, {
//             title: 'NewProductstorageInStorage',
//             exclude: ['id'],
//             optional: ['storage_id']
//           }),
//         },
//       },
//     }) productstorage: Omit<Productstorage, 'id'>,
//   ): Promise<Productstorage> {
//     return this.storageRepository.storagesPS(id).create(productstorage);
//   }

//   @patch('/storages/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Storage.Productstorage PATCH success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async patch(
//     @param.path.number('id') id: number,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Productstorage, {partial: true}),
//         },
//       },
//     })
//     productstorage: Partial<Productstorage>,
//     @param.query.object('where', getWhereSchemaFor(Productstorage)) where?: Where<Productstorage>,
//   ): Promise<Count> {
//     return this.storageRepository.storagesPS(id).patch(productstorage, where);
//   }

//   @del('/storages/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Storage.Productstorage DELETE success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async delete(
//     @param.path.number('id') id: number,
//     @param.query.object('where', getWhereSchemaFor(Productstorage)) where?: Where<Productstorage>,
//   ): Promise<Count> {
//     return this.storageRepository.storagesPS(id).delete(where);
//   }
// }
