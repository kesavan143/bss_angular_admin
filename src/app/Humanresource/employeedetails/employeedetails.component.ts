import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { e } from '@angular/core/src/render3';
import { send } from 'q';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
 
  employee_id: string;
  datas: any; 
  public adduser: Adduser;
  resigned:string;
  lefted:boolean;
  companylist:any;
  site_names:any;
  datass:any[]=[];
  ecodetext:string;
  ecodenumber:number;

    constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.adduser = new Adduser();
    this.lefted = true;
    this.route.params.subscribe(params => {
     this.employee_id = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.employee_id);
     this.adduser.id = +this.employee_id;
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:this.employee_id}).subscribe((data:any)  => {
      this.adduser = data.data;
      console.log(this.adduser);
      this.adduser.Date_of_birth = formatDate(this.adduser.Date_of_birth, 'dd-MM-yyyy', 'en-US', '+0530');
      this.adduser.date_joining = formatDate(this.adduser.date_joining, 'dd-MM-yyyy', 'en-US', '+0530');
      if(this.adduser.resigned === 'left'){
        this.lefted = false;
      }
      });
  });
  this.httpClient.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
    this.companylist = data.data;
  console.log(this.companylist);
});
this.httpClient.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
      this.datass = data.data;
      console.log(this.datass);
    });
    this.httpClient.post('https://bssservice.herokuapp.com/advance/fetchloan_number1', {"id":0}).subscribe((data:any) => {
      this.ecodenumber =  +data.data[0].max;
      this.ecodenumber = this.ecodenumber + 1;
      this.ecodetext = "B"
    });
   }

   fetchsite(data){
    console.log(data);
    this.httpClient.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {"company_name":data}).subscribe((data:any) => {
      this.site_names = data.data;
    console.log(this.site_names);
  });

  }
  ngOnInit() {


  
  }

  
  syncdata(){



  }






  resign(){
    console.log(this.adduser.resigned)
    if(this.adduser.resigned =='unresigned'){
      this.resigned= 'resigned';
      this.send()
    }
  }
  unresign(){
    console.log(this.adduser.resigned)
    if(this.adduser.resigned =='resigned'){
      this.resigned= 'unresigned';
      this.send()
    }
  }


  send(){
    this.httpClient.post('https://bssservice.herokuapp.com/authentication/resigned',{Empid:this.adduser.Empid,resigned:this.resigned}).subscribe((data:any)  => {
        alert("Process Successfulls");
        console.log(data)
        this.router.navigate(['main/viewemployees'])
        });
  }
  
   left(){
    
    this.resigned= 'left';
    this.httpClient.post('https://bssservice.herokuapp.com/authentication/resigned',{Empid:""+this.adduser.Empid,resigned:this.resigned}).subscribe((data:any)  => {
      alert("Process Successfulls");
      console.log(data)
      this.router.navigate(['main/viewemployees'])
      });

   }


}
class Adduser {
  Empid:string;
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
  attach: string;
  qrcode: string;
  workstatus: string;
  resigned: string;
  createdtime: string;
  contact: string;
  ifsc: string;
  a_c: string;
  bankname: string;
  account: string;
  prom_in: string;
  pan: string;
  weight: string;
  height: string;
  mother_tongue: string;
  permentaddress: string;
  idtype: string;
  fname1: string;
  fsex1: string;
  frelationship1: string;
  fdateofbirth1: string;
  fage1: string;
  foccupation1: string;
  faadharcard1: string;
  fname2: string;
  fsex2: string;
  frelationship2: string;
  fdateofbirth2: string;
  fage2: string;
  foccupation2: string;
  faadharcard2: string;
  fname3: string;
  fsex3: string;
  frelationship3: string;
  fdateofbirth3: string;
  fage3: string;
  foccupation3: string;
  faadharcard3: string;
  fname4: string;
  fsex4: string;
  frelationship4: string;
  fdateofbirth4: string;
  fage4: string;
  foccupation4: string;
  faadharcard4: string;
  fname5: string;
  fsex5: string;
  frelationship5: string;
  fdateofbirth5: string;
  fage5: string;
  foccupation5: string;
  faadharcard5: string;
  nname1: string;
  nsex1: string;
  nrelationship1: string;
  ndateofbirth1: string;
  nage1: string;
  noccupation1: string;
  naadharcard1: string;
  nname2: string;
  nsex2: string;
  nrelationship2: string;
  ndateofbirth2: string;
  nage2: string;
  noccupation2: string;
  naadharcard2: string;
  nname3: string;
  nsex3: string;
  nrelationship3: string;
  ndateofbirth3: string;
  nage3: string;
  noccupation3: string;
  naadharcard3: string;
  nname4: string;
  nsex4: string;
  nrelationship4: string;
  ndateofbirth4: string;
  nage4: string;
  noccupation4: string;
  naadharcard4: string;
  nname5: string;
  nsex5: string;
  nrelationship5: string;
  ndateofbirth5: string;
  nage5: string;
  noccupation5: string;
  naadharcard5: string;
  pf_action:boolean;
  esi_action:boolean;
  prof_action:boolean;
  work_status_action: boolean;
  work_exp: string;
  site_name: string;
  company_name: string;
  pf1: string;
  pf2: string;
  pf3: string;
  uan: string;
  ecode:string;
  Emp_id:string;
  personmark: string;
  nameorg: string;
  position: string;
  servicef: string;
  servicet: string;
  lastsalary: string;
  reasonlev: string;
  nomiename1: string;
  nomieaddress1: string;
  nomiedate1: string;
  nomiefund1: string;
  nomiemirror1: string;
  nomiename2: string;
  nomieaddress2: string;
  nomiedate2: string;
  nomiefund2: string;
  nomiemirror2: string;
  nomiename3: string;
  nomieaddress3: string;
  nomiedate3: string;
  nomiefund3: string;
  nomiemirror3: string;
  nomiename4: string;
  nomieaddress4: string;
  nomiedate4: string;
  nomiefund4: string;
  nomiemirror4: string;
  nomiename5: string;
  nomieaddress5: string;
  nomiedate5: string;
  nomiefund5: string;
  nomiemirror5: string;
  nomierelation1: string;
  nomierelation2: string;
  nomierelation3: string;
  nomierelation4: string;
  nomierelation5: string;
  epf_no: string;
  esic_no: string;
  sponsored_by: string;
  rank: string;
  sponname: string;
  Sponregion: string;
  remarks: string;
  language1: string;
  language2: string;
  language3: string;
  language4: string;
  language5: string;
  lanstate1: string;
  lanstate2: string;
  lanstate3: string;
  lanstate4: string;
  lanstate5: string;
  age:string;
}