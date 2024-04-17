import { Component } from '@angular/core';
import { Employee } from './core/models/class/Employee';
import { IEmployee } from './core/models/interface/IEmployee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17_basic_project_setup';

  employee: Employee = new Employee();
  employee2: IEmployee = {
    empId:0,
    nmae:'',
    city:''
  };

  student: any = {
    name:'',
    id:0,
    city: ''
  };

  constructor() {
    //this.student.
   this.employee2= {
    empId:0,
    city:'',
    nmae:''
   }
  }
}
