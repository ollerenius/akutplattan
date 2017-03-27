import { Component, } from '@angular/core';

@Component({
  selector: 'heartMassage',
  templateUrl: 'heartmassage.component.html',
  styleUrls: ['heartmassage.component.css']
})
export class HeartMassageComponent {

  //TODO: add functionality for changing text depending on patient.
  public heartMassageAdult: string = '30:2 <br> 2 min';
  public heartMassageChild: string = '15:2 <br> 2 min';
}
