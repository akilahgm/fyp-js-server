import { Module } from '@nestjs/common';

import { DataController } from './data.controller';
import { DataService } from './data.service';
import { DataRepository } from './data.repository';

@Module({
  controllers: [DataController],
  providers: [DataService, DataRepository],
  exports: [DataService, DataRepository],
})
export class DataModule {}
