/**
 * Response from https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php
 */
export interface LookupTeam {
  /**
   * Teams array
   */
  teams: [
    {
      /** unique identifier */
      idTeam: string,

      /** name of team */
      strTeam: string,

      /** badge of team */
      strTeamBadge: string,

      /** banner image of team */
      strTeamBanner: string,

      /** description of team */
      strDescriptionEN: string,

      /** website of team */
      strWebsite: string,

      /** facebook page of team */
      strFacebook: string,

      /** twitter account of team */
      strTwitter: string,

      /** instagram account of team */
      strInstagram: string,

      /** first league of team */
      strLeague: string,
    }
  ];
}
