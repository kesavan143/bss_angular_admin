import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }
  getUserList(name): Observable<any> {
    return this.http.post<any>('https://bssservice.herokuapp.com/authentication/employeelist', {
      company_name: '' + name
    });
  }
  getUnitList(name): Observable<any> {
    return this.http.post<any>('https://bssservice.herokuapp.com/client/sitelist', {
      company_name: '' + name
    });
  }
  public listPackages<T>(): Observable<T> {
    const toAdd = JSON.stringify({});
    return this.http.get<T>('http://localhost:83/reports/getemployeedetails');
  }
}
