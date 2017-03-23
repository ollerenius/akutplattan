import {Component, OnInit} from '@angular/core';
import { BarnHLRStartComponent }  from './../barnhlr/barnhlr.component'
import { BarnHLRService } from './../barnhlr/barnhlr.service';


@Component({
  selector: 'barnhlrsettings-page',
  templateUrl: './barnhlrsettings.component.html',
  styleUrls: ['./barnhlrsettings.component.css']
})
export class BarnHLRSettingsComponent{
  title = 'BarnHLR page';
  useAge: boolean;

  constructor(private barnHLRService: BarnHLRService) {
    this.useAge = barnHLRService.bool_val;
  }
}
