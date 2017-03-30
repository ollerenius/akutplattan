export class Step{
  amiodaroneDose: number;
  adrenalineDose: number;
  defibrillate: boolean;
  vf_vt: boolean;
  radioModel: string;

  constructor(amiDose: number, adDose: number, def: boolean, vf_vt: boolean, radioModel: string){
    this.adrenalineDose = adDose;
    this.amiodaroneDose = amiDose;
    this.defibrillate = def;
    this.vf_vt = vf_vt;
    this.radioModel = radioModel;
  }
}
