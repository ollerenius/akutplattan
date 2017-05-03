import {Component, OnInit, OnDestroy} from '@angular/core';
import { BarnHLRService } from '../../services/barnhlr.service';


@Component({
  selector: 'barnhlr-page',
  templateUrl: 'barnhlr.component.html',
  styleUrls: ['barnhlr.component.css']
})

/**
 * An intro page to the barnhlr step, where the information about wheter a childs weight
 * is known or not is handled and transferred to barnhlrsettings page.
 */
export class BarnHLRStartComponent implements OnDestroy {
  useAge:boolean;

  constructor(private barnHLRService: BarnHLRService) {
  }

  ngOnDestroy() : void{
    this.barnHLRService.bool_val = this.useAge;
  }
}
