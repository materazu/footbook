/**
 * Api contract for service who call api
 */
export interface ApiContract {
  /** endpoint to be defines */
  endPoint: string;

  /** scope part of url */
  scope: string;
}
