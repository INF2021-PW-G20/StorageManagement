import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';
import {Productstorage} from './productstorage.model';
import {Inputoutput} from './inputoutput.model';

@model()
export class Storage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  corridor: number;

  @property({
    type: 'number',
    required: true,
  })
  shelf: number;

  @property({
    type: 'number',
    required: true,
  })
  box: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Product, {through: {model: () => Productstorage, keyFrom: 'storage_id', keyTo: 'product_id'}})
  products: Product[];

  @hasMany(() => Inputoutput, {keyTo: 'storage_id'})
  inputoutputs: Inputoutput[];

  constructor(data?: Partial<Storage>) {
    super(data);
  }
}

export interface StorageRelations {
  // describe navigational properties here
}

export type StorageWithRelations = Storage & StorageRelations;
