/**
 * Response from https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php
 *
 * @deprecated due to Patreon, require a key to be used
 */
export interface LookupAllPlayers {
  /**
   * Players array
   */
  player: [
    {
      /** unique identifier */
      idPlayer: string,

      /** player name */
      strPlayer: string,

      /** player cost */
      strSigning: string,

      /** player position */
      strPosition: string,

      /** player picture */
      strCutout: string,

      /** player date of birth */
      dateBorn: string,
    }
  ];
}
