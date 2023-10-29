import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class TeacherViewService {
  private studentSubject: BehaviorSubject<Student>;
  public student: Observable<Student>;
  constructor(
    private router: Router,
        private http: HttpClient
  ) {
    this.studentSubject = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('student')||'{}'));
        this.student = this.studentSubject.asObservable();
   }
   public get studentValue(): Student {
    return this.studentSubject.value;
   }
   private data:any;
   setData(data:any){
    this.data = data;
    }
    
    getData(){
    let temp = this.data;
    return temp;
    }
   getAll() {
    return this.http.get<Student[]>(`${environment.apiUrl}/view`);
   }
   create(student:Student){
     return this.http.post<Student[]>(`${environment.apiUrl}/create`,student);
   }
   delete(rollNo:number){
    return this.http.get<Student[]>(`${environment.apiUrl}/delete/${rollNo}`);
   }
   getEditValue(rollNo:number){
    return this.http.get<Student[]>(`${environment.apiUrl}/edit/${rollNo}`);
   }
   edit(rollNo:number,student:Student){
    return this.http.post<Student[]>(`${environment.apiUrl}/update`,student);
   }

}
