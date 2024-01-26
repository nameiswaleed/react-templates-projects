import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNineComponent } from './home-nine.component';

describe('HomeNineComponent', () => {
  let component: HomeNineComponent;
  let fixture: ComponentFixture<HomeNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
