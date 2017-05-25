/**
 * Created by daniel on 3/24/17.
 */

import {Injectable} from "@angular/core";
import {HLRItem, Defibrilate, Ruler} from "../classes/HLRItem";


/**
 * Service used for adding and keeping track of HLRItem objects that are to be displayed in the log.
 * Each HLRItem represents a single row in the log.
 */
@Injectable()
export class LoggingService{
  private hlrItems : HLRItem[];

  constructor(){
    this.hlrItems = [];
  }

  /**
   * Creates and adds a new HLRItem object to the array which this service keeps internally.
   * @param timestamp : string The exact time in minutes:seconds in which the HLRItem where triggered, from when a HLR-flow was initiated.
   * @param defibrilation : Defibrilate The state in which the defibrilation-icon will appear in the log.
   * @param compressions : string The compression ratio to be displayed in the log.
   * @param information : string Additional information to be displayed for this item in the log.
   * @param ruler : Ruler The ruler type to display in the log for this HLR-item.
   */
  addHLRItem(timestamp : string, defibrilation : Defibrilate, compressions : string, information : string, ruler : Ruler){
    this.hlrItems.push(new HLRItem(timestamp, defibrilation, compressions, information, ruler));
  }

  /**
   * Help function that removes the last added entry to the the internal array.
   * @returns {undefined|HLRItem} The last added HLRItem in the internal array.
   */
  removeLastHLRItem() : HLRItem{
    return this.hlrItems.pop();
  }

  /**
   * Empties the internal list for the logging service.
   */
  removeHLRItems(){
    while (this.hlrItems.length > 0){
      this.removeLastHLRItem();
    }
  }

  /**
   *
   * @returns {HLRItem[]} The list which is currently in the logging service.
   */
  getHLRItems(){
    return this.hlrItems;
  }
}
