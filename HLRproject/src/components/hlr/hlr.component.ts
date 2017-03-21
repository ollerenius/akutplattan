import { Component } from '@angular/core';
import {ChecklistComponent} from "./checklist/checklist.component";

@Component({
  selector: 'hlr-page',
  templateUrl: './hlr.component.html',
  styleUrls: ['./hlr.component.css']
})
export class HLRComponent {
  public title: string = 'HLR page';
  checklist: ChecklistComponent;
}
