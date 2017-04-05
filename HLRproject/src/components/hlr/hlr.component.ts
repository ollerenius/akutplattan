import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {Defibrilate} from "../../classes/HLRItem";

@Component({
  selector: 'hlr-page',
  templateUrl: './hlr.component.html',
  styleUrls: ['./hlr.component.css']
})
export class HLRComponent implements OnInit {
  public title: string = 'HLR page';

  constructor(private loggingService : LoggingService){}

  ngOnInit(){
    this.printHLRStartTimeToLog();
  }

  //Simply prints the time which the HLR was initated to the log.
  printHLRStartTimeToLog(){
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
    let startTime : string = hoursString + ':' + minutesString + ':' + secondsString;
    this.loggingService.addHLRItem("00:00:00", Defibrilate.NONE, "", "HLR-förloppet startade vid klockan " + startTime, false);
  }

}




