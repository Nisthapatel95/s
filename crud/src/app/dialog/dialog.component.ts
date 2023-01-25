import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
[x: string]: any;
promptResult!: boolean;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
   
  }

  public confirmData(): void {
  this.employeeService.deleteImage.next(true)
  
}

  public cancleData(): void {
this.employeeService.deleteImage.next(false)


}
}
