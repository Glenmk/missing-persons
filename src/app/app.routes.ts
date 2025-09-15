import { Routes } from '@angular/router';
import { MissingPersonListComponent } from './missing-person-list/missing-person-list.component';
import { CreateMissingPersonComponent } from './create-missing-person/create-missing-person.component';
import { MissingPersonDetailComponent } from './missing-person-detail/missing-person-detail.component';

export const routes: Routes = [
  { path: '', component: MissingPersonListComponent },
  { path: 'add', component: CreateMissingPersonComponent },
  { path: 'person/:id', component: MissingPersonDetailComponent },
];
