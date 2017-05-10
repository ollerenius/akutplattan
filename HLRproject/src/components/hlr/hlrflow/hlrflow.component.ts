import {Component} from '@angular/core';
import {Step} from "./step";
import {HLRStepAttributes} from "../../../classes/HLRStepAttributes";
import {HLRDosageService} from "../../../services/hlrdosage.service";

declare var window : any;
declare var document : any;

@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent {
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
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", '30:2'),
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
   *  current one before triggering) this method goes to the next step.
   */

  /**
   * Updates the currentStepIndex and upcoming analysis step to reflect the properties in the current step,
   * depending on whether the stepDirection is 'next' or 'prev'.
   * @param stepEvent : HLRStepAttributes The event data related to the current step triggering the event.
   */
  changeStep(stepEvent: HLRStepAttributes) : void {
    for (let step of this.steps) {
      if ((step.index >= this.currentStepIndex) && (stepEvent.stepDirection == 'next')) {
          step.radioModel = stepEvent.currentAnalysisState;
          if(step.index > this.currentStepIndex){
            step.showBoltPicture = step.radioModel != "Asystoli/PEA_alternative";
          }

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
      // Add a new step
      this.steps.push(
        new Step(this.hlrDosageService.amiodarone, this.hlrDosageService.adrenaline,
          false, stepEvent.currentAnalysisState, "30:2"));
    }
    else if ((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)) {
      this.currentStepIndex--;
    }
    /*
    var myElement = document.getElementById("step5");
    var scrollPos = myElement.offsetWidth;
    document.getElementById("flow").scrollWidth = scrollPos;*/
  }
}




