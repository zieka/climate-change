import { ClimateChangePage } from './app.po';

describe('climate-change App', () => {
  let page: ClimateChangePage;

  beforeEach(() => {
    page = new ClimateChangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
