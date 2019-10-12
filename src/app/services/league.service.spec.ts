import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LeagueService } from './league.service';

import { environment } from 'src/environments/environment';

/* tslint:disable */
const fakeResponse = {
  countrys: [
    {
      idLeague: '4484',
      idSoccerXML: null,
      strSport: 'Soccer',
      strLeague: 'Coupe de France',
      strLeagueAlternate: 'French Cup',
      strDivision: '99',
      idCup: '1',
      intFormedYear: '1917',
      dateFirstEvent: '2019-01-04',
      strGender: 'Male',
      strCountry: 'France',
      strWebsite: 'www.fff.fr/cfra/actu/index.shtml',
      strFacebook: 'www.facebook.com/pg/coupedefrancedefootball/',
      strTwitter: 'twitter.com/coupedefrance',
      strYoutube: '',
      strRSS: '',
      strDescriptionEN: 'The Coupe Charles Simon, commonly known as the Coupe de France (French pronunciation: ​), is the premier knockout cup competition in French football organized by the French Football Federation. The cup competition is named after Charles Simon, a French sportsman who died while serving in World War I, and is open to all amateur and professional football clubs in France, including clubs based in the overseas departments and territories. The final is played at the Stade de France and the winner of the Coupe de France qualifies for the group stage of the UEFA Europa League. The reigning champions are Paris Saint-Germain who defeated Les Herbiers VF in the final of the 2017–18 competition.\r\n\r\nThe Coupe de France was first held in 1917–18 and, during the 2016–17 season, celebrated its 100th season. Combined with random draws and one-off matches (no replays), the Coupe de France can be difficult for the bigger clubs to win. The competition is usually beneficial to the amateur clubs as it forces higher-ranked clubs, usually professional clubs, to play as the away team when drawn against lower-league opposition if they are competing two levels below them. Despite the advantages, only two amateur clubs have reached the final since professionalism was introduced in French football in 1932: Calais RUFC in 2000 and Les Herbiers VF in 2018. Two clubs from outside Ligue 1 have won the competition, Le Havre in 1959 and Guingamp in 2009. The Coupe de France is managed and run by the Coupe de France Commission, whose president is former French international Willy Sagnol.\r\n\r\n8,506 clubs competed in the 2017-18 edition.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strFanart1: 'https://www.thesportsdb.com/images/media/league/fanart/piv33b1546469449.jpg',
      strFanart2: 'https://www.thesportsdb.com/images/media/league/fanart/o0vekh1548796485.jpg',
      strFanart3: 'https://www.thesportsdb.com/images/media/league/fanart/gthqfs1548796545.jpg',
      strFanart4: 'https://www.thesportsdb.com/images/media/league/fanart/uw504x1548796616.jpg',
      strBanner: 'https://www.thesportsdb.com/images/media/league/banner/yaolbk1548797102.jpg',
      strBadge: 'https://www.thesportsdb.com/images/media/league/badge/l6fitb1546469041.png',
      strLogo: 'https://www.thesportsdb.com/images/media/league/logo/vk6u1k1555585529.png',
      strPoster: 'https://www.thesportsdb.com/images/media/league/poster/2qnd1c1546469138.jpg',
      strTrophy: 'https://www.thesportsdb.com/images/media/league/trophy/imoqex1535210130.png',
      strNaming: '{strHomeTeam} vs {strAwayTeam}',
      strComplete: 'yes',
      strLocked: 'unlocked'
    },
    {
      idLeague: '4504',
      idSoccerXML: null,
      strSport: 'Soccer',
      strLeague: 'Coupe de la Ligue',
      strLeagueAlternate: '',
      strDivision: '99',
      idCup: '1',
      intFormedYear: '1994',
      dateFirstEvent: '2018-08-14',
      strGender: 'Male',
      strCountry: 'France',
      strWebsite: 'www.lfp.fr/coupeLigue',
      strFacebook: 'www.facebook.com/CoupeDeLaLigueBKT/',
      strTwitter: 'twitter.com/CoupeLigueBKT',
      strYoutube: 'www.youtube.com/CoupedelaLigue?fbclid=IwAR288xJfTFs5sU9afXv6Gy-Xd7h9c80ekGn2PP1jdoLV37l8JhulSUmE8yY',
      strRSS: 'https://www.lfp.fr/coupeLigue/rss.xml',
      strDescriptionEN: 'The Coupe de la Ligue (French pronunciation: ​), known outside France as the French League Cup, is a knockout cup competition in French football organized by the Ligue de Football Professionnel. The tournament was established in 1994 and, unlike the Coupe de France, is only open to professional clubs in France which play in country\'s top three football divisions, though only four professional clubs currently play in the Championnat National.\r\n\r\nStrasbourg are the current champions, having defeated Guingamp 4–1 on penalties following a 0–0 draw for a fourth title in the 2018–19 competition.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strFanart1: 'https://www.thesportsdb.com/images/media/league/fanart/jc1n331554020554.jpg',
      strFanart2: 'https://www.thesportsdb.com/images/media/league/fanart/pwbnbb1554020616.jpg',
      strFanart3: 'https://www.thesportsdb.com/images/media/league/fanart/cfq4b21554020699.jpg',
      strFanart4: 'https://www.thesportsdb.com/images/media/league/fanart/hfx7yz1554020821.jpg',
      strBanner: 'https://www.thesportsdb.com/images/media/league/banner/zgkdo11554020910.jpg',
      strBadge: 'https://www.thesportsdb.com/images/media/league/badge/j8zvmz1549453366.png',
      strLogo: 'https://www.thesportsdb.com/images/media/league/logo/k8wdv21554022304.png',
      strPoster: 'https://www.thesportsdb.com/images/media/league/poster/pcydas1554021300.jpg',
      strTrophy: 'https://www.thesportsdb.com/images/media/league/trophy/3tdqns1549453252.png',
      strNaming: '{strHomeTeam} vs {strAwayTeam}',
      strComplete: 'yes',
      strLocked: 'unlocked'
    },
    {
      idLeague: '4334',
      idSoccerXML: '7',
      strSport: 'Soccer',
      strLeague: 'French Ligue 1',
      strLeagueAlternate: '',
      strDivision: '0',
      idCup: '0',
      intFormedYear: '1932',
      dateFirstEvent: '2012-08-10',
      strGender: 'Male',
      strCountry: 'France',
      strWebsite: 'www.lfp.fr/ligue1',
      strFacebook: 'fr-fr.facebook.com/ligue1',
      strTwitter: 'twitter.com/LFPfr',
      strYoutube: 'www.youtube.com/user/ligue1fr',
      strRSS: 'http://www.lfp.fr/ligue1/rss.xml',
      strDescriptionEN: 'Ligue 1 (French pronunciation: ​; League 1, formerly known as Division 1), is the French professional league for association football clubs. It is the country\'s primary football competition and serves as the top division of the French football league system. Ligue 1 is one of two divisions making up the Ligue de Football Professionnel, the other being Ligue 2. Contested by 20 clubs, it operates on a system of promotion and relegation with Ligue 2. Seasons run from August to May, with teams playing 38 games each totaling 380 games in the season. Most games are played on Saturdays and Sundays, with a few games played during weekday evenings. Play is regularly suspended the last weekend before Christmas for two weeks before returning in the second week of January. Ligue 1 is one of the top national leagues, currently ranked sixth in Europe behind the Spanish La Liga, English Premier League, the German Bundesliga, the Portuguese Primeira Liga and the Italian Serie A.\r\n\r\nLigue 1 was inaugurated on 11 September 1932 under the name National before switching to Division 1 after a year of existence. The name lasted until 2002 before switching to its current name. The current champions are Paris Saint-Germain, who won the 4th title of their history in the 2013–14 season.\r\n\r\nLigue 1 is generally regarded as competently run, with good planning of fixtures, complete and consistently enforced rules, timely resolution of issues, and adequate escalation procedures of judicial disputes to national or international institutions. The league has faced three significant corruption scandals in its history (Antibes in 1933, Red Star in the 1950s, and Marseille in 1993) and has preserved its reputation every time through swift and appropriately severe punishment of the guilty parties.',
      strDescriptionDE: null,
      strDescriptionFR: 'Le championnat de France de football masculin, dénommé « Ligue 1 » (L1), est une compétition de football qui est pour la France le premier échelon national. Il se déroule annuellement sous forme d\'un championnat mettant aux prises vingt clubs professionnels. Une saison du championnat commence en été et se termine au printemps suivant. La première journée de l\'édition inaugurale se tient le 11 septembre 1932. Nommé « Division Nationale » lors de la saison 1932-1933, le championnat prend le nom de « Division 1 » (D1) en 1933, avant de prendre son nom actuel à l\'été 2002.\r\n\r\nL\'AS Saint-Étienne est le club le plus couronné avec dix titres de champion de France alors que l\'Olympique lyonnais est le club qui a remporté le plus de titres consécutifs (7 entre 2002 et 2008). Le Paris Saint-Germain est double tenant du titre après sa victoire lors de l\'édition 2013-2014.\r\n\r\nAvec 66 saisons de présence en Ligue 1, le Football Club Sochaux-Montbéliard détient le record du nombre de saisons parmi l\'élite, alors que le Football Club de Nantes détient quant à lui le record de longévité en Ligue 1 avec 44 saisons consécutives (de 1963 à 2007). Le Paris Saint-Germain est actuellement le doyen de la Ligue 1 puisqu\'il y est présent depuis 1974 (soit sa 41e année consécutive en 2014-2015).',
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strFanart1: 'https://www.thesportsdb.com/images/media/league/fanart/qxvyuv1421448729.jpg',
      strFanart2: 'https://www.thesportsdb.com/images/media/league/fanart/xrqrwy1421448755.jpg',
      strFanart3: 'https://www.thesportsdb.com/images/media/league/fanart/xtpywr1422289430.jpg',
      strFanart4: 'https://www.thesportsdb.com/images/media/league/fanart/tsuxrt1422289577.jpg',
      strBanner: 'https://www.thesportsdb.com/images/media/league/banner/1zyham1566836810.jpg',
      strBadge: 'https://www.thesportsdb.com/images/media/league/badge/8f5jmf1516458074.png',
      strLogo: 'https://www.thesportsdb.com/images/media/league/logo/wvryqu1422054726.png',
      strPoster: 'https://www.thesportsdb.com/images/media/league/poster/xhr9ln1560868760.jpg',
      strTrophy: 'https://www.thesportsdb.com/images/media/league/trophy/sxxyyu1421447369.png',
      strNaming: '{strHomeTeam} vs {strAwayTeam}',
      strComplete: 'yes',
      strLocked: 'unlocked'
    },
    {
      idLeague: '4401',
      idSoccerXML: '49',
      strSport: 'Soccer',
      strLeague: 'French Ligue 2',
      strLeagueAlternate: '',
      strDivision: '2',
      idCup: '0',
      intFormedYear: '1933',
      dateFirstEvent: '2014-08-01',
      strGender: 'Male',
      strCountry: 'France',
      strWebsite: 'www.lfp.fr/ligue2',
      strFacebook: 'fr-fr.facebook.com/ligue2',
      strTwitter: '',
      strYoutube: 'www.youtube.com/user/ligue2fr',
      strRSS: 'www.lfp.fr/ligue2/rss.xml',
      strDescriptionEN: 'Ligue 2 (French pronunciation: ​), formerly known as Division 2, is a French professional football league. The league serves as the second division of French football and is one of two divisions making up the Ligue de Football Professionnel (LFP), the other being Ligue 1, the country\'s top football division. Contested by 20 clubs, it operates on a system of promotion and relegation with both Ligue 1 and the third division Championnat National. Seasons run from August to May, with teams playing 38 games each totaling 380 games in the season. Most games are played on Fridays and Mondays, with a few games played during weekday and weekend evenings. Play is regularly suspended the last weekend before Christmas for two weeks before returning in the second week of January.\r\n\r\nLigue 2 was founded a year after the creation of the first division in 1933 under the name Division 2 and has served as the second division of French football ever since. The name lasted until 2002 before switching to its current name. Since the league is a part of the LFP, it allows clubs who are on the brink of professionalism to become so. However, if a club suffers relegation to the Championnat National, its professional status can be revoked temporarily until they return to Ligue 2. The current champions are Metz who will be returning to Ligue 1 in 2014-15.\r\n\r\nLigue 2, alongside its first division counterpart, is generally regarded as competently run, with good planning of fixtures, complete and consistently enforced rules, timely resolution of issues, and adequate escalation procedures of judicial disputes to national or international institutions.',
      strDescriptionDE: null,
      strDescriptionFR: 'Le Championnat de France de football de Ligue 2, couramment appelé Ligue 2 ou plus simplement L2, est la deuxième division du championnat de football professionnel en France. Cette compétition constitue l\'antichambre de la Ligue 1. Il était appelé Division 2 (D2) de 1933 jusqu\'en 2002.\r\n\r\nLe tenant du titre est le Football Club de Metz, champion depuis le 6 mai 2014, qui remporte en 2013-2014 son troisième titre de deuxième division.\r\n\r\nPour la saison 2013-2014, l\'ensemble des rencontres ont été diffusées sur les antennes de BeIN Sports ou d\'Eurosport France.',
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strFanart1: 'https://www.thesportsdb.com/images/media/league/fanart/uwuyxr1433263873.jpg',
      strFanart2: 'https://www.thesportsdb.com/images/media/league/fanart/yspwps1433264142.jpg',
      strFanart3: 'https://www.thesportsdb.com/images/media/league/fanart/wpqrut1433264717.jpg',
      strFanart4: 'https://www.thesportsdb.com/images/media/league/fanart/mp5dgu1557303694.jpg',
      strBanner: 'https://www.thesportsdb.com/images/media/league/banner/vtwruv1433265799.jpg',
      strBadge: 'https://www.thesportsdb.com/images/media/league/badge/3mhiil1517699467.png',
      strLogo: 'https://www.thesportsdb.com/images/media/league/logo/uqxttq1433265568.png',
      strPoster: 'https://www.thesportsdb.com/images/media/league/poster/p1qelr1557303737.jpg',
      strTrophy: 'https://www.thesportsdb.com/images/media/league/trophy/vqryuq1422284307.png',
      strNaming: '{strHomeTeam} vs {strAwayTeam}',
      strComplete: null,
      strLocked: 'unlocked'
    }
  ]
};
/* tslint:enable */

