import {
  async,
  TestBed,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppComponent } from './app.component';

import { LeagueService } from 'src/app/services/league.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get the leagues', () => {
    const service = TestBed.get(LeagueService);
    spyOn(service , 'getLeagues').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Footbook');
    expect(compiled.querySelector('.subtitle').textContent).toContain('Discover champions.');
  });
});
