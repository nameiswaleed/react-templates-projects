import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingComponent } from './my-listing.component';

describe('MyListingComponent', () => {
  let component: MyListingComponent;
  let fixture: ComponentFixture<MyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
