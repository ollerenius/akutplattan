import {Component, Attribute} from '@angular/core';

@Component({
  selector: 'keypad-comp',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeyPadComponent {


  keypad_placeholder = "...";
  keypad_res = "";
  firstTime: boolean = true;
  weight: number = 0;
  testList: Array<number> = [];

  constructor(@Attribute('placeholder') input: string) {
    this.keypad_placeholder = input;
  }


  public setManualWeight(pressedButton){
    let outputText: string = 'Enter Weight';

    if(pressedButton == 'OK')
    {
      this.testList.push(this.weight);
      this.weight = 0;
      this.keypad_res = outputText;
      this.firstTime = true;
    }
    else if(pressedButton == 'C')
    {
      this.keypad_res = outputText;
      this.firstTime = true;
    }
    else if (this.firstTime)
    {
      this.weight = 10 * this.weight + pressedButton;
      this.keypad_res = String(pressedButton);
      this.firstTime = false;
    }
    else
    {
      this.weight = 10 * this.weight + pressedButton;
      this.keypad_res += String(pressedButton);
    }
  }
}
