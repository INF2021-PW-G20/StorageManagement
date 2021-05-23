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
  Inputoutput,
} from '../models';
import {StorageRepository} from '../repositories';

// export class StorageInputoutputController {
//   constructor(
//     @repository(StorageRepository) protected storageRepository: StorageRepository,
//   ) { }

//   @get('/storages/{id}/inputoutputs', {
//     responses: {
//       '200': {
//         description: 'Array of Storage has many Inputoutput',
//         content: {
//           'application/json': {
//             schema: {type: 'array', items: getModelSchemaRef(Inputoutput)},
//           },
//         },
//       },
//     },
//   })
//   async find(
//     @param.path.number('id') id: number,
//     @param.query.object('filter') filter?: Filter<Inputoutput>,
//   ): Promise<Inputoutput[]> {
//     return this.storageRepository.storageIO(id).find(filter);
//   }

//   @post('/storages/{id}/inputoutputs', {
//     responses: {
//       '200': {
//         description: 'Storage model instance',
//         content: {'application/json': {schema: getModelSchemaRef(Inputoutput)}},
//       },
//     },
//   })
//   async create(
//     @param.path.number('id') id: typeof Storage.prototype.id,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Inputoutput, {
//             title: 'NewInputoutputInStorage',
//             exclude: ['id'],
//             optional: ['storage_id']
//           }),
//         },
//       },
//     }) inputoutput: Omit<Inputoutput, 'id'>,
//   ): Promise<Inputoutput> {
//     return this.storageRepository.storageIO(id).create(inputoutput);
//   }

//   @patch('/storages/{id}/inputoutputs', {
//     responses: {
//       '200': {
//         description: 'Storage.Inputoutput PATCH success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async patch(
//     @param.path.number('id') id: number,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Inputoutput, {partial: true}),
//         },
//       },
//     })
//     inputoutput: Partial<Inputoutput>,
//     @param.query.object('where', getWhereSchemaFor(Inputoutput)) where?: Where<Inputoutput>,
//   ): Promise<Count> {
//     return this.storageRepository.storageIO(id).patch(inputoutput, where);
//   }

//   @del('/storages/{id}/inputoutputs', {
//     responses: {
//       '200': {
//         description: 'Storage.Inputoutput DELETE success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async delete(
//     @param.path.number('id') id: number,
//     @param.query.object('where', getWhereSchemaFor(Inputoutput)) where?: Where<Inputoutput>,
//   ): Promise<Count> {
//     return this.storageRepository.storageIO(id).delete(where);
//   }
// }
