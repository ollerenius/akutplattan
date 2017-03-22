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
          //Checks so that pressed key isn't 0 when there is no number, as well as sanity checking the clicked input.
          if (!(pressedKey == '0' && this.keypad_res.length == 0) && !isNaN(Number(this.keypad_res))){
            if(this.keypad_res.length < 3){
              this.keypad_res += pressedKey;
            }
          }


        break;
    }
  }

}
