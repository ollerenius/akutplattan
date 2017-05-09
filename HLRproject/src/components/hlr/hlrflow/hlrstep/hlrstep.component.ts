import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import {Step} from "../step";
import {LoggingService} from "../../../../services/logging.service";
import {TimerService} from "../../../../services/timer.service";
import {Defibrilate} from "../../../../classes/HLRItem";
import {HLRStepAttributes} from "../../../../classes/HLRStepAttributes";
import {CheckboxData} from "../../../../classes/CheckboxData";

@Component({
  selector: 'hlrstep',
  templateUrl: 'hlrstep.component.html',
  styleUrls: ['hlrstep.component.css']
})
export class HlrstepComponent implements OnInit {
  //MEDICINE BUTTON
  //TODO: add checkboxes to popover, discuss with group

  public adrenaline: CheckboxData;
  public amiodarone: CheckboxData;

  public checkModel = {
    adrenaline: false,
    amiodarone: false
  };


  @Input() step: Step;
  @Output() changeStepNotifierEmitter:EventEmitter<HLRStepAttributes> = new EventEmitter<HLRStepAttributes>();

  constructor(private loggingService : LoggingService, private timerService : TimerService){
  }

  /**
   * This method is called when the 'next' or 'previous' button is pressed.
   * If this step is the currently active one (as specified by Step.currentStepIndex)
   * it will emit a message to the parent component. This action is also transferred to the logging service.
   * @param stepDirection : string 'next' or 'prev' depending on what button was pressed.
   */
  changeStepNotifier(stepDirection: string) : void {
    let hlrStepAttributes = new HLRStepAttributes(stepDirection, this.step.radioModel);

    if (this.step.currentStepIndex == this.step.index) {
     this.changeStepNotifierEmitter.emit(hlrStepAttributes);

      if (stepDirection == 'next') {
        this.addToLog("Fortsatte till nästa steg i tillstånd " +
          this.getStringFromAnalysisButton(), Defibrilate.NONE, true);
      }

      else if ((stepDirection == 'prev') && (this.step.index != 0)) {
        this.addToLog("Backade till föregående steg!", Defibrilate.NONE, true);

      }
    }
  }


  addToLog(information : string, defibrilate : Defibrilate, ruler : boolean) : void {
    this.loggingService.addHLRItem(this.timerService.currentTimeString, defibrilate , this.step.heartMassage, information, ruler);
  }

  getStringFromAnalysisButton() : string {
    let str_button : string = this.step.radioModel.toString();
    switch(str_button){
      case "VF/VT_alternative":
        return "VF/VT";
      case "Asystoli/PEA_alternative":
        return "Asystoli/PEA";
      default:
        console.log("Alternative not defined - getStringFromAnalysisButton")
        return "not defined";
    }
  }

  pressedMedicineButton(medicineString : string, state : boolean) : void {
    let logString : string = "";
    switch(medicineString){
      case "adrenaline":
        logString += this.adrenaline;
        break;
      case "amiodarone":
        logString += this.amiodarone;
        break;
      default:
        logString += "ERROR";
        break;
    }
    //Inverted as we go from state -> !state during this click.
    if(state){
      logString += " har administrerats."
    }
    else{
      //TODO: Annan formulering?
      logString += " har ångrats."
    }
    this.addToLog(logString, Defibrilate.NONE, false);
  }


  ngOnInit() : void {
    this.adrenaline = new CheckboxData('Adrenalin: ' + this.step.adrenalineDose.toString() + ' ml', false);
    this.amiodarone = new CheckboxData('Amiodarone: ' + this.step.amiodaroneDose.toString() + ' ml', false);
  }


  // BOLT BUTTON
  boltFilledPath: string ='../../../../assets/images/bolt-filled-small.png';
  boltOutlinePath: string ='../../../../assets/images/bolt-outline-small.png';

  boltFullPath: string = this.boltOutlinePath;

  public changeImage() : void {
    //TODO: add log and timestamp
    if(this.step.defibrilate){
      //Test
      this.boltFullPath = this.boltOutlinePath;
      this.step.defibrilate = false;
      //TODO: Add a CSS attribute instead of depec. font to do this!
      this.addToLog("Defibrilering ångrad!", Defibrilate.FALSE, false)
    }
    else{
      this.boltFullPath = this.boltFilledPath;
      this.step.defibrilate = true;
      this.addToLog("Defibrilering utförd!", Defibrilate.TRUE, false)
    }
  }
}
