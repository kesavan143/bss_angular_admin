import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
  titles = [];
  datas: any;
  model1: form1model;
  adduser: Adduser;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
 
    this.adduser = new Adduser();
    }

    addapi(email_id){
      console.log(this.adduser.Email_id)
      if(this.adduser.Name == undefined){
        alert("Name Field Should not be Empty");
      }else if(this.adduser.Designation == undefined){
        alert("Designation Field Should not be Empty");
      }else if(this.adduser.Level == undefined){
        alert("Level Field Should not be Empty");
      }else if( this.adduser.Phone_number == undefined){
        alert("Phone Number Field Should not be Empty");
      }else if(this.adduser.Email_id == undefined){
        alert("Login ID Field Should not be Empty");
      }else if(this.adduser.Password == undefined){
        alert("Password Field Should not be Empty");
      }else if(this.adduser.Name == ''){
        alert("Name Field Should not be Empty");
      }else if(this.adduser.Designation == ''){
        alert("Designation Field Should not be Empty");
      }else if(this.adduser.Level == ''){
        alert("Level Field Should not be Empty");
      }else if( this.adduser.Phone_number == ''){
        alert("Phone Number Field Should not be Empty");
      }else if(this.adduser.Email_id == ''){
        alert("Login ID Field Should not be Empty");
      }else if(this.adduser.Password == ''){
        alert("Password Field Should not be Empty");
      }else if(this.adduser.Password.length < 4){
        alert("Password Must be Above 4 character");
      }else{
        console.log(this.adduser);
        let id = this.getFromLocal('user_id');
        let name = this.getFromLocal('Name');
        this.adduser.Add_by= "Name: "+name+",User-id: "+id;
        this.adduser.Phone_number = ""+this.adduser.Phone_number;
        this.http.post('https://bssservice.herokuapp.com/authentication/addusers', this.adduser).subscribe(data => {
        this.datas = data;
        console.log(this.datas);
        if(this.datas.data.message == "This Email_id already exits!"){
          alert(this.datas.data.message);
      }else{
          alert("Added Successfully");
          this.router.navigate(['main/viewuser'])
      }
      });
      }










    }


    getFromLocal(key): any {
      // console.log('recieved= key:' + key);
      return this.storage.get(key);
     }
}
class form1model {
  name: string;
  mobile_number: string;
  email_id: string;
  password: string;
}


class Adduser{
  Employee_ID: string;
  Name: string;
  Designation: string;
  Level: string;
  Phone_number: string;
  Email_id: string;
  Password: string;
  Add_by: string;
}