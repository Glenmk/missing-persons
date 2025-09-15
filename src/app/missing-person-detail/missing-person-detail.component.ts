import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MissingPersonsService } from '../missing-persons.service';
import { MissingPerson } from '../missing-person.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-missing-person-detail',
  templateUrl: './missing-person-detail.component.html',
  styleUrls: ['./missing-person-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, DatePipe]
})
export class MissingPersonDetailComponent {
  private route = inject(ActivatedRoute);
  private missingPersonsService = inject(MissingPersonsService);

  private personId = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id'))
  ));

  person = computed(() => {
    const id = this.personId();
    if (!id) return null;
    return this.missingPersonsService.getPersonById(id);
  });
}
