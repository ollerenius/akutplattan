import { Component } from '@angular/core';

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent {
  step1: Step = new Step(500,500,true,true);
  steps: Step[];
}

class Step{
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

  printStep(){
    return 'adrenaline: ' + this.adrenalineDose.toString() + ' amiodarone: ' + this.amiodaroneDose.toString();
  }
}
