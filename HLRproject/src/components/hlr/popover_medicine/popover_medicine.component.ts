import { Component } from '@angular/core';

@Component({
  selector: 'popoverMedicine',
  templateUrl: 'popover_medicine.component.html',
  styleUrls: ['popover_medicine.component.css']
})
export class PopoverMedicineComponent {
  //TODO: add checkboxes to popover, discuss with group
  adrenalineDose: number = 400;
  amiodaroneDose: number = 300;

  public adrenaline: string = 'Adrenalin: ' + this.adrenalineDose.toString() + ' mg';
  public amiodarone: string = 'Amiodarone: ' + this.amiodaroneDose.toString() + ' mg';

  public buttontext: string = 'Adrenalin' + '<br>' + 'Amiodaron';

  public checkModel = {
    adrenaline: false,
    amiodarone: false
  };

}