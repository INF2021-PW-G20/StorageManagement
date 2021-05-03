import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Inputoutput, InputoutputRelations} from '../models';

export class InputoutputRepository extends DefaultCrudRepository<
  Inputoutput,
  typeof Inputoutput.prototype.id,
  InputoutputRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Inputoutput, dataSource);
  }
}
