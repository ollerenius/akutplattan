import {Component, OnInit, OnDestroy} from '@angular/core';
import { BarnHLRService } from './barnhlr.service';


@Component({
  selector: 'barnhlr-page',
  templateUrl: 'barnhlr.component.html',
  styleUrls: ['barnhlr.component.css']
})



export class BarnHLRStartComponent implements OnDestroy {
  title:string = 'BarnHLR start';
  useAge:boolean;
  barnhlrservice : BarnHLRService;

  constructor(private barnHLRService: BarnHLRService) {
    this.barnhlrservice = barnHLRService;
  }

  ngOnDestroy(){
    this.barnhlrservice.bool_val = this.useAge;
  }
}
