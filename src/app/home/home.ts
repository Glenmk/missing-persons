import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MissingPersonListComponent } from '../missing-person-list/missing-person-list.component';
import { MissingPersonsService } from '../missing-persons.service';

@Component({
  selector: 'app-home',
  imports: [MissingPersonListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected missingPeopleService = inject(MissingPersonsService);
}
