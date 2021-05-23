import {Entity, model, property, hasMany} from '@loopback/repository';
import {Inputoutput} from './inputoutput.model';
import {Productstorage} from './productstorage.model';

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

  @hasMany(() => Inputoutput, {keyTo: 'storage_id'})
  storageIO: Inputoutput[];

  @hasMany(() => Productstorage, {keyTo: 'storage_id'})
  storagesPS: Productstorage[];

  constructor(data?: Partial<Storage>) {
    super(data);
  }
}

export interface StorageRelations {
  // describe navigational properties here
}

export type StorageWithRelations = Storage & StorageRelations;
