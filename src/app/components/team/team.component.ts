import { Component, Input } from '@angular/core';

import { Team } from 'src/interfaces/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @Input() team: Team;
}
