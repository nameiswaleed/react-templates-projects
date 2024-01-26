import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNineComponent } from './footer-nine.component';

describe('FooterNineComponent', () => {
  let component: FooterNineComponent;
  let fixture: ComponentFixture<FooterNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
