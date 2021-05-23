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
import {Inputoutput} from '../models';
import {InputoutputRepository} from '../repositories';

export class InputoutputController {
  constructor(
    @repository(InputoutputRepository)
    public inputoutputRepository : InputoutputRepository,
  ) {}

  @post('/inputoutputs')
  @response(200, {
    description: 'Inputoutput model instance',
    content: {'application/json': {schema: getModelSchemaRef(Inputoutput)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inputoutput, {
            title: 'NewInputoutput',
            exclude: ['id'],
          }),
        },
      },
    })
    inputoutput: Omit<Inputoutput, 'id'>,
  ): Promise<Inputoutput> {
    return this.inputoutputRepository.create(inputoutput);
  }

  @get('/inputoutputs/count')
  @response(200, {
    description: 'Inputoutput model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Inputoutput) where?: Where<Inputoutput>,
  ): Promise<Count> {
    return this.inputoutputRepository.count(where);
  }

  @get('/inputoutputs')
  @response(200, {
    description: 'Array of Inputoutput model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Inputoutput, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Inputoutput) filter?: Filter<Inputoutput>,
  ): Promise<Inputoutput[]> {
    return this.inputoutputRepository.find(filter);
  }

  // @patch('/inputoutputs')
  // @response(200, {
  //   description: 'Inputoutput PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Inputoutput, {partial: true}),
  //       },
  //     },
  //   })
  //   inputoutput: Inputoutput,
  //   @param.where(Inputoutput) where?: Where<Inputoutput>,
  // ): Promise<Count> {
  //   return this.inputoutputRepository.updateAll(inputoutput, where);
  // }

  @get('/inputoutputs/{id}')
  @response(200, {
    description: 'Inputoutput model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Inputoutput, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Inputoutput, {exclude: 'where'}) filter?: FilterExcludingWhere<Inputoutput>
  ): Promise<Inputoutput> {
    return this.inputoutputRepository.findById(id, filter);
  }

  @patch('/inputoutputs/{id}')
  @response(204, {
    description: 'Inputoutput PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inputoutput, {partial: true}),
        },
      },
    })
    inputoutput: Inputoutput,
  ): Promise<void> {
    await this.inputoutputRepository.updateById(id, inputoutput);
  }

  @put('/inputoutputs/{id}')
  @response(204, {
    description: 'Inputoutput PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inputoutput: Inputoutput,
  ): Promise<void> {
    await this.inputoutputRepository.replaceById(id, inputoutput);
  }

  @del('/inputoutputs/{id}')
  @response(204, {
    description: 'Inputoutput DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inputoutputRepository.deleteById(id);
  }
}
