import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MissingPersonListComponent } from '../missing-person-list/missing-person-list.component';
import { MissingPeopleService } from '../missing-persons.service';

@Component({
  selector: 'app-home',
  imports: [MissingPersonListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected missingPeopleService = inject(MissingPeopleService);
}
