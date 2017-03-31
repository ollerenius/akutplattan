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
  private currentStepIndex : number = 0;
  // TODO: Make this a static variable in the step class?
  private assignIndex : number = 0;

  constructor() {
    this.steps = [
      new Step(99, 88, true, true, "VF/VT_alternative", this.assignIndex++),
      new Step(98, 87, true, true, "VF/VT_alternative", this.assignIndex++),
      new Step(98, 87, true, true, "VF/VT_alternative", this.assignIndex++)
    ];
  }

  /**
   * Current solution: once a change is triggered from the current step
   * (every instance of the HLR Step component must check if it is the
   *  current one before triggering) this method goes to the next step. It also changes the state of all the
   * remaining steps but does not touch the previous ones.
   */
  changeAnalysisState(event) {
    for (let step of this.steps) {
      if (step.index >= this.currentStepIndex) {
        step.radioModel = event;
      }
      // Go to next step
      step.currentStepIndex = this.currentStepIndex + 1;
    }
    this.currentStepIndex++;
  }
}

/*function changeState() {
  for (let s of this.steps) {
    s.vf_vt = false;
  }
}*/




