import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingmapListComponent } from './listingmap-list.component';

describe('ListingmapListComponent', () => {
  let component: ListingmapListComponent;
  let fixture: ComponentFixture<ListingmapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingmapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
