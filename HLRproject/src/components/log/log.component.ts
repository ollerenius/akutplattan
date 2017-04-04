import { Component } from '@angular/core';
import {HLRItem, Defibrilate} from "../../classes/HLRItem";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'log-component',
  templateUrl: './log.component.html',
  styleUrls: ['log.component.css']
})

export class LogComponent {
  title = 'Vårdlogg';
  hlrItems : HLRItem[] = [];
  //Have to make the enum visible to the scope of the html file
  defib = Defibrilate;

  constructor(private loggingService : LoggingService){
    this.loggingService = loggingService;
    this.hlrItems = this.loggingService.getHLRItems();
  }

}

