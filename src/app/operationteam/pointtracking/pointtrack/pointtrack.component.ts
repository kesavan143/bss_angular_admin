import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import { retry } from 'rxjs/operators';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-pointtrack',
  templateUrl: './pointtrack.component.html',
  styleUrls: ['./pointtrack.component.scss']
})
export class PointtrackComponent implements OnInit {

  datas:any[];
  Employee_data:any;
  Employee_name:string;
  Employee_id:string;
  create_date:any;
  update_date:any;
  model: form1model;
  mappoint_id:string;
  Points:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) { 
    this.model = new form1model();
    this.Points=[];
    this.Employee_data=[];
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/PointTracking/pointslist',{"Employee_id":"1"}).subscribe((data:any) => {
      this.datas = data.data;     
      console.log(this.datas);
    });
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist',{"Email_id": "1"}).subscribe((data:any) => {
      this.Employee_data = data.data;     
      console.log(this.Employee_data);
    });
  }
  
  assign(employees,titles,Descriptions){
    console.log(employees,Descriptions,titles);
    if ( (Descriptions !== '') || ( titles !== '' ) )
    {
      console.log(employees);
      this.http.post('https://bssservice.herokuapp.com/authentication/employee_id',{"employee_id": employees }).subscribe((data:any) => {
      this.Employee_name = data.data.Name; 
      var stringForm = data.data.id.toString();
      this.Employee_id = stringForm;
      console.log(this.Employee_name);
      if( this.Employee_name ===""){
            alert("retry later");
      }else{
        this.assign2(this.Employee_id,this.Employee_name,titles,Descriptions);
      }
     });
    }
    else
    {
      alert("Fields Should not be Empty");
    }



  }

  assign2(Employee_id,employees,titles,Descriptions){
  var date = new Date();
   
   this.create_date = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
   this.update_date =  formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.http.post('https://bssservice.herokuapp.com/PointTracking/Addpoints',{"Emp_id":Employee_id,"Employee_Name": employees,"createdtime": this.create_date,"description": Descriptions,"title": titles,"updatedtime": this.update_date,"status":"Open"}).subscribe((data:any) => {
    alert("Added Successfully");
    this.ngOnInit();
    });
  }


  edit(event,data){
    var stringForm = data.ukey.toString();
    this.mappoint_id = stringForm;
    this.create_date = data.created_date;
     this.http.post('https://bssservice.herokuapp.com/PointTracking/fetchpoints',{"ukey":this.mappoint_id}).subscribe((data:any) => {
     this.Points = data.data[0];     
     console.log(this.Points.Employee_id);
     });
   }


   delete(event,data){
    var stringForm = data.ukey.toString();
    this.mappoint_id = stringForm;
    this.http.post('https://bssservice.herokuapp.com/PointTracking/deletepoints',{"ukey":this.mappoint_id}).subscribe((data:any) => {
    alert("Deleted Successfully");
    this.ngOnInit();
    });
  }

  assign1(employee,title,Description,status){
   
   this.update_date = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
   this.http.post('https://bssservice.herokuapp.com/PointTracking/pointsupdate',{"Employee_Name": employee,"description": Description,"title": title,"updatedtime": this.update_date,"status":status,"ukey":this.mappoint_id}).subscribe((data:any) => {
    alert("Updated Successfully");
    this.ngOnInit();
    });
  }


  view($event, data){
    this.router.navigate([ "main/Pointtrackingdetails/" + data.ukey])
  }


  history($event, data){
    this.router.navigate([ "main/PointTrackRecordslist/" + data.ukey])
  }


  spot($event, data){
    this.router.navigate([ "main/PointTrackMapSpots/" + data.ukey])
  }
  
}




class form1model {
  Email_id: "1";
}
