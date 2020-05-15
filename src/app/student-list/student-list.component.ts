import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  student: Observable<Student[]>;

  constructor(private studentService: StudentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.student = this.studentService.getStudentList();
  }

  deleteStudent(studentid: number) {
    this.studentService.deleteStudent(studentid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  studentinfo(studentid: number){
    this.router.navigate(['info', studentid]);
  }

  updateStudent(studentid: number){
    this.router.navigate(['update', studentid]);
  }
}
