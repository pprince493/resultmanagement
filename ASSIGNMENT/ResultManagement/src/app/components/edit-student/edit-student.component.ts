import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm:FormGroup;
  rollNo:number;
  students:any=null;
  submitted = false;
  data=this.viewService.getData();
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private viewService:TeacherViewService) {
      console.log(this.data)
     }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      rollNo: ['', Validators.required],
      name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      dateOfBirth: ['', Validators.required],
      score: ['',[Validators.required,Validators.min(0),Validators.max(1000)]]
  });
  for(let student of this.data){
    this.editForm.setValue({
     rollNo:student.rollNo,
     name:student.name,
     dateOfBirth:student.dateOfBirth,
     score:student.score,

    });
    console.log(student.dateOfBirth)
   
  }
  }
  get f() { return this.editForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.editForm.invalid){
      return;
    }
    else{
    console.warn(this.editForm.value,this.rollNo);
    this.viewService.edit(this.rollNo,this.editForm.value)
    .pipe(first())
    .subscribe(students => {this.students = students
      console.warn(this.editForm.value,this.rollNo);
      this.router.navigate(['/teacher',{students:this.students}]);
    });
  }
    
  }

}
