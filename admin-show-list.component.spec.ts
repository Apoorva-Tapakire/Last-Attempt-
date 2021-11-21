import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowListComponent } from './admin-show-list.component';

describe('AdminShowListComponent', () => {
  let component: AdminShowListComponent;
  let fixture: ComponentFixture<AdminShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
