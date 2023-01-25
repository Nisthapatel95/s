import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-list/employee.model'
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
 
  employee1:Employee[] ;
  public visible = false;
  promptResult!: boolean;

  constructor(private employeeService: EmployeeService,
     private router:Router ,
     public dialog: MatDialog) {
    this.employee1=[];
   }
     
   ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employee1 = data;
    });
  }

  employeeDetails(id:number): void{
    this.router.navigate(['employee-details',id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(){
  this.dialog.open(DialogComponent)
      
  }

}
