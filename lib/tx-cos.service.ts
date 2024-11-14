import { Inject, Injectable } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './ts-cos.declare';
import { TxCosModuleOptions } from './types';

/**
 * @publicApi
 */
@Injectable()
export class TxCosService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: TxCosModuleOptions
  ) {
    console.log('options:', options);
  }

  sayHello(): string {
    return '@@@ Hello World!';
  }
}
