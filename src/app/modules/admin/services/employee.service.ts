import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Employee } from 'src/app/classes/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  GetEmployeeDetails() {
    return this.httpClient.get<Employee[]>(`${environment.api_base_url}employeeDetails`)
  }

  GetEmployeeById(id: number) {
    return this.httpClient.get<Employee>(`${environment.api_base_url}employeeDetails/${id}`)
  }

  UpdateEmployee(id: number, data:any) {
    return this.httpClient.put(`${environment.api_base_url}employeeDetails/${id}`,data)
  }

  DeleteEmployee(id: number) {
    let a = id.toString()
    return this.httpClient.delete(`${environment.api_base_url}employeeDetails/${a}`)
  }
}
