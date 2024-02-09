import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-addclientsite',
  templateUrl: './addclientsite.component.html',
  styleUrls: ['./addclientsite.component.scss']
})
export class AddclientsiteComponent implements OnInit {

  cliid:number;
  client_id:string;
  datas: any;
  addsite: addsite;
  companylist:any;
  ucodenumber: number;
  ucodetext: string;

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.client_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.client_id);
  });
  this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
    this.companylist = data.data;
  console.log(this.companylist);
});
  }

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addsite = new addsite();

    this.http.post('https://bssservice.herokuapp.com/advance/fetchunit_number1', {"id":0}).subscribe((data:any) => {
      this.ucodenumber =  +data.data[0].max;
      this.ucodenumber = this.ucodenumber + 1;
      this.ucodetext = 'U';
      console.log(this.ucodenumber);
      console.log(this.ucodetext);
      this.addsite.sitelogin = this.ucodetext + this.ucodenumber;
    });
    }


    addapi(){
      this.addsite.client_id = ""+0;
      this.addsite.status = "enable";
      console.log(this.addsite)
      this.http.post('https://bssservice.herokuapp.com/client/newclientsite', this.addsite).subscribe((data:any) => {
        this.datas = data.data; 
        console.log(this.datas);
        this.router.navigate(['main/clientsite'])  
      });
    }



}



class addsite{
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
