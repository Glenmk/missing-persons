import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonForm } from './add-person-form';

describe('AddPersonForm', () => {
  let component: AddPersonForm;
  let fixture: ComponentFixture<AddPersonForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPersonForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
