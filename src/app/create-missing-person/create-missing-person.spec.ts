import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissingPerson } from './create-missing-person';

describe('CreateMissingPerson', () => {
  let component: CreateMissingPerson;
  let fixture: ComponentFixture<CreateMissingPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMissingPerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMissingPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
