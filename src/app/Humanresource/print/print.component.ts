import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  employee_id: string;
  datas:any;
  datass:any; 
  items:any;
  total:number;
  photo:any;
  public adduser: Adduser;

  


  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.total = 0;
    this.adduser = new Adduser();
    this.route.params.subscribe(params => {
     this.employee_id = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.employee_id);
     this.adduser.id = +this.employee_id;
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:this.employee_id}).subscribe((data:any)  => {
      this.adduser = data.data;
      console.log(this.adduser);   
      });
  });
  this.httpClient.post('https://bssservice.herokuapp.com/attachment/mylistattach',{"Emp_id":""+this.employee_id}).subscribe((data:any) => {
    this.datas = data.data;
    for(let i=0; i< this.datas.length;i++){
      if(this.datas[i].title == "photo"){
        console.log(this.datas[i].path)
        this.photo = "https://bssservice.herokuapp.com/"+this.datas[i].path
      }
    }
  });  
   }

  ngOnInit() {


    this.httpClient.post('https://bssservice.herokuapp.com/uniform/uniformlist', {"employee_id":""+this.employee_id}).subscribe((data:any) => {
      this.items = data.data;
      console.log(this.items);
        
      for(let i=0;i< this.items.length;i++){
       this.total = this.total + this.items[i].total_amount;
      }
       console.log(this.total)
    });

  }


  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}


  




}
class Adduser {
  id:number;
  employee_type: string;
  father_name: string;
  gender: string;
  material_status: string;
  Edq: string;
  nationality: string;
  languages: string;
  date_joining: string;
  driving_licence: string;
  Email_ID: string;
  Mobile_No: string;
  Name: string;
  Date_of_birth: string;
  Password: string;
  aadhar_card: string;
  voter_id: string;
  Address: string;
}