import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck} from '@angular/core';
import {Step} from "../step";

@Component({
  selector: 'hlrstep',
  templateUrl: 'hlrstep.component.html',
  styleUrls: ['hlrstep.component.css']
})
export class HlrstepComponent implements OnInit, DoCheck {

  //TODO: Use this information
  @Input() step: Step;
  @Output() changedState:EventEmitter<string> = new EventEmitter();

  changedStateComplete(){
    this.changedState.emit(this.radioModel);
    this.step.vf_vt = false;
  }

  ngOnInit(){
    this.adrenaline = 'Adrenalin: ' + this.step.adrenalineDose.toString() + ' mg';
    this.amiodarone = 'Amiodarone: ' + this.step.amiodaroneDose.toString() + ' mg';
    this.radioModel = this.step.radioModel;
    this.oldRadioModel = this.radioModel;
  }

  ngDoCheck() : void {
    if (this.step.radioModel !== this.oldRadioModel) {
      this.oldRadioModel = this.step.radioModel;
      this.radioModel = this.step.radioModel;
    }
  }

  // BOLT BUTTON
  boltFilledPath: string ='/src/images/bolt-filled-small.png';
  boltOutlinePath: string ='/src/images/bolt-outline-small.png';

  boltFullPath: string = this.boltOutlinePath;
  public boltFilled: boolean = false;

  public changeImage(){
    //TODO: add log and timestamp
    if(this.boltFilled){
      this.boltFullPath = this.boltOutlinePath;
      this.boltFilled = false;
    }
    else{
      this.boltFullPath = this.boltFilledPath;
      this.boltFilled = true;
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
