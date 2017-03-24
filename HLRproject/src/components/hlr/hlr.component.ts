import { Component } from '@angular/core';
import {ChecklistComponent} from "./checklist/checklist.component";
import {HLRFlowComponent} from "./hlrflow/hlrflow.component";

@Component({
  selector: 'hlr-page',
  templateUrl: './hlr.component.html',
  styleUrls: ['./hlr.component.css']
})
export class HLRComponent {
  public title: string = 'HLR page';
}
