import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formularioPrueba = new FormGroup(
    {
      email: new FormControl('Introduce tu email',[Validators.required,Validators.email]),}
  );

  get email(): any{
    return this.formularioPrueba.get('email');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
