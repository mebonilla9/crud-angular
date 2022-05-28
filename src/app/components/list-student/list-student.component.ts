import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[];

  constructor(private service: CrudService) {
    this.students = []
  }

  ngOnInit(): void {
    this.service.getStudents()
      .subscribe((response: Student[]) => {
        this.students = [...this.students, ...response];
      });
  }

  deleteStudent(id: number, iControl: number) {
    console.log(id, iControl);
    if (window.confirm("Do you wanna delete this record?")) {
      this.service.deleteStudent(id).subscribe(response => {
        this.students.splice(iControl, 1);
      });
    }
  }

}
