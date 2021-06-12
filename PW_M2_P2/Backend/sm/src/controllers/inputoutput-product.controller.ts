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
  Product,
} from '../models';
import {InputoutputRepository} from '../repositories';

export class InputoutputProductController {
  constructor(
    @repository(InputoutputRepository)
    public inputoutputRepository: InputoutputRepository,
  ) { }

  @get('/inputoutputs/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to Inputoutput',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.number('id') id: typeof Inputoutput.prototype.id,
  ): Promise<Product> {
    return this.inputoutputRepository.product(id);
  }
}
