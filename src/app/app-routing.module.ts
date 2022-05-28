import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'add-student'},
  {path : 'add-student', component: AddStudentComponent},
  {path : 'edit-student/:id', component: EditStudentComponent},
  {path : 'list-student', component: ListStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
