/**
 * Created by daniel on 2/28/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  private _title = 'Main Menu';
}
