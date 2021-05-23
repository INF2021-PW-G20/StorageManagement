import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  requestBody,
} from '@loopback/rest';
import {
  Product,
  Inputoutput,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductInputoutputController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/inputoutputs', {
    responses: {
      '200': {
        description: 'Array of Product has many Inputoutput',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inputoutput)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Inputoutput>,
  ): Promise<Inputoutput[]> {
    return this.productRepository.productIO(id).find(filter);
  }
}

  // @patch('/products/{id}/inputoutputs', {
  //   responses: {
  //     '200': {
  //       description: 'Product.Inputoutput PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async patch(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Inputoutput, {partial: true}),
  //       },
  //     },
  //   })
  //   inputoutput: Partial<Inputoutput>,
  //   @param.query.object('where', getWhereSchemaFor(Inputoutput)) where?: Where<Inputoutput>,
  // ): Promise<Count> {
  //   return this.productRepository.productIO(id).patch(inputoutput, where);
  // }