describe('LeagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeagueService]
    });
  });

  it('should be initialized',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        expect(leagueService).toBeTruthy();
      })
    )
  ;

  it('expects service to fetch data with the good url and method',
    inject([HttpTestingController, LeagueService],
      (httpMock: HttpTestingController, leagueService: LeagueService) => {

        leagueService.getLeagues();

        const req = httpMock.expectOne(`${environment.apiUrl}/search_all_leagues.php?c=${environment.country}&s=${environment.sportScope}`);
        expect(req.request.method).toEqual('GET');

        req.flush(fakeResponse);
      })
    )
  ;

  it('expects service to fetch data and build the data with expected format',
    inject([HttpTestingController, LeagueService],
      (httpMock: HttpTestingController, leagueService: LeagueService) => {
        leagueService.leaguesReadyEvent.subscribe(leagues => {
          expect(leagues.length).toBe(4);
          expect(leagues[0].name).toBe('Coupe de France');
          expect(leagues[0].id).toBe(4484);
        });

        leagueService.getLeagues();

        const req = httpMock.expectOne(`${environment.apiUrl}/search_all_leagues.php?c=${environment.country}&s=${environment.sportScope}`);
        req.flush(fakeResponse);
      })
    )
  ;

  it('should dispatch a league after selection',
  inject([LeagueService],
    (leagueService: LeagueService) => {
      leagueService.leagueSelectedEvent.subscribe(result => {
        expect(result).toEqual(league);
      });

      const league = {id: 1234, name: 'test'};

      leagueService.selectLeague(league);
    })
  )
;
});
