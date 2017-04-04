/**
 * Created by daniel on 3/24/17.
 */
interface HLRItemInterface{
  timestamp : string;
  defibrilate : Defibrilate;
  compressions : string;
  information : string;
}

export enum Defibrilate{
  FALSE = 0,
  TRUE = 1,
  NONE = -1
}

export class HLRItem implements HLRItemInterface{
  timestamp : string;
  defibrilate : Defibrilate;
  compressions : string;
  information : string;

  constructor(timestamp : string, defibrilate : Defibrilate, compressions : string, information : string){
    this.timestamp = timestamp;
    this.defibrilate = defibrilate;
    this.compressions = compressions;
    this.information = information;
  }
}
