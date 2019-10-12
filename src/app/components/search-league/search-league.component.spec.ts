import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLeagueComponent } from './search-league.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchLeagueComponent', () => {
  let component: SearchLeagueComponent;
  let fixture: ComponentFixture<SearchLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AutocompleteLibModule,
        HttpClientTestingModule,
      ],
      declarations: [
        SearchLeagueComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
