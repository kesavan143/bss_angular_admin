import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-createqr',
  templateUrl: './createqr.component.html',
  styleUrls: ['./createqr.component.scss']
})
export class CreateqrComponent implements OnInit {
  Employee_data:any;
  Employee_dataqr:any;
  client_id:number;
  details:string;
  
  QRdata:any;
  clientlist:any;
  client_name:string;
  assign:assign;
 
  check: check;
  data_details:details;
  today:any;
  client:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.check = new check();
    this.data_details = new details();
    this.assign = new assign();

    this.details ="";
    this.Employee_data=[];
    this.Employee_dataqr=[];
    this.data_details.qrdata="";

  }
  ngOnInit(){   

  this.http.post('https://bssservice.herokuapp.com/authentication/employeelist',{"Email_id":"1"}).subscribe((data:any) => {
    this.Employee_data = data.data;     
    console.log(this.clientlist);
  });
  this.http.post('https://bssservice.herokuapp.com/authentication/qrlist',{"id":"1"}).subscribe((data:any) => {
    this.QRdata = data.data;     
    console.log(this.clientlist);
  });
  }




  delete($event,data){
    console.log(data.id);
    this.http.post('https://bssservice.herokuapp.com/authentication/deleteqr',{"id":data.id}).subscribe((data:any) => {
      this.Employee_data = data.data;     
      console.log(this.Employee_data);
      alert("Deleted Successfully");
      this.ngOnInit(); 
    });
  }
  clear(){
    this.http.post('https://bssservice.herokuapp.com/authentication/deleteallqr',{"id":1}).subscribe((data:any) => {
      alert("Cleared Successfully");
      this.ngOnInit(); 
    });
  }

  
  qrcode(){
    this.data_details.client_place = "";
    this.data_details.client_ID = +"";
    this.data_details.created = ""+formatDate(new Date(), 'yyyy-MM-dd', 'en');
    var j={"ID":this.data_details.Empolyee_id,"Name":this.data_details.Name,"Email_id":this.data_details.Email_ID,"Mobile":this.data_details.Mobile_No}
    this.details = JSON.stringify(j); // '{"name":"binchen"}'
    this.data_details.qrdata = this.details;
    this.data_details.date = "22-10-2018";
    console.log(this.data_details);
    this.http.post('https://bssservice.herokuapp.com/authentication/addqr',this.data_details).subscribe((data:any) => {
      this.Employee_dataqr = data.data;   
      this.assign = data.data;  
      console.log(this.assign);
      this.ngOnInit();
    });
  }
  reload(){
    this.http.post('https://bssservice.herokuapp.com/authentication/qrlist',{"id":"1"}).subscribe((data:any) => {
      this.QRdata = data.data;     
      console.log(this.QRdata);
    });
  }






  fetchdata(id){
    console.log(id);
    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id',{"employee_id": id }).subscribe((data:any) => {
    console.log(data);
    this.data_details.Name = data.data.Name; 
    this.data_details.Empolyee_id = data.data.id; 
    this.data_details.Email_ID = data.data.Email_ID; 
    this.data_details.Mobile_No = data.data.Mobile_No;
    this.qrcode();
   });
  }



  printComponent1(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

printComponent2(cmpName) {
  let printContents = document.getElementById(cmpName).innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
}



class check{
  employees:string;
  date:string;
  company:number;
  }
class details{
  Empolyee_id: number;
  Name: string;
  Email_ID: string;
  Mobile_No: string;
  created: string;
  qrdata: any;
  client_ID: number;
  client_place: string;
  date: string;
}


class assign{
  id:number;
  Empolyee_id: number;
  Name: string;
  Email_ID: string;
  Mobile_No: string;
  created: string;
  qrdata: any;
  client_ID: number;
  client_place: string;
  date: string;
}









  