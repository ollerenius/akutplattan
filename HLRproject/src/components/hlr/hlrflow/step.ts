export class Step{
  amiodaroneDose: number;
  adrenalineDose: number;
  defibrillate: boolean;
  vf_vt: boolean;

  constructor(amiDose: number, adDose: number, def: boolean, vf_vt: boolean){
    this.adrenalineDose = adDose;
    this.amiodaroneDose = amiDose;
    this.defibrillate = def;
    this.vf_vt = vf_vt;
  }
}
