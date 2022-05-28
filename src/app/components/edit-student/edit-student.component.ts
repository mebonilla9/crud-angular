import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentId: any;
  editStudentForm: FormGroup;

  constructor(
    private router: Router,
    public form: FormBuilder,
    private service: CrudService,
    private activeRoute: ActivatedRoute
  ) {
    this.editStudentForm = this.form.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      program: [''],
      enable: ['']
    });
    this.studentId = this.activeRoute.snapshot.paramMap.get('id');
    this.service.getStudent(this.studentId).subscribe(response => {
      this.editStudentForm.setValue({
        id: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        program: response.program,
        enable: response.enable
      });
    });
  }

  ngOnInit(): void {
  }

  editStudent(): void {
    this.service.editStudent(this.editStudentForm.value).subscribe(response => {
      this.router.navigateByUrl('/list-student');
    });
  }

}
