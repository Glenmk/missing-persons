import { Routes } from '@angular/router';
import { MissingPersonListComponent } from './missing-person-list/missing-person-list.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { MissingPersonDetailComponent } from './missing-person-detail/missing-person-detail.component';

export const routes: Routes = [
  { path: '', component: MissingPersonListComponent },
  { path: 'add', component: AddPersonFormComponent },
  { path: 'person/:id', component: MissingPersonDetailComponent },
];
