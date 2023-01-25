import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../app/employee-list/employee.model';
import { NgModule } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
  private baseUrl: string;
  deleteImage: any;
  overlayRef: any;
   
  constructor(private httpclient: HttpClient) { 
    this.baseUrl = "http://localhost:3000/Employeelist";
  }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
  
}

