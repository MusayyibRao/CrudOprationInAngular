import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees:Array<any>=[]; 


  constructor(private _employee:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.getData();
  }



getData()
{

  this._employee.getEmp().subscribe(data=>{
    this.employees=data;
  })
}


updatePage(id: any){

  
this.route.navigate(['empUpdate',id]);

}

deleteData(id: any)
{


 this._employee.deleteEmp(id).subscribe(res=>{
    console.log(res);
      this.getData();

 
})  
}


  

}
