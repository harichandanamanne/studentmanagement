

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentInfoComponent } from './student-info/student-info.component';



const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'student', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'update/:studentid', component: UpdateStudentComponent },
  { path: 'info/:studentid', component: StudentInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
