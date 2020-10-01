import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamInformationsComponent } from './pages/team-informations/team-informations.component';

import { TeamInformationsResolver } from './resolvers/team-informations.resolver';

/* istanbul ignore next */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'team/:teamId',
    component: TeamInformationsComponent,
    resolve: {
      teamInformations: TeamInformationsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
