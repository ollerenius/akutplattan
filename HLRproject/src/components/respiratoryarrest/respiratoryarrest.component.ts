import { Component } from '@angular/core';

@Component({
  selector: 'respiratory-arrest',
  templateUrl: './respiratoryarrest.component.html',
  styleUrls: ['./respiratoryarrest.component.css']
})
export class RespiratoryArrestComponent{
//TODO: Replace this current image with a cropped one that fits an ipad screen without scrolling.
  respiratory_arrest_instruction_image: string = '../../../assets/images/respiratoryarrest.png';

}
