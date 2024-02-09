import { Component, OnInit,VERSION ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-saleryprocessstatement',
  templateUrl: './saleryprocessstatement.component.html',
  styleUrls: ['./saleryprocessstatement.component.scss']
})
export class SaleryprocessstatementComponent implements OnInit {

  datass:any;
  unitlist:any;
  company_name:string;
  month:string;
  year:string;
  yearss:number;
  unitwise:string = "true";
  gender:string = "All";
  monthss:number;
  private years: string[] =[];
  private yy : number;
  private nyy : number;
  private months: string[] =[];
  private mm : number;
  private nmm : number;





   fallcompany:boolean;
   fcompany:string;
   fmonth:string;
   fyear:string;
   ftype:string;
   funitwise:string;

   report:any;

   






  title = 'Angular 7 CheckBox Select/ Unselect All';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;


  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private http: HttpClient ,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
    ) {
    this.masterSelected = false;


  
 




   }


saveInLocal(key, val): void {
  console.log('recieved= key:' + key + 'value:' + val);
  this.storage.set(key, val);
 }

 getFromLocal(key): any {
  console.log('recieved= key:' + key);
  return this.storage.get(key);
 }

   checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
 
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
 
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
    this.datass = data.data;
    console.log(this.datass);
    
  });



 
  var today = new Date();

  this.yy = today.getFullYear();  
  this.nyy = today.getFullYear();  
  let y = this.nyy - 5;
  let x = this.nyy + 5;
  console.log(y,x);
  this.yearss = y ;
  for(let i = y; i < x ; i++ ){
      this.yearss = this.yearss + 1;
      this.years.push(""+this.yearss);
  }
  }


  toggleEditable(event) {
    if ( event.target.checked ) {
        this.unitwise = ""+true;
        console.log(this.unitwise)
   }else{
    this.unitwise = ""+false;
    console.log(this.unitwise)
   }
  }
  
fetchsite(data)
{
  console.log(data);
  this.http.post('https://bssservice.herokuapp.com/payroll/fetchsitedetails',{company_name:data}).subscribe((data:any) => {
    this.checklist = data.data;
    console.log(this.checklist);
    this.getCheckedItemList();
  });
}

  print(){
  
    console.log(this.unitwise)
 if(this.unitwise  === "true" && this.gender === "All"){
  console.log(this.checkedList)
  let startdate = ""+this.fyear+"-"+this.fmonth;
  console.log(startdate)
   this.http.post('https://bssservice.herokuapp.com/payroll/fetchsitepaymentss2',{"data":this.checkedList,"date":""+startdate}).subscribe((data:any) => {
   this.report = data.data;
   console.log(this.report);
   this.saveInLocal('Reports',this.report);
   this.router.navigate(['main/unitwise']);
  
 
 });
 }else if(this.unitwise  === "false" && this.gender === "All"){
  console.log(this.checkedList)
  let startdate = ""+this.fyear+"-"+this.fmonth;
  console.log(startdate)
   this.http.post('https://bssservice.herokuapp.com/payroll/fetchsitepaymentss',{"data":this.checkedList,"date":""+startdate}).subscribe((data:any) => {
   this.report = data.data;
   console.log(this.report);
   this.saveInLocal('Reports',this.report);
   this.router.navigate(['main/gettalll']);
 });
 }else if(this.unitwise  === "false" && this.gender === "Bank"){
  console.log(this.checkedList)
  let startdate = ""+this.fyear+"-"+this.fmonth;
  console.log(startdate)
   this.http.post('https://bssservice.herokuapp.com/payroll/fetchsitepaymentss3',{"data":this.checkedList,"date":""+startdate,"type":this.gender}).subscribe((data:any) => {
   this.report = data.data;
   console.log(this.report);
   this.saveInLocal('Reports',this.report);
   this.router.navigate(['main/gettalll']);
 });
 }else if(this.unitwise  === "false" && this.gender === "Cash"){
  console.log(this.checkedList)
  let startdate = ""+this.fyear+"-"+this.fmonth;
  console.log(startdate)
   this.http.post('https://bssservice.herokuapp.com/payroll/fetchsitepaymentss3',{"data":this.checkedList,"date":""+startdate,"type":this.gender}).subscribe((data:any) => {
   this.report = data.data;
   console.log(this.report);
   this.saveInLocal('Reports',this.report);
   this.router.navigate(['main/gettalll']);
 });
 }
  }

  onCarryForward() {
    this.http.get('https://bssservice.herokuapp.com/advance/carryForward').subscribe((data) => {
    });
  }






}


class Adduser {
}
