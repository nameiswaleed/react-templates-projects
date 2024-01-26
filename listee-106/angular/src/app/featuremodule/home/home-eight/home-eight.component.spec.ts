import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEightComponent } from './home-eight.component';

describe('HomeEightComponent', () => {
  let component: HomeEightComponent;
  let fixture: ComponentFixture<HomeEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
