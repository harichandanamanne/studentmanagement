import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:9292/student';

  constructor(private http: HttpClient) { }

  getStudent(studentid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${studentid}`);
  }

  addStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  updateStudent(studentid: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${studentid}`, value);
  }

  deleteStudent(studentid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${studentid}`, { responseType: 'text' });
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
