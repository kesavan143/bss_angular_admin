import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-viewsite',
  templateUrl: './viewsite.component.html',
  styleUrls: ['./viewsite.component.scss']
})
export class ViewsiteComponent implements OnInit {

  cliid:number;
  client_id:number;
  addsite:addsite;
  datas: any;



  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addsite = new addsite();

    this.route.params.subscribe(params => {
      this.client_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.client_id);
      this.http.post('https://bssservice.herokuapp.com/client/fetchsite', {"id":this.client_id}).subscribe((data:any) => {
        this.addsite = data.data[0]; 
        console.log(this.addsite);
      });
  });
    }
  ngOnInit() {
  }


    
}
class addsite{
  id:number;
  client_id: string;
  title: string;
  description: string;
  address: string;
  contactperson1: string;
  contactnumber1: string;
  contactemail1: string;
  contactperson2: string;
  contactnumber2: string;
  contactemail2: string;
  contactperson3: string;
  contactnumber3: string;
  contactemail3: string;
  status:string;
}
