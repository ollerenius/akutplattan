import { Injectable }  from '@angular/core';
import { BarnHLRStartComponent } from './barnhlr.component';



@Injectable()
export class BarnHLRService{
  getSettings(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
