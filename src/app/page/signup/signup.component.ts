import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { AuthUserService } from '../../service/auth/auth-user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // users!: IUser;
  registerData = {}
  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPass: ['', [Validators.required]]
  })
  constructor(private authService: AuthUserService, private router: Router, private formBuilder : FormBuilder) {}
  ngOnInit(): void {

  }
  submitForm(){ 
    if(this.signUpForm){
      this.registerData = this.signUpForm.value;
      // console.log(this.registerData)
      this.authService.registerUser(this.registerData).subscribe((data) => {
        console.log(data)
        localStorage.setItem('token', data.tk)
        if(data.role == 'admin'){
          this.router.navigateByUrl('/dashboard')
          alert('Đăng ký thành công')
        }else{
          this.router.navigateByUrl('/')
          alert('Đăng ký thành công')
        }
    },
    (err) => console.log(err))
  }
  }
}
