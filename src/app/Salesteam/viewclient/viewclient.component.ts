import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.scss']
})
export class ViewclientComponent  {
  

  cliid:number;
  client_id:string;
  client_detail:any;

  site_details:any;


  payment_details:any;
  requirement_details:any;
  total:number;





  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.total = 0; 
  }
 

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.client_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.client_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/clientid', {"id":""+this.client_id}).subscribe((data:any) => {
      
      this.client_detail = data.client_detail[0];
      this.site_details = data.site_detail;
      console.log(this.client_detail,this.site_details);
      });
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
