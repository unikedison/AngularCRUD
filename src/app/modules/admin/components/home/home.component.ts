import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeDetails = <Employee[]>[];
  displayDetails = <Employee[]>[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.GetData();
  } 

  current = 0;
  pageLength = 0;
   GetData(step:number=0){
     this.current = this.current+step;
    this.employeeService.GetEmployeeDetails().subscribe((data: Employee[]) => {      
      this.employeeDetails =  data;
      this.displayDetails = this.employeeDetails.slice(this.current, this.current+10);      
     this.pageLength =  this.employeeDetails.length-10;
    }); 
   }

  DeleteEmployee(id: number):void{
    if(confirm("Do you want to delete the employee details?")){
      this.employeeService.DeleteEmployee(id).subscribe((data) =>{
        alert("Employee details deleted successfully!");        
        location.reload();
      });
    }
  }

}
