import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEightComponent } from './footer-eight.component';

describe('FooterEightComponent', () => {
  let component: FooterEightComponent;
  let fixture: ComponentFixture<FooterEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
