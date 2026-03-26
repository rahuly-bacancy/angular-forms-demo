import { Routes } from '@angular/router';
import { UserFormComponent } from './features/user-form/user-form.component';

export const routes: Routes = [
  // The default route loads the standalone user form component.
  { path: '', component: UserFormComponent },
];
