import {Component, OnInit} from '@angular/core';
import { BarnHLRStartComponent }  from './../barnhlr/barnhlr.component'
import { BarnHLRService } from './../barnhlr/barnhlr.service';


@Component({
  selector: 'barnhlrsettings-page',
  templateUrl: './barnhlrsettings.component.html',
  styleUrls: ['./barnhlrsettings.component.css'],
})
export class BarnHLRSettingsComponent{
  title = 'BarnHLR page';
  useAge: boolean;
  wetflag : number = 0;

  onNotify(weight:number) : void{
    this.wetflag = this.wetflag_transform(weight);
  }

  constructor(private barnHLRService: BarnHLRService) {
    this.useAge = barnHLRService.bool_val;
  }

  wetflag_transform(age : number) : number{
    //TODO: Implement functionality for years / months instead of only months
    let months : number = age;
    let years  : number = Math.floor(months/12);
    months = months - years * 12;
    let output_wetflag : number;

    if(years > 5 && years < 13){
      output_wetflag = 3*years + 7;
    }
    else if(years < 6 && years > 0){
      output_wetflag = 2*years + 8;
    }
    else if(years == 0){
      output_wetflag = 0.5 * months + 4;
    }
    return output_wetflag;

  }
}
