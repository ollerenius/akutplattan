import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import {Step} from "../step";
import {LoggingService} from "../../../../services/logging.service";
import {TimerService} from "../../../../services/timer.service";
import {Defibrilate, Ruler} from "../../../../classes/HLRItem";
import {HLRStepAttributes} from "../../../../classes/HLRStepAttributes";
import {CheckboxData} from "../../../../classes/CheckboxData";

@Component({
  selector: 'hlrstep',
  templateUrl: 'hlrstep.component.html',
  styleUrls: ['hlrstep.component.css']
})
export class HlrstepComponent implements OnInit {

  public adrenaline: CheckboxData;
  public amiodarone: CheckboxData;

  @Input() step: Step;
  @Output() changeStepNotifierEmitter:EventEmitter<HLRStepAttributes> = new EventEmitter<HLRStepAttributes>();

  constructor(private loggingService : LoggingService, private timerService : TimerService){
  }

  /**
   * This method is called when the 'next' or 'previous' button is pressed.
   * If this step is the currently active one (as specified by Step.currentStepIndex)
   * it will emit a message to the parent component. If not, it will do nothing.
   */
  changeStepNotifier(stepDirection: string) : void {
    let hlrStepAttributes = new HLRStepAttributes(stepDirection, this.step.radioModel);

    if (this.step.currentStepIndex == this.step.index) {
     this.changeStepNotifierEmitter.emit(hlrStepAttributes);

      if (stepDirection == 'next') {
        this.addToLog("Fortsatte till nästa steg i tillstånd " +
          this.getStringFromAnalysisButton(), Defibrilate.NONE, Ruler.HLRSTEP);
      }

      else if ((stepDirection == 'prev') && (this.step.index != 0)) {
        this.addToLog("Backade till föregående steg!", Defibrilate.NONE, Ruler.HLRSTEP);

      }
    }
  }


  addToLog(information : string, defibrilate : Defibrilate, ruler : Ruler) : void {
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
        logString += this.adrenaline.name;
        break;
      case "amiodarone":
        logString += this.amiodarone.name;
        break;
      default:
        logString += "ERROR";
        break;
    }

    if(state){
      logString += " har administrerats."
    }
    else{
      logString += " har ångrats."
    }
    this.addToLog(logString, Defibrilate.NONE, Ruler.NONE);
  }

  changeImage() : void {
    if(this.step.defibrilate){
      this.boltFullPath = this.boltOutlinePath;
      this.step.defibrilate = false;
      this.addToLog("Defibrilering ångrad!", Defibrilate.FALSE, Ruler.NONE)
    }
    else{
      this.boltFullPath = this.boltFilledPath;
      this.step.defibrilate = true;
      this.addToLog("Defibrilering utförd!", Defibrilate.TRUE, Ruler.NONE)
    }
  }

  ngOnInit() : void {
    this.adrenaline = new CheckboxData('Adrenalin: ' + this.step.adrenalineDose.toString() + ' mg', false);
    this.amiodarone = new CheckboxData('Amiodarone: ' + this.step.amiodaroneDose.toString() + ' mg', false);
  }


  // BOLT BUTTON
  boltFilledPath: string ='../../../../assets/images/bolt-filled-small.png';
  boltOutlinePath: string ='../../../../assets/images/bolt-outline-small.png';

  boltFullPath: string = this.boltOutlinePath;


}

