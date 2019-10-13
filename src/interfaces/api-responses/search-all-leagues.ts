/**
 * Response from https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php
 */
export interface SearchAllLeagues {
  /**
   * countrys array
   */
  countrys: [
    {
      /**
       * unique identifier
       */
      idLeague: string,
      /**
       * name of the league
       */
      strLeague: string
    }
  ];
}
