import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  
  constructor(private modalService: NgbModal) { }

  reactiveForm = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required,Validators.minLength(30)])
  });

  ngOnInit(): void {
  }

  get f(){
    return this.reactiveForm.controls;
  }

  openWindowCustomClass(content:any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
