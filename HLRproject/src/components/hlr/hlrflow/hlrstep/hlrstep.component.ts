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
export class HlrstepComponent implements OnInit, DoCheck {

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
  changeAnalysisStatesNotifier(){
    // Check if this is the currently active step in the flow
    if (this.step.currentStepIndex == this.step.index) {
      this.analysisNotifierEmitter.emit(this.radioModel);
      this.addToLog(this.getStringFromAnalysisButton());
    }

  }

  addToLog(information : string){
    this.loggingService.addHLRItem(this.timerService.currentTimeString, this.step.defibrilate ? Defibrilate.TRUE : Defibrilate.FALSE , "TODO", information);
  }

  getStringFromAnalysisButton(){
    let str_button : string = this.step.radioModel.toString();
    switch(str_button){
      case "VF/VT_alternative":
        return "Ändrade nästkommande steg till VF/VT";
      case "Asystoli/PEA_alternative":
        return "Ändrade nästkommande steg till Asystoli/PEA";
      default:
        return "ERROR: Nostate detected.";
    }
  }

  pressedMedicineButton(medicineString : string){
    switch(medicineString){
      case "adrenaline":
          this.addToLog(this.adrenaline);
        break;
      case "amiodarone":
        this.addToLog(this.amiodarone);
        break;
    }
  }


  ngOnInit(){
    this.adrenaline = 'Adrenalin: ' + this.step.adrenalineDose.toString() + ' mg';
    this.amiodarone = 'Amiodarone: ' + this.step.amiodaroneDose.toString() + ' mg';
    this.radioModel = this.step.radioModel;
    this.oldRadioModel = this.radioModel;
  }

  ngDoCheck() : void {
    if (this.step.radioModel != this.oldRadioModel) {
      this.oldRadioModel = this.step.radioModel;
      this.radioModel = this.step.radioModel;
    }
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

  public changeImage(){
    //TODO: add log and timestamp
    if(this.step.defibrilate){
      //Test
      this.boltFullPath = this.boltOutlinePath;
      this.step.defibrilate = false;
      //TODO: Add a CSS attribute instead of depec. font to do this!
      this.addToLog("Defibrilering ångrad!")
    }
    else{
      this.boltFullPath = this.boltFilledPath;
      this.step.defibrilate = true;
      this.addToLog("Defibrilering utförd!")
    }
  }

  //HEART MASSAGE
  //TODO: add functionality for changing text depending on patient.
  public heartMassageAdult: string = '30:2 <br> 2 min';
  public heartMassageChild: string = '15:2 <br> 2 min';

  //MEDICINE BUTTON
  //TODO: add checkboxes to popover, discuss with group
  public adrenaline: string;
  public amiodarone: string;

  public buttontext: string = 'Adrenalin' + '<br>' + 'Amiodaron';

  public checkModel = {
    adrenaline: false,
    amiodarone: false
  };

  // ANALYSIS BUTTON
  radioModel: string;
  oldRadioModel : string;
}
