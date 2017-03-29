import {Component} from '@angular/core';
import {Step} from "./step";

const stepss: Step[] = [
  {amiodaroneDose: 99, adrenalineDose: 88, defibrillate: true, vf_vt: true},
  {amiodaroneDose: 98, adrenalineDose: 87, defibrillate: true, vf_vt: true}
];

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent{
  stepss: Step[];

  constructor() {
    this.stepss = stepss;
  }

}


