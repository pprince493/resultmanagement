import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {
students:any=null;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private viewService:TeacherViewService) { }

  ngOnInit(): void {
    this.viewService.getAll()
    .pipe(first())
    .subscribe(students => this.students = students);
   // console.log(this.students);
  }
  delete(rollNo:number){
    console.log(rollNo);
    this.viewService.delete(rollNo)
    .pipe(first())
    .subscribe(students => this.students = students);
    this.router.navigate(['/teacher',{students:this.students}]);
  }
  edit(rollNo:number){
    this.viewService.getEditValue(rollNo)
    .pipe(first())
    .subscribe(students =>{
      this.students=students
      this.viewService.setData(this.students)
      console.log(this.students)
      this.router.navigate(['/edit/rollNo']);
    });
  }

}


