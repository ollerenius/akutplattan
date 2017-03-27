import { Component } from '@angular/core';

@Component({
  selector: 'analysisButton',
  templateUrl: 'analysisbutton.component.html',
  styleUrls: ['analysisbutton.component.css']
})

export class AnalysisButtonComponent {

  public radioModel: string = 'VF/VT_alternative'; //Preexisting choice for the radio button

}

