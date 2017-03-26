/**
 * Created by daniel on 2/28/17.
 * MainMenuComponent is the component that contains the
 * main menu. It consists of a number of buttons for navigation.
 */
import { Component } from '@angular/core';
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'mainmenu-page',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent {

  constructor(private loggingService : LoggingService){
    this.loggingService = loggingService;
    //TODO: Remove this test case and add real data from HLR
    this.loggingService.addHLRItem("13:20",true, "30:2", "Det här är en påhittad informationsbit endast menad för att testa servicens kapabilitet.")
  }



  goToHLR(): void {
    console.log('Go to HLR')
  }

  goToBarnHLR(): void {
    console.log('Go to Barn-HLR')
  }

  goToAndningstopp(): void {
    console.log('Go to Andningsstopp')
  }
}
