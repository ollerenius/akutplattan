import { Component, OnInit } from '@angular/core';
import {TimerService} from "../../../services/timer.service";

@Component({
  selector: 'hlr-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent{

  currentTime : string = "00:00:00";
  timeElapsed : number = 0;

  constructor(private timerService : TimerService) {
    this.startTimer();
  }


  private startTimer() : void {
    this.updateTimer();
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  /**
   * This method is called to get the current time.
   * That value is formatted properly and assigned to currentTime.
   */
  private updateTimer() : void {
    // Store the same values as strings
    this.timeElapsed++;
    let seconds : number = this.timeElapsed;

    let hours = Math.floor(seconds/3600);
    seconds -= hours * 3600;

    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

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
    this.timerService.currentTimeString = this.currentTime;
  }
}
