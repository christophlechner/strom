import { StromAppPage } from './app.po';

describe('strom-app App', () => {
  let page: StromAppPage;

  beforeEach(() => {
    page = new StromAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
