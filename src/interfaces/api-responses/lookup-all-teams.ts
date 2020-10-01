/**
 * Response from https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php
 */
export interface LookupAllTeams {
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
    }
  ];
}
