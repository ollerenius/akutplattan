/**
 * Created by susanna on 2017-03-22.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'header-element',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'Titel';

  leftArrow: string;

  constructor(){
    this.leftArrow = '../assets/images/left-arrow.jpg'
  }

  // The following should be part of HeaderComponent, not the main frame
  currentTime : string = this.getCurrentTime();
  private getCurrentTime() : string {
    var date : Date = new Date();
    var hours : number = date.getHours();
    var minutes : number = date.getMinutes();
    var seconds : number = date.getMinutes();
    var currentTime : string = hours + ':' + minutes + ':' + seconds;
    return currentTime;
  }

  updateTime() : void {
    this.currentTime = this.getCurrentTime();
  }

}
