import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridSidebarComponent } from './blog-grid-sidebar.component';

describe('BlogGridSidebarComponent', () => {
  let component: BlogGridSidebarComponent;
  let fixture: ComponentFixture<BlogGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
