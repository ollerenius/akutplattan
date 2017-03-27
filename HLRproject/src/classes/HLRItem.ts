/**
 * Created by daniel on 3/24/17.
 */
interface HLRItemInterface{
  timestamp : string;
  defibrilate : boolean;
  compressions : string;
  information : string;
}

export class HLRItem implements HLRItemInterface{
  timestamp : string;
  defibrilate : boolean;
  compressions : string;
  information : string;

  constructor(timestamp : string, defibrilate : boolean, compressions : string, information : string){
    this.timestamp = timestamp;
    this.defibrilate = defibrilate;
    this.compressions = compressions;
    this.information = information;
  }
}
