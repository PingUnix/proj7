import { Proj7Page } from './app.po';

describe('proj7 App', function() {
  let page: Proj7Page;

  beforeEach(() => {
    page = new Proj7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
