import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';





@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit{

  today = new Date();
  jstoday=""; 
 

  ngOnInit() {
   

  }

 


  datas: any;
  addclient: Addclient;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addclient = new Addclient();
    }


    addapi(){
      console.log(this.addclient);
      this.http.post('https://bssservice.herokuapp.com/authentication/addclients', this.addclient).subscribe(data => {
        this.datas = data;
        console.log(this.datas.data.id);
        if(this.datas.data == "Account already Exists" ){
          alert(this.datas.data)
        }else{

          this.router.navigate(['main/clientmanagement'])                      
      }
      });
    }



}



class Addclient{
    login: string;
    password: string;
    company_name: string;
    company_type: string;
    address: string;
    billing_address: string;
}
