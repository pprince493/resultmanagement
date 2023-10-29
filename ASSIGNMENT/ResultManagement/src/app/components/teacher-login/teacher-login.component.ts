import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { TeacherLoginService } from 'src/app/services/teacher-login.service';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm: FormGroup;
  public teachers:any=null;
  submitted = false;
 // public teacher: Observable<Teacher>;
  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router:Router,
              private loginService:TeacherLoginService) { }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   userName:new FormControl(),
    //   password:new FormControl()
    
    // });
    this.loginForm=this.formBuilder.group({
      userName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]]
    })
  }
  
   get f(){return this.loginForm.controls;}


onSubmit(){
  console.warn(this.loginForm.value);
  this.submitted = true;
 if(this.loginForm.invalid){
   return;
 }
 else{
 this.loginService.login(this.loginForm.value)
 .pipe(first())
  .subscribe(teachers => {
    console.log(teachers)
    this.teachers = teachers;
    if(teachers.length!=0){
      this.router.navigate(['/teacher']);
    }
    else{
      alert("Please enter proper credentials")
      this.router.navigate(['/login']);
    }
    
  });
}
}
}










  //  onSubmit(){
  //   console.warn(this.loginForm.value);
    
  //   //this.loading=true;
  //   this.loginService.login(this.f['userName'].value,this.f['password'].value)
  //   .pipe(first()).subscribe(teachers => this.teachers=teachers);
  //   //.subscribe({ next:() =>{
  //       //  const url=this.route.snapshot.queryParams['/result'];
  //       //  this.router.navigateByUrl(url);
  //    //   console.warn(this.teachers.length);
  //       console.warn(this.teachers);
  //      // if(this.teachers!=null){
  //       this.router.navigate(['/teacher']);
  //      // }
  //       // else{
  //       //   this.router.navigate(['/login']);
  //       // }

  //     //},
  //   //   error:error=>{
  //   //     this.loading=false;
  //   //   }
  //   // });
  //   //this.router.navigate(['/result']);
  // }
     


