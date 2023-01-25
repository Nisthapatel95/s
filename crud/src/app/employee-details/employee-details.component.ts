import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-list/employee.model'
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number
  employee!: Employee
  route: any;

  constructor(private employeeService: EmployeeService, private router: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}

