import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

//import { Employee } from './class/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://localhost:8080";

  constructor(private http:HttpClient,private router:Router) { 

  }


  registerEmp(employee: any):Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/saveEmp`,employee);
  }
getEmp():Observable<Array<any>>
{

  return this.http.get<Array<any>>(`${this.baseUrl}/getEmp`);
}

getEmpById(id:number):Observable<any>
{
  return this.http.get<any>(`${this.baseUrl}/getEmpId/${id}`);
  
}

updateEmp(id:number,employee: any):Observable<any>
{
  return this.http.put<any>(`${this.baseUrl}/updateEmp/${id}`,employee);
}

deleteEmp(id:number):Observable<any>{
  return this.http.delete<any>(`${this.baseUrl}/deleteEmp/${id}`);
}

} 