import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 registrationForm = new FormGroup({
userName : new FormControl(''),
password  : new FormControl(''),
confirmpassword : new FormControl(''),

address: new FormGroup({
  State: new FormControl(''),
  City: new FormControl(''),
  Pin: new FormControl(''),
  
})
})
}
