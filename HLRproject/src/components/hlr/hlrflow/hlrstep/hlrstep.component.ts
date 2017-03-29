import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Step} from "../step";

@Component({
  selector: 'hlrstep',
  templateUrl: 'hlrstep.component.html',
  styleUrls: ['hlrstep.component.css']
})
export class HlrstepComponent /*implements OnInit*/{
  // STEP
  @Input() step: Step;
  @Output() changedState:EventEmitter<string> = new EventEmitter();

  changedStateComplete(){
    this.changedState.emit(this.radioModel);
  }

  /*ngOnInit(){
    if(this.step.vf_vt = true){
      this.radioModel = 'VF/VT_alternative';
    }
    else{
      this.radioModel = 'Asystoli/PEA_alternative';
    }
  }*/


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
  public adrenaline: string = 'Adrenalin: ' /*+ this.adrenalineDose.toString()*/ + ' mg';
  public amiodarone: string = 'Amiodarone: ' /*+ this.amiodaroneDose.toString()*/ + ' mg';

  public buttontext: string = 'Adrenalin' + '<br>' + 'Amiodaron';

  public checkModel = {
    adrenaline: false,
    amiodarone: false
  };

  // ANALYSIS BUTTON
  radioModel: string = 'VF/VT_alternative'; //Preexisting choice for the radio button
}
