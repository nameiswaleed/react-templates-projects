import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListSidebarComponent } from './blog-list-sidebar.component';

describe('BlogListSidebarComponent', () => {
  let component: BlogListSidebarComponent;
  let fixture: ComponentFixture<BlogListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
