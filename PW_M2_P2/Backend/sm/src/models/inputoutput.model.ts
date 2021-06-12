import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Storage} from './storage.model';
import {Product} from './product.model';

@model()
export class Inputoutput extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date_time: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  operation: number;

  @belongsTo(() => Storage, {name: 'storage'})
  storage_id: number;

  @belongsTo(() => Product, {name: 'product'})
  product_id: number;

  constructor(data?: Partial<Inputoutput>) {
    super(data);
  }
}

export interface InputoutputRelations {
  // describe navigational properties here
}

export type InputoutputWithRelations = Inputoutput & InputoutputRelations;
