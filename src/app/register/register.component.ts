import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../class/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  employee:Employee=new Employee();

  constructor(private _employee:EmployeeService,private router:Router) { }


  ngOnInit(): void {
  }



  
 saveEmplData()
  {

if(this.employee.employeename=='' || this.employee.employeename==undefined || this.employee.employeeEmail=='' || this.employee.employeeEmail==undefined)
{

  alert("please enter all fields");


}



  
  

else{
  this._employee.registerEmp(this.employee).subscribe(data=>{
    this.employee=data;
  })

  alert("form submit successfully");
    
  this.goToEmployeeList();  

}  

  }


  goToEmployeeList()
  {
    this.router.navigate(['/employee'])
  }
 


}
