import { Injectable }  from '@angular/core';

/**
 * Contains the values and functions for transferring data between the barnhlr->barnhlrsettings page.
 */
@Injectable()
export class BarnHLRService{
  //TODO: Names to be changed, functions to be added.

  /**
   * Contains a boolean value corresponding to whether the weight was known or not in the barnhlr->barnhlrsettings navigation.
   */
  bool_val : boolean;
  /**
   * The estimated weight of the person, to be set by the barnhlrsettings step.
   */
  weight : number;
}
