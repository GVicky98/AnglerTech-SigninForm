import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: '.app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    email:new FormControl('',[Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
  });

  get fc(){
    return this.form.controls;
  };

  onSubmitForm(){
    console.log(this.form.value);
  };

  errorMsgEmail(){
    if (this.fc.email.hasError('required'))
    {
      return "email is required!";
    }
    return this.fc.email.hasError('email') ? "email is invalid!" : "" ;
  };
  errorMsgPassword(){
    if (this.fc.password.hasError('required'))
    {
      return "password is required!";
    }
    if (this.fc.password.hasError('maxlength'))
    {
      return "password limit exceeded!";
    }
    return this.fc.password.hasError('minlength') ? "password must be minimum 8 chars!" : "" ;
  };
  hide = true;
}
