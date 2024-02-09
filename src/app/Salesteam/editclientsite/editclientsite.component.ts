import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-editclientsite',
  templateUrl: './editclientsite.component.html',
  styleUrls: ['./editclientsite.component.scss']
})
export class EditclientsiteComponent implements OnInit {

  companylist:any;
  cliid:number;
  client_id:number;
  addsite:addsite;
  datas: any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addsite = new addsite();

    this.route.params.subscribe(params => {
      this.client_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.client_id);
      this.http.post('https://bssservice.herokuapp.com/client/fetchsite', {"id":this.client_id}).subscribe((data:any) => {
        this.addsite = data.data[0]; 
        console.log(this.addsite);
      });
      this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
        this.companylist = data.data;
      console.log(this.companylist);
    });
  });
    }
  ngOnInit() {
  }
    addapi(){

      if(this.addsite.title == null){
        this.addsite.title  = "";
      }
      if(this.addsite.description == null){
        this.addsite.description  = "";
      }
      if(this.addsite.address == null){
        this.addsite.address  = "";
      }
      if(this.addsite.contactperson1 == null){
        this.addsite.contactperson1  = "";
      }
      if(this.addsite.contactemail1 == null){
        this.addsite.contactemail1  = "";
      }
      if(this.addsite.contactnumber1 == null){
        this.addsite.contactnumber1  = "";
      }
      if(this.addsite.contactperson2 == null){
        this.addsite.contactperson2  = "";
      }
      if(this.addsite.contactnumber2 == null){
        this.addsite.contactnumber2  = "";
      }
      if(this.addsite.contactemail2 == null){
        this.addsite.contactemail2  = "";
      }
      if(this.addsite.contactperson3 == null){
        this.addsite.contactperson3  = "";
      }
      if(this.addsite.contactnumber3 == null){
        this.addsite.contactnumber3  = "";
      }
      if(this.addsite.contactemail3 == null){
        this.addsite.contactemail3  = "";
      }
      if(this.addsite.status == null){
        this.addsite.status  = "";
      }if(this.addsite.sitelogin == null){
        this.addsite.sitelogin  = "";
      } if(this.addsite.sitepassword == null){
        this.addsite.sitepassword  = "";
      } if(this.addsite.billing_address == null){
        this.addsite.billing_address  = "";
      } if(this.addsite.company_name == null){
        this.addsite.company_name  = "";
      } 


      this.addsite.id = +this.client_id;
      this.addsite.status = "enable";
      this.http.post('https://bssservice.herokuapp.com/client/updateclientsite', this.addsite).subscribe((data:any) => {
        console.log(data);
        this.router.navigate(['main/clientsite']) 
      });
    }
}
class addsite{
  id:number;
  client_id: string;
  title: string;
  description: string;
  address: string;
  billing_address:string;
  sitelogin:string;
  sitepassword:string;
  company_name:string;
  contactperson1: string;
  contactnumber1: string;
  contactemail1: string;
  contactperson2: string;
  contactnumber2: string;
  contactemail2: string;
  contactperson3: string;
  contactnumber3: string;
  contactemail3: string;
  status:string;
}
