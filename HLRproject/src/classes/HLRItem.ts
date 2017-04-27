/**
 * Created by daniel on 3/24/17.
 *
 * Contains necessary classes, enums and interfaces for the HLRItem, which is an item that is used to keep information for the log.
 */

/**
 * Defines what variables that an HLRItem must contain.
 */
interface HLRItemInterface{
  timestamp : string;
  defibrilate : Defibrilate;
  compressions : string;
  information : string;
}

/**
 * The different states that a defibrilation can be in for each HLRItem.
 * FALSE - Defibrilation is not done.
 * TRUE - Defibrilation has been done.
 * NONE - There is no defibrilation possibility.
 */
export enum Defibrilate{
  FALSE = 0,
  TRUE = 1,
  NONE = -1
}

/**
 * Each instance of an HLRItem corresponds to a log event. Each object can be displayed as a row in the log.
 */
export class HLRItem implements HLRItemInterface{
  timestamp : string;
  defibrilate : Defibrilate;
  compressions : string;
  information : string;
  ruler : boolean;

  constructor(timestamp : string, defibrilate : Defibrilate, compressions : string, information : string, ruler : boolean){
    this.timestamp = timestamp;
    this.defibrilate = defibrilate;
    this.compressions = compressions;
    this.information = information;
    this.ruler = ruler;
  }
}
