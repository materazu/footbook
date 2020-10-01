/**
 * Represent team's informations
 */
export interface TeamInformations {
  /** unique identifier */
  id: number;

  /** name of the team */
  name: string;

  /** url of the badge */
  badge: string;

  /** url of banner */
  banner: string;

  /** description of team */
  description: string;

  /** website of team */
  website: string;

  /** facebook page of team */
  facebook: string;

  /** twitter account of team */
  twitter: string;

  /** instagram account of team */
  instagram: string;

  /** first league of team */
  league: string;
}
