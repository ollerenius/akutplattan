import {Component} from '@angular/core';
import {Step} from "./step";
import {HLRStepAttributes} from "../../../classes/HLRStepAttributes";

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent {
  steps: Array<Step>;
  private currentStepIndex: number = 0;

  constructor() {
    this.steps = [
      new Step(99, 88, false, "VF/VT_alternative", '30:2'),
      new Step(98, 87, false, "VF/VT_alternative", '30:2'),
      new Step(98, 87, false, "VF/VT_alternative", '30:2'),
      new Step(98, 87, false, "VF/VT_alternative", '30:2'),
      new Step(98, 87, false, "VF/VT_alternative", '30:2')
    ];
  }

  /**
   * Current solution: once a change is triggered from the current step
   * (every instance of the HLR Step component must check if it is the
   *  current one before triggering) this method goes to the next step.
   */

  /**
   * Updates the currentStepIndex and upcoming analysis step to reflect the properties in the current step,
   * depending on whether the stepDirection is 'next' or 'prev'.
   * @param stepEvent : HLRStepAttributes The event data related to the current step triggering the event.
   */
  changeStep(stepEvent: HLRStepAttributes) : void{
    for (let step of this.steps) {
      if ((step.index >= this.currentStepIndex) && (stepEvent.stepDirection == 'next')) {
          step.radioModel = stepEvent.currentAnalysisState;
      }
      if(stepEvent.stepDirection == 'next'){
        step.currentStepIndex = this.currentStepIndex + 1;
      }
      else if((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)){
        step.currentStepIndex = this.currentStepIndex - 1;
      }
    }
    if (stepEvent.stepDirection == 'next') {
      this.currentStepIndex++;
    }
    else if ((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)) {
      this.currentStepIndex--;
    }
  }
}

