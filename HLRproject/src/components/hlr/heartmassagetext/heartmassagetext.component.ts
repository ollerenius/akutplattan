import { Component, } from '@angular/core';

@Component({
  selector: 'heartmassagetext',
  templateUrl: 'heartmassagetext.component.html',
  styleUrls: ['heartmassagetext.component.css']
})
export class HeartmassagetextComponent {

  public heartMassageAdult: string = '30:2 <br> 2 min';
  public heartMassageChild: string = '15:2 <br> 2 min';
}
