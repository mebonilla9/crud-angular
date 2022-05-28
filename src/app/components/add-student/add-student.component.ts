import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  constructor(
    public form: FormBuilder,
    private service: CrudService,
    private router: Router
  ) {
    this.studentForm = this.form.group({
      firstName: [''],
      lastName: [''],
      program: [''],
    });
  }

  ngOnInit(): void {
  }

  registerStudent(): void {
    this.service.addStudent(this.studentForm.value).subscribe(response => {
      this.router.navigateByUrl('/list-student');
    });
  }

}
