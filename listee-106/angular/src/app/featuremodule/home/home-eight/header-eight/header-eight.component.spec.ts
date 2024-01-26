import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEightComponent } from './header-eight.component';

describe('HeaderEightComponent', () => {
  let component: HeaderEightComponent;
  let fixture: ComponentFixture<HeaderEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
