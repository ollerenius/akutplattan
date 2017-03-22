import { Component } from '@angular/core';


@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent {
  title = 'HLR-flow component';

  buttonTitle: string = "testing";

  public html:string = `<span class="btn btn-danger">Never trust HTML!!!</span>`;

  public  analysFunction(){

  }
}


