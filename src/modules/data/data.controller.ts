'use strict';

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Body,
  Post,
  Delete,
  Param,
  HttpException,
  Query,
} from '@nestjs/common';

import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('claim')
  @HttpCode(HttpStatus.OK)
  claimExchange(@Query() params: any): any {
    return this.dataService.claimExchange(params.id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getData(): any {
    return this.dataService.getData();
  }

  @Get('exchange')
  @HttpCode(HttpStatus.OK)
  getExchange(@Query() params: any): any {
    return this.dataService.getExchange(params.id);
  }
}
