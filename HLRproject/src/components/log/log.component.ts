import { Component } from '@angular/core';
import {HLRItem, Defibrilate, Ruler} from "../../classes/HLRItem";
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

  /**
   * Returns the specific CSS corresponding to that Ruler enum in the log.
   * @param ruler : Ruler The Ruler enum for which a CSS class is requested
   * @returns {string} The CSS-class that corresponds to the specific ruler.
   */
  private getRulerCSS(ruler : Ruler) : string{
    switch(ruler){
      case Ruler.HLRSTEP:
        return "newstep";
      case Ruler.HLRFLOW:
        return "endflow";
      default:
        return "";
    }
  }

}

