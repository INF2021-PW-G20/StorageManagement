import {Entity, model, property} from '@loopback/repository';

@model()
export class Productstorage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  product_id?: number;

  @property({
    type: 'number',
  })
  storage_id?: number;

  constructor(data?: Partial<Productstorage>) {
    super(data);
  }
}

export interface ProductstorageRelations {
  // describe navigational properties here
}

export type ProductstorageWithRelations = Productstorage & ProductstorageRelations;
