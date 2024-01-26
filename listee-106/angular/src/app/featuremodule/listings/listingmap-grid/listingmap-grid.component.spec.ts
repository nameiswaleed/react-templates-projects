import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingmapGridComponent } from './listingmap-grid.component';

describe('ListingmapGridComponent', () => {
  let component: ListingmapGridComponent;
  let fixture: ComponentFixture<ListingmapGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingmapGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingmapGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
