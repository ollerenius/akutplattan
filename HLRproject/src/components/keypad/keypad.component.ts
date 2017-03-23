import {Component, Attribute, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'keypad-comp',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeyPadComponent {
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  keypad_placeholder:string = "...";
  keypad_res:string = "";

  constructor(@Attribute('placeholder') input: string) {
    this.keypad_placeholder = input;
  }

  public handleInput(pressedKey){
    switch(pressedKey){
      case 'C':
          this.keypad_res = "";
        break;
      case 'OK':
          let res_keypad = Number(this.keypad_res);

          if(!isNaN(res_keypad)){
            this.notify.emit(Number(this.keypad_res));
          }
          else{
            this.notify.emit(0);
          }
          console.log("Result is " + Number(this.keypad_res));
        break;
      default:
          //Checks so that pressed key isn't 0 when there is no number, as well as sanity checking the clicked input.
          if (!(pressedKey == '0' && this.keypad_res.length == 0) && !isNaN(Number(pressedKey))){
            if(this.keypad_res.length < 3){
              this.keypad_res += pressedKey;
            }
          }
        break;
    }

  }

}
