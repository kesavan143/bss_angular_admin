import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.scss']
})
export class UpdateclientComponent implements OnInit {

  
  cliid:number;
  today = new Date();
  jstoday=""; 
 

  ngOnInit() {





   

  }

 


  datas: any;
  addclient: Addclient;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addclient = new Addclient();


    this.route.params.subscribe(params => {
      this.addclient.id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.addclient.id);
      this.http.post('https://bssservice.herokuapp.com/authentication/clientid',{"id":""+this.addclient.id}).subscribe((data:any)  => {
        this.addclient = data.client_detail[0];
        console.log(this.addclient);
  });
});





    }


    addapi(){
      if(this.addclient.login == null){
        this.addclient.login = "";
      }
      if(this.addclient.password == null){
        this.addclient.password = "";
      }
      if(this.addclient.company_name == null){
        this.addclient.company_name = "";
      }
      if(this.addclient.company_type == null){
        this.addclient.company_type = "";
      }
      if(this.addclient.address == null){
        this.addclient.address = "";
      }
      if(this.addclient.billing_address == null){
        this.addclient.billing_address = "";
      }
      console.log(this.addclient);
      this.http.post('https://bssservice.herokuapp.com/authentication/updateclients', this.addclient).subscribe(data => {
        this.datas = data;
        console.log(this.datas);
        if(this.datas.data == "Account already Exists" ){
          alert(this.datas.data)
        }else{
         this.cliid = this.datas.id
         console.log(this.cliid);
          this.router.navigate(['main/clientmanagement'])                      
      }
      });
    }



}



class Addclient{
    id:number;
    login: string;
    password: string;
    company_name: string;
    company_type: string;
    address: string;
    billing_address: string;
}
