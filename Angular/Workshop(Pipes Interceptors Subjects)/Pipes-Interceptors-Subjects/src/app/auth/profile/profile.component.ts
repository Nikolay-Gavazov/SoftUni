import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData: any = {
    username: 'Pesho',
    email: 'pesho1@gmail.com',
    phone: '887 215 454'
  }
  emailDomains = DEFAULT_EMAIL_DOMAINS;
  @ViewChild('profileForm') profileForm!: NgForm;
  showEdit = false;

  constructor() { }
  toggle(): void {
    this.showEdit = !this.showEdit;
  }
  onSubmit(profileForm: NgForm): void {
    if (profileForm.invalid) {
      return;
    }
    this.userData.username = profileForm.value.username;
    this.userData.email = profileForm.value.email;
    this.userData.phone = profileForm.value.tel;

    profileForm.reset();
    this.toggle()
  }
}
