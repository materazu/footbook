import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .title')).getText() as Promise<string>;
  }

  getSubTitleText() {
    return element(by.css('app-root .subtitle')).getText() as Promise<string>;
  }

  getSearchFieldPlaceholder() {
    return element(by.css('.input-container input')).getAttribute('placeholder') as Promise<string>;
  }

  clickOnSearchField() {
    const inputElement = element(by.css('.input-container input'));
    inputElement.click();
  }

  getSuggestionContainerResults() {
    return element.all(by.css('.suggestions-container ul li')).count() as Promise<number>;
  }

  sendSearchInSearchField() {
    const inputElement = element(by.css('.input-container input'));
    inputElement.sendKeys('albanian');
  }

  getFirstSuggestionResult() {
    return element(by.css('.suggestions-container ul li:first-child')).getText() as Promise<string>;
  }

  selectLeagueInResult() {
    const leagueResult = element(by.css('.suggestions-container ul li:first-child'));
    leagueResult.click();
  }

  getCardResults() {
    return element.all(by.css('.card')).count() as Promise<number>;
  }

  getFirstTeamName() {
    return element.all(by.css('.card:first-child .team-name')).first().getText() as Promise<string>;
  }

  getFirstTeamPicture() {
    return element.all(by.css('.card:first-child .image img')).first().getAttribute('src') as Promise<string>;
  }

  selectTeamInResult() {
    const teamElement = element.all(by.css('.card')).first();
    teamElement.click();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl() as Promise<string>;
  }

  getFirstMemberName() {
    return element(by.css('.card:first-child .member-name')).getText() as Promise<string>;
  }

  getFirstMemberPosition() {
    return element(by.css('.card:first-child .member-position')).getText() as Promise<string>;
  }

  getFirstMemberBirthDate() {
    return element(by.css('.card:first-child .member-birth-date')).getText() as Promise<string>;
  }

  getFirstMemberPrice() {
    return element(by.css('.card:first-child .member-price')).getText() as Promise<string>;
  }

  getMemberPicture(child) {
    return element(by.css(`.column:nth-child(${child}) .image img`)).getAttribute('src') as Promise<string>;
  }

  getTeamPicture() {
    return element(by.css('.banner')).getAttribute('src') as Promise<string>;
  }

  getTeamName() {
    return element(by.css('.team-name')).getText() as Promise<string>;
  }

  getTeamLeague() {
    return element(by.css('.league-name')).getText() as Promise<string>;
  }

  getTeamDescription() {
    return element(by.css('.description')).getText() as Promise<string>;
  }

  getTeamSocialLinksResults() {
    return element.all(by.css('.social-link')).count() as Promise<number>;
  }

  getTeamLinkUrl() {
    return element(by.css('.social-link')).getAttribute('href') as Promise<string>;
  }
}
