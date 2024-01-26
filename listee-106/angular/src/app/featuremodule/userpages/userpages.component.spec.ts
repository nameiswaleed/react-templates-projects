import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpagesComponent } from './userpages.component';

describe('UserpagesComponent', () => {
  let component: UserpagesComponent;
  let fixture: ComponentFixture<UserpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
