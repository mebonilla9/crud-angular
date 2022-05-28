import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api: string = 'http://localhost:8080/api/v1/students';

  constructor(private client: HttpClient) { }

  addStudent(studentData: Student): Observable<any> {
    return this.client.post(this.api, studentData);
  }

  getStudents(): Observable<any> {
    return this.client.get(this.api);
  }

  deleteStudent(id: number): Observable<any> {
    return this.client.delete(`${this.api}/${id}`);
  }

  getStudent(id: string): Observable<any> {
    return this.client.get(`${this.api}/${id}`);
  }

  editStudent(studentData: Student): Observable<any> {
    return this.client.put(this.api, studentData);
  }

}
