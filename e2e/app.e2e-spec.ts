import { Angular2AndThreejsPage } from './app.po';

describe('angular2-and-threejs App', () => {
  let page: Angular2AndThreejsPage;

  beforeEach(() => {
    page = new Angular2AndThreejsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
