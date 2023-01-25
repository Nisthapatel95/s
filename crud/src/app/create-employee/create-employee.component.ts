import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-list/employee.model';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  [x: string]: any;
  public userForm!: FormGroup;
  isSubmitted: boolean = false;
  // employee: Employee = new Employee();
  password: string = 'password';
  public show: boolean = false;
  public showPassword!: boolean;

  constructor(private employeeService: EmployeeService, private router: Router,public fb: FormBuilder) {
    this.userForm = new FormGroup('');
   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      firstname: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
      lastname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      password: ['',Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10) ,Validators.pattern("[- +()0-9]{10,12}")]]
    });
  }
  onSignIn() {
    
    this.isSubmitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
 

    submitUser() {
      if (!this.userForm.valid) {
        this.isSubmitted = true;
        return;
      }    
      this.employeeService.createEmployee(this.userForm.value).subscribe((result) => {
        console.log(result);
        this.userForm.reset();
        
      })
    }
  }
  


  


