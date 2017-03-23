import {Component, OnInit} from '@angular/core';
import { BarnHLRService } from './../barnhlr/barnhlr.service';

@Component({
  selector: 'barnhlrsettings-page',
  templateUrl: './barnhlrsettings.component.html',
  styleUrls: ['./barnhlrsettings.component.css']
})
export class BarnHLRSettingsComponent implements OnInit{
  title = 'BarnHLR page';
  inputType: boolean = true;


  constructor(private barnHLRService: BarnHLRService) {

  }

  getSettings(): void {
   this.inputType = this.barnHLRService.getSettings().valueOf();
  }


  ngOnInit(): void {
    this.getSettings();
  }


}
