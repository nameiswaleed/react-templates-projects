import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingListSidebarComponent } from './listing-list-sidebar.component';

describe('ListingListSidebarComponent', () => {
  let component: ListingListSidebarComponent;
  let fixture: ComponentFixture<ListingListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingListSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
