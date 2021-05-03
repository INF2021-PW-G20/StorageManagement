import {Entity, model, property} from '@loopback/repository';

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
    index: {
      unique: true
    }
  })
  corridor: number;

  @property({
    type: 'number',
    required: true,
    index: {
      unique: true
    }
  })
  shelf: number;

  @property({
    type: 'number',
    required: true,
    index: {
      unique: true
    }
  })
  box: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Storage>) {
    super(data);
  }
}

export interface StorageRelations {
  // describe navigational properties here
}

export type StorageWithRelations = Storage & StorageRelations;
