import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {


  userid: string;
  datas: any; 
  public model: Adduser;

  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.model = new Adduser();
    this.route.params.subscribe(params => {
     this.userid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.userid);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/userid',{userid:this.userid}).subscribe((data:any)  => {
      this.model = data.data[0];
      console.log(this.model);
      });
  });
   }

  ngOnInit() {
    this.syncdata();
  }
  syncdata(){
    console.log("data in");
    
  }


}

class Adduser{
  user_id: string;
  Name: string;
  Designation: string;
  Level: string;
  Phone_number: string;
  Email_id: string;
  Password: string;
  Add_by: string;
}