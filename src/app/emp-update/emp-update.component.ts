import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../class/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {


  id!: number;


employee:Employee=new Employee();

  constructor(private _employee:EmployeeService,private route:Router,private route1:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.route1.snapshot.params['id'];
  this._employee.getEmpById(this.id).subscribe(data=>{this.employee=data;})


  }

  update(){

  this._employee.updateEmp(this.id,this.employee).subscribe(data=>{
    this.employee=data;
   
    this.goToEmployeeList();

  })
        
    
  }


  goToEmployeeList()
  {
    this.route.navigate(['/employee'])
  }





}
