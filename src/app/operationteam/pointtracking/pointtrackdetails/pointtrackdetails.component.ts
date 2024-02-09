import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-pointtrackdetails',
  templateUrl: './pointtrackdetails.component.html',
  styleUrls: ['./pointtrackdetails.component.scss']
})
export class PointtrackdetailsComponent implements OnInit {
  datas:any[];
   
  Employee_names:string;
  Employee_id:string;
  Gender:string;
  Contact_No:string;
  Client_Place:string;
  Email_id:string;
  Address:string;
  Map_ID:string;
  Employee_data:any; 
  create_date:any;
  update_date:any;
  model: form1model;
  mappoint_id:string;
  Points:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) { 
    this.model = new form1model();


       this.route.params.subscribe(params => {
      this.Map_ID = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.Map_ID);
      this.http.post('https://bssservice.herokuapp.com/PointTracking/fetchpoints',{"ukey":this.Map_ID}).subscribe((data:any) => {
        var stringForm = data.data[0].ukey.toString();
        this.Map_ID = stringForm;
        console.log(this.Map_ID);
        this.Client_Place =data.data[0].title;
        console.log(this.Client_Place);
     });
   
   });

    this.Points=[];
    this.Employee_data=[];
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/mapTracking/addmapuserlist',{"Map_id":this.Map_ID}).subscribe((data:any) => {
      this.datas = data.data;     
      console.log(this.datas);
    });
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist',{"Email_id": "1"}).subscribe((data:any) => {
      this.Employee_data = data.data;     
      console.log(this.Employee_data);
    });
  }

  assign(employees){
    console.log(employees);
    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id',{"employee_id": employees }).subscribe((data:any) => {
    this.Employee_names = data.data.Name; 
    this.Gender = data.data.gender; 
    this.Contact_No = data.data.Mobile_No; 
    this.Email_id = data.data.Email_ID; 
    this.Address = data.data.Address; 
    var stringForm = data.data.id.toString();
    this.Employee_id = stringForm;
    console.log(this.Employee_names);
    if( this.Employee_names ===""){
          alert("retry later");
    }else{

      this.assign2(this.Employee_id,this.Employee_names,this.Gender,this.Contact_No,this.Email_id, this.Address);
    }
   });
  }
  assign2(Employee_id,Employee_names,Gender,Contact_No,Email_id,Address){ 

    console.log(Employee_id,Employee_names,Gender,Contact_No,Email_id,Address);


    this.http.post('https://bssservice.herokuapp.com/mapTracking/addmapuser',{"Emp_id":Employee_id,"Employee_name": Employee_names,"Map_id": this.Map_ID,"gender": Gender,"Email_id":Email_id,"contact_no": Contact_No,"Client_place": this.Client_Place,"Address":Address}).subscribe((data:any) => {
    alert("Added Successfully");
    this.ngOnInit();
    });
  }


  


   delete(event,data){
    var stringForm = data.Emp_id.toString();
    this.Employee_id = stringForm;
    this.http.post('https://bssservice.herokuapp.com/mapTracking/mapuserdelete',{"Emp_id":this.Employee_id}).subscribe((data:any) => {
    alert("Deleted Successfully");
    this.ngOnInit();
    });
  }

  
}




class form1model {
  Email_id: "1";
}
