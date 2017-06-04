import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateChangeTableComponent } from './climate-change-table.component';

describe('ClimateChangeTableComponent', () => {
  let component: ClimateChangeTableComponent;
  let fixture: ComponentFixture<ClimateChangeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateChangeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateChangeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
