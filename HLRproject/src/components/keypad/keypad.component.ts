import {Component, Attribute, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'keypad-comp',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})

/**
 * A simple keypad component that emits its number state when the 'OK' button is pressed.
 */
export class KeyPadComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  keypad_placeholder:string = "...";
  keypad_res:string = "";

  /**
   * @param input Takes the attribute which is named and puts its value as a string to display as a placeholder in the keypad textfield
   */
  constructor(@Attribute('placeholder') input: string) {
    this.keypad_placeholder = input;
  }

  /**
   * Handles all actions that are to be triggered when a keypad button is pressed.
   * @param pressedKey : string The key which was pressed on the keypad.
   */
  public handleInput(pressedKey : string) : void{
    switch(pressedKey){
      case 'C':
          this.keypad_res = "";
        break;
      case '<-':
          if(this.keypad_res.length != 0){
            this.keypad_res = this.keypad_res.slice(0,this.keypad_res.length-1);
          }
        break;
      default:
          if("0123456789".indexOf(pressedKey) != -1){
            this.keypad_res += pressedKey;
          }
          else{
            console.error("Invalid key pressed on keypad: " + pressedKey);
          }
        break;
    }
    this.notify.emit(this.keypad_res);
  }

}
