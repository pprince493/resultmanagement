import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentResultService } from 'src/app/services/student-result.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  studentForm: FormGroup;
  students:any=null;
  submitted = false;
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private viewService:StudentResultService) { }

  ngOnInit(): void {
    // this.studentForm = new FormGroup({
    //   rollNo:new FormControl(),
    //   name:new FormControl()
    
    // });
    this.studentForm = this.formBuilder.group({
      rollNo: ['', [Validators.required,Validators.min(1)]],
      name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(15)]]
  });
  }
  get f() { return this.studentForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.studentForm.invalid){
      return;
    }
    else{
    console.warn(this.studentForm.value);
    this.viewService.search(this.studentForm.value)
    .pipe(first())
    .subscribe(students =>
    {
    this.students = students
    console.log(this.students)
    this.viewService.setData(this.students)
    if (students.length != 0) {
    this.router.navigate(['/result']);
    }
    else {
      alert("No Record Found");
    this.router.navigate(['/student']);
    }
    });
  }
  }

}
  // onSubmit(){
  //   console.warn(this.studentForm.value);
  //  // this.router.navigate(['/result']); 
  //  this.viewService.search(this.studentForm.value)
  //  .pipe(first())
  //   .subscribe(students => {
  //     console.log(students)
  //     this.students = students;
  //     // this.router.navigate(['result'], { state: { students: students } });
    
      
  //   });

  //  // this.router.navigate(['/result',{students:this.students}]);
    
  // }


