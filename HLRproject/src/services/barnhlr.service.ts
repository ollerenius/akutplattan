import { Injectable }  from '@angular/core';

/**
 * Contains the values and functions for transferring data between the barnhlr->barnhlrsettings page.
 */
@Injectable()
export class BarnHLRService{
  /**
   * Contains a boolean value corresponding to whether the weight was known or not in the barnhlr->barnhlrsettings navigation.
   */
  isWeightKnown : boolean = false;
}
