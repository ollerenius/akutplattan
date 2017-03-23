import {Component, OnInit} from '@angular/core';
import { BarnHLRService } from './barnhlr.service';


@Component({
  selector: 'barnhlr-page',
  templateUrl: 'barnhlr.component.html',
  styleUrls: ['barnhlr.component.css']
})



export class BarnHLRStartComponent implements OnInit {
  title:string = 'BarnHLR start';
  weight:number = 0;
  useAge:boolean;


  constructor(private barnHLRService: BarnHLRService) {
  }


  getSettings(): void {
    //this.useAge = this.barnHLRService.getSettings().valueOf();
  }

  ngOnInit(): void {
    this.getSettings();
  }




}
