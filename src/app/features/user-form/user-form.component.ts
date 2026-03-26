import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {

  // These arrays keep repeated values out of the HTML.
  genderOptions = ['Male', 'Female'];
  countryOptions = ['India', 'United States', 'Canada'];

  // This method runs when the user submits the form.
  onSubmit(): void {
    
  }
}
