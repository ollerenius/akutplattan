import { Component } from '@angular/core';


@Component({
  selector: 'hlrflow',
  templateUrl: 'hlrflow.component.html',
  styleUrls: ['hlrflow.component.css']
})

export class HLRFlowComponent {
  title: string = 'HLR-flow component';
  boltFilledPath: string ='/src/images/bolt-filled-small.png';
  boltOutlinePath: string ='/src/images/bolt-outline-small.png';

  boltFullPath: string = this.boltOutlinePath;
  public boltFilled: boolean = false;

  public changeImage(){
    //TODO: add log and timestamp
    if(this.boltFilled){
      this.boltFullPath = this.boltOutlinePath;
      this.boltFilled = false;
    }
    else{
      this.boltFullPath = this.boltFilledPath;
      this.boltFilled = true;
    }
  }
}

// C:\Users\Lisa\Desktop\tddd96 kandidat\git\tddd96_project\HLRproject\src\images\bolt-filled-small.png