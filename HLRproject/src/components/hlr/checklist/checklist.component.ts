/**
 * Created by Kim on 2017-03-21.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {
  public title: string = 'Checklist';

  // Used for identifying the buttons as active (true) or not (false)
  model = {
    larma: false,
    pvk: false,
    narkos: false,
    hjartbrada: false,
    acetat: false,
    medicinjour: false,
    syrgas: false,
    anhoriga: false
  };
}
