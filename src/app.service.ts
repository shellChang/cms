import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    
    return {
      "name": "Chris",
      "value": 10000,
      "taxed_value": 10000 - (10000 * 0.4),
      "in_ca": true
    };
  }
}
