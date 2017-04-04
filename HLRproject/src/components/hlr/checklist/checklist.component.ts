/**
 * Created by Kim on 2017-03-21.
 */
import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../../services/logging.service";
import {TimerService} from "../../../services/timer.service";
import {Defibrilate} from "../../../classes/HLRItem";
import {CheckboxData} from "../../../classes/CheckboxData";

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  //Contains the rows of checkboxes that we want to place in the html.
  checkboxRows : CheckboxData[][] = [];
  checkboxDataList : CheckboxData[] = [];

  //TODO: make fancy checkboxes
  public title: string = 'Checklist';
  constructor(private timerService : TimerService, private loggingService : LoggingService){
  }

  ngOnInit(){
    this.setupCheckboxes();
    this.setupCheckboxRows();
  }

  //Setups the checkbox rows that are looped through in the .html file.
  setupCheckboxRows(){
    const elementsPerRow : number = 3;
    let currentElementInRow : number = 0;
    let nextRow : CheckboxData[] = [];

    for(let i : number = 0; i < this.checkboxDataList.length; i++){
      if(currentElementInRow >= elementsPerRow){
        this.checkboxRows.push(nextRow);
        nextRow = [];
        currentElementInRow = 0;
      }
      nextRow.push(this.checkboxDataList[i]);
      currentElementInRow++;
    }
    if(nextRow.length > 0){
      this.checkboxRows.push(nextRow);
    }
  }

  //This will setup the standard-option checkbox-list
  setupCheckboxes(){
    this.checkboxDataList.push(new CheckboxData("Larma", false));
    this.checkboxDataList.push(new CheckboxData("Pvk", false));
    this.checkboxDataList.push(new CheckboxData("Narkos", false));
    this.checkboxDataList.push(new CheckboxData("Hjärtbräda", false));
    this.checkboxDataList.push(new CheckboxData("Ringa acetat", false));
    this.checkboxDataList.push(new CheckboxData("Medicinjour", false));
    this.checkboxDataList.push(new CheckboxData("Syrgas", false));
    this.checkboxDataList.push(new CheckboxData("Anhöriga", false));
  }

  addToLog(information : string, state : boolean){
    //The state is inverted to what it actually is, due to the click event and checkbox value change happening at the same time
    if(!state){
      this.loggingService.addHLRItem(this.timerService.currentTimeString, Defibrilate.NONE , "", "Checkbox '"+information+"' har markerats.");
    }
    else{
      this.loggingService.addHLRItem(this.timerService.currentTimeString, Defibrilate.NONE , "", "Checkbox '"+information+"' har avmarkerats.");
    }
  }

  /**
  checklistChecked(name : string){
    switch(name){
      case "larma":
        this.handleButton(name, this.model.larma);
        break;
      case "pvk":
        this.handleButton(name, this.model.pvk);
        break;
      case "narkos":
        this.handleButton(name, this.model.narkos);
        break;
      case "hja":
        this.handleButton(name, this.model.larma);
        break;

    }
  }

  handleButton(name : string, radioButtonState : boolean){
    if(radioButtonState){
      this.addToLog(name + " har markerats.")
    }
    else{
      this.addToLog(name + " har avmarkerats.")
    }

  }
  // Used for identifying the buttons as active (true) or not (false)
  model = {
    larma: false,
    pvk: false,
    narkos: false,
    hjartbrada: false,
    acetat: false,
    medicinjour: false,
    syrgas: false,
    anhoriga: false
  };
   **/
}

