import {
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TeamInformationsService } from './team-informations.service';

import { environment } from 'src/environments/environment';

/* tslint:disable */
const fakeResponse = {
  teams: [
    {
      idTeam: "133822",
      idSoccerXML: "238",
      idAPIfootball: "116",
      intLoved: null,
      strTeam: "Lens",
      strTeamShort: null,
      strAlternate: "RC Lens",
      intFormedYear: "1906",
      strSport: "Soccer",
      strLeague: "French Ligue 1",
      idLeague: "4334",
      strLeague2: "Coupe de France",
      idLeague2: "4484",
      strLeague3: "",
      idLeague3: null,
      strLeague4: "",
      idLeague4: null,
      strLeague5: "",
      idLeague5: null,
      strLeague6: "",
      idLeague6: null,
      strLeague7: "",
      idLeague7: null,
      strDivision: null,
      strManager: "",
      strStadium: "Stade Félix Bollaert",
      strKeywords: "",
      strRSS: "",
      strStadiumThumb: "https://www.thesportsdb.com/images/media/team/stadium/vwsptv1420772935.jpg",
      strStadiumDescription: "The Stade Bollaert-Delelis is the main football stadium in Lens, France, that was built in 1933. It is the home of RC Lens. The stadium's capacity is 38,058 – about 7,000 more than the city's population. The stadium was originally named after Félix Bollaert, a director of Compagnie des Mines de Lens, who was anxious to promote the development of sports clubs in the city. Construction began in 1931, though Bollaert died shortly before the stadium's inauguration. It was renamed Stade Bollaert-Delelis in 2012 after the death of André Delelis, former mayor of the city and politician who served as the Minister of Commerce under President François Mitterrand.",
      strStadiumLocation: "Lens",
      intStadiumCapacity: "41229",
      strWebsite: "www.rclens.fr",
      strFacebook: "www.facebook.com/racingclubdelens",
      strTwitter: "twitter.com/rclensofficiel",
      strInstagram: "",
      strDescriptionEN: "Racing Club de Lens (commonly referred to as RC Lens or simply Lens), is a French football club based in the northern city of Lens in the Pas-de-Calais department. Its nickname, sang et or (blood and gold), comes from its traditional colours of red and gold. Their primary rivals are their northern neighbours Lille, with whom they contest the Derby du Nord.",
      strDescriptionDE: null,
      strDescriptionFR: "Le Racing Club de Lens, couramment abrégé en RC Lens ou en RCL, est un club professionnel de football français fondé en janvier 1906 et dont le siège se trouve à Avion, à trois kilomètres de la cité minière. Le RC Lens compte à son palmarès deux titres nationaux de premier ordre, obtenus sous les ordres du « druide » Daniel Leclercq : un championnat de France, remporté en 1998, et une Coupe de la Ligue, obtenue la saison suivante. À l'échelle européenne, le club a atteint en 2000 les demi-finales de la Coupe UEFA et a remporté une Coupe Intertoto en 2005. Depuis 2013, le club est présidé par Gervais Martel, qui avait déjà assuré la présidence du club de 1988 à 2012. L'équipe première, entraînée par Antoine Kombouaré depuis le 18 juillet 2013, prend part à l'édition 2014-2015 du championnat de France de première division, sa cinquante-huitième saison dans l'élite du football français. Depuis le 18 juin 1933, le RC Lens est résident du stade Bollaert-Delelis (anciennement stade Félix-Bollaert, jusqu'en septembre 2012), devenu depuis l'Euro 1984 une des plus grandes enceintes en France en nombre de places assises. En cours de rénovation en vue de l'Euro 2016, il pourra accueillir jusqu'à 38 223 personnes, alors que sa capacité était de 41 229 places auparavant. Durant cette période (2014-2015), le RC Lens accueille ses adversaires au stade de la Licorne à Amiens, et par trois fois au stade de France.",
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: "El Racing Club de Lens es un club de fútbol francés, de la ciudad de Lens en Norte-Paso de Calais. Fue fundado en 1906 y juega en la Ligue 1 francesa.",
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: "Male",
      strCountry: "France",
      strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/3pxoum1598797195.png",
      strTeamJersey: "https://www.thesportsdb.com/images/media/team/jersey/upvsuv1423781667.png",
      strTeamLogo: null,
      strTeamFanart1: "https://www.thesportsdb.com/images/media/team/fanart/qxyqxq1420762717.jpg",
      strTeamFanart2: "https://www.thesportsdb.com/images/media/team/fanart/yrsswp1420762782.jpg",
      strTeamFanart3: "https://www.thesportsdb.com/images/media/team/fanart/xwxtpx1420762846.jpg",
      strTeamFanart4: null,
      strTeamBanner: "https://www.thesportsdb.com/images/media/team/banner/txrwyq1423691048.jpg",
      strYoutube: "www.youtube.com/user/rclensofficiel",
      strLocked: "unlocked"
    }
  ]
};
/* tslint:enable */

describe('TeamInformationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamInformationsService]
    });
  });

  it('should be initialized',
    inject([TeamInformationsService],
      (teamInformationsService: TeamInformationsService) => {
        expect(teamInformationsService).toBeTruthy();
      })
    )
  ;

  it('expects service to fetch data with the good url and method',
    inject([HttpTestingController, TeamInformationsService],
      (httpMock: HttpTestingController, teamInformationsService: TeamInformationsService) => {
        teamInformationsService.getTeamInformations(133822).subscribe();

        const req = httpMock.expectOne(`${environment.apiUrl}/lookupteam.php?id=133822`);
        expect(req.request.method).toEqual('GET');
        req.flush(fakeResponse);
      })
    )
  ;

  it('expects service to fetch data and build the data with expected format',
    inject([HttpTestingController, TeamInformationsService],
      (httpMock: HttpTestingController, teamInformationsService: TeamInformationsService) => {
        teamInformationsService.getTeamInformations(133822).subscribe(team => {
          expect(team).toBeInstanceOf(Object);
          expect(team.id).toBe(133822);
          expect(team.name).toBe('Lens');
          expect(team.badge).toBe('https://www.thesportsdb.com/images/media/team/badge/3pxoum1598797195.png');
          expect(team.banner).toBe('https://www.thesportsdb.com/images/media/team/banner/txrwyq1423691048.jpg');
          expect(team.description).toBe('Racing Club de Lens (commonly referred to as RC Lens or simply Lens), is a French football club based in the northern city of Lens in the Pas-de-Calais department. Its nickname, sang et or (blood and gold), comes from its traditional colours of red and gold. Their primary rivals are their northern neighbours Lille, with whom they contest the Derby du Nord.');
          expect(team.website).toBe('www.rclens.fr');
          expect(team.facebook).toBe('www.facebook.com/racingclubdelens');
          expect(team.twitter).toBe('twitter.com/rclensofficiel');
          expect(team.instagram).toBe('');
          expect(team.league).toBe('French Ligue 1');
        });

        const req = httpMock.expectOne(`${environment.apiUrl}/lookupteam.php?id=133822`);
        req.flush(fakeResponse);
      })
    )
  ;

  it('expects service to fetch empty data and build the data with expected format',
  inject([HttpTestingController, TeamInformationsService],
    (httpMock: HttpTestingController, teamInformationsService: TeamInformationsService) => {
      teamInformationsService.getTeamInformations(133823).subscribe(teams => {
        expect(teams).toBeNull();
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/lookupteam.php?id=133823`);
      req.flush({ teams: [null] });
    })
  )
;
});
