import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id = 0;
  employeeData = new Employee;
  employeeForm : FormGroup;
  submitted = false;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.id = this.activatedRoute.snapshot.params["id"];  

    this.employeeForm = new FormGroup({
      name: new FormControl("",Validators.required),
      phone: new FormControl("",[Validators.required, Validators.minLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      job: new FormControl("", Validators.required),
      address: new FormControl("",Validators.required)
    });
  }

  ngOnInit(): void {
    this.employeeService.GetEmployeeById(this.id).subscribe((data:Employee) => {
      this.employeeData = data;
      this.employeeForm = new FormGroup({
        name: new FormControl(this.employeeData.name,Validators.required),
        phone: new FormControl(this.employeeData.phone,[Validators.required, Validators.minLength(10)]),
        email: new FormControl(this.employeeData.email, [Validators.required, Validators.email]),
        job: new FormControl(this.employeeData.job, Validators.required),
        address: new FormControl(this.employeeData.address,Validators.required)
      });
    })
  }

  updateEmployee(): void{
    this.submitted = true;
    if(this.employeeForm.valid){
      alert("Data updated successfully!");
      this.employeeService.UpdateEmployee(this.id,this.employeeForm.value).subscribe((data) => {
        this.router.navigate(['admin']);
      })
    }
  }

  get employeeFormControl() {
    return this.employeeForm.controls;
  }

}
