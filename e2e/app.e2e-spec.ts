import { ClubManager2Page } from './app.po';

describe('club-manager2 App', function() {
  let page: ClubManager2Page;

  beforeEach(() => {
    page = new ClubManager2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
