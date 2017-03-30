import {Component} from '@angular/core';
import {Step} from "./step";
//import {HlrstepComponent} from "./hlrstep/hlrstep.component";

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
  //directives: [HlrstepComponent] ???
})

export class HLRFlowComponent{
  steps: Array<Step>;

  constructor() {
    this.steps = [
      new Step(99, 88, true, true, "VF/VT_alternative"),
      new Step(98, 87, true, true, "VF/VT_alternative")
    ];
  }

  //TODO: Use this data to change state of future steps
  //TODO: Add to a list
  someMethod(event) {
    for (let step of this.steps) {
      step.radioModel = event;
    }
  }
}

/*function changeState() {
  for (let s of this.steps) {
    s.vf_vt = false;
  }
}*/




