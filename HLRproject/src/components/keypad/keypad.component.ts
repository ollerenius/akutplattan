import { Component } from '@angular/core';

@Component({
  selector: 'keypad-comp',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeyPadComponent {
  title = 'Keypad component';



  firstTime: boolean = true;
  weight: number = 0;
  testList: Array<number> = [];

  public setManualWeight(pressedButton){
    let outputText: string = 'Enter Weight';

    if(pressedButton == 'OK')
    {
      this.testList.push(this.weight);
      this.weight = 0;
      this.title = outputText;
      this.firstTime = true;
    }
    else if(pressedButton == 'C')
    {
      this.title = outputText;
      this.firstTime = true;
    }
    else if (this.firstTime)
    {
      this.weight = 10 * this.weight + pressedButton;
      this.title = String(pressedButton);
      this.firstTime = false;
    }
    else
    {
      this.weight = 10 * this.weight + pressedButton;
      this.title += String(pressedButton);
    }
  }
}
