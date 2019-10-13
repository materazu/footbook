import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Footbook');
  });

  it('should display subtitle', () => {
    page.navigateTo();
    expect(page.getSubTitleText()).toEqual('Discover champions.');
  });

  it('should display search field with placeholder', () => {
    page.navigateTo();
    expect(page.getSearchFieldPlaceholder()).toEqual('Search by league');
  });

  it('should display suggestions when user click on search field', () => {
    page.navigateTo();
    page.clickOnSearchField();
    expect(page.getSuggestionContainerResults()).toBeGreaterThan(0);
  });

  it('should filter results on suggestions when user type', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    expect(page.getFirstSuggestionResult()).toContain('French Ligue 2');
  });

  it('should displays all teams of a league when user click on result', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    expect(page.getCardResults()).toEqual(18);
  });

  it('should displays team information on the card', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    expect(page.getFirstTeamName()).toEqual('Ajaccio');
    expect(page.getFirstTeamPicture()).toEqual('https://www.thesportsdb.com/images/media/team/badge/qpxvwy1473505505.png');
  });

  it('should go to the team page when user click on a team', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    page.selectTeamInResult();
    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/team/133702');
  });

  it('should displays all members of the selected team', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    page.selectTeamInResult();
    expect(page.getCardResults()).toEqual(8);
  });

  it('should displays all informations on team member card', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    page.selectTeamInResult();
    expect(page.getFirstMemberName()).toEqual(`Ali M'madi`);
    expect(page.getFirstMemberPosition()).toEqual('Midfielder');
    expect(page.getFirstMemberBirthDate()).toEqual('Birth date: 1990/04/21');
    expect(page.getFirstMemberPrice()).toEqual('Price: Signed');
    expect(page.getMemberPicture(1)).toEqual('https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png');
    expect(page.getMemberPicture(3)).toEqual('https://www.thesportsdb.com/images/media/player/cutout/8430842.png');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
