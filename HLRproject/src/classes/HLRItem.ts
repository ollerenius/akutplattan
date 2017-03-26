/**
 * Created by daniel on 3/24/17.
 */
interface HLRItemInterface{
  timestamp : string;
  hlrState : boolean;
  compressions : string;
  information : string;
}

export class HLRItem implements HLRItemInterface{
  timestamp : string;
  hlrState : boolean;
  compressions : string;
  information : string;

  constructor(timestamp : string, hlrState : boolean, compressions : string, information : string){
    this.timestamp = timestamp;
    this.hlrState = hlrState;
    this.compressions = compressions;
    this.information = information;
  }
}
