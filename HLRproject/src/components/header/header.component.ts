/**
 * HeaderComponent is the component that contains the
 * "menu bar" at the top of the application.
 */

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header-element',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  title = 'Titel';

  /**
   * The path to the back arrow image file.
   */
  leftArrow: string;
  currentTime : string;

  constructor(private router : Router){
    this.leftArrow = '../assets/images/left-arrow.jpg';
    this.startClock();
  }

  /**
   * goBack() is called when clicking the back button in the header.
   * Functionality not yet implemented.
   */
  goBack() : void {
    //TODO: This was the best way at the time to route this while preventing paths that shouldn't be "backable"
    //TODO: This should be improved. Either by doing "back-routing" in a different way, or by simply adding handling for the different Promises that navigateByUrl can return.
    let cur_route : string = this.router.url;
    let new_route : string;
    switch(cur_route){
      /*
        New routes are added as such:
        case 'current_route':
          new_route = 'the_new_route';
          break;
        Where current and new routes always start with an /.
       */
      case '/log':
        new_route = '/';
        break;
      default:
        new_route = '';
    }
    if (new_route !== '') {
      this.router.navigateByUrl(new_route);
    }
    console.log('You pressed the Back-button.');
  }

  /**
   * Use this method to set the current time and start the clock.
   * setInterval() will call updateClock once every second.
   */
  private startClock() : void {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  /**
   * This method is called to get the current time.
   * That value is formatted properly and assigned to currentTime.
   */
  private updateClock() : void {
    // Get time values
    let date : Date = new Date();
    let hours : number = date.getHours();
    let minutes : number = date.getMinutes();
    let seconds : number = date.getSeconds();
    // Store the same values as strings
    let hoursString : string = String(hours);
    let minutesString : string = String(minutes);
    let secondsString : string = String(seconds);
    // Format strings properly
    if (hours < 10) {
      hoursString = '0' + hours;
    }
    if (minutes < 10) {
      minutesString = '0' + minutes;
    }
    if (seconds < 10) {
      secondsString = '0' + seconds;
    }
    this.currentTime = hoursString + ':' + minutesString + ':' + secondsString;
  }

}
