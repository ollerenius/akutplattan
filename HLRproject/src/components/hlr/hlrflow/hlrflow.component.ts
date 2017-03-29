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
      new Step(99, 88, true, true),
      new Step(98, 87, true, true)
    ];
  }

  //TODO: Use this data to change state of future steps
  //TODO: Add to a list
  someMethod(event){
    console.log("HELLO FROM THE EVENT EMITTER");
    console.log(event.toString());
  }
}

/*function changeState() {
  for (let s of this.steps) {
    s.vf_vt = false;
  }
}*/




