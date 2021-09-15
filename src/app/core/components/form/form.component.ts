import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
   reactiveForm = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required,Validators.minLength(10)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.reactiveForm.controls;
  }
  
  submit(){
    console.log(this.reactiveForm.value);
  }

}
