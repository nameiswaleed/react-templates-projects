import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSevenComponent } from './home-seven.component';

describe('HomeSevenComponent', () => {
  let component: HomeSevenComponent;
  let fixture: ComponentFixture<HomeSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
