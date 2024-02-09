import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-viewcontractpage',
  templateUrl: './viewcontractpage.component.html',
  styleUrls: ['./viewcontractpage.component.scss']
})
export class ViewcontractpageComponent implements OnInit {




  today = new Date();
  jstoday=""; 
  site_id:any;
 

  ngOnInit() {
   

  }

 


  datas: any;
  addclient: Addclient;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addclient = new Addclient();
    this.route.params.subscribe(params => {
      this.site_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.site_id);
      this.http.post('https://bssservice.herokuapp.com/client/fetchcontract', {"id":""+this.site_id}).subscribe((data:any) => {
        this.addclient = data.data[0];
        console.log(this.addclient);                    
      });
  });
    }


    




}



class Addclient{
  site_id: string;
  contract_start_date: string;
  contract_end_date: string;
  contract_type: string;
  last_revision_date: string;
  status: string;
  invoice_cycle:string;

}


 