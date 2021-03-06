import {
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TeamMemberService } from './team-member.service';

import { environment } from 'src/environments/environment';

/* tslint:disable */
const fakeResponse = {
  player: [
    {
      idPlayer: '34149439',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Senegal',
      strPlayer: 'Baba Diawara',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '147',
      dateBorn: '1988-01-05',
      strNumber: null,
      dateSigned: '2014-09-21',
      strSigning: 'Signed',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Dakar, Senegal',
      strDescriptionEN: 'Papa Babacar \'Baba\' Diawara (born 5 January 1988) is a Senegalese professional footballer who plays as a striker for Australian club Adelaide United FC.\r\n\r\nFootball career\r\nMarítimo\r\nBorn in Dakar, Diawara started his career with Senegal Premier League club ASC Jeanne d\'Arc, moving to Europe aged just 19 to sign for C.S. Marítimo in Portugal. Having risen to prominence in the B-side, he made his debut for the main squad late into the 2007–08 season, appearing in the second half of a 1–1 Primeira Liga home draw against C.F. Estrela da Amadora.\r\n\r\nPromoted to the first team the following summer, Diawara scored ten goals in the 2008–09 campaign, in 25 league games. His form attracted the attention of several clubs, including Sporting Clube de Portugal, Olympiacos F.C. from Greece and Scotland\'s Heart of Midlothian, with the latter however being put off by Marítimo\'s £2.5 million (€2.75 million) valuation of the player.\r\n\r\nDiawara bettered his individual totals to 11 goals in 2010–11, with Marítimo finishing in ninth position. Celtic came close to signing him in August 2011, but the deal collapsed on the last day of the transfer window due to visa issues.\r\n\r\nDiawara netted ten goals in only 15 matches in the first half of the 2011–12 season, including the last-minute winner at Sporting in a 3–2 win.\r\n\r\nSevilla\r\nDiawara signed with Sevilla FC on 17 January 2012, penning a 4½-year contract. He made his La Liga debut on the 29th, coming on as a substitute for José Antonio Reyes late into the first half of a 1–2 loss at Málaga CF. His first goal came on 3 March, starting the first time due to Álvaro Negredo\'s injury and equalising in a 1–1 draw against Atlético Madrid at the Ramón Sánchez Pizjuán Stadium.\r\n\r\nOn 17 April 2012, Diawara scored the opening goal in the new National Stadium in Warsaw, during a friendly with local Legia Warsaw, adding another in a 2–0 win. He netted twice on 5 May as Sevilla won 5–2 in their final home match of the season, against Rayo Vallecano. In the following campaign he did not find the net, featuring mainly from the bench.\r\n\r\nIn July 2013, Diawara was one of three Sevilla players deemed surplus to requirements by coach Unai Emery. On 19 August, he was loaned to fellow Spaniards Levante UD for the duration of 2013–14.\r\n\r\nAdelaide United\r\nIn February 2017, after one-and-a-half seasons with former club Marítimo, Diawara joined Adelaide United FC in the Australian A-League.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Forward',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.82 m (6 ft 0 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/e2ur4a1532343970.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149178',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '9168',
      idPlayerManager: null,
      strNationality: 'Brazil',
      strPlayer: 'Cassio',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1980-01-08',
      strNumber: null,
      dateSigned: '2007-07-01',
      strSigning: '',
      strWage: null,
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: null,
      strDescriptionEN: null,
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Defender',
      strCollege: null,
      strFacebook: null,
      strWebsite: null,
      strTwitter: null,
      strInstagram: null,
      strYoutube: null,
      strHeight: '0',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/6tghb51530755831.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149124',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Australia',
      strPlayer: 'Craig Goodwin',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '934',
      dateBorn: '1991-12-16',
      strNumber: null,
      dateSigned: '2012-05-07',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Adelaide, Australia',
      strDescriptionEN: 'Craig Alexander Goodwin (born 16 December 1991) is an Australian international football (soccer) player who plays for Adelaide United in the A-League. Goodwin has represented the Australian national team and has also previously appeared for the under-23 national side.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Left Wing',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '',
      strWeight: '',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/nl9zsi1544958909.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34156815',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Turkey',
      strPlayer: 'Ersan Gulum',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '210',
      dateBorn: '1987-05-17',
      strNumber: null,
      dateSigned: '2010-08-01',
      strSigning: 'Loan (Hebei China Fortune)',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Carlton, Melbourne, Australia',
      strDescriptionEN: 'Ersan Adem Gülüm (Turkish pronunciation: , born 17 May 1987) is a Turkish professional footballer who plays as a centre back for Adelaide United on loan from Chinese club, Hebei China Fortune. Born in Australia, Gülüm played for Australia at under-23 level before electing to represent Turkey in senior competition.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Defender',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.86',
      strWeight: '',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/3uwvf01518365247.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149229',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'England',
      strPlayer: 'George Blackwood',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '933',
      dateBorn: '1997-04-06',
      strNumber: null,
      dateSigned: '2014-07-01',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Berowra, New South Wales, Australia',
      strDescriptionEN: 'George Henry Raymond Blackwood (born 4 June 1997) is an Australian professional footballer who plays as a striker for Adelaide United in the A-League.\r\n\r\nBorn in Sydney, Blackwood played youth football for APIA Leichhardt Tigers before making his professional debut for Sydney FC in 2014.\r\n\r\nBlackwood has represented Australia at under-20 and under-23 level.\r\n\r\nEarly life\r\nBlackwood was born to British parents and grew up in Berowra, New South Wales. He attended Asquith Boys High School. Blackwood has two younger brothers and is a cricket fan.\r\n\r\nClub career\r\nEarly career\r\nBlackwood spent a month training at Colchester United in 2013 after winning a scholarship award in Australia.\r\n\r\nSydney FC\r\nGeorge was first called up to Sydney FC\'s senior squad for a match against Melbourne City in October 2014. He scored his first goal for the club in a draw against Central Coast Mariners on 16th of March 2016 with a shot from outside the box. Blackwood denied a new contract from Sydney fc at the end of the 2016/17 season and became a free agent as a result 2016–17 season.\r\n\r\nAdelaide United\r\nIn July 2017, Adelaide United signed Blackwood.\r\n\r\nInternational career\r\nBlackwood was first selected for the Australian under-20 team for the 2014 AFF U-19 Youth Championship in September 2014.\r\n\r\nIn March 2015, Blackwood was called up to the Australian under-23 team to replace injured Sydney FC teammate Terry Antonis for 2016 AFC U-23 Championship qualification.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Forward',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.88 m (6 ft 2 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/8mmnn11547468180.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149184',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '9176',
      idPlayerManager: null,
      strNationality: 'Spain',
      strPlayer: 'Isaias',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1987-02-09',
      strNumber: null,
      dateSigned: '2013-07-01',
      strSigning: 'Signed',
      strWage: null,
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: null,
      strDescriptionEN: null,
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Midfielder',
      strCollege: null,
      strFacebook: null,
      strWebsite: null,
      strTwitter: null,
      strInstagram: null,
      strYoutube: null,
      strHeight: '0',
      strWeight: '70.29',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/6lwjbg1530756279.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149187',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Australia',
      strPlayer: 'Jake Barker-Daish',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1993-05-07',
      strNumber: null,
      dateSigned: '2012-07-01',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Melbourne, Australia',
      strDescriptionEN: 'Jake Barker-Daish (born 7 May 1993) is an Australian football (soccer). He is a former midfielder for Adelaide United in the A-League. In the 2010/2011 season Barker-Daish won the Australian Institute of Sport Player of the Year.\r\n\r\nClub career\r\nYouth Career\r\nBarker-Daish was selected for the Australian Institute of Sport at just 15 years of age.\r\n\r\nGold Coast United\r\nIn 2011 Barker-Daish signed with A-League club Gold Coast United. He made his professional debut in the 2011-2012 A-League season on 17 February 2012, in a round 21 clash against Melbourne Heart. He made 7 appearances for Gold Coast United, where he managed to gain 3 assists in his first two starts.\r\n\r\nAdelaide United\r\nOn 6 April 2012 it was announced that Barker-Daish had signed for Adelaide United in the A-League. He would feature in 19 appearances over 2 injury-interrupted seasons for the Reds, scoring 2 goals in his time there.\r\n\r\nColne F.C.\r\nAfter being released from Adelaide United, Jake signed a short-term contract with North West Counties Football League side Colne F.C.. He made two league appearances and made two appearances in the Men United Cup winning the man of the match award in a match against Silsden F.C., a match in which he also scored the winning goal.\r\n\r\nNPL Victoria\r\nIn February 2015, Barker-Daish signed for South Melbourne in the NPL.\r\n\r\nHe then joined newly promoted Richmond SC in February 2016. Despite scoring 9 goals for the club and winning the clubs Most Valuable Player award, they were unable to escape relegation, losing 4-0 to North Geelong Warriors in the promotion-relegation playoff.\r\n\r\nBarker-Daish joined Melbourne Knights for the 2017 season. Due to a serious hip injury his season was cut short and was unable to continue to play for the club after round 3 of the 2017 season. \r\n\r\nInternational career\r\nBarker-Daish has represented his country at the 2011 FIFA U-20 World Cup in Colombia.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Midfielder',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '179 cm (5 ft 10 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/pi4oet1547028108.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149182',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Australia',
      strPlayer: 'Jordan Elsey',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1994-03-02',
      strNumber: null,
      dateSigned: '2013-07-01',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Adelaide, Australia',
      strDescriptionEN: 'Jordan Elsey (born 2 March 1994) is an Australian football (soccer) player who plays as a centre back for Adelaide United in the A-League.\r\n\r\nPlaying career\r\nIn December 2013 Elsey joined Hong Kong First Division League side Kitchee SC on loan, however he was recalled early and subsequently did not make a senior appearance.\r\n\r\nIn January 2014, Elsey scored his debut goal for Adelaide United in stoppage time of a match against league leaders Brisbane Roar, giving Adelaide United a surprising 2–1 victory.\r\n\r\nOn 4 November 2014 Adelaide United confirmed that Jordan had ruptured his Anterior Cruciate Ligament. He made his return to action on 7 November 2015 playing for the Adelaide United Youth side.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Defender',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.88 m (6 ft 2 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/bmn0rc1547036586.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149185',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: '954280',
      strNationality: 'Argentina',
      strPlayer: 'Marcelo Carrusca',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1983-09-01',
      strNumber: null,
      dateSigned: '2012-07-01',
      strSigning: 'Signed',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'La Plata, Buenos Aires, Argentina',
      strDescriptionEN: 'Marcelo Adrián Carrusca (American Spanish: ; born 1 September 1983), is an Argentine-Australian professional footballer who plays for West Adelaide. He usually plays as an attacking midfielder.\r\n\r\nBorn in La Plata, Carrusca started his professional career at Estudiantes de La Plata before moving to Turkish side Galatasaray S.K. (football) in 2006. After spending a season on loan for Mexican club Cruz Azul, Carrusca returned to Estudiantes in 2009, playing one further season at the club and one on loan at Banfield. After one season with San Martín de San Juan, Carrusca moved to A-League club Adelaide United in 2012, where he played for five seasons.\r\n\r\nCarrusca has represented Argentina under-20, including in the victorious 2003 South American U-20 Championship team and the 2003 FIFA World Youth Championship. He obtained Australian citizenship in 2017.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Midfielder',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.77 m (5 ft 10 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/x7br8e1547028213.jpg',
      strCutout: 'https://www.thesportsdb.com/images/media/player/cutout/954280.png',
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149195',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: '15001991',
      strNationality: 'Australia',
      strPlayer: 'Michael Marrone',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1987-01-26',
      strNumber: null,
      dateSigned: '2014-02-07',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Adelaide, Australia',
      strDescriptionEN: 'Michael Marrone (born 27 January 1987) is an Australian footballer who plays for Adelaide United in the A-League.\r\n\r\nClub career\r\nMarrone made his professional debut on 18 December 2008 in the FIFA Club World Cup fifth-placed match against Al-Ahly. He came off the bench in the 54th minute to replace Daniel Mullen.\r\n\r\nAdelaide United, 2008–10\r\nOn 25 January 2009, he made his A-League debut for Adelaide United against the Central Coast Mariners.\r\n\r\nOn 3 March 2009, Marrone was signed to a full senior contract for Adelaide after having played for their youth squad. He played 26 games for Adelaide United before signing with the new team Melbourne Heart.\r\n\r\nMelbourne Heart\r\nOn 30 April 2010, it was announced that Marrone had signed with new A-League club Melbourne Heart for two years. He has played regularly at right back for the new club, and missed only one game in their inaugural season, which was the third Melbourne derby. In the fourth round of the season, he scored an own goal for Heart, in a match which was to end up a 2–2 draw with Perth Glory.\r\n\r\nAfter the end of his first season with Melbourne Heart, Marrone travelled to the United Kingdom to partake in trials with British clubs Queens Park Rangers, Charlton Athletic and Celtic, and also played in a friendly match for Leicester City against West Bromwich Albion on 24 March 2011. He also attracted interest from Italian Serie A side Cagliari.\r\n\r\nAdelaide United, 2014–\r\nOn 3 February 2014, it was announced that Marrone was signed to return to Adelaide United, after a spell with Chinese club Shanghai Shenxin. After working his way into the starting line-up, he fractured two leg bones in a match against his former club Melbourne Heart on 4 April 2014.\r\n\r\nInternational career\r\nHe received his first call-up for the full national team by coach Pim Verbeek in preparation for the match against Indonesia in Brisbane on 3 March 2010.\r\n\r\nOn 21 February 2012 he was selected to play against Saudi Arabia national football team in a World Cup qualification match.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Defender',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.79 m (5 ft 10 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/sd20hh1547048374.jpg',
      strCutout: 'https://www.thesportsdb.com/images/media/player/cutout/15001991.png',
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149175',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Australia',
      strPlayer: 'Paul Izzo',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '932',
      dateBorn: '1995-01-06',
      strNumber: null,
      dateSigned: '2011-07-01',
      strSigning: '',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Adelaide, Australia',
      strDescriptionEN: 'Paul David Izzo (Italian pronunciation: ; born 6 January 1995) is an Australian professional football (soccer) player, who currently plays as a goalkeeper for Adelaide United in the A-League.\r\n\r\nIzzo played youth football at the Australian Institute of Sport before making his professional debut for Adelaide United. In 2015, he joined Central Coast Mariners before returning to Adelaide United in 2017.\r\n\r\nHe has appeared numerous times for the Australian under-20 side.\r\n\r\nClub career\r\nAdelaide United\r\nIzzo made his professional debut against the Central Coast Mariners away at Bluetongue Stadium on 1 December 2012, replacing Eugene Galeković who was unavailable as a result of international duties. His first home game appearance for Adelaide United was against Melbourne Victory on 7 December 2012.\r\n\r\nCentral Coast Mariners\r\nIzzo was released by Adelaide United on 8 July 2015, and subsequently signed with the Mariners for two years.\r\n\r\nReturn to Adelaide United\r\nIn April 2017, Izzo returned to hometown club Adelaide United on a three-year contract.\r\n\r\nInternational career\r\nIzzo represented Australia at U20 level at the 2012 AFC U-19 Championship in United Arab Emirates.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Goalkeeper',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.85 m (6 ft 1 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/3ju7ng1547047097.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    },
    {
      idPlayer: '34149062',
      idTeam: '134472',
      idTeamNational: null,
      idSoccerXML: '932',
      idPlayerManager: null,
      strNationality: 'Australia',
      strPlayer: 'Scott Galloway',
      strTeam: 'Adelaide United',
      strTeamNational: null,
      strSport: 'Soccer',
      intSoccerXMLTeamID: '937',
      dateBorn: '1995-04-25',
      strNumber: null,
      dateSigned: '2013-07-01',
      strSigning: 'Youth',
      strWage: '',
      strOutfitter: null,
      strKit: null,
      strAgent: null,
      strBirthLocation: 'Perth, Australia',
      strDescriptionEN: 'Scott Robert Galloway (born 25 April 1995) is an Australian professional football (soccer) player who plays as a fullback for Adelaide United in the A-League.\r\n\r\nBorn in Perth, Galloway played youth football for the Australian Institute of Sport before making his professional debut for Melbourne Victory in 2013. He moved to Central Coast Mariners in 2016.\r\n\r\nGalloway has made numerous appearances for Australia\'s under-20 and under-23 sides. He played in the 2013 FIFA U-20 World Cup.\r\n\r\narly life\r\nGalloway\'s father, himself a football fan, grew up in Northern Ireland before moving to Australia, where Scott was born. His first club was Gosnells City in Perth, and he initially played in midfield before later moving into the defence. He was also a youth taekwondo champion.\r\n\r\nClub career\r\nMelbourne Victory\r\nGalloway was one of three Melbourne Victory summer signings of 2013, along with Francesco Stella and Jesse Makarounas. He debuted in the Melbourne derby against crosstown rivals Melbourne Heart on 2 February 2013, a game in which they won 2-1, with goals from Archie Thompson and Mark Milligan. Galloway scored his first goal for the club in a loss to Wellington Phoenix on 2 March 2015.\r\n\r\nCentral Coast Mariners\r\nOn 19 October 2016, Galloway left Melbourne Victory after failing to secure regular game time at the club and joined Central Coast Mariners. He made his first appearance for the club as a substitute in a loss to Brisbane Roar three days later.\r\n\r\nIn May 2017, the Mariners allowed Galloway to travel to the Netherlands for a trial with Willem II. Three days later, the Mariners announced that Galloway would be leaving the club, although this was said not to be directly related to his Dutch trial.\r\n\r\nWellington Phoenix\r\nDespite trialing in the Netherlands, on 29 June 2017, Galloway joined Wellington Phoenix on a one-year contract following Rado Vidošić and Darije Kalezić convincing him it would be the best place for him to develop his game.\r\n\r\nAdelaide United\r\nAfter being on trial for the club, Galloway officially signed for A-League side Adelaide United for the 2018–19 season. He scored his first goal for Adelaide in the first game of the 2018–19 A-League, a 1–1 draw with Sydney FC.',
      strDescriptionDE: null,
      strDescriptionFR: null,
      strDescriptionCN: null,
      strDescriptionIT: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionIL: null,
      strDescriptionPL: null,
      strGender: 'Male',
      strSide: null,
      strPosition: 'Defender',
      strCollege: null,
      strFacebook: '',
      strWebsite: '',
      strTwitter: '',
      strInstagram: '',
      strYoutube: '',
      strHeight: '1.72 m (5 ft 8 in)',
      strWeight: '0',
      intLoved: '0',
      strThumb: 'https://www.thesportsdb.com/images/media/player/thumb/37v08l1547385515.jpg',
      strCutout: null,
      strRender: null,
      strBanner: null,
      strFanart1: null,
      strFanart2: null,
      strFanart3: null,
      strFanart4: null,
      strCreativeCommons: null,
      strLocked: 'unlocked'
    }
  ]
};
/* tslint:enable */

describe('TeamMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamMemberService]
    });
  });

  it('should be initialized',
    inject([TeamMemberService],
      (teamMemberService: TeamMemberService) => {
        expect(teamMemberService).toBeTruthy();
      })
    )
  ;

  it('expects service to fetch data with the good url and method',
    inject([HttpTestingController, TeamMemberService],
      (httpMock: HttpTestingController, teamMemberService: TeamMemberService) => {
        teamMemberService.getTeamMembers(4334).subscribe();

        const req = httpMock.expectOne(`${environment.apiUrl}/lookup_all_players.php?id=4334`);
        expect(req.request.method).toEqual('GET');
        req.flush(fakeResponse);
      })
    )
  ;

  it('expects service to fetch data and build the data with expected format',
    inject([HttpTestingController, TeamMemberService],
      (httpMock: HttpTestingController, teamMemberService: TeamMemberService) => {
        teamMemberService.getTeamMembers(4334).subscribe(teams => {
          expect(teams.length).toBe(12);
          const member = teams[0];
          expect(member.id).toBe(34149439);
          expect(member.name).toBe('Baba Diawara');
          expect(member.price).toBe('Signed');
          expect(member.position).toBe('Forward');
          expect(member.picture).toBeNull();
          expect(member.birthDate.toISOString()).toBe('1988-01-05T00:00:00.000Z');
        });

        const req = httpMock.expectOne(`${environment.apiUrl}/lookup_all_players.php?id=4334`);
        req.flush(fakeResponse);
      })
    )
  ;

  it('expects service to fetch empty data and build the data with expected format',
  inject([HttpTestingController, TeamMemberService],
    (httpMock: HttpTestingController, teamMemberService: TeamMemberService) => {
      teamMemberService.getTeamMembers(4334).subscribe(teams => {
        expect(teams.length).toBe(0);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/lookup_all_players.php?id=4334`);
      req.flush({ player: null });
    })
  )
;
});
