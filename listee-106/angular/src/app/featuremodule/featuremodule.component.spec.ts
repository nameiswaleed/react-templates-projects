import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturemoduleComponent } from './featuremodule.component';

describe('FeaturemoduleComponent', () => {
  let component: FeaturemoduleComponent;
  let fixture: ComponentFixture<FeaturemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturemoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
