import {
  Component,
  Input,
} from '@angular/core';

import { TeamMember } from 'src/interfaces/models/team-member';

/**
 * Component for displaying one team member
 */
@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {
  /**
   * Member input to passing object to component
   */
  @Input() member: TeamMember;
}