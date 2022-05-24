import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm : FormGroup;
  submitted = false;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.employeeForm = new FormGroup({
      name: new FormControl("",Validators.required),
      phone: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      job: new FormControl("", Validators.required),
      address: new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createEmployee(): void{
    this.submitted = true;
    if(this.employeeForm.valid){
      alert("Data updated successfully!");
      this.employeeService.CreateEmployee(this.employeeForm.value).subscribe((data) => {
        this.router.navigate(['admin']);
      })
    }
  }

  get employeeFormControl() {
    return this.employeeForm.controls;
  }
}
