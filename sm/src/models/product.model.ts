import {Entity, model, property, hasMany} from '@loopback/repository';
import {Inputoutput} from './inputoutput.model';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    required: true,
  })
  uprice: number;

  @property({
    type: 'number',
    default: 0,
  })
  stock?: number;

  @hasMany(() => Inputoutput)
  productIO: Inputoutput[];

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
