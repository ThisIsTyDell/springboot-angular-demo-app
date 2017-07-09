import { WelcomePage } from './app.po';

describe('welcome App', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
