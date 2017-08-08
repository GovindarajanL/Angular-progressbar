import { ProgressbarAppPage } from './app.po';

describe('progressbar-app App', function() {
  let page: ProgressbarAppPage;

  beforeEach(() => {
    page = new ProgressbarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
