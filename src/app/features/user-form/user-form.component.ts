import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {

  // These arrays keep repeated values out of the HTML.
  genderOptions = ['Male', 'Female'];
  countryOptions = ['India', 'United States', 'Canada'];
  fullName = 'Rahul Kumar';
  @ViewChild('userForm') userForm!: NgForm;
  // This method runs when the user submits the form.
  onSubmit(form: NgForm): void {
    console.log(this.userForm);
    this.userForm.reset();
  }
  patchValue(): void {
    this.userForm.form.patchValue({
      userInfo: {
        fullName: 'Rahul Kumar',
        email: 'rahul.kumar@example.com'
    }
    });
  }
  setValue(): void {
    this.userForm.form.setValue({
      userInfo: {
        fullName: 'Rahul Kumar Yadav',
        email: 'rahul.kumar@example.com',
        password: '123',
      },
      gender: '',
      country: '',
      bio: '',
      rememberMe: false
    });
  }


}