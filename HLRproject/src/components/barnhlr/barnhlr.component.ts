import {Component, OnInit, OnDestroy} from '@angular/core';
import { BarnHLRService } from './barnhlr.service';


@Component({
  selector: 'barnhlr-page',
  templateUrl: 'barnhlr.component.html',
  styleUrls: ['barnhlr.component.css']
})



export class BarnHLRStartComponent implements OnDestroy {
  title:string = 'BarnHLR start';
  weight:number = 0;
  useAge:boolean;
  barnhlrservice : BarnHLRService;

  constructor(private barnHLRService: BarnHLRService) {
    this.barnhlrservice = barnHLRService;
  }


  getSettings(): void {
    //this.useAge = this.barnHLRService.getSettings().valueOf();
  }

  ngOnInit(): void {
    this.getSettings();
  }

  ngOnDestroy(){
    this.barnhlrservice.bool_val = this.useAge;
  }




}
