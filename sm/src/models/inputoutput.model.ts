import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'number',
  })
  storage_id?: number;

  @property({
    type: 'number',
  })
  product_id?: number;

  constructor(data?: Partial<Inputoutput>) {
    super(data);
  }
}

export interface InputoutputRelations {
  // describe navigational properties here
}

export type InputoutputWithRelations = Inputoutput & InputoutputRelations;
