import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-addrequirement',
  templateUrl: './addrequirement.component.html',
  styleUrls: ['./addrequirement.component.scss']
})
export class AddrequirementComponent implements OnInit {
  cliid:number;
  isactive:boolean;
  fetch_id:number;
  site_id:string;
  datas: any;
  addrequired: addrequired;
  total:number;
  datass:any[]=[];
  ngOnInit() {
    this.isactive = true;
     this.addrequired.employee_type = "";
     this.addrequired.hrs = "";
     this.addrequired.amount = 0;
     this.addrequired.no_of_employee = 0;
     this.addrequired.total_amount = 0;
     this.total = 0;
     this.http.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
      this.datass = data.data;
      console.log(this.datass);
    });
    this.route.params.subscribe(params => {
      this.site_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.site_id);

  });
  this.http.post('https://bssservice.herokuapp.com/requirement/reqlist', {"site_id":""+this.site_id}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
      
    for(let i=0;i< this.datas.length;i++){
     this.total = this.total + this.datas[i].total_amount;
    }
     console.log(this.total)
  });
  }
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addrequired = new addrequired();
    }
    add(){
      this.addrequired.total_amount = this.addrequired.amount * this.addrequired.no_of_employee;
    }
    addrequireds(){
      this.addrequired.site_id = ""+this.site_id;
      console.log(this.addrequired);
      this.http.post('https://bssservice.herokuapp.com/requirement/reqadd',this.addrequired).subscribe(data => {
        console.log(data);
        alert("Added Sccessfully")
        this.ngOnInit();
      });
    }


    

    fetch($event, data){
      this.isactive = false;
      this.fetch_id = data.id;
      this.http.post('https://bssservice.herokuapp.com/requirement/reqfetch',{"id":""+data.id}).subscribe((data:any) => {
        console.log(this.datas);
        this.addrequired.site_id = data.data[0].site_id;
        this.addrequired.employee_type =  data.data[0].employee_type;
        this.addrequired.amount =  data.data[0].amount;
        this.addrequired.hrs =  data.data[0].hrs;
        this.addrequired.no_of_employee =  data.data[0].no_of_employee;
        this.addrequired.total_amount =  data.data[0].total_amount;
      });
    }

    update(){
      this.http.post('https://bssservice.herokuapp.com/requirement/requpdate',{
      "site_id": this.addrequired.site_id,
      "employee_type": this.addrequired.employee_type,
      "amount": this.addrequired.amount,
      "hrs": this.addrequired.hrs,
      "no_of_employee": this.addrequired.no_of_employee,
      "total_amount": this.addrequired.total_amount,
      "id": this.fetch_id }).subscribe(data => {
        alert("Updated Sccessfully")
         this.ngOnInit();
         
       });
     }

    delete($event, data){

      this.http.post('https://bssservice.herokuapp.com/requirement/reqdelete',{"id":""+data.id}).subscribe(data => {
        console.log(this.datas);
        alert("Delete Sccessfully")
        this.ngOnInit();

      });
    }




}



class addrequired{
  site_id: string;
  employee_type: string;
  amount: number;
  hrs: string;
  no_of_employee:number;
  total_amount:number;
}
