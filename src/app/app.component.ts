import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {

  registrationForm : FormGroup

  constructor(private fb:FormBuilder){
     this.registrationForm = this.fb.group({
      userName: ['Someone', Validators.required],
      password:[''],
      confirmpassword:[''],
      address: this.fb.group({
        Pin:[''],
        City:[''],
        State:['']

      })
})
  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl(''),
    // address: new FormGroup({
    //   State: new FormControl(''),
    //   City: new FormControl(''),
    //   Pin: new FormControl(''),
    // }),
  // });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Harsh',
      password:'12345',
      confirmpassword: '12345',

      // in this case if we use Setvalue it will give error to pass address also
    })
  }
}
