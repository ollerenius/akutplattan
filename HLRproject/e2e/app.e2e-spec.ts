import { HLRprojectPage } from './app.po';

describe('hlrproject App', () => {
  let page: HLRprojectPage;

  beforeEach(() => {
    page = new HLRprojectPage();
  });

  it('should display message saying main-frame works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('main-frame works!');
  });
});
