import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { computed } from '@angular/core';
import { MissingPersonsService } from '../missing-persons.service';

@Component({
  selector: 'app-missing-person-detail',
  templateUrl: './missing-person-detail.component.html',
  styleUrls: ['./missing-person-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissingPersonDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private missingPersonsService = inject(MissingPersonsService);

  private personId = computed(() => this.route.snapshot.paramMap.get('id'));

  person = computed(() => {
    const id = this.personId();
    return id ? this.missingPersonsService.getPersonById(id) : null;
  });

  markAsFound() {
    const id = this.personId();
    if (id) {
      this.missingPersonsService.markAsFound(id);
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
