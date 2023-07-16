import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @ViewChild('profileForm') profileForm!: NgForm;
  showEdit = false;

  constructor(){}
  toggle():void {
    this.showEdit =!this.showEdit;
  }
  onSubmit(profileForm: NgForm):void {
    if(profileForm.invalid){
      return;
    }
    profileForm.reset();
    this.toggle()
  }
}
