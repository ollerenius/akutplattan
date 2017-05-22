import {Component, OnDestroy} from '@angular/core';
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

export class HLRFlowComponent implements OnDestroy {
  private steps: Array<Step>;
  private currentStepIndex : number = 0;
  private jouleText : string;

  /**
   * A constant declaring the maximum number of steps between the current
   * and the last one, i.e. determines when the flow needs to be expanded.
   * @type {number}
   */
  private static MAX_STEP_MARGIN : number = 5;

  constructor(private hlrDosageService : HLRDosageService) {
    let amiodarone : number = hlrDosageService.amiodarone;
    let adrenaline : number = hlrDosageService.adrenaline;
    let compressions  : string = hlrDosageService.compressions;
    this.steps = [
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions),
      new Step(amiodarone, adrenaline, false, "VF/VT_alternative", compressions)
    ];

    this.jouleText = "Defibrillera med en styrka av " + String(hlrDosageService.joule) + " Joule";
  }


<<<<<<< joule_text
  ngOnDestroy() : void {
    this.hlrDosageService.setDefaultAdultDosage(); //Resets the dosage to an adult dose after a flow has been terminated.
=======
  ngOnDestroy(): void {
    this.hlrDosageService.setAdultCPRValues(); //Resets the dosage to an adult dose after a flow has been terminated.
>>>>>>> master
  }

  /**
   * A getter used to tell if the joule data is to be visible.
   * The joule data is only supposed to be visible during children-CPR.
   * @returns {boolean}
   */
  hideJoule() : boolean {
    return (this.hlrDosageService.joule == 0);
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
          if (step.index > this.currentStepIndex){
            step.showBoltPicture = (step.radioModel != "Asystoli/PEA_alternative");
            if ((step.index == 2) || (step.index == 4)) {
              step.showAmiodaroneDose = (step.radioModel != "Asystoli/PEA_alternative");
            }
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
      if (this.currentStepIndex > this.steps.length - HLRFlowComponent.MAX_STEP_MARGIN) {
          let step : Step = new Step(this.hlrDosageService.amiodarone, this.hlrDosageService.adrenaline,
              false, stepEvent.currentAnalysisState, "30:2");
          step.showBoltPicture = step.radioModel != "Asystoli/PEA_alternative";
          this.steps.push(step);
      }
    }
    else if ((stepEvent.stepDirection == 'prev') && (this.currentStepIndex > 0)) {
      this.currentStepIndex--;
    }
  }
}




