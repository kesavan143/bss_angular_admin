import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-assignemployeelist',
  templateUrl: './assignemployeelist.component.html',
  styleUrls: ['./assignemployeelist.component.scss']
})
export class AssignemployeelistComponent implements OnInit {
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;

  start_date:string;
  end_date:string;


  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {

    let date = new Date();
    let firstDay = formatDate(new Date(date.getFullYear(), date.getMonth(), 1), ' yyyy-MM-dd ', 'en-US', '+0530');
    let lastDay  = formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0), ' yyyy-MM-dd ', 'en-US', '+0530');
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);
      this.http.post('https://bssservice.herokuapp.com/assigningemployee/clientfetchlist',{
        "site_id": this.employee_id,
        "start_date": firstDay +" 00:00:00-07",
        "end_date":   lastDay +" 00:00:00-07",
      }).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });
  });
  }

  ngOnInit() {

    }

    month(dates){

      console.log(dates)
      let a = dates+"-01"
      let b = dates+"-31"
      this.http.post('https://bssservice.herokuapp.com/assigningemployee/clientfetchlist',{
        "site_id": this.employee_id,
        "start_date": a +" 00:00:00-07",
        "end_date":   b +" 00:00:00-07",
      }).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });




    }
    
    view($event, data){
      console.log(data.id);
      this.router.navigate(['main/assignemployeelist/'+ data.id]) 
    }
}


class form1model {
  Email_id: "1";
}

