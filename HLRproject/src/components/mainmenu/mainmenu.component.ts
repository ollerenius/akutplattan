/**
 * Created by daniel on 2/28/17.
 * MainMenuComponent is the component that contains the
 * main menu. It consists of a number of buttons for navigation.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'mainmenu-page',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent {

  goToHLR(): void {
    console.log('Go to HLR')
  }

  goToBarnHLR(): void {
    console.log('Go to Barn-HLR')
  }

  goToAndningstopp(): void {
    console.log('Go to Andningsstopp')
  }

  goToHistory(): void {

  }

}
