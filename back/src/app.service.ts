import { Injectable } from '@nestjs/common';

import config from './config';
@Injectable()
export class AppService {
  constructor() {}

  getHello(): string {
    return `Hello World!`;
  }
}
