import { NgsheetscrudPage } from './app.po';

describe('ngsheetscrud App', () => {
  let page: NgsheetscrudPage;

  beforeEach(() => {
    page = new NgsheetscrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
