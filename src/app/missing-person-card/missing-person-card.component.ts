import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MissingPerson } from '../missing-person.model';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-missing-person-card',
  templateUrl: './missing-person-card.component.html',
  styleUrls: ['./missing-person-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, DatePipe],
})
export class MissingPersonCardComponent {
  person = input.required<MissingPerson>();
}
