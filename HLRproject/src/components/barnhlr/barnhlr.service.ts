import { Injectable }  from '@angular/core';

import { BarnHLRStartComponent } from './../barnhlr/barnhlr.component';
import { BarnHLRSettingsComponent } from './../barnhlrsettings/barnhlrsettings.component';

@Injectable()
export class BarnHLRService{
  getSettings(): boolean {
    return false;
  }
}
