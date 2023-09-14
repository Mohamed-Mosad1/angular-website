import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName: string = '';
  userAge:string = '';
  userEmail:string = '';
  userPassword:string = '';

  userNameInput(event: any) {
    this.userName = event.target.value
  }
  userAgeInput(event: any) {
    this.userAge = event.target.value
  }
  userEmailInput(event: any) {
    this.userEmail = event.target.value
  }
  userPasswordInput(event: any) {
    this.userPassword = event.target.value
  }

}
