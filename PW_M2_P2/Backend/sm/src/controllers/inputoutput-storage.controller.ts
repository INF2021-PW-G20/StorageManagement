import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inputoutput,
  Storage,
} from '../models';
import {InputoutputRepository} from '../repositories';

export class InputoutputStorageController {
  constructor(
    @repository(InputoutputRepository)
    public inputoutputRepository: InputoutputRepository,
  ) { }

  @get('/inputoutputs/{id}/storage', {
    responses: {
      '200': {
        description: 'Storage belonging to Inputoutput',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Storage)},
          },
        },
      },
    },
  })
  async getStorage(
    @param.path.number('id') id: typeof Inputoutput.prototype.id,
  ): Promise<Storage> {
    return this.inputoutputRepository.storage(id);
  }
}
