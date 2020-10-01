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

    expect(page.getFirstSuggestionResult()).toContain('Albanian Superliga');
  });

  it('should displays all teams of a league when user click on result', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();

    expect(page.getCardResults()).toEqual(10);
  });

  it('should displays team information on the card', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();

    expect(page.getFirstTeamName()).toEqual('Apolonia');
    expect(page.getFirstTeamPicture()).toEqual('https://www.thesportsdb.com/images/media/team/badge/3n1v8j1596469168.png');
  });

  it('should go to the team page when user click on a team', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    page.selectTeamInResult();

    expect(page.getCurrentUrl()).toEqual('http://localhost:4200/team/140090');
  });

  // xit('should displays all members of the selected team', () => {
  //   page.navigateTo();
  //   page.sendSearchInSearchField();
  //   page.selectLeagueInResult();
  //   page.selectTeamInResult();

  //   expect(page.getCardResults()).toEqual(8);
  // });

  // xit('should displays all informations on team member card', () => {
  //   page.navigateTo();
  //   page.sendSearchInSearchField();
  //   page.selectLeagueInResult();
  //   page.selectTeamInResult();

  //   expect(page.getFirstMemberName()).toEqual(`Ali M'madi`);
  //   expect(page.getFirstMemberPosition()).toEqual('Midfielder');
  //   expect(page.getFirstMemberBirthDate()).toEqual('Birth date: 1990/04/21');
  //   expect(page.getFirstMemberPrice()).toEqual('Price: Signed');
  //   expect(page.getMemberPicture(1)).toEqual('https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png');
  //   expect(page.getMemberPicture(3)).toEqual('https://www.thesportsdb.com/images/media/player/cutout/8430842.png');
  // });

  it('should displays all informations for a team', () => {
    page.navigateTo();
    page.sendSearchInSearchField();
    page.selectLeagueInResult();
    page.selectTeamInResult();

    expect(page.getTeamPicture()).toEqual('https://www.thesportsdb.com/images/media/team/badge/3n1v8j1596469168.png');
    expect(page.getTeamName()).toEqual('Apolonia');
    expect(page.getTeamLeague()).toEqual('League: Albanian Superliga');
    expect(page.getTeamDescription()).toEqual('KF Apolonia is an Albanian football club based in Fier. The club was founded on 17 June 1925 and took its name from the nearby ruins of the Greek city of Apollonia (Illyria). The club currently compete in the Kategoria Superiore and they play their home games at the Loni Papuçiu Stadium.');
    expect(page.getTeamSocialLinksResults()).toEqual(1);
    expect(page.getTeamLinkUrl()).toEqual('http://facebook.com/tifozeriafierake');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
