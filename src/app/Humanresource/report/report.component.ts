import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  employee_id: string;
  datas:any;
  datass:any; 
  datasss:any;
  items:any;
  total:number;
  photo:any;
  currentdate:any;
  public adduser: Adduser;

  


  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    var dateObj = new Date();
  
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    this.currentdate = day + '-' + month + '-' + year;
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
    this.datasss=[];
    for(let i = 0 ;i< this.datas.length;i++){
      if(this.datas[i].title !== 'photo'){
       this.datasss.push("https://bssservice.herokuapp.com/"+this.datas[i].path)
      }
    }
    console.log(this.datasss)
  });  
   }

  ngOnInit() {


    this.httpClient.post('https://bssservice.herokuapp.com/uniform/uniformlist', {"employee_id":""+this.employee_id}).subscribe((data:any) => {
      this.items = data.data;
      console.log(this.items);
        
      for(let i=0;i< this.items.length;i++){
       this.total = this.total + this.items[i].rate;
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
  Emp_id:string;
  personmark: string;
  personmark1: string;
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
  ecode:string;
  fcontact1:string;
  fcontact2:string;
  fcontact3:string;
  fcontact4:string;
  fcontact5:string;
  language1: string;
  language2: string;
  language3: string;
  language4: string;
  language5: string;
  work_exp: string;
  epf_no: string;
  esic_no: string;
  chest:string;
  area:string;
  lanstate1: string;
  lanstate2: string;
  lanstate3: string;
  lanstate4: string;
  lanstate5: string;
  language: string;
  prom_in1:string;
  prom_in_mobile_no:string;
  prom_in_mobile_no1:string;
  sponsored_by: string;
  rank: string;
  remarks: string;
  sponname: string;
  Sponregion: string;
  age: string;
  pf1: string;
  pf2: string;
  pf3: string;
  uan:string;

  Spectacles: string;
  RightEyePower: string;
  LeftEyePower: string;
  School_CollegeName: string;
  School_CollegeAddress: string;
  HigherClassStudied: string;
  StudiedYear: string;
  StudiedResultStatus: string;

  TC_No: string;
  TC_Type: string;
  MarkSheet_of: string;
  MarkSheet_of_Type: string;
  Games: string;
  Hobbies: string;
  RecOfIntWrittenWork: string;
  RecOfIntAppearance: string;
  RecOfIntFirstImperssion: string;
  RecOfIntResult: string;
  RecOfIntDesignationEntry: string;
  RecOfIntToBePostedTo: string;
  RecOfIntRemarks: string;
}