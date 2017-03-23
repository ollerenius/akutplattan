import {Component, OnInit} from '@angular/core';
import { BarnHLRStartComponent }  from './../barnhlr/barnhlr.component'
import { BarnHLRService } from './../barnhlr/barnhlr.service';


@Component({
  selector: 'barnhlrsettings-page',
  templateUrl: './barnhlrsettings.component.html',
  styleUrls: ['./barnhlrsettings.component.css']
})
export class BarnHLRSettingsComponent implements OnInit{
  title = 'BarnHLR page';
  useAge: boolean;

  constructor(private barnHLRService: BarnHLRService) {

  }

  getSettings(): void {
  this.barnHLRService.getSettings().then(useAge => this.useAge = useAge);
  }



  ngOnInit(): void {
    this.getSettings();
  }


}
