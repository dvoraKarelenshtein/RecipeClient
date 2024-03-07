import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import {UserService} from '../Service/user.service'
import { log } from 'console';


@Component({
  selector:'app-login',

  // imports: [HttpClientModule,CommonModule,ReactiveFormsModule],

  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public addForm!: FormGroup;
  constructor() { }

  // private _userService:UserService
  ngOnInit(): void {
    this.addForm = new FormGroup({

      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6)]),

    })
  }
}