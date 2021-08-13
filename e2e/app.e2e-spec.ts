import { CintaCodingPage } from './app.po';

describe('cinta-coding App', () => {
  let page: CintaCodingPage;

  beforeEach(() => {
    page = new CintaCodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
