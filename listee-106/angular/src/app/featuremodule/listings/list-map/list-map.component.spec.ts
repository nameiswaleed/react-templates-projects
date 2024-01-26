import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMapComponent } from './list-map.component';

describe('ListMapComponent', () => {
  let component: ListMapComponent;
  let fixture: ComponentFixture<ListMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
