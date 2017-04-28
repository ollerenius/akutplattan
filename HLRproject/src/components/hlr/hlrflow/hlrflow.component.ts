import {Component} from '@angular/core';
import {Step} from "./step";
import {HLRDosageService} from "../../../services/hlrdosage.service";

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent{
  steps: Array<Step>;
  private currentStepIndex : number = 0;

  constructor(private hlrDosageService : HLRDosageService) {
    let amiodarone : number = hlrDosageService.amiodarone;
    let adrenaline : number = hlrDosageService.adrenaline;
    this.steps = [
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2')
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




