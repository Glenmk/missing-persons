import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { MissingPersonsService } from '../missing-persons.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-missing-person',
  templateUrl: './create-missing-person.component.html',
  styleUrls: ['./create-missing-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class CreateMissingPersonComponent {
  private router = inject(Router);
  private missingPersonsService = inject(MissingPersonsService);

  protected name = signal('');
  protected age = signal(0);
  protected lastSeenLocation = signal('');
  protected photoUrl = signal('');

  addPerson() {
    this.missingPersonsService.addPerson({
      name: this.name(),
      age: this.age(),
      lastSeenLocation: this.lastSeenLocation(),
      photoUrl: this.photoUrl(),
    });
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
