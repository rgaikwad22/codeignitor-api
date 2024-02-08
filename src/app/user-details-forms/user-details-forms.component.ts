import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dataservice } from '../service/data.service';

@Component({
  selector: 'app-user-details-forms',
  templateUrl: './user-details-forms.component.html',
  styleUrls: ['./user-details-forms.component.css']
})
export class UserDetailsFormsComponent {
  // Create a FormGroup to hold your form controls
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataservice: Dataservice) { }

  ngOnInit() {
    // Initialize the form controls with FormBuilder
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
    });

    // this.myForm.setValue({
    //   name: 'John Doe',
    //   email: 'email@example.com',
    //   password: 'something',
    //   phone: ''
    // })
  }

  onSubmit() {
    this.dataservice.getData.subscribe(res = > {
      console.log(res)
    })
  }
}
