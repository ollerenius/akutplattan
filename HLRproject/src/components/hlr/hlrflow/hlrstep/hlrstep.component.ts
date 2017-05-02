import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import {Step} from "../step";
import {LoggingService} from "../../../../services/logging.service";
import {TimerService} from "../../../../services/timer.service";
import {Defibrilate} from "../../../../classes/HLRItem";

@Component({
  selector: 'hlrstep',
  templateUrl: 'hlrstep.component.html',
  styleUrls: ['hlrstep.component.css']
})
export class HlrstepComponent implements OnInit {
  //MEDICINE BUTTON
  //TODO: add checkboxes to popover, discuss with group
  public adrenaline: string;
  public amiodarone: string;

  public buttontext: string = 'Adrenalin' + '<br>' + 'Amiodaron';

  public checkModel = {
    adrenaline: false,
    amiodarone: false
  };

  // NEXT BUTTON
  nextStep: boolean = false;

  //TODO: Use this information
  @Input() step: Step;
  @Output() analysisNotifierEmitter:EventEmitter<string> = new EventEmitter();

  constructor(private loggingService : LoggingService, private timerService : TimerService){
  }

  /**
   * This method is called when an analysis button is pressed ('VF/VT' or 'Asystoli')
   * If this step is the currently active one (as specified by Step.currentStepIndex)
   * it will emit a message to the parent component. If not, it will do nothing.
   * TODO: The button still changes color even if it has no effect. Make it so that
   * TODO: only the currently active step can be modified by the user.
   * TODO: This is probably best achieved in the HTML file.
   * TODO: Idea: maybe move the currentStepIndex check to the HTML file completely?
   */
  changeAnalysisStatesNotifier() : void {
    // Check if this is the currently active step in the flow

    if (this.step.currentStepIndex == this.step.index) {
      this.analysisNotifierEmitter.emit(this.step.radioModel);
      this.addToLog("Fortsatte till nästa steg i tillstånd " +
        this.getStringFromAnalysisButton(), Defibrilate.NONE, true);
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
    this.adrenaline = 'Adrenalin: ' + this.step.adrenalineDose.toString() + ' ml';
    this.amiodarone = 'Amiodarone: ' + this.step.amiodaroneDose.toString() + ' ml';
  }


  /**
   * This method specifies whether the border of the current step should
   * be colored or not. If the index of this step equals the current index,
   * the border will be set to red; otherwise null.
   * It is called from the HTML file.
   * @returns {string}
   */
  getBorder() : string {
    if (this.step.currentStepIndex == this.step.index) {
      return "2px solid red";
    }
    return "";
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
