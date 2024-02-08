import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsFormsComponent } from './user-details-forms.component';

describe('UserDetailsFormsComponent', () => {
  let component: UserDetailsFormsComponent;
  let fixture: ComponentFixture<UserDetailsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
