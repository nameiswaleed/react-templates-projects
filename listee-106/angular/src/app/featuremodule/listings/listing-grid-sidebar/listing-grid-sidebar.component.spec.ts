import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGridSidebarComponent } from './listing-grid-sidebar.component';

describe('ListingGridSidebarComponent', () => {
  let component: ListingGridSidebarComponent;
  let fixture: ComponentFixture<ListingGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGridSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
