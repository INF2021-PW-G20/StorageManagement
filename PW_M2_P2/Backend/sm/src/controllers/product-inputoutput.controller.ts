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
    return this.productRepository.inputoutputs(id).find(filter);
  }

  @post('/products/{id}/inputoutputs', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inputoutput)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inputoutput, {
            title: 'NewInputoutputInProduct',
            exclude: ['id'],
            optional: ['product_id']
          }),
        },
      },
    }) inputoutput: Omit<Inputoutput, 'id'>,
  ): Promise<Inputoutput> {
    return this.productRepository.inputoutputs(id).create(inputoutput);
  }

  @patch('/products/{id}/inputoutputs', {
    responses: {
      '200': {
        description: 'Product.Inputoutput PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inputoutput, {partial: true}),
        },
      },
    })
    inputoutput: Partial<Inputoutput>,
    @param.query.object('where', getWhereSchemaFor(Inputoutput)) where?: Where<Inputoutput>,
  ): Promise<Count> {
    return this.productRepository.inputoutputs(id).patch(inputoutput, where);
  }

  @del('/products/{id}/inputoutputs', {
    responses: {
      '200': {
        description: 'Product.Inputoutput DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Inputoutput)) where?: Where<Inputoutput>,
  ): Promise<Count> {
    return this.productRepository.inputoutputs(id).delete(where);
  }
}
