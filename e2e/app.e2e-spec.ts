import { HalodocTestPage } from './app.po';

describe('halodoc-test App', () => {
  let page: HalodocTestPage;

  beforeEach(() => {
    page = new HalodocTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
