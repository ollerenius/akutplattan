import { browser, element, by } from 'protractor';

export class HLRprojectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('main-frame-root h1')).getText();
  }
}
