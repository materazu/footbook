import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { TeamInformations } from 'src/interfaces/models/team-informations';

/**
 * Component for displaying one team
 */
@Component({
  selector: 'app-team-informations',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationsComponent implements OnInit {
  /** Team input to passing object to component */
  @Input() teamInformations: TeamInformations;

  /** social links of the team */
  socialLinks: {linkUrl: string, cssClass: string}[] = [];

  /**
   * LifeCycle Hook at start of component
   */
  ngOnInit() {
    this.createSociaLinks();
  }

  /**
   * Create links for iteration on template
   */
  createSociaLinks() {
    if (!this.teamInformations) {
      return;
    }

    const socialProperties = ['link', 'facebook', 'twitter', 'instagram'];
    socialProperties.forEach(socialProperty => {
      const key = 'link' === socialProperty
        ? 'website'
        : socialProperty
      ;
      const linkUrl = this.teamInformations[key];

      if (linkUrl) {
        const httpPrefix = linkUrl.startsWith('http')
          ? null
          : 'http://'
        ;
        const fontAwesomeScope = 'link' === socialProperty
          ? 'fas'
          : 'fab'
        ;

        this.socialLinks.push({
          linkUrl: `${httpPrefix}${linkUrl}`,
          cssClass: `${fontAwesomeScope} fa-${socialProperty} fa-3x`
        });
      }
    });
  }
}
