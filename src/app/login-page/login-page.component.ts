import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  
  login() {
    let name = this.checkoutForm.value.name;
    console.log(this.checkoutForm.value.name);
    localStorage.setItem('name', JSON.stringify(name));
  }

  storeLocally() {
    //let data : string = JSON.parse(<string>localStorage.getItem('collected'));
  }

  constructor(private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    name: '',
  });

  ngOnInit(): void {}
}
