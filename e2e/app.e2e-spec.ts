import { AppMyPage } from './app.po';

describe('app-my App', () => {
  let page: AppMyPage;

  beforeEach(() => {
    page = new AppMyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
