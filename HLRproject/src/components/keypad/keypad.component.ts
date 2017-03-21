import {Component, Attribute} from '@angular/core';

@Component({
  selector: 'keypad-comp',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeyPadComponent {


  keypad_placeholder = "...";
  keypad_res = "";

  constructor(@Attribute('placeholder') input: string) {
    this.keypad_placeholder = input;
  }

  public handleInput(pressedKey){
    switch(pressedKey){
      case 'C':
          this.keypad_res = "";
        break;
      case 'OK':
          console.log("Result is " + Number(this.keypad_res));
        break;
      default:
          this.keypad_res += pressedKey;
        break;
    }
  }

}
