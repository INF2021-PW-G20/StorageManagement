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
} from '../models';
import {ProductRepository} from '../repositories';

// export class ProductProductstorageController {
//   constructor(
//     @repository(ProductRepository) protected productRepository: ProductRepository,
//   ) { }

//   @get('/products/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Array of Product has many Productstorage',
//         content: {
//           'application/json': {
//             schema: {type: 'array', items: getModelSchemaRef(Productstorage)},
//           },
//         },
//       },
//     },
//   })
//   async find(
//     @param.path.number('id') id: number,
//     @param.query.object('filter') filter?: Filter<Productstorage>,
//   ): Promise<Productstorage[]> {
//     return this.productRepository.productPS(id).find(filter);
//   }

//   @post('/products/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Product model instance',
//         content: {'application/json': {schema: getModelSchemaRef(Productstorage)}},
//       },
//     },
//   })
//   async create(
//     @param.path.number('id') id: typeof Product.prototype.id,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Productstorage, {
//             title: 'NewProductstorageInProduct',
//             exclude: ['id'],
//             optional: ['product_id']
//           }),
//         },
//       },
//     }) productstorage: Omit<Productstorage, 'id'>,
//   ): Promise<Productstorage> {
//     return this.productRepository.productPS(id).create(productstorage);
//   }

//   @patch('/products/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Product.Productstorage PATCH success count',
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
//     return this.productRepository.productPS(id).patch(productstorage, where);
//   }

//   @del('/products/{id}/productstorages', {
//     responses: {
//       '200': {
//         description: 'Product.Productstorage DELETE success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async delete(
//     @param.path.number('id') id: number,
//     @param.query.object('where', getWhereSchemaFor(Productstorage)) where?: Where<Productstorage>,
//   ): Promise<Count> {
//     return this.productRepository.productPS(id).delete(where);
//   }
// }
