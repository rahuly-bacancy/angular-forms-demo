import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// This interface defines the shape of our form model.
interface UserFormData {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  skills: {
    angular: boolean;
    react: boolean;
    node: boolean;
  };
  country: string;
  bio: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  // This object stores the form data used by ngModel bindings.
  userFormData: UserFormData = {
    fullName: '',
    email: '',
    password: '',
    gender: '',
    skills: {
      angular: false,
      react: false,
      node: false,
    },
    country: '',
    bio: '',
  };

  // These arrays keep repeated values out of the HTML.
  genderOptions = ['Male', 'Female'];
  countryOptions = ['India', 'United States', 'Canada'];

  // This method runs when the user submits the form.
  onSubmit(): void {
    
  }
}
