import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MissingPersonsService } from '../missing-persons.service';
import { MissingPerson, Gender } from '../missing-person.model';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AddPersonFormComponent {
  private fb = inject(FormBuilder);
  private missingPersonsService = inject(MissingPersonsService);
  private router = inject(Router);

  form = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0)]],
    gender: ['', Validators.required],
    lastSeenDate: ['', Validators.required],
    lastSeenLocation: ['', Validators.required],
    circumstances: ['', Validators.required],
    photoUrl: ['', Validators.required],
    contactName: ['', Validators.required],
    contactPhone: ['', Validators.required],
  });

  addPerson() {
    if (this.form.valid) {
      const { name, age, gender, lastSeenDate, lastSeenLocation, circumstances, photoUrl, contactName, contactPhone } = this.form.value;

      const newPerson: Omit<MissingPerson, 'id' | 'status'> = {
        name: name!,
        age: Number(age!),
        gender: gender! as Gender,
        lastSeenDate: lastSeenDate!,
        lastSeenLocation: lastSeenLocation!,
        circumstances: circumstances!,
        photoUrl: photoUrl!,
        contact: {
          name: contactName!,
          phone: contactPhone!,
        },
      };

      this.missingPersonsService.addPerson(newPerson);
      this.router.navigate(['/']);
    }
  }
}
