import { HLRprojectPage } from './app.po';

describe('hlrproject App', () => {
  let page: HLRprojectPage;

  beforeEach(() => {
    page = new HLRprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
