import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MissingPersonsService } from '../missing-persons.service';
import { RouterLink } from '@angular/router';
import { MissingPersonCardComponent } from '../missing-person-card/missing-person-card.component';

@Component({
  selector: 'app-missing-person-list',
  templateUrl: './missing-person-list.component.html',
  styleUrls: ['./missing-person-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MissingPersonCardComponent],
})
export class MissingPersonListComponent {
  private missingPersonsService = inject(MissingPersonsService);
  missingPeople = this.missingPersonsService.getMissingPeople();

  constructor() {
    this.missingPersonsService.loadMissingPeople();
  }
}
