import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { TeamMembersResolver } from './resolvers/team-member.resolver';
import { TeamMembersComponent } from './pages/team-members/team-members.component';

/* istanbul ignore next */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team/:teamId', component: TeamMembersComponent, resolve: {teamMembers: TeamMembersResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
