import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentResultService } from 'src/app/services/student-result.service';
@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  data=this.viewService.getData();
  students:any
  constructor(private route:ActivatedRoute,
    private router:Router,
    private viewService:StudentResultService) {
     console.log(this.data)
     }

  ngOnInit(): void {
   this.students=this.data
  }

}
