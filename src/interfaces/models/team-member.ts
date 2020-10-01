/**
 * Represent a team member
 *
 * @deprecated due to Patreon, require a key to be used
 */
export interface TeamMember {
  /** unique identifier */
  id: number;

  /** name of the team member */
  name: string;

  /** costing of contract */
  price: string;

  /** position in team */
  position: string;

  /** picture of the player */
  picture: string;

  /** birthdate of the player */
  birthDate: Date;
}
