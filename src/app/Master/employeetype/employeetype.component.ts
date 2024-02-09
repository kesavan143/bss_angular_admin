import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-employeetype',
  templateUrl: './employeetype.component.html',
  styleUrls: ['./employeetype.component.scss']
})
export class EmployeetypeComponent implements OnInit {

  type_id:number;
  isactive:boolean;
  employee_id:string;
  datas: any;
  employee_type: employee_type;
  total:number;
  ngOnInit() {
    this.isactive = true;

     

     this.employee_type.employee_type = "";

  this.http.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
  });
  }
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.employee_type = new employee_type();
 
    }



  


additem(){
      console.log(this.employee_type);
      this.http.post('https://bssservice.herokuapp.com/employee/addemptype',this.employee_type).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }



    delete($event, data){
      this.http.post('https://bssservice.herokuapp.com/employee/emptypedelete',{"id":data.id}).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }

    fetch($event, data){
      this.isactive = false;
      this.type_id = data.id;

      this.http.post('https://bssservice.herokuapp.com/employee/fetchemptype',{"id":data.id}).subscribe((data:any) => {
        console.log(this.datas);
        this.employee_type.employee_type = this.datas[0].employee_type;
      });
    }

    update(){
     let a = this.employee_type.employee_type;
      this.http.post('https://bssservice.herokuapp.com/employee/updateemptype',{"id":this.type_id,"employee_type":a}).subscribe(data => {
        this.ngOnInit();
      });
    }




}



class employee_type{
  employee_type: string;

}
