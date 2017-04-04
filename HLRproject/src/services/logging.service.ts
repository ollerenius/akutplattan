/**
 * Created by daniel on 3/24/17.
 */

import {Injectable} from "@angular/core";
import {HLRItem, Defibrilate} from "../classes/HLRItem";

@Injectable()
export class LoggingService{
  private hlrItems : HLRItem[];

  constructor(){
    this.hlrItems = [];
  }

  addHLRItem(timestamp : string, defibrilation : Defibrilate, compressions : string, information : string){
    this.hlrItems.push(new HLRItem(timestamp, defibrilation, compressions, information));
  }

  removeLastHLRItem() : HLRItem{
    return this.hlrItems.pop();
  }

  removeHLRItems(){
    while (this.hlrItems.length > 0){
      this.removeLastHLRItem();
    }
  }

  getHLRItems(){
    return this.hlrItems;
  }
}
