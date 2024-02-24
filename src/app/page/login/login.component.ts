import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/service/auth/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {}
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  constructor(private authService: AuthUserService, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
   
  }
  submitForm(){
    if(this.loginForm){
      this.loginData = this.loginForm.value
      this.authService.loginUser(this.loginData).subscribe((data) => {
        localStorage.setItem('token', data.accessToken)
        console.log(data) 
        if(data.user.role == 'admin'){
          this.router.navigateByUrl('/admin')
          alert('Đăng nhập thành công')
        }else{
          this.router.navigateByUrl('/')
          alert('Đăng nhập thành công')
        }
      })
    }
  }
}
