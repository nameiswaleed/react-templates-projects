import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSevenComponent } from './footer-seven.component';

describe('FooterSevenComponent', () => {
  let component: FooterSevenComponent;
  let fixture: ComponentFixture<FooterSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
