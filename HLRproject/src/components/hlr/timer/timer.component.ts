import { Component, OnDestroy } from '@angular/core';
import {TimerService} from "../../../services/timer.service";

@Component({
  selector: 'hlr-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})

/**
 * A class necessary for displaying the time which has passed since a HLR-process was initated.
 * This information is also passed outside the component by use of a TimerService singleton.
 */
export class TimerComponent implements OnDestroy{
  currentTime : string = "00:00:00";
  timeElapsed : number = 0;
  timer;

  constructor(private timerService : TimerService) {
    this.startTimer();
  }

  ngOnDestroy(){
    this.destroyTimer()
  }

  /**
   * Destroys and resets the timer object, so that it doesn't reflect its previous state in a later appearance.
   */
  private destroyTimer() : void{
    clearInterval(this.timer);
    this.timerService.currentTimeString = "00:00:00";
  }

  /**
   * Initiates the clock of the timer.
   */
  private startTimer() : void {
    this.updateTimer();
    this.timer = setInterval(() => {
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
