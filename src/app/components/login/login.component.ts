import { Router } from '@angular/router';
import { Login } from './../../models/login';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService, private router:Router) { }

  loginForm:FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      username:["",Validators.required],
      password:["",Validators.required],
      hotel_id:["",Validators.required]
    })
  }

  login(){
    let loginModel={...this.loginForm.value};
    this.authService.login(loginModel).subscribe(response=>{
      localStorage.setItem("token",response['token_val']);
      this.router.navigate(['detail']);
    },error=>{
      alert(error.error.message);
    });
  }
}
