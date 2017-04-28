import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {Defibrilate} from "../../classes/HLRItem";
import {TimerService} from "../../services/timer.service";

@Component({
  selector: 'hlr-page',
  templateUrl: './hlr.component.html',
  styleUrls: ['./hlr.component.css']
})
export class HLRComponent implements OnInit {
  public title: string = 'HLR page';

  constructor(private loggingService : LoggingService, private timerService : TimerService){
  }


//Simply prints the time which the HLR was initated to the log.
  ngOnInit(){
    this.loggingService.addHLRItem("00:00:00", Defibrilate.NONE, "", "HLR-förloppet startade vid klockan " + this.printCurrentTimeToLog(), false);
  }

  //the time function that is called when you want the current time.
  printCurrentTimeToLog(): string{
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
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

//The function that is called when the "avsluta"-button is pressed. Logs the end of the HLR-session.
  goToLog(){
    //TODO: This >might< cause a race-condition with the timerService reset in the timer.component destructor. (It works most times tho)
    this.loggingService.addHLRItem(this.timerService.currentTimeString, Defibrilate.NONE, "", "HLR-förloppet avslutades vid klockan " + this.printCurrentTimeToLog() , true);

  }

}
