import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
addForm:FormGroup;
students:any=null;
submitted = false;
  constructor(
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private viewService:TeacherViewService
  ) { }

  ngOnInit(): void {
    // this.addForm = new FormGroup({
    //   rollNo:new FormControl(),
    //   name:new FormControl(),
    //   dateOfBirth:new FormControl(),
    //   score:new FormControl()
    
    // });
    this.addForm = this.formBuilder.group({
      rollNo: ['', [Validators.required,Validators.min(1)]],
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      dateOfBirth: ['', Validators.required],
      score: ['', [Validators.required,Validators.min(0),Validators.max(1000)]]
  });
  }
  get f() { return this.addForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    else{
    console.warn(this.addForm.value);
    this.viewService.create(this.addForm.value)
    .pipe(first())
    .subscribe(students =>{ this.students = students
      this.router.navigate(['/teacher',{students:this.students}]);
    });
  }
    
  }
}
